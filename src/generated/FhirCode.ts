import * as t from 'io-ts'

/** A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents */
export const FhirCode = t.brand(
  t.string,
  (x): x is t.Branded<string, FhirStringBrand> =>
    typeof x !== 'undefined' && (typeof x !== 'string' || /^[^\s]+(\s[^\s]+)*$/.test(x)),
  'FhirString'
)
interface FhirStringBrand {
  readonly FhirString: unique symbol
}

/** A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents */
export type FhirCode = t.Branded<string, FhirStringBrand>
