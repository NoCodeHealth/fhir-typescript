import * as t from 'io-ts'

/** A UUID, represented as a URI */
export const FhirUuid = t.brand(
  t.string,
  (x): x is t.Branded<string, FhirStringBrand> =>
    typeof x !== 'undefined' &&
    (typeof x !== 'string' || /^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(x)),
  'FhirString'
)
interface FhirStringBrand {
  readonly FhirString: unique symbol
}

/** A UUID, represented as a URI */
export type FhirUuid = t.Branded<string, FhirStringBrand>
