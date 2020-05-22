import { TypeDeclaration } from 'io-ts-codegen'
import * as A from 'fp-ts/lib/Array'
import * as Eq from 'fp-ts/lib/Eq'
import * as M from 'fp-ts/lib/Monoid'
import * as R from 'fp-ts/lib/Record'
import { pipe } from 'fp-ts/lib/pipeable'
import { fromTraversable, Iso, Lens, Prism } from 'monocle-ts'

import {
  definition,
  formatName,
  isArrayProperty,
  isComplexDefinition,
  isRefArrayItem,
  isRefProperty,
  parseRef
} from './definitions'
import { FhirArray, FhirRef, FhirRefArrayItem, FhirComplex, FhirDefinition, FhirSchema } from './schema'
import { toDefinitionType } from './typegen'

/**
 * @since 0.0.1
 */
export interface Resource {
  name: string
  formattedName: string
  typeDef: TypeDeclaration
  references: ReadonlyArray<string>
}

const traversableRecord = fromTraversable(R.record)

const objectToEntries = <T>(): Iso<Record<string, T>, Array<[string, T]>> =>
  new Iso(
    (s) => Object.entries(s),
    (a) => a.reduce((q, r) => ({ ...q, [r[0]]: r[1] }), {})
  )

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
export const makeResources: (schema: FhirSchema) => Array<Resource> = (s) =>
  pipe(
    s,
    lensToDefinitions.composeIso(objectToEntries()).composeTraversal(fromTraversable(A.array)()).asFold().getAll,
    A.map(([name, def]) => ({
      name,
      formattedName: formatName(name),
      typeDef: toDefinitionType(formatName(name), definition(def)),
      references: toRefs(def)
    }))
  )
