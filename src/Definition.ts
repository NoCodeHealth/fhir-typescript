import * as O from 'fp-ts/lib/Option'
import * as RA from 'fp-ts/lib/ReadonlyArray'
import * as RR from 'fp-ts/lib/ReadonlyRecord'
import { absurd, tuple, Refinement } from 'fp-ts/lib/function'
import { pipe } from 'fp-ts/lib/pipeable'
import capitalize from 'lodash.capitalize'

import {
  FhirArray,
  FhirArrayItem,
  FhirComplex,
  FhirConst,
  FhirDefinition,
  FhirEnum,
  FhirEnumArrayItem,
  FhirPrimitive,
  FhirProperty,
  FhirRef,
  FhirRefArrayItem,
  FhirResourceList
} from './Schema'

type Def<URI, T> = { readonly _tag: URI } & T

/**
 * @since 0.0.1
 */
export const formatName: (identifier: string) => string = (i) => `Fhir${capitalize(i)}`

/**
 * @since 0.0.1
 */
export const parseRef: (ref: string) => string = (r) =>
  pipe(
    r.split('/'),
    RA.last,
    O.map(formatName),
    O.getOrElse(() => '')
  )

/**
 * @since 0.0.1
 */
export const isComplex: Refinement<FhirDefinition, FhirComplex> = (d): d is FhirComplex =>
  typeof d !== 'undefined' && 'properties' in d

/**
 * @since 0.0.1
 */
export const isPrimitive: Refinement<FhirDefinition, FhirPrimitive> = (d): d is FhirPrimitive =>
  typeof d !== 'undefined' &&
  !('properties' in d) &&
  ['boolean', 'number', 'string'].some((key) => (d as FhirPrimitive).type === key)

/**
 * @since 0.0.1
 */
export const isResourceList: Refinement<FhirDefinition, FhirResourceList> = (d): d is FhirResourceList =>
  typeof d !== 'undefined' && 'oneOf' in d

/**
 * @since 0.0.1
 */
export const isEnumArrayItem: Refinement<FhirArrayItem, FhirEnumArrayItem> = (i): i is FhirEnumArrayItem =>
  typeof i !== 'undefined' && 'enum' in i

/**
 * @since 0.0.1
 */
export const isRefArrayItem: Refinement<FhirArrayItem, FhirRefArrayItem> = (i): i is FhirRefArrayItem =>
  typeof i !== 'undefined' && '$ref' in i

/**
 * @since 0.0.1
 */
export const isArrayProperty: Refinement<FhirProperty, FhirArray> = (p): p is FhirArray =>
  typeof p !== 'undefined' && 'type' in p && (p as FhirArray).type === 'array'

/**
 * @since 0.0.1
 */
export const isConstProperty: Refinement<FhirProperty, FhirConst> = (p): p is FhirConst =>
  typeof p !== 'undefined' && 'const' in p

/**
 * @since 0.0.1
 */
export const isEnumProperty: Refinement<FhirProperty, FhirEnum> = (p): p is FhirEnum =>
  typeof p !== 'undefined' && 'enum' in p

/**
 * @since 0.0.1
 */
export const isRefProperty: Refinement<FhirProperty, FhirRef> = (p): p is FhirRef =>
  typeof p !== 'undefined' && '$ref' in p

/**
 * @since 0.0.1
 */
export const isPrimitiveProperty: Refinement<FhirProperty, FhirPrimitive> = (p): p is FhirPrimitive =>
  typeof p !== 'undefined' &&
  !('properties' in p) &&
  ['boolean', 'number', 'string'].some((key) => (p as FhirPrimitive).type === key)

/**
 * @since 0.0.1
 */
export const isComplexDefinition: Refinement<FhirDefinition, FhirComplex> = (d): d is FhirComplex =>
  typeof d !== 'undefined' && 'properties' in d

/**
 * @since 0.0.1
 */
export interface PrimitiveDef extends Def<'FhirPrimitive', FhirPrimitive> {}

/**
 * @since 0.0.1
 */
export const primitiveDef: (a: FhirPrimitive) => PrimitiveDef = (a) => ({ _tag: 'FhirPrimitive', ...a })

/**
 * @since 0.0.1
 */
export interface ConstDef extends Def<'FhirConst', FhirConst> {}

