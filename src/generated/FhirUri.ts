import * as t from 'io-ts'

/** String of characters used to identify a name or a resource */
export const FhirUri = t.brand(
  t.string,
  (x): x is t.Branded<string, FhirStringBrand> =>
    typeof x !== 'undefined' && (typeof x !== 'string' || /^\S*$/.test(x)),
  'FhirString'
)
interface FhirStringBrand {
  readonly FhirString: unique symbol
}

/** String of characters used to identify a name or a resource */
export type FhirUri = t.Branded<string, FhirStringBrand>
