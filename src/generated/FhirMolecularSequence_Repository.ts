import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** Raw data describing a biological sequence. */
export const FhirMolecularSequence_Repository: t.Type<
  FhirMolecularSequence_Repository,
  FhirMolecularSequence_RepositoryOutput
> = t.recursion('FhirMolecularSequence_Repository', () =>
  t.partial({
    /** Raw data describing a biological sequence. */
    _datasetId: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    _name: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    _readsetId: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    _type: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    _url: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    _variantsetId: t.readonly(FhirElement),
    /** Raw data describing a biological sequence. */
    datasetId: t.readonly(FhirString),
    /** Raw data describing a biological sequence. */
    extension: t.readonlyArray(FhirExtension),
    /** Raw data describing a biological sequence. */
    id: t.readonly(FhirString),
    /** Raw data describing a biological sequence. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Raw data describing a biological sequence. */
    name: t.readonly(FhirString),
    /** Raw data describing a biological sequence. */
    readsetId: t.readonly(FhirString),
    /** Raw data describing a biological sequence. */
    type: t.readonly(
      t.keyof({
        directlink: null,
        openapi: null,
        login: null,
        oauth: null,
        other: null,
      })
    ),
    /** Raw data describing a biological sequence. */
    url: t.readonly(FhirUri),
    /** Raw data describing a biological sequence. */
    variantsetId: t.readonly(FhirString),
  })
)

/** Raw data describing a biological sequence. */
export interface FhirMolecularSequence_Repository {
  /** Raw data describing a biological sequence. */
  _datasetId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _readsetId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _variantsetId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  datasetId?: Readonly<t.TypeOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  readsetId?: Readonly<t.TypeOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  type?: Readonly<'directlink' | 'openapi' | 'login' | 'oauth' | 'other'>
  /** Raw data describing a biological sequence. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Raw data describing a biological sequence. */
  variantsetId?: Readonly<t.TypeOf<typeof FhirString>>
}
/** Raw data describing a biological sequence. */
export interface FhirMolecularSequence_RepositoryOutput {
  /** Raw data describing a biological sequence. */
  _datasetId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _readsetId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  _variantsetId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Raw data describing a biological sequence. */
  datasetId?: Readonly<t.OutputOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Raw data describing a biological sequence. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  readsetId?: Readonly<t.OutputOf<typeof FhirString>>
  /** Raw data describing a biological sequence. */
  type?: Readonly<'directlink' | 'openapi' | 'login' | 'oauth' | 'other'>
  /** Raw data describing a biological sequence. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Raw data describing a biological sequence. */
  variantsetId?: Readonly<t.OutputOf<typeof FhirString>>
}