/**
 * @since 0.0.1
 */
export const constDef: (a: FhirConst) => ConstDef = (a) => ({ _tag: 'FhirConst', ...a })

/**
 * @since 0.0.1
 */
export interface EnumDef extends Def<'FhirEnum', FhirEnum> {}

/**
 * @since 0.0.1
 */
export const enumDef: (a: FhirEnum) => EnumDef = (a) => ({ _tag: 'FhirEnum', ...a })

/**
 * @since 0.0.1
 */
export interface RefDef extends Def<'FhirRef', FhirRef> {}

/**
 * @since 0.0.1
 */
export const refDef: (a: FhirRef) => RefDef = (a) => ({ _tag: 'FhirRef', ...a, $ref: parseRef(a.$ref) })

/**
 * @since 0.0.1
 */
export interface EnumArrayItemDef extends Def<'EnumArrayItem', FhirEnumArrayItem> {}

/**
 * @since 0.0.1
 */
export const enumArrayItemDef: (a: FhirEnumArrayItem) => EnumArrayItemDef = (a) => ({ _tag: 'EnumArrayItem', ...a })

/**
 * @since 0.0.1
 */
export interface RefArrayItemDef extends Def<'RefArrayItem', FhirRefArrayItem> {}

/**
 * @since 0.0.1
 */
export const refArrayItemDef: (a: FhirRefArrayItem) => RefArrayItemDef = (a) => ({ _tag: 'RefArrayItem', ...a })

/**
 * @since 0.0.1
 */
export type ArrayItemDef = EnumArrayItemDef | RefArrayItemDef

/**
 * @since 0.0.1
 */
export const arrayItemDef: (a: FhirArrayItem) => ArrayItemDef = (a) =>
  isEnumArrayItem(a)
    ? enumArrayItemDef(a)
    : isRefArrayItem(a)
    ? refArrayItemDef(a)
    : absurd<ArrayItemDef>((null as any) as never)

/**
 * @since 0.0.1
 */
export interface ArrayDef extends Def<'Array', Omit<FhirArray, 'items'>> {
  items: ArrayItemDef
}

/**
 * @since 0.0.1
 */
export const arrayDef: (a: FhirArray) => ArrayDef = (a) => ({ _tag: 'Array', ...a, items: arrayItemDef(a.items) })

/**
 * @since 0.0.1
 */
export type PropertyDef = ArrayDef | ConstDef | EnumDef | PrimitiveDef | RefDef

/**
 * @since 0.0.1
 */
export interface ComplexDef extends Def<'Complex', Omit<FhirComplex, 'properties'>> {
  properties: [string, PropertyDef][]
}

const propertyToDef: (property: FhirProperty) => PropertyDef = (p) =>
  isArrayProperty(p)
    ? arrayDef(p)
    : isConstProperty(p)
    ? constDef(p)
    : isEnumProperty(p)
    ? enumDef(p)
    : isPrimitiveProperty(p)
    ? primitiveDef(p)
    : isRefProperty(p)
    ? refDef(p)
    : absurd<PropertyDef>((null as any) as never)

/**
 * @since 0.0.1
 */
export const complexDef: (a: FhirComplex) => ComplexDef = (a) => ({
  _tag: 'Complex',
  ...a,
  properties: pipe(
    a.properties,
    RR.fromRecord,
    RR.toReadonlyArray,
    RA.map(([key, value]) => tuple(key, propertyToDef(value))),
    RA.toArray
  )
})

/**
 * @since 0.0.1
 */
export interface ResourceListDef extends Def<'ResourceList', FhirResourceList> {}

/**
 * @since 0.0.1
 */
export const resourceListDef: (a: FhirResourceList) => ResourceListDef = (a) => ({ _tag: 'ResourceList', ...a })

/**
 * @since 0.0.1
 */
export type Definition = ComplexDef | PrimitiveDef | ResourceListDef

/**
 * @since 0.0.1
 */
export const definition: (definition: FhirDefinition) => Definition = (d) =>
  isComplex(d)
    ? complexDef(d)
    : isPrimitive(d)
    ? primitiveDef(d)
    : isResourceList(d)
    ? resourceListDef(d)
    : absurd<Definition>((null as any) as never)
