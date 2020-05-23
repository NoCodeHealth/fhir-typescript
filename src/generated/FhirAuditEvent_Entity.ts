import * as t from 'io-ts'
import { FhirAuditEvent_Detail } from './FhirAuditEvent_Detail'
import { FhirBase64Binary } from './FhirBase64Binary'
import { FhirCoding } from './FhirCoding'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
export const FhirAuditEvent_Entity: t.Type<FhirAuditEvent_Entity, FhirAuditEvent_EntityOutput> = t.recursion(
  'FhirAuditEvent_Entity',
  () =>
    t.partial({
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      _description: t.readonly(FhirElement),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      _name: t.readonly(FhirElement),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      _query: t.readonly(FhirElement),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      description: t.readonly(FhirString),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      detail: t.readonlyArray(FhirAuditEvent_Detail),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      extension: t.readonlyArray(FhirExtension),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      id: t.readonly(FhirString),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      lifecycle: t.readonly(FhirCoding),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      name: t.readonly(FhirString),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      query: t.readonly(FhirBase64Binary),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      role: t.readonly(FhirCoding),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      securityLabel: t.readonlyArray(FhirCoding),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      type: t.readonly(FhirCoding),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      what: t.readonly(FhirReference),
    })
)

/** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
export interface FhirAuditEvent_Entity {
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  _query?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  detail?: ReadonlyArray<t.TypeOf<typeof FhirAuditEvent_Detail>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  lifecycle?: Readonly<t.TypeOf<typeof FhirCoding>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  query?: Readonly<t.TypeOf<typeof FhirBase64Binary>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  role?: Readonly<t.TypeOf<typeof FhirCoding>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  securityLabel?: ReadonlyArray<t.TypeOf<typeof FhirCoding>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  type?: Readonly<t.TypeOf<typeof FhirCoding>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  what?: Readonly<t.TypeOf<typeof FhirReference>>
}
/** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
export interface FhirAuditEvent_EntityOutput {
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  _query?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  detail?: ReadonlyArray<t.OutputOf<typeof FhirAuditEvent_Detail>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  lifecycle?: Readonly<t.OutputOf<typeof FhirCoding>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  query?: Readonly<t.OutputOf<typeof FhirBase64Binary>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  role?: Readonly<t.OutputOf<typeof FhirCoding>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  securityLabel?: ReadonlyArray<t.OutputOf<typeof FhirCoding>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  type?: Readonly<t.OutputOf<typeof FhirCoding>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  what?: Readonly<t.OutputOf<typeof FhirReference>>
}
