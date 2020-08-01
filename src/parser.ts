import { fromArray, map } from 'fp-ts/lib/ReadonlyArray'
import { fromRecord, toReadonlyArray } from 'fp-ts/lib/ReadonlyRecord'
import { fromNullable, Option } from 'fp-ts/lib/Option'
import { absurd, pipe } from 'fp-ts/lib/function'

import * as S from './decoder'
import { parseRef } from './helpers'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @category model
 * @since 0.1.0
 */
export interface Const {
  readonly _tag: 'Const'
  readonly constant: string
}

/**
 * @category model
 * @since 0.1.0
 */
export interface Enum {
  readonly _tag: 'Enum'
  readonly enumerations: ReadonlyArray<string>
}

/**
 * @category model
 * @since 0.1.0
 */
export interface Ref {
  readonly _tag: 'Ref'
  readonly ref: string
}

/**
 * @category model
 * @since 0.1.0
 */
export type ArrayItem = Enum | Ref

/**
 * @category model
 * @since 0.1.0
 */
export interface ArrayProperty {
  readonly _tag: 'ArrayProperty'
  readonly name: string
  readonly item: ArrayItem
  readonly description: string
}

/**
 * @category model
 * @since 0.1.0
 */
export interface ConstProperty {
  readonly _tag: 'ConstProperty'
  readonly name: string
  readonly constant: string
  readonly description: string
}

/**
 * @category model
 * @since 0.1.0
 */
export interface EnumProperty {
  readonly _tag: 'EnumProperty'
  readonly name: string
  readonly enumerations: ReadonlyArray<string>
  readonly description: string
}

/**
 * @category model
 * @since 0.1.0
 */
export type PrimitiveType = 'boolean' | 'number' | 'string'

/**
 * @category model
 * @since 0.1.0
 */
export interface PrimitiveProperty {
  readonly _tag: 'PrimitiveProperty'
  readonly name: string
  readonly pattern: Option<string>
  readonly type: PrimitiveType
  readonly description: string
}

/**
 * @category model
 * @since 0.1.0
 */
export interface RefProperty {
  readonly _tag: 'RefProperty'
  readonly name: string
  readonly ref: string
  readonly description: string
}

/**
 * @category model
 * @since 0.1.0
 */
export type Property = ArrayProperty | ConstProperty | EnumProperty | PrimitiveProperty | RefProperty

/**
 * @category model
 * @since 0.1.0
 */
export interface Complex {
  readonly _tag: 'Complex'
  readonly description: string
  readonly required: Option<ReadonlyArray<string>>
  readonly properties: ReadonlyArray<Property>
}

/**
 * @category model
 * @since 0.1.0
 */
export interface ResourceList {
  readonly _tag: 'ResourceList'
  readonly oneOf: ReadonlyArray<string>
}

/**
 * @category model
 * @since 0.1.0
 */
export interface Definition {
  readonly _tag: 'Definition'
  readonly name: string
  readonly value: Complex | PrimitiveProperty | ResourceList
}

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @category constructors
 * @since 0.1.0
 */
export const Const = (constant: string): Const => ({
  _tag: 'Const',
  constant
})

/**
 * @category constructors
 * @since 0.1.0
 */
export const Enum = (enumerations: ReadonlyArray<string>): Enum => ({
  _tag: 'Enum',
  enumerations
})

/**
 * @category constructors
 * @since 0.1.0
 */
export const Ref = (ref: string): Ref => ({
  _tag: 'Ref',
  ref: parseRef(ref)
})

/**
 * @category constructors
 * @since 0.1.0
 */
export const ArrayProperty = (name: string, item: ArrayItem, description: string): ArrayProperty => ({
  _tag: 'ArrayProperty',
  name,
  item,
  description
})

/**
 * @category constructors
 * @since 0.1.0
 */
export const ConstProperty = (name: string, constant: string, description: string): ConstProperty => ({
  _tag: 'ConstProperty',
  name,
  constant,
  description
})

/**
 * @category constructors
 * @since 0.1.0
 */
export const EnumProperty = (name: string, enumerations: ReadonlyArray<string>, description: string): EnumProperty => ({
  _tag: 'EnumProperty',
  name,
  enumerations,
  description
})

/**
 * @category constructors
 * @since 0.1.0
 */
export const PrimitiveProperty = (
  name: string,
  type: PrimitiveType,
  description: string,
  pattern?: string
): PrimitiveProperty => ({
  _tag: 'PrimitiveProperty',
  name,
  type,
  description,
  pattern: fromNullable(pattern)
})

/**
 * @category constructors
 * @since 0.1.0
 */
export const RefProperty = (name: string, ref: string, description: string): RefProperty => ({
  _tag: 'RefProperty',
  name,
  ref: parseRef(ref),
  description
})

/**
 * @category constructors
 * @since 0.1.0
 */
