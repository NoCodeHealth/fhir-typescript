import * as A from 'fp-ts/lib/Array'
import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'

/**
 * @since 0.0.1
 */
export const checkDefined: (x: string) => string = (x) => `typeof ${x} !== 'undefined'`

/**
 * @since 0.0.1
 */
export const checkInteger: (x: string) => string = (x) => `(Number.isInteger(${x}))`

/**
 * @since 0.0.1
 */
export const checkMaximum: (x: string, maximum: number) => string = (x, m) =>
  `(typeof ${x} !== 'number' || ${x} <= ${m})`

/**
 * @since 0.0.1
 */
export const checkMaxItems: (x: string, maxItems: number) => string = (x, m) =>
  `(!Array.isArray(${x}) || ${x}.length <= ${m})`

/**
 * @since 0.0.1
 */
export const checkMaxLength: (x: string, maxLength: number) => string = (x, m) =>
  `(typeof ${x} !== 'string' || ${x}.length <= ${m})`

/**
 * @since 0.0.1
 */
export const checkMinimum: (xxx: string, minimum: number) => string = (xxx, m) =>
  `(typeof ${xxx} !== 'number' || ${xxx} >= ${m})`

/**
 * @since 0.0.1
 */
export const checkMinItems: (xx: string, minItems: number) => string = (xx, m) =>
  `(!Array.isArray(${xx}) || ${xx}.length >= ${m})`

/**
 * @since 0.0.1
 */
export const checkMinLength: (x: string, minLength: number) => string = (x, m) =>
  `(typeof ${x} !== 'string' || ${x}.length >= ${m})`

/**
 * @since 0.0.1
 */
export const checkMultipleOf: (x: string, divisor: number) => string = (x, d) =>
  `(typeof ${x} !== 'number' || ${x} % ${d} === 0)`

/**
 * @since 0.0.1
 */
export const checkPattern: (x: string, pattern: string) => string = (x, p) =>
  `(typeof ${x} !== 'string' || /${p}/.test(${x}))`

export const checks: <A extends Record<string, any>>(x: string, a: A) => string = (x, a) =>
  pipe(
    [
      O.some(checkDefined(x)),
      'pattern' in a ? O.some(checkPattern(x, a.pattern)) : O.none,
      'minLength' in a ? O.some(checkMinLength(x, a.minLength)) : O.none,
      'maxLength' in a ? O.some(checkMaxLength(x, a.maxLength)) : O.none,
      'minimum' in a ? O.some(checkMinimum(x, a.minimum)) : O.none,
      'maximum' in a ? O.some(checkMaximum(x, a.maximum)) : O.none,
      'multipleOf' in a ? O.some(checkMultipleOf(x, a.multipleOf)) : O.none,
      'type' in a && a.type === 'integer' ? O.some(checkInteger(x)) : O.none,
      'minItems' in a ? O.some(checkMinItems(x, a.minItems)) : O.none,
      'maxItems' in a ? O.some(checkMaximum(x, a.multipleOf)) : O.none
    ],
    A.compact,
    A.reduceRight('', (a, b) => (a && b ? `${a} && ${b}` : a))
  )
