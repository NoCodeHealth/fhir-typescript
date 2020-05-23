import * as t from 'io-ts'

/** A string that may contain Github Flavored Markdown syntax for optional processing by a mark down presentation engine */
export const FhirMarkdown = t.brand(
  t.string,
  (x): x is t.Branded<string, FhirStringBrand> =>
    typeof x !== 'undefined' && (typeof x !== 'string' || /^[ \r\n\t\S]+$/.test(x)),
  'FhirString'
)
interface FhirStringBrand {
  readonly FhirString: unique symbol
}

/** A string that may contain Github Flavored Markdown syntax for optional processing by a mark down presentation engine */
export type FhirMarkdown = t.Branded<string, FhirStringBrand>
