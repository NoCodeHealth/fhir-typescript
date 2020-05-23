import * as t from 'io-ts'

/** A time during the day, with no date specified */
export const FhirTime = t.brand(
  t.string,
  (x): x is t.Branded<string, FhirStringBrand> =>
    typeof x !== 'undefined' &&
    (typeof x !== 'string' || /^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?$/.test(x)),
  'FhirString'
)
interface FhirStringBrand {
  readonly FhirString: unique symbol
}

/** A time during the day, with no date specified */
export type FhirTime = t.Branded<string, FhirStringBrand>
