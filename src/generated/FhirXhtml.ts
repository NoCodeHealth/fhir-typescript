import * as t from 'io-ts'

/** xhtml - escaped html (see specfication) */
export const FhirXhtml = t.brand(
  t.string,
  (x): x is t.Branded<string, FhirStringBrand> => typeof x !== 'undefined',
  'FhirString'
)
interface FhirStringBrand {
  readonly FhirString: unique symbol
}

/** xhtml - escaped html (see specfication) */
export type FhirXhtml = t.Branded<string, FhirStringBrand>
