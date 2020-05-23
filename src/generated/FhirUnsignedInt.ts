import * as t from 'io-ts'

/** An integer with a value that is not negative (e.g. >= 0) */
export const FhirUnsignedInt = t.brand(
  t.number,
  (x): x is t.Branded<number, FhirNumberBrand> =>
    typeof x !== 'undefined' && (typeof x !== 'string' || /^[0]|([1-9][0-9]*)$/.test(x)),
  'FhirNumber'
)
interface FhirNumberBrand {
  readonly FhirNumber: unique symbol
}

/** An integer with a value that is not negative (e.g. >= 0) */
export type FhirUnsignedInt = t.Branded<number, FhirNumberBrand>
