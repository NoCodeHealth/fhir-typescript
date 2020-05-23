import * as t from 'io-ts'

/** A URI that is a literal reference */
export const FhirUrl = t.brand(
  t.string,
  (x): x is t.Branded<string, FhirStringBrand> =>
    typeof x !== 'undefined' && (typeof x !== 'string' || /^\S*$/.test(x)),
  'FhirString'
)
interface FhirStringBrand {
  readonly FhirString: unique symbol
}

/** A URI that is a literal reference */
export type FhirUrl = t.Branded<string, FhirStringBrand>
