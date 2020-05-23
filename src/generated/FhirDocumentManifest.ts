import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirDocumentManifest_Related } from './FhirDocumentManifest_Related'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
export const FhirDocumentManifest: t.Type<FhirDocumentManifest, FhirDocumentManifestOutput> = t.recursion(
  'FhirDocumentManifest',
  () =>
    t.intersection([
      t.type({
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        content: t.readonlyArray(FhirReference),
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        resourceType: t.readonly(t.literal('DocumentManifest')),
      }),
      t.partial({
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        _created: t.readonly(FhirElement),
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        _description: t.readonly(FhirElement),
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        _implicitRules: t.readonly(FhirElement),
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        _language: t.readonly(FhirElement),
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        _source: t.readonly(FhirElement),
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        _status: t.readonly(FhirElement),
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        author: t.readonlyArray(FhirReference),
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        contained: t.readonlyArray(FhirResourceList),
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        created: t.readonly(FhirDateTime),
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        description: t.readonly(FhirString),
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        extension: t.readonlyArray(FhirExtension),
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        id: t.readonly(FhirId),
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        implicitRules: t.readonly(FhirUri),
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        language: t.readonly(FhirCode),
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        masterIdentifier: t.readonly(FhirIdentifier),
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        meta: t.readonly(FhirMeta),
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        recipient: t.readonlyArray(FhirReference),
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        related: t.readonlyArray(FhirDocumentManifest_Related),
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        source: t.readonly(FhirUri),
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        status: t.readonly(
          t.keyof({
            current: null,
            superseded: null,
            'entered-in-error': null,
          })
        ),
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        subject: t.readonly(FhirReference),
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        text: t.readonly(FhirNarrative),
        /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
        type: t.readonly(FhirCodeableConcept),
      }),
    ])
)

/** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
export interface FhirDocumentManifest {
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  _created?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  _source?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  author?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  content: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  created?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  masterIdentifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  recipient?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  related?: ReadonlyArray<t.TypeOf<typeof FhirDocumentManifest_Related>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  resourceType: Readonly<'DocumentManifest'>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  source?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  status?: Readonly<'current' | 'superseded' | 'entered-in-error'>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  subject?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
export interface FhirDocumentManifestOutput {
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  _created?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  _source?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  author?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  content: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  created?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  masterIdentifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  recipient?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  related?: ReadonlyArray<t.OutputOf<typeof FhirDocumentManifest_Related>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  resourceType: Readonly<'DocumentManifest'>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  source?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  status?: Readonly<'current' | 'superseded' | 'entered-in-error'>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  subject?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
