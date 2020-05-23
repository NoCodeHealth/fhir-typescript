import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirInstant } from './FhirInstant'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A container for a collection of resources. */
export const FhirBundle_Response: t.Type<FhirBundle_Response, FhirBundle_ResponseOutput> = t.recursion(
  'FhirBundle_Response',
  () =>
    t.partial({
      /** A container for a collection of resources. */
      _etag: t.readonly(FhirElement),
      /** A container for a collection of resources. */
      _lastModified: t.readonly(FhirElement),
      /** A container for a collection of resources. */
      _location: t.readonly(FhirElement),
      /** A container for a collection of resources. */
      _status: t.readonly(FhirElement),
      /** A container for a collection of resources. */
      etag: t.readonly(FhirString),
      /** A container for a collection of resources. */
      extension: t.readonlyArray(FhirExtension),
      /** A container for a collection of resources. */
      id: t.readonly(FhirString),
      /** A container for a collection of resources. */
      lastModified: t.readonly(FhirInstant),
      /** A container for a collection of resources. */
      location: t.readonly(FhirUri),
      /** A container for a collection of resources. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A container for a collection of resources. */
      outcome: t.readonly(FhirResourceList),
      /** A container for a collection of resources. */
      status: t.readonly(FhirString),
    })
)

/** A container for a collection of resources. */
export interface FhirBundle_Response {
  /** A container for a collection of resources. */
  _etag?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _lastModified?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _location?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  etag?: Readonly<t.TypeOf<typeof FhirString>>
  /** A container for a collection of resources. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A container for a collection of resources. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A container for a collection of resources. */
  lastModified?: Readonly<t.TypeOf<typeof FhirInstant>>
  /** A container for a collection of resources. */
  location?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A container for a collection of resources. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A container for a collection of resources. */
  outcome?: Readonly<t.TypeOf<typeof FhirResourceList>>
  /** A container for a collection of resources. */
  status?: Readonly<t.TypeOf<typeof FhirString>>
}
/** A container for a collection of resources. */
export interface FhirBundle_ResponseOutput {
  /** A container for a collection of resources. */
  _etag?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _lastModified?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _location?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  etag?: Readonly<t.OutputOf<typeof FhirString>>
  /** A container for a collection of resources. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A container for a collection of resources. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A container for a collection of resources. */
  lastModified?: Readonly<t.OutputOf<typeof FhirInstant>>
  /** A container for a collection of resources. */
  location?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A container for a collection of resources. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A container for a collection of resources. */
  outcome?: Readonly<t.OutputOf<typeof FhirResourceList>>
  /** A container for a collection of resources. */
  status?: Readonly<t.OutputOf<typeof FhirString>>
}
