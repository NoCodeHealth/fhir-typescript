import { printRuntime, printStatic, TypeDeclaration } from 'io-ts-codegen'
import * as A from 'fp-ts/lib/Array'
import * as Eq from 'fp-ts/lib/Eq'
import * as M from 'fp-ts/lib/Monoid'
import * as O from 'fp-ts/lib/Option'
import * as R from 'fp-ts/lib/Record'
import { pipe } from 'fp-ts/lib/pipeable'
import { fromTraversable, Iso, Lens, Prism } from 'monocle-ts'

import {
  definition,
  formatName,
  isArrayProperty,
  isComplex,
  isResourceList,
  isRefArrayItem,
  isRefProperty,
  parseRef
} from './definitions'
import {
  FhirArray,
  FhirRef,
  FhirRefArrayItem,
  FhirComplex,
  FhirSchema,
  FhirResourceList,
  FhirDefinition
} from './decoder'
import { toDefinitionType } from './typegen'

/**
 * @since 0.0.1
 */
export interface Resource {
  name: string
  formattedName: string
  typeDefs: string
  references: ReadonlyArray<string>
}

const traversableArray = fromTraversable(A.array)
const traversableRecord = fromTraversable(R.record)

const objectToEntries = <T>(): Iso<Record<string, T>, Array<[string, T]>> =>
  new Iso(
    (s) => Object.entries(s),
    (a) => a.reduce((q, r) => ({ ...q, [r[0]]: r[1] }), {})
  )

const lensToDefinitions = Lens.fromProp<FhirSchema>()('definitions')
const lensToProperties = Lens.fromProp<FhirComplex>()('properties')

const complexPrism = Prism.fromPredicate(isComplex)
const resourceListPrism = Prism.fromPredicate(isResourceList)

const toRefArrayItem = complexPrism
  .composeLens(lensToProperties)
  .composeTraversal(traversableRecord())
  .composePrism(Prism.fromPredicate(isArrayProperty))
  .composeLens(Lens.fromProp<FhirArray>()('items'))
  .composePrism(Prism.fromPredicate(isRefArrayItem))
  .composeLens(Lens.fromProp<FhirRefArrayItem>()('$ref'))
  .asFold()

const toRefProperties = complexPrism
  .composeLens(lensToProperties)
  .composeTraversal(traversableRecord())
  .composePrism(Prism.fromPredicate(isRefProperty))
  .composeLens(Lens.fromProp<FhirRef>()('$ref'))
  .asFold()

const toRefOneOf = resourceListPrism
  .composeLens(Lens.fromProp<FhirResourceList>()('oneOf'))
  .composeTraversal(traversableArray())
  .composeLens(Lens.fromProp<{ $ref: string }>()('$ref'))
  .asFold()

const toRefs: (definition: FhirDefinition) => Array<string> = (d) =>
  pipe(
    M.fold(A.getMonoid<string>())([toRefArrayItem.getAll(d), toRefProperties.getAll(d), toRefOneOf.getAll(d)]),
    A.map(parseRef),
    A.uniq(Eq.eqString)
  )

const traversableObjectEntries = lensToDefinitions
  .composeIso(objectToEntries())
  .composeTraversal(traversableArray())
  .asFold()

const toTypeDefs: (declaration: TypeDeclaration) => string = (d) =>
  M.fold(M.monoidString)([`${printRuntime(d)}\n\n`, `${printStatic(d)}\n\n`])

/**
 * @since 0.0.1
 */
export const make: (schema: FhirSchema) => Array<Resource> = (schema) =>
  pipe(
    schema,
    traversableObjectEntries.getAll,
    A.map(([name, def]) => ({
      name,
      formattedName: formatName(name),
      typeDefs: pipe(toDefinitionType(formatName(name), definition(def)), toTypeDefs),
      references: pipe(toRefs(def), A.filterMap(O.fromPredicate((s) => !Eq.eqString.equals(formatName(name), s))))
    }))
  )
