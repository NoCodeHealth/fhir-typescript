import * as A from 'fp-ts/lib/Array'
import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'

/**
 * @since 0.0.1
 */
export const validateDefined: (x: string) => string = (x) => `typeof ${x} !== 'undefined'`

/**
 * @since 0.0.1
 */
export const validateInteger: (x: string) => string = (x) => `(Number.isInteger(${x}))`

/**
 * @since 0.0.1
 */
export const validateMaximum: (x: string, maximum: number) => string = (x, m) =>
  `(typeof ${x} !== 'number' || ${x} <= ${m})`

/**
 * @since 0.0.1
 */
export const validateMaxItems: (x: string, maxItems: number) => string = (x, m) =>
  `(!Array.isArray(${x}) || ${x}.length <= ${m})`

/**
 * @since 0.0.1
 */
export const validateMaxLength: (x: string, maxLength: number) => string = (x, m) =>
  `(typeof ${x} !== 'string' || ${x}.length <= ${m})`

/**
 * @since 0.0.1
 */
export const validateMinimum: (xxx: string, minimum: number) => string = (xxx, m) =>
  `(typeof ${xxx} !== 'number' || ${xxx} >= ${m})`

/**
 * @since 0.0.1
 */
export const validateMinItems: (xx: string, minItems: number) => string = (xx, m) =>
  `(!Array.isArray(${xx}) || ${xx}.length >= ${m})`

/**
 * @since 0.0.1
 */
export const validateMinLength: (x: string, minLength: number) => string = (x, m) =>
  `(typeof ${x} !== 'string' || ${x}.length >= ${m})`

/**
 * @since 0.0.1
 */
export const validateMultipleOf: (x: string, divisor: number) => string = (x, d) =>
  `(typeof ${x} !== 'number' || ${x} % ${d} === 0)`

/**
 * @since 0.0.1
 */
export const validatePattern: (x: string, pattern: string) => string = (x, p) =>
  `(typeof ${x} !== 'string' || /${p}/.test(${x}))`

/**
 * @since 0.0.1
 */
export const validate: <A extends Record<string, any>>(x: string, a: A) => string = (x, a) =>
  pipe(
    [
      O.some(validateDefined(x)),
      'pattern' in a ? O.some(validatePattern(x, a.pattern)) : O.none,
      'minLength' in a ? O.some(validateMinLength(x, a.minLength)) : O.none,
      'maxLength' in a ? O.some(validateMaxLength(x, a.maxLength)) : O.none,
      'minimum' in a ? O.some(validateMinimum(x, a.minimum)) : O.none,
      'maximum' in a ? O.some(validateMaximum(x, a.maximum)) : O.none,
      'multipleOf' in a ? O.some(validateMultipleOf(x, a.multipleOf)) : O.none,
      'type' in a && a.type === 'integer' ? O.some(validateInteger(x)) : O.none,
      'minItems' in a ? O.some(validateMinItems(x, a.minItems)) : O.none,
      'maxItems' in a ? O.some(validateMaximum(x, a.multipleOf)) : O.none
    ],
    A.compact,
    A.reduceRight('', (a, b) => (a && b ? `${a} && ${b}` : a))
  )
