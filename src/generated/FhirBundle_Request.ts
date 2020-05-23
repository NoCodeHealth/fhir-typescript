import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirInstant } from './FhirInstant'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A container for a collection of resources. */
export const FhirBundle_Request: t.Type<FhirBundle_Request, FhirBundle_RequestOutput> = t.recursion(
  'FhirBundle_Request',
  () =>
    t.partial({
      /** A container for a collection of resources. */
      _ifMatch: t.readonly(FhirElement),
      /** A container for a collection of resources. */
      _ifModifiedSince: t.readonly(FhirElement),
      /** A container for a collection of resources. */
      _ifNoneExist: t.readonly(FhirElement),
      /** A container for a collection of resources. */
      _ifNoneMatch: t.readonly(FhirElement),
      /** A container for a collection of resources. */
      _method: t.readonly(FhirElement),
      /** A container for a collection of resources. */
      _url: t.readonly(FhirElement),
      /** A container for a collection of resources. */
      extension: t.readonlyArray(FhirExtension),
      /** A container for a collection of resources. */
      id: t.readonly(FhirString),
      /** A container for a collection of resources. */
      ifMatch: t.readonly(FhirString),
      /** A container for a collection of resources. */
      ifModifiedSince: t.readonly(FhirInstant),
      /** A container for a collection of resources. */
      ifNoneExist: t.readonly(FhirString),
      /** A container for a collection of resources. */
      ifNoneMatch: t.readonly(FhirString),
      /** A container for a collection of resources. */
      method: t.readonly(
        t.keyof({
          GET: null,
          HEAD: null,
          POST: null,
          PUT: null,
          DELETE: null,
          PATCH: null,
        })
      ),
      /** A container for a collection of resources. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A container for a collection of resources. */
      url: t.readonly(FhirUri),
    })
)

/** A container for a collection of resources. */
export interface FhirBundle_Request {
  /** A container for a collection of resources. */
  _ifMatch?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _ifModifiedSince?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _ifNoneExist?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _ifNoneMatch?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _method?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A container for a collection of resources. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A container for a collection of resources. */
  ifMatch?: Readonly<t.TypeOf<typeof FhirString>>
  /** A container for a collection of resources. */
  ifModifiedSince?: Readonly<t.TypeOf<typeof FhirInstant>>
  /** A container for a collection of resources. */
  ifNoneExist?: Readonly<t.TypeOf<typeof FhirString>>
  /** A container for a collection of resources. */
  ifNoneMatch?: Readonly<t.TypeOf<typeof FhirString>>
  /** A container for a collection of resources. */
  method?: Readonly<'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'>
  /** A container for a collection of resources. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A container for a collection of resources. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
}
/** A container for a collection of resources. */
export interface FhirBundle_RequestOutput {
  /** A container for a collection of resources. */
  _ifMatch?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _ifModifiedSince?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _ifNoneExist?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _ifNoneMatch?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _method?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A container for a collection of resources. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A container for a collection of resources. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A container for a collection of resources. */
  ifMatch?: Readonly<t.OutputOf<typeof FhirString>>
  /** A container for a collection of resources. */
  ifModifiedSince?: Readonly<t.OutputOf<typeof FhirInstant>>
  /** A container for a collection of resources. */
  ifNoneExist?: Readonly<t.OutputOf<typeof FhirString>>
  /** A container for a collection of resources. */
  ifNoneMatch?: Readonly<t.OutputOf<typeof FhirString>>
  /** A container for a collection of resources. */
  method?: Readonly<'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'>
  /** A container for a collection of resources. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A container for a collection of resources. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
}
