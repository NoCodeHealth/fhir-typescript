import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
export const FhirAuditEvent_Network: t.Type<FhirAuditEvent_Network, FhirAuditEvent_NetworkOutput> = t.recursion(
  'FhirAuditEvent_Network',
  () =>
    t.partial({
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      _address: t.readonly(FhirElement),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      _type: t.readonly(FhirElement),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      address: t.readonly(FhirString),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      extension: t.readonlyArray(FhirExtension),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      id: t.readonly(FhirString),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      type: t.readonly(
        t.keyof({
          '1': null,
          '2': null,
          '3': null,
          '4': null,
          '5': null,
        })
      ),
    })
)

/** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
export interface FhirAuditEvent_Network {
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  _address?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  address?: Readonly<t.TypeOf<typeof FhirString>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  type?: Readonly<'1' | '2' | '3' | '4' | '5'>
}
/** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
export interface FhirAuditEvent_NetworkOutput {
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  _address?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  address?: Readonly<t.OutputOf<typeof FhirString>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  type?: Readonly<'1' | '2' | '3' | '4' | '5'>
}
