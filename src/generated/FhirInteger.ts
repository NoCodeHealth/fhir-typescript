import * as t from 'io-ts'

/** A whole number */
export const FhirInteger = t.brand(
  t.number,
  (x): x is t.Branded<number, FhirNumberBrand> =>
    typeof x !== 'undefined' && (typeof x !== 'string' || /^-?([0]|([1-9][0-9]*))$/.test(x)),
  'FhirNumber'
)
interface FhirNumberBrand {
  readonly FhirNumber: unique symbol
}

/** A whole number */
export type FhirInteger = t.Branded<number, FhirNumberBrand>
