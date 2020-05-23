import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirCoding } from './FhirCoding'
import { FhirContactPoint } from './FhirContactPoint'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'
import { FhirUrl } from './FhirUrl'

/** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
export const FhirEndpoint: t.Type<FhirEndpoint, FhirEndpointOutput> = t.recursion('FhirEndpoint', () =>
  t.intersection([
    t.type({
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      connectionType: t.readonly(FhirCoding),
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      payloadType: t.readonlyArray(FhirCodeableConcept),
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      resourceType: t.readonly(t.literal('Endpoint')),
    }),
    t.partial({
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      _address: t.readonly(FhirElement),
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      _header: t.readonlyArray(FhirElement),
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      _implicitRules: t.readonly(FhirElement),
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      _language: t.readonly(FhirElement),
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      _name: t.readonly(FhirElement),
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      _payloadMimeType: t.readonlyArray(FhirElement),
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      _status: t.readonly(FhirElement),
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      address: t.readonly(FhirUrl),
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      contact: t.readonlyArray(FhirContactPoint),
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      contained: t.readonlyArray(FhirResourceList),
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      extension: t.readonlyArray(FhirExtension),
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      header: t.readonlyArray(FhirString),
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      id: t.readonly(FhirId),
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      implicitRules: t.readonly(FhirUri),
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      language: t.readonly(FhirCode),
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      managingOrganization: t.readonly(FhirReference),
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      meta: t.readonly(FhirMeta),
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      name: t.readonly(FhirString),
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      payloadMimeType: t.readonlyArray(FhirCode),
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      period: t.readonly(FhirPeriod),
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      status: t.readonly(
        t.keyof({
          active: null,
          suspended: null,
          error: null,
          off: null,
          'entered-in-error': null,
          test: null,
        })
      ),
      /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
export interface FhirEndpoint {
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  _address?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  _header?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  _payloadMimeType?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  address?: Readonly<t.TypeOf<typeof FhirUrl>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  connectionType: Readonly<t.TypeOf<typeof FhirCoding>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirContactPoint>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  header?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  managingOrganization?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  payloadMimeType?: ReadonlyArray<t.TypeOf<typeof FhirCode>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  payloadType: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  period?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  resourceType: Readonly<'Endpoint'>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  status?: Readonly<'active' | 'suspended' | 'error' | 'off' | 'entered-in-error' | 'test'>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
export interface FhirEndpointOutput {
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  _address?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  _header?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  _payloadMimeType?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  address?: Readonly<t.OutputOf<typeof FhirUrl>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  connectionType: Readonly<t.OutputOf<typeof FhirCoding>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirContactPoint>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  header?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  managingOrganization?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  payloadMimeType?: ReadonlyArray<t.OutputOf<typeof FhirCode>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  payloadType: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  period?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  resourceType: Readonly<'Endpoint'>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  status?: Readonly<'active' | 'suspended' | 'error' | 'off' | 'entered-in-error' | 'test'>
  /** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
