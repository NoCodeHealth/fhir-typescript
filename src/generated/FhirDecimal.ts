import * as t from 'io-ts'

/** A rational number with implicit precision */
export const FhirDecimal = t.brand(
  t.number,
  (x): x is t.Branded<number, FhirNumberBrand> =>
    typeof x !== 'undefined' && (typeof x !== 'string' || /^-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][+-]?[0-9]+)?$/.test(x)),
  'FhirNumber'
)
interface FhirNumberBrand {
  readonly FhirNumber: unique symbol
}

/** A rational number with implicit precision */
export type FhirDecimal = t.Branded<number, FhirNumberBrand>
