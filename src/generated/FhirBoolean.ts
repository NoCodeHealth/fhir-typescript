import * as t from 'io-ts'

/** Value of "true" or "false" */
export const FhirBoolean = t.brand(
  t.boolean,
  (x): x is t.Branded<boolean, FhirBooleanBrand> =>
    typeof x !== 'undefined' && (typeof x !== 'string' || /^true|false$/.test(x)),
  'FhirBoolean'
)
interface FhirBooleanBrand {
  readonly FhirBoolean: unique symbol
}

/** Value of "true" or "false" */
export type FhirBoolean = t.Branded<boolean, FhirBooleanBrand>