export const Complex = (
  properties: ReadonlyArray<Property>,
  description: string,
  required?: ReadonlyArray<string>
): Complex => ({
  _tag: 'Complex',
  properties,
  required: fromNullable(required),
  description
})

/**
 * @category constructors
 * @since 0.1.0
 */
export const ResourceList = (oneOf: ReadonlyArray<string>): ResourceList => ({
  _tag: 'ResourceList',
  oneOf
})

/**
 * @category constructors
 * @since 0.1.0
 */
export const parseArrayItem = (item: S.ArrayItem): ArrayItem =>
  S.isEnum(item) ? Enum(fromArray(item.enum)) : S.isRef(item) ? Ref(item.$ref) : absurd<ArrayItem>(item as never)

/**
 * @category constructors
 * @since 0.1.0
 */
export const parseProperty = (name: string, prop: S.Property): Property =>
  S.isArrayProperty(prop)
    ? ArrayProperty(name, parseArrayItem(prop.items), prop.description)
    : S.isConstProperty(prop)
    ? ConstProperty(name, prop.const, prop.description)
    : S.isEnumProperty(prop)
    ? EnumProperty(name, fromArray(prop.enum), prop.description)
    : S.isPrimitiveProperty(prop)
    ? PrimitiveProperty(name, prop.type, prop.description, prop.pattern)
    : S.isRefProperty(prop)
    ? RefProperty(name, prop.$ref, prop.description)
    : absurd<Property>(prop as never)

/**
 * @category constructors
 * @since 0.1.0
 */
export const parseComplex = (complex: S.Complex): Complex => {
  const properties: ReadonlyArray<Property> = pipe(
    fromRecord(complex.properties),
    toReadonlyArray,
    map(([key, value]) => parseProperty(key, value))
  )

  return Complex(properties, complex.description, complex.required)
}

/**
 * @category constructors
 * @since 0.1.0
 */
export const fromResourceList = (resourceList: S.ResourceList): ResourceList =>
  pipe(
    resourceList.oneOf,
    map(({ $ref }) => pipe(parseRef($ref))),
    ResourceList
  )

/**
 * @category constructors
 * @since 0.1.0
 */
export const parseDefinition = (name: string, definition: S.Definition): Definition => {
  const value = S.isComplex(definition)
    ? parseComplex(definition)
    : S.isPrimitive(definition)
    ? (parseProperty(name, definition) as PrimitiveProperty)
    : S.isResourceList(definition)
    ? fromResourceList(definition)
    : absurd<Definition['value']>(null as never)

  return { _tag: 'Definition', name, value }
}
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------

/**
 * @category destructors
 * @since 0.1.0
 */
export const foldArrayItem = <R>(onEnum: (i: Enum) => R, onRef: (i: Ref) => R): ((ai: ArrayItem) => R) => {
  const f = (ai: ArrayItem): R => {
    switch (ai._tag) {
      case 'Enum':
        return onEnum(ai)

      case 'Ref':
        return onRef(ai)

      default:
        return absurd<R>(ai as never)
    }
  }

  return f
}

export const foldPrimitiveType = <R>(
  onBoolean: (t: PrimitiveProperty) => R,
  onNumber: (t: PrimitiveProperty) => R,
  onString: (t: PrimitiveProperty) => R
): ((t: PrimitiveProperty) => R) => {
  const f = (t: PrimitiveProperty): R => {
    switch (t.type) {
      case 'boolean':
        return onBoolean(t)

      case 'number':
        return onNumber(t)

      case 'string':
        return onString(t)

      default:
        return absurd<R>(t as never)
    }
  }

  return f
}

/**
 * @category destructors
 * @since 0.1.0
 */
export const foldProperty = <R>(
  onArray: (p: ArrayProperty) => R,
  onConst: (p: ConstProperty) => R,
  onEnum: (p: EnumProperty) => R,
  onPrimitive: (p: PrimitiveProperty) => R,
  onRef: (p: RefProperty) => R
): ((p: Property) => R) => {
  const f = (p: Property): R => {
    switch (p._tag) {
      case 'ArrayProperty':
        return onArray(p)

      case 'ConstProperty':
        return onConst(p)

      case 'EnumProperty':
        return onEnum(p)

      case 'PrimitiveProperty':
        return onPrimitive(p)

      case 'RefProperty':
        return onRef(p)

      default:
        return absurd<R>(p as never)
    }
  }

  return f
}

/**
 * @category destructors
 * @since 0.1.0
 */
export const foldDefinition = <R>(
  onComplex: (a: Complex) => R,
  onPrimitive: (a: PrimitiveProperty) => R,
  onResourceList: (a: ResourceList) => R
): ((a: Definition) => R) => {
  const f = (a: Definition): R => {
    switch (a.value._tag) {
      case 'Complex':
        return onComplex(a.value)

      case 'PrimitiveProperty':
        return onPrimitive(a.value)

      case 'ResourceList':
        return onResourceList(a.value)

      default:
        return absurd<R>(a as never)
    }
  }

  return f
}
