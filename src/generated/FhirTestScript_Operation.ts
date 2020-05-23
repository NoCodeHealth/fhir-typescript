import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCode } from './FhirCode'
import { FhirCoding } from './FhirCoding'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirInteger } from './FhirInteger'
import { FhirString } from './FhirString'
import { FhirTestScript_RequestHeader } from './FhirTestScript_RequestHeader'

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export const FhirTestScript_Operation: t.Type<FhirTestScript_Operation, FhirTestScript_OperationOutput> = t.recursion(
  'FhirTestScript_Operation',
  () =>
    t.partial({
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _accept: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _contentType: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _description: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _destination: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _encodeRequestUrl: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _label: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _method: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _origin: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _params: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _requestId: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _resource: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _responseId: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _sourceId: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _targetId: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _url: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      accept: t.readonly(FhirCode),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      contentType: t.readonly(FhirCode),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      description: t.readonly(FhirString),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      destination: t.readonly(FhirInteger),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      encodeRequestUrl: t.readonly(FhirBoolean),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      extension: t.readonlyArray(FhirExtension),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      id: t.readonly(FhirString),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      label: t.readonly(FhirString),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      method: t.readonly(
        t.keyof({
          delete: null,
          get: null,
          options: null,
          patch: null,
          post: null,
          put: null,
          head: null,
        })
      ),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      origin: t.readonly(FhirInteger),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      params: t.readonly(FhirString),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      requestHeader: t.readonlyArray(FhirTestScript_RequestHeader),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      requestId: t.readonly(FhirId),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      resource: t.readonly(FhirCode),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      responseId: t.readonly(FhirId),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      sourceId: t.readonly(FhirId),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      targetId: t.readonly(FhirId),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      type: t.readonly(FhirCoding),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      url: t.readonly(FhirString),
    })
)

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface FhirTestScript_Operation {
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _accept?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _contentType?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _destination?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _encodeRequestUrl?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _label?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _method?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _origin?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _params?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _requestId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _resource?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _responseId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _sourceId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _targetId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  accept?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  contentType?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  destination?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  encodeRequestUrl?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  label?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  method?: Readonly<'delete' | 'get' | 'options' | 'patch' | 'post' | 'put' | 'head'>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  origin?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  params?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  requestHeader?: ReadonlyArray<t.TypeOf<typeof FhirTestScript_RequestHeader>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  requestId?: Readonly<t.TypeOf<typeof FhirId>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  resource?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  responseId?: Readonly<t.TypeOf<typeof FhirId>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  sourceId?: Readonly<t.TypeOf<typeof FhirId>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  targetId?: Readonly<t.TypeOf<typeof FhirId>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  type?: Readonly<t.TypeOf<typeof FhirCoding>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  url?: Readonly<t.TypeOf<typeof FhirString>>
}
/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface FhirTestScript_OperationOutput {
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _accept?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _contentType?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _destination?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _encodeRequestUrl?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _label?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _method?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _origin?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _params?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _requestId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _resource?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _responseId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _sourceId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _targetId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  accept?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  contentType?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  destination?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  encodeRequestUrl?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  label?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  method?: Readonly<'delete' | 'get' | 'options' | 'patch' | 'post' | 'put' | 'head'>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  origin?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  params?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  requestHeader?: ReadonlyArray<t.OutputOf<typeof FhirTestScript_RequestHeader>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  requestId?: Readonly<t.OutputOf<typeof FhirId>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  resource?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  responseId?: Readonly<t.OutputOf<typeof FhirId>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  sourceId?: Readonly<t.OutputOf<typeof FhirId>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  targetId?: Readonly<t.OutputOf<typeof FhirId>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  type?: Readonly<t.OutputOf<typeof FhirCoding>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  url?: Readonly<t.OutputOf<typeof FhirString>>
}
