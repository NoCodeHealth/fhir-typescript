import * as t from 'io-ts'
import { FhirAuditEvent_Network } from './FhirAuditEvent_Network'
import { FhirBoolean } from './FhirBoolean'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirCoding } from './FhirCoding'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
export const FhirAuditEvent_Agent: t.Type<FhirAuditEvent_Agent, FhirAuditEvent_AgentOutput> = t.recursion(
  'FhirAuditEvent_Agent',
  () =>
    t.partial({
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      _altId: t.readonly(FhirElement),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      _name: t.readonly(FhirElement),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      _policy: t.readonlyArray(FhirElement),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      _requestor: t.readonly(FhirElement),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      altId: t.readonly(FhirString),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      extension: t.readonlyArray(FhirExtension),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      id: t.readonly(FhirString),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      location: t.readonly(FhirReference),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      media: t.readonly(FhirCoding),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      name: t.readonly(FhirString),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      network: t.readonly(FhirAuditEvent_Network),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      policy: t.readonlyArray(FhirUri),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      purposeOfUse: t.readonlyArray(FhirCodeableConcept),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      requestor: t.readonly(FhirBoolean),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      role: t.readonlyArray(FhirCodeableConcept),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      type: t.readonly(FhirCodeableConcept),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      who: t.readonly(FhirReference),
    })
)

/** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
export interface FhirAuditEvent_Agent {
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  _altId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  _policy?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  _requestor?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  altId?: Readonly<t.TypeOf<typeof FhirString>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  location?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  media?: Readonly<t.TypeOf<typeof FhirCoding>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  network?: Readonly<t.TypeOf<typeof FhirAuditEvent_Network>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  policy?: ReadonlyArray<t.TypeOf<typeof FhirUri>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  purposeOfUse?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  requestor?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  role?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  who?: Readonly<t.TypeOf<typeof FhirReference>>
}
/** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
export interface FhirAuditEvent_AgentOutput {
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  _altId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  _policy?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  _requestor?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  altId?: Readonly<t.OutputOf<typeof FhirString>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  location?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  media?: Readonly<t.OutputOf<typeof FhirCoding>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  network?: Readonly<t.OutputOf<typeof FhirAuditEvent_Network>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  policy?: ReadonlyArray<t.OutputOf<typeof FhirUri>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  purposeOfUse?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  requestor?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  role?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  who?: Readonly<t.OutputOf<typeof FhirReference>>
}
