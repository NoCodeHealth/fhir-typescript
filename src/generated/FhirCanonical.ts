import * as t from 'io-ts'

/** A URI that is a reference to a canonical URL on a FHIR resource */
export const FhirCanonical = t.brand(
  t.string,
  (x): x is t.Branded<string, FhirStringBrand> =>
    typeof x !== 'undefined' && (typeof x !== 'string' || /^\S*$/.test(x)),
  'FhirString'
)
interface FhirStringBrand {
  readonly FhirString: unique symbol
}

/** A URI that is a reference to a canonical URL on a FHIR resource */
export type FhirCanonical = t.Branded<string, FhirStringBrand>
