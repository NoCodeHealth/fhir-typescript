import * as t from 'io-ts'

/** An instant in time - known at least to the second */
export const FhirInstant = t.brand(
  t.string,
  (x): x is t.Branded<string, FhirStringBrand> =>
    typeof x !== 'undefined' &&
    (typeof x !== 'string' ||
      /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))$/.test(
        x
      )),
  'FhirString'
)
interface FhirStringBrand {
  readonly FhirString: unique symbol
}

/** An instant in time - known at least to the second */
export type FhirInstant = t.Branded<string, FhirStringBrand>
