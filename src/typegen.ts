import * as R from 'fp-ts/lib/Record'
import { absurd } from 'fp-ts/lib/function'
import * as t from 'io-ts-codegen'

import { formatName, ArrayDef, ComplexDef, Definition, PrimitiveDef, PropertyDef, ResourceListDef } from './definitions'
import { checks } from './validation'

const getPrimitiveType: (d: PrimitiveDef) => t.TypeReference = (d) => {
  switch (d.type) {
    case 'boolean':
      return t.booleanType

    case 'number':
      return t.numberType

    case 'string':
      return t.stringType

    default:
      return absurd<t.TypeReference>((null as any) as never)
  }
}

const primitiveCombinator: (definition: PrimitiveDef) => t.TypeReference = (def) =>
  t.brandCombinator(getPrimitiveType(def), (a) => checks(a, def), formatName(def.type))

const arrayPropertyCombinator: (definition: ArrayDef) => t.TypeReference = (def) => {
  switch (def.items._tag) {
    case 'EnumArrayItem':
      return t.readonlyArrayCombinator(t.keyofCombinator(def.items.enum))

    case 'RefArrayItem':
      return t.readonlyArrayCombinator(t.identifier(def.items.$ref))

    default:
      return absurd<t.TypeReference>((null as any) as never)
  }
}

const getRequiredProperties: (definition: ComplexDef) => { [key: string]: true } = (def) =>
  (def.required || []).reduce((acc, curr) => ({ ...acc, [curr]: true }), {})

const propertyCombinator: (definition: PropertyDef) => t.TypeReference = (def) => {
  switch (def._tag) {
    case 'Array':
      return arrayPropertyCombinator(def)

    case 'Const':
      return t.readonlyCombinator(t.literalCombinator(def.const))

    case 'Enum':
      return t.readonlyCombinator(t.keyofCombinator(def.enum))

    case 'Primitive':
      return t.readonlyCombinator(getPrimitiveType(def))

    case 'Ref':
      return t.readonlyCombinator(t.identifier(def.$ref))

    default:
      return absurd<t.TypeReference>((null as any) as never)
  }
}

const complexCombinator: (definition: ComplexDef) => t.TypeReference = (def) => {
  const required = getRequiredProperties(def)

  return t.interfaceCombinator(
    def.properties.map(
      ([name, definition]) =>
        /* eslint-disable no-prototype-builtins */
        t.property(name, propertyCombinator(definition), R.hasOwnProperty(name, required), def.description)
      /* eslint-enable no-prototype-builtins */
    )
  )
}
const resourceListCombinator: (definition: ResourceListDef) => t.TypeReference = (def) =>
  t.interfaceCombinator([t.property('oneOf', t.unionCombinator(def.oneOf.map(t.identifier)), false)])

/**
 * @since 0.0.1
 */
export const toDefinitionType: (name: string, definition: Definition) => t.TypeDeclaration = (n, d) => {
  switch (d._tag) {
    case 'Complex':
      return t.typeDeclaration(n, complexCombinator(d), true, false, d.description)

    case 'Primitive':
      return t.typeDeclaration(n, primitiveCombinator(d), true, false, d.description)

    case 'ResourceList':
      return t.typeDeclaration(n, resourceListCombinator(d), true, false)

    default:
      return absurd<t.TypeDeclaration>((null as any) as never)
  }
}
