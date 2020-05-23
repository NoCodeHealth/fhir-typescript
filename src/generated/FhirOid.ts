import * as t from 'io-ts'

/** An OID represented as a URI */
export const FhirOid = t.brand(
  t.string,
  (x): x is t.Branded<string, FhirStringBrand> =>
    typeof x !== 'undefined' && (typeof x !== 'string' || /^urn:oid:[0-2](\.(0|[1-9][0-9]*))+$/.test(x)),
  'FhirString'
)
interface FhirStringBrand {
  readonly FhirString: unique symbol
}

/** An OID represented as a URI */
export type FhirOid = t.Branded<string, FhirStringBrand>
