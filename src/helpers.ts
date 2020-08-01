import { last } from 'fp-ts/lib/Array'
import { intercalate } from 'fp-ts/lib/Foldable'
import * as M from 'fp-ts/lib/Monoid'
import { getOrElse, map } from 'fp-ts/lib/Option'
import { readonlyArray } from 'fp-ts/lib/ReadonlyArray'
import { flow, Endomorphism, pipe } from 'fp-ts/lib/function'

/**
 * @since 0.1.0
 */
export const upperFirst = (s: string): string => M.fold(M.monoidString)([s.charAt(0).toUpperCase(), s.slice(1)])

/**
 * @since 0.1.0
 */
export const prefixString = (prefix: string) => (s: string): string => M.fold(M.monoidString)([prefix, s])

/**
 * @since 0.1.0
 */
export const prefixFhir: Endomorphism<string> = flow(upperFirst, prefixString('Fhir'))

/**
 * @since 0.1.0
 */
export const parseRef = ($ref: string): string =>
  pipe(
    $ref.split('/'),
    last,
    map(prefixFhir),
    getOrElse(() => '')
  )

/**
 * @since 0.1.0
 */
export const CRLF = '\n'

/**
 * @since 0.1.0
 */
export const intercalateCRLF = (as: ReadonlyArray<string>): string => intercalate(monoidString, readonlyArray)(CRLF, as)

/**
 * @since 0.1.0
 */
export const COMMA = ','

/**
 * @since 0.1.0
 */
export const intercalateComma = (as: ReadonlyArray<string>): string =>
  intercalate(monoidString, readonlyArray)(COMMA, as)
