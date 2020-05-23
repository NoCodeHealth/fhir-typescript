import * as t from 'io-ts'

/** Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.)  Ids are case-insensitive. */
export const FhirId = t.brand(
  t.string,
  (x): x is t.Branded<string, FhirStringBrand> =>
    typeof x !== 'undefined' && (typeof x !== 'string' || /^[A-Za-z0-9\-\.]{1,64}$/.test(x)),
  'FhirString'
)
interface FhirStringBrand {
  readonly FhirString: unique symbol
}

/** Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.)  Ids are case-insensitive. */
export type FhirId = t.Branded<string, FhirStringBrand>
