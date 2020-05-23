import * as t from 'io-ts'
import { FhirCoding } from './FhirCoding'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
export const FhirAuditEvent_Source: t.Type<FhirAuditEvent_Source, FhirAuditEvent_SourceOutput> = t.recursion(
  'FhirAuditEvent_Source',
  () =>
    t.intersection([
      t.type({
        /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
        observer: t.readonly(FhirReference),
      }),
      t.partial({
        /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
        _site: t.readonly(FhirElement),
        /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
        extension: t.readonlyArray(FhirExtension),
        /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
        id: t.readonly(FhirString),
        /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
        site: t.readonly(FhirString),
        /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
        type: t.readonlyArray(FhirCoding),
      }),
    ])
)

/** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
export interface FhirAuditEvent_Source {
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  _site?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  observer: Readonly<t.TypeOf<typeof FhirReference>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  site?: Readonly<t.TypeOf<typeof FhirString>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  type?: ReadonlyArray<t.TypeOf<typeof FhirCoding>>
}
/** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
export interface FhirAuditEvent_SourceOutput {
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  _site?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  observer: Readonly<t.OutputOf<typeof FhirReference>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  site?: Readonly<t.OutputOf<typeof FhirString>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  type?: ReadonlyArray<t.OutputOf<typeof FhirCoding>>
}
