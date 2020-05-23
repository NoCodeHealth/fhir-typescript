import * as t from 'io-ts'

/** A sequence of Unicode characters */
export const FhirString = t.brand(
  t.string,
  (x): x is t.Branded<string, FhirStringBrand> =>
    typeof x !== 'undefined' && (typeof x !== 'string' || /^[ \r\n\t\S]+$/.test(x)),
  'FhirString'
)
interface FhirStringBrand {
  readonly FhirString: unique symbol
}

/** A sequence of Unicode characters */
export type FhirString = t.Branded<string, FhirStringBrand>
