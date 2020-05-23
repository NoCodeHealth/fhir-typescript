import * as t from 'io-ts'
import { FhirAttachment } from './FhirAttachment'
import { FhirCanonical } from './FhirCanonical'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirMarkdown } from './FhirMarkdown'
import { FhirString } from './FhirString'
import { FhirUrl } from './FhirUrl'

/** Related artifacts such as additional documentation, justification, or bibliographic references. */
export const FhirRelatedArtifact: t.Type<FhirRelatedArtifact, FhirRelatedArtifactOutput> = t.recursion(
  'FhirRelatedArtifact',
  () =>
    t.partial({
      /** Related artifacts such as additional documentation, justification, or bibliographic references. */
      _citation: t.readonly(FhirElement),
      /** Related artifacts such as additional documentation, justification, or bibliographic references. */
      _display: t.readonly(FhirElement),
      /** Related artifacts such as additional documentation, justification, or bibliographic references. */
      _label: t.readonly(FhirElement),
      /** Related artifacts such as additional documentation, justification, or bibliographic references. */
      _type: t.readonly(FhirElement),
      /** Related artifacts such as additional documentation, justification, or bibliographic references. */
      _url: t.readonly(FhirElement),
      /** Related artifacts such as additional documentation, justification, or bibliographic references. */
      citation: t.readonly(FhirMarkdown),
      /** Related artifacts such as additional documentation, justification, or bibliographic references. */
      display: t.readonly(FhirString),
      /** Related artifacts such as additional documentation, justification, or bibliographic references. */
      document: t.readonly(FhirAttachment),
      /** Related artifacts such as additional documentation, justification, or bibliographic references. */
      extension: t.readonlyArray(FhirExtension),
      /** Related artifacts such as additional documentation, justification, or bibliographic references. */
      id: t.readonly(FhirString),
      /** Related artifacts such as additional documentation, justification, or bibliographic references. */
      label: t.readonly(FhirString),
      /** Related artifacts such as additional documentation, justification, or bibliographic references. */
      resource: t.readonly(FhirCanonical),
      /** Related artifacts such as additional documentation, justification, or bibliographic references. */
      type: t.readonly(
        t.keyof({
          documentation: null,
          justification: null,
          citation: null,
          predecessor: null,
          successor: null,
          'derived-from': null,
          'depends-on': null,
          'composed-of': null,
        })
      ),
      /** Related artifacts such as additional documentation, justification, or bibliographic references. */
      url: t.readonly(FhirUrl),
    })
)

/** Related artifacts such as additional documentation, justification, or bibliographic references. */
export interface FhirRelatedArtifact {
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  _citation?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  _display?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  _label?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  citation?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  display?: Readonly<t.TypeOf<typeof FhirString>>
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  document?: Readonly<t.TypeOf<typeof FhirAttachment>>
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  label?: Readonly<t.TypeOf<typeof FhirString>>
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  resource?: Readonly<t.TypeOf<typeof FhirCanonical>>
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  type?: Readonly<
    | 'documentation'
    | 'justification'
    | 'citation'
    | 'predecessor'
    | 'successor'
    | 'derived-from'
    | 'depends-on'
    | 'composed-of'
  >
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  url?: Readonly<t.TypeOf<typeof FhirUrl>>
}
/** Related artifacts such as additional documentation, justification, or bibliographic references. */
export interface FhirRelatedArtifactOutput {
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  _citation?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  _display?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  _label?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  citation?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  display?: Readonly<t.OutputOf<typeof FhirString>>
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  document?: Readonly<t.OutputOf<typeof FhirAttachment>>
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  label?: Readonly<t.OutputOf<typeof FhirString>>
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  resource?: Readonly<t.OutputOf<typeof FhirCanonical>>
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  type?: Readonly<
    | 'documentation'
    | 'justification'
    | 'citation'
    | 'predecessor'
    | 'successor'
    | 'derived-from'
    | 'depends-on'
    | 'composed-of'
  >
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  url?: Readonly<t.OutputOf<typeof FhirUrl>>
}
