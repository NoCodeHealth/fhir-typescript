import * as A from 'fp-ts/lib/Array'
import * as Eq from 'fp-ts/lib/Eq'
import * as M from 'fp-ts/lib/Monoid'
import * as O from 'fp-ts/lib/Option'
import * as R from 'fp-ts/lib/Record'
import { Refinement } from 'fp-ts/lib/function'
import { pipe } from 'fp-ts/lib/pipeable'
import { fromTraversable, Iso, Lens, Prism } from 'monocle-ts'
import capitalize from 'lodash.capitalize'

import {
  FhirArray,
  FhirArrayItem,
  FhirRef,
  FhirRefArrayItem,
  FhirComplex,
  FhirDefinition,
  FhirProperty,
  FhirSchema
} from './FhirSchema'

/**
 * @since 0.0.1
 */
export interface Model {
  name: string
  formattedName: string
  definition: FhirDefinition
  references: ReadonlyArray<string>
}

const traversableRecord = fromTraversable(R.record)

const objectToEntries = <T>(): Iso<Record<string, T>, Array<[string, T]>> =>
  new Iso(
    (s) => Object.entries(s),
    (a) => a.reduce((q, r) => ({ ...q, [r[0]]: r[1] }), {})
  )

const formatName: (identifier: string) => string = (i) => `Fhir${capitalize(i)}`

const parseRef: (ref: string) => string = (r) =>
  pipe(
    r.split('/'),
    A.last,
    O.map(formatName),
    O.getOrElse(() => '')
  )

const isComplexDefinition: Refinement<FhirDefinition, FhirComplex> = (d): d is FhirComplex =>
  typeof d !== 'undefined' && 'properties' in d

const isRefProperty: Refinement<FhirProperty, FhirRef> = (p): p is FhirRef => typeof p !== 'undefined' && '$ref' in p

const isArrayProperty: Refinement<FhirProperty, FhirArray> = (p): p is FhirArray =>
  typeof p !== 'undefined' && 'type' in p && (p as FhirArray).type === 'array'

const isRefArrayItem: Refinement<FhirArrayItem, FhirRefArrayItem> = (i): i is FhirRefArrayItem =>
  typeof i !== 'undefined' && '$ref' in i

const lensToDefinitions = Lens.fromProp<FhirSchema>()('definitions')

const complexDefinitionsPrism = Prism.fromPredicate(isComplexDefinition)

const lensToProperties = Lens.fromProp<FhirComplex>()('properties')

const toRefArrayItem = complexDefinitionsPrism
  .composeLens(lensToProperties)
  .composeTraversal(traversableRecord())
  .composePrism(Prism.fromPredicate(isArrayProperty))
  .composeLens(Lens.fromProp<FhirArray>()('items'))
  .composePrism(Prism.fromPredicate(isRefArrayItem))
  .composeLens(Lens.fromProp<FhirRefArrayItem>()('$ref'))
  .asFold()

const toRefProperties = complexDefinitionsPrism
  .composeLens(lensToProperties)
  .composeTraversal(traversableRecord())
  .composePrism(Prism.fromPredicate(isRefProperty))
  .composeLens(Lens.fromProp<FhirRef>()('$ref'))
  .asFold()

const toRefs: (definition: FhirDefinition) => Array<string> = (d) =>
  pipe(
    M.fold(A.getMonoid<string>())([toRefArrayItem.getAll(d), toRefProperties.getAll(d)]),
    A.map(parseRef),
    A.uniq(Eq.eqString)
  )

/**
 * @since 0.0.1
 */
export const makeModels: (schema: FhirSchema) => Array<Model> = (s) =>
  pipe(
    s,
    lensToDefinitions.composeIso(objectToEntries()).composeTraversal(fromTraversable(A.array)()).asFold().getAll,
    A.map(([name, definition]) => ({
      name,
      formattedName: formatName(name),
      definition,
      references: toRefs(definition)
    }))
  )
