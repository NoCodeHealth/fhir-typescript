import * as t from 'io-ts'
import { FhirExtension } from './FhirExtension'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
export const FhirDocumentManifest_Related: t.Type<
  FhirDocumentManifest_Related,
  FhirDocumentManifest_RelatedOutput
> = t.recursion('FhirDocumentManifest_Related', () =>
  t.partial({
    /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
    extension: t.readonlyArray(FhirExtension),
    /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
    id: t.readonly(FhirString),
    /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
    identifier: t.readonly(FhirIdentifier),
    /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
    ref: t.readonly(FhirReference),
  })
)

/** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
export interface FhirDocumentManifest_Related {
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  identifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  ref?: Readonly<t.TypeOf<typeof FhirReference>>
}
/** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
export interface FhirDocumentManifest_RelatedOutput {
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  identifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
  ref?: Readonly<t.OutputOf<typeof FhirReference>>
}
