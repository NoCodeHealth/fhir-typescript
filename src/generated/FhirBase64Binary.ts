import * as t from 'io-ts'

/** A stream of bytes */
export const FhirBase64Binary = t.brand(
  t.string,
  (x): x is t.Branded<string, FhirStringBrand> => typeof x !== 'undefined',
  'FhirString'
)
interface FhirStringBrand {
  readonly FhirString: unique symbol
}

/** A stream of bytes */
export type FhirBase64Binary = t.Branded<string, FhirStringBrand>
