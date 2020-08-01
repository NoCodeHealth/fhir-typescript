import { eqString } from 'fp-ts/lib/Eq'
import { fold, Option } from 'fp-ts/lib/Option'
import { elem, map, toArray } from 'fp-ts/lib/ReadonlyArray'
import { Show } from 'fp-ts/lib/Show'
import { constFalse, pipe } from 'fp-ts/lib/function'
import * as t from 'io-ts-codegen'

import * as P from './parser'
import { prefixFhir } from './helpers'

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

const booleanCombinator = (): t.TypeReference => t.booleanType

const numberCombinator = (): t.TypeReference => t.numberType

const stringCombinator = (): t.TypeReference => t.stringType

const enumCombinator = (e: P.Enum): t.TypeReference =>
  t.readonlyArrayCombinator(t.keyofCombinator(toArray(e.enumerations)))

const refCombinator = (ref: P.Ref): t.TypeReference => t.readonlyArrayCombinator(t.identifier(ref.ref))

const arrayPropertyCombinator = (arrayProperty: P.ArrayProperty): t.TypeReference =>
  pipe(arrayProperty.item, P.foldArrayItem(enumCombinator, refCombinator))

const constPropertyCombinator = (constProperty: P.ConstProperty): t.TypeReference =>
  t.literalCombinator(constProperty.constant)

const enumPropertyCombinator = (enumProperty: P.EnumProperty): t.TypeReference =>
  t.keyofCombinator(toArray(enumProperty.enumerations))

const primitiveTypeCombinator: (primitiveProperty: P.PrimitiveProperty) => t.TypeReference = P.foldPrimitiveType(
  booleanCombinator,
  numberCombinator,
  stringCombinator
)

const refPropertyCombinator = (refProperty: P.RefProperty): t.TypeReference => t.identifier(refProperty.ref)

const propertyCombinator: (property: P.Property) => t.TypeReference = P.foldProperty(
  arrayPropertyCombinator,
  constPropertyCombinator,
  enumPropertyCombinator,
  primitiveTypeCombinator,
  refPropertyCombinator
)

const isRequired = (property: P.Property, required: Option<ReadonlyArray<string>>): boolean =>
  pipe(required, fold(constFalse, elem(eqString)(property.name)))

const toProperty = (complex: P.Complex) => (property: P.Property): t.Property =>
  t.property(property.name, propertyCombinator(property), isRequired(property, complex.required), complex.description)

const complexCombinator = (complex: P.Complex): t.TypeReference =>
  t.interfaceCombinator(pipe(complex.properties, map(toProperty(complex)), toArray))

// TODO: validation
const primitiveCombinator = (primitive: P.PrimitiveProperty): t.TypeReference =>
  t.brandCombinator(primitiveTypeCombinator(primitive), () => '', prefixFhir(primitive.type))

const resourceListCombinator = (resourceList: P.ResourceList): t.TypeReference =>
  pipe(resourceList.oneOf, map(t.identifier), toArray, t.unionCombinator)

const complexPropertyDeclaration = (name: string) => (complex: P.Complex): t.TypeDeclaration => {
  const type = t.recursiveCombinator(t.identifier(name), name, complexCombinator(complex))
  return t.typeDeclaration(name, type, true, true, complex.description)
}

const primitivePropertyDeclaration = (name: string) => (prop: P.PrimitiveProperty): t.TypeDeclaration =>
  t.typeDeclaration(name, primitiveCombinator(prop), true, true, prop.description)

const resourceListDeclaration = (name: string) => (prop: P.ResourceList): t.TypeDeclaration => {
  const type = t.recursiveCombinator(t.identifier(name), name, resourceListCombinator(prop))
  return t.typeDeclaration(name, type, true, true)
}

/**
 * @category combinators
 * @since 0.1.0
 */
export const makeType = (definition: P.Definition): t.TypeDeclaration =>
  pipe(
    definition,
    P.foldDefinition(
      complexPropertyDeclaration(definition.name),
      primitivePropertyDeclaration(definition.name),
      resourceListDeclaration(definition.name)
    )
  )

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category Show
 * @since 0.1.0
 */
export const showRuntime: Show<t.TypeDeclaration> = {
  show: (a) => t.printRuntime(a)
}

/**
 * @category Show
 * @since 0.1.0
 */
export const showStatic: Show<t.TypeDeclaration> = {
  show: (a) => t.printStatic(a)
}
