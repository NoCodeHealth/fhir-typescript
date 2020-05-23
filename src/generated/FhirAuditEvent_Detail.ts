import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
export const FhirAuditEvent_Detail: t.Type<FhirAuditEvent_Detail, FhirAuditEvent_DetailOutput> = t.recursion(
  'FhirAuditEvent_Detail',
  () =>
    t.partial({
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      _type: t.readonly(FhirElement),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      _valueBase64Binary: t.readonly(FhirElement),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      _valueString: t.readonly(FhirElement),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      extension: t.readonlyArray(FhirExtension),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      id: t.readonly(FhirString),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      type: t.readonly(FhirString),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      valueBase64Binary: t.readonly(t.string),
      /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
      valueString: t.readonly(t.string),
    })
)

/** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
export interface FhirAuditEvent_Detail {
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  _valueBase64Binary?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  _valueString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  type?: Readonly<t.TypeOf<typeof FhirString>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  valueBase64Binary?: Readonly<string>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  valueString?: Readonly<string>
}
/** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
export interface FhirAuditEvent_DetailOutput {
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  _valueBase64Binary?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  _valueString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  type?: Readonly<t.OutputOf<typeof FhirString>>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  valueBase64Binary?: Readonly<string>
  /** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
  valueString?: Readonly<string>
}
