import * as A from 'fp-ts/lib/Array'
import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'

/**
 * @since 0.0.1
 */
export const checkInteger: (a: string) => string = (a) => `(Number.isInteger(${a}))`

/**
 * @since 0.0.1
 */
export const checkMaximum: (a: string, maximum: number) => string = (a, m) =>
  `(typeof ${a} !== 'number' || ${a} <= ${m})`

/**
 * @since 0.0.1
 */
export const checkMaxItems: (a: string, maxItems: number) => string = (a, m) =>
  `(!Array.isArray(${a}) || ${a}.length <= ${m})`

/**
 * @since 0.0.1
 */
export const checkMaxLength: (a: string, maxLength: number) => string = (a, m) =>
  `(typeof ${a} !== 'string' || ${a}.length <= ${m})`

/**
 * @since 0.0.1
 */
export const checkMinimum: (a: string, minimum: number) => string = (a, m) =>
  `(typeof ${a} !== 'number' || ${a} >= ${m})`

/**
 * @since 0.0.1
 */
export const checkMinItems: (a: string, minItems: number) => string = (a, m) =>
  `(!Array.isArray(${a}) || ${a}.length >= ${m})`

/**
 * @since 0.0.1
 */
export const checkMinLength: (a: string, minLength: number) => string = (a, m) =>
  `(typeof ${a} !== 'string' || ${a}.length >= ${m})`

/**
 * @since 0.0.1
 */
export const checkMultipleOf: (a: string, divisor: number) => string = (a, d) =>
  `(typeof ${a} !== 'number' || ${a} % ${d} === 0)`

/**
 * @since 0.0.1
 */
export const checkPattern: (a: string, pattern: string) => string = (a, p) =>
  `(typeof ${a} !== 'string' || /${p}/.test(${a}))`

export const checks: <A extends Record<string, any>>(s: string, x: A) => string = (s, x) => {
  const cs = pipe(
    [
      'pattern' in x ? O.some(checkPattern(s, x.pattern)) : O.none,
      'minLength' in x ? O.some(checkMinLength(s, x.minLength)) : O.none,
      'maxLength' in x ? O.some(checkMaxLength(s, x.maxLength)) : O.none,
      'minimum' in x ? O.some(checkMinimum(s, x.minimum)) : O.none,
      'maximum' in x ? O.some(checkMaximum(s, x.maximum)) : O.none,
      'multipleOf' in x ? O.some(checkMultipleOf(s, x.multipleOf)) : O.none,
      'type' in x && x.type === 'integer' ? O.some(checkInteger(s)) : O.none,
      'minItems' in x ? O.some(checkMinItems(s, x.minItems)) : O.none,
      'maxItems' in x ? O.some(checkMaximum(s, x.multipleOf)) : O.none
    ],
    A.compact
  )

  return cs.length ? cs.join(' && ') : 'true'
}
