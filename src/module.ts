import * as A from 'fp-ts/lib/Array'
import * as Eq from 'fp-ts/lib/Eq'
import * as M from 'fp-ts/lib/Monoid'
import * as O from 'fp-ts/lib/Option'
import * as Ord from 'fp-ts/lib/Ord'
import * as R from 'fp-ts/lib/Record'
import { flow } from 'fp-ts/lib/function'
import { pipe } from 'fp-ts/lib/pipeable'
import * as m from 'monocle-ts'

import {
  FhirArray,
  FhirComplex,
  FhirDefinition,
  FhirRef,
  FhirRefArrayItem,
  FhirResourceList,
  FhirSchema
} from './decoder'
import { definition, isArrayProperty, isComplex, isRefArrayItem, isRefProperty, isResourceList } from './model'
import { typeDef } from './typeDef'

/**
 * @since 0.0.1
 */
export interface Module {
  readonly name: string
  readonly resource: string
  readonly content: string
  readonly imports: Array<string>
}

const moduleNamePrefix = 'Fhir'

const foldRef = M.fold(A.getMonoid<string>())

const upperFirst = (word: string): string => `${word.charAt(0).toUpperCase()}${word.slice(1)}`

/**
 * @since 0.0.1
 */
export const prefixName: (prefix: string) => (name: string) => string = (p) => (n) => `${p}${n}`

/**
 * @since 0.0.1
 */
export const prefixFhir = flow(upperFirst, prefixName(moduleNamePrefix))

/**
 * @since 0.0.1
 */
export const parseRef: (ref: string) => string = (ref) =>
  pipe(
    ref.split('/'),
    A.last,
    O.map(prefixFhir),
    O.getOrElse(() => '')
  )

const objectToEntries = <T>(): m.Iso<Record<string, T>, Array<[string, T]>> =>
  new m.Iso(
    (s) => Object.entries(s),
    (a) => a.reduce((q, r) => ({ ...q, [r[0]]: r[1] }), {})
  )

const traversableArray = m.fromTraversable(A.array)

const traversableRecord = m.fromTraversable(R.record)

const complexPrism = m.Prism.fromPredicate(isComplex)

const resourceListPrism = m.Prism.fromPredicate(isResourceList)

const schemaToDefinitions = m.Lens.fromProp<FhirSchema>()('definitions')

const complexToProperties = m.Lens.fromProp<FhirComplex>()('properties')

const complexToRefArrayItem = complexPrism
  .composeLens(complexToProperties)
  .composeTraversal(traversableRecord())
  .composePrism(m.Prism.fromPredicate(isArrayProperty))
  .composeLens(m.Lens.fromProp<FhirArray>()('items'))
  .composePrism(m.Prism.fromPredicate(isRefArrayItem))
  .composeLens(m.Lens.fromProp<FhirRefArrayItem>()('$ref'))
  .asFold()

const complexToRefProperties = complexPrism
  .composeLens(complexToProperties)
  .composeTraversal(traversableRecord())
  .composePrism(m.Prism.fromPredicate(isRefProperty))
  .composeLens(m.Lens.fromProp<FhirRef>()('$ref'))
  .asFold()

const resourceListToRefOneOf = resourceListPrism
  .composeLens(m.Lens.fromProp<FhirResourceList>()('oneOf'))
  .composeTraversal(traversableArray())
  .composeLens(m.Lens.fromProp<{ $ref: string }>()('$ref'))
  .asFold()

const traversableObjectEntries = schemaToDefinitions
  .composeIso(objectToEntries())
  .composeTraversal(traversableArray())
  .asFold()

function getContent(name: string, def: FhirDefinition): string {
  return typeDef(prefixFhir(name), definition(def))
}

function getImports(name: string, def: FhirDefinition): Array<string> {
  return pipe(
    foldRef([
      complexToRefArrayItem.getAll(def),
      complexToRefProperties.getAll(def),
      resourceListToRefOneOf.getAll(def)
    ]),
    A.map(parseRef),
    A.uniq(Eq.eqString),
    A.filter((n) => n !== name),
    A.sort(Ord.ordString)
  )
}

/**
 * @since 0.0.1
 */
export function module(name: string, resource: string, content: string, imports: Array<string>): Module {
  return {
    name,
    resource,
    content,
    imports
  }
}

/**
 * @since 0.0.1
 */
export function makeModules(schema: FhirSchema): Array<Module> {
  return pipe(
    schema,
    traversableObjectEntries.getAll,
    A.map(([resource, def]) =>
      module(prefixFhir(resource), resource, getContent(resource, def), getImports(prefixFhir(resource), def))
    )
  )
}
