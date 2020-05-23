import * as t from 'io-ts'
import { FhirCanonical } from './FhirCanonical'
import { FhirCoding } from './FhirCoding'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirInstant } from './FhirInstant'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
export const FhirMeta: t.Type<FhirMeta, FhirMetaOutput> = t.recursion('FhirMeta', () =>
  t.partial({
    /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
    _lastUpdated: t.readonly(FhirElement),
    /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
    _source: t.readonly(FhirElement),
    /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
    _versionId: t.readonly(FhirElement),
    /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
    extension: t.readonlyArray(FhirExtension),
    /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
    id: t.readonly(FhirString),
    /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
    lastUpdated: t.readonly(FhirInstant),
    /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
    profile: t.readonlyArray(FhirCanonical),
    /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
    security: t.readonlyArray(FhirCoding),
    /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
    source: t.readonly(FhirUri),
    /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
    tag: t.readonlyArray(FhirCoding),
    /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
    versionId: t.readonly(FhirId),
  })
)

/** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
export interface FhirMeta {
  /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  _lastUpdated?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  _source?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  _versionId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  lastUpdated?: Readonly<t.TypeOf<typeof FhirInstant>>
  /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  profile?: ReadonlyArray<t.TypeOf<typeof FhirCanonical>>
  /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  security?: ReadonlyArray<t.TypeOf<typeof FhirCoding>>
  /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  source?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  tag?: ReadonlyArray<t.TypeOf<typeof FhirCoding>>
  /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  versionId?: Readonly<t.TypeOf<typeof FhirId>>
}
/** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
export interface FhirMetaOutput {
  /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  _lastUpdated?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  _source?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  _versionId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  lastUpdated?: Readonly<t.OutputOf<typeof FhirInstant>>
  /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  profile?: ReadonlyArray<t.OutputOf<typeof FhirCanonical>>
  /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  security?: ReadonlyArray<t.OutputOf<typeof FhirCoding>>
  /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  source?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  tag?: ReadonlyArray<t.OutputOf<typeof FhirCoding>>
  /** The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  versionId?: Readonly<t.OutputOf<typeof FhirId>>
}
