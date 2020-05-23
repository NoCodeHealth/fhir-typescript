import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirInstant } from './FhirInstant'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
export const FhirAppointmentResponse: t.Type<FhirAppointmentResponse, FhirAppointmentResponseOutput> = t.recursion(
  'FhirAppointmentResponse',
  () =>
    t.intersection([
      t.type({
        /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
        appointment: t.readonly(FhirReference),
        /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
        resourceType: t.readonly(t.literal('AppointmentResponse')),
      }),
      t.partial({
        /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
        _comment: t.readonly(FhirElement),
        /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
        _end: t.readonly(FhirElement),
        /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
        _implicitRules: t.readonly(FhirElement),
        /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
        _language: t.readonly(FhirElement),
        /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
        _participantStatus: t.readonly(FhirElement),
        /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
        _start: t.readonly(FhirElement),
        /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
        actor: t.readonly(FhirReference),
        /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
        comment: t.readonly(FhirString),
        /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
        contained: t.readonlyArray(FhirResourceList),
        /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
        end: t.readonly(FhirInstant),
        /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
        extension: t.readonlyArray(FhirExtension),
        /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
        id: t.readonly(FhirId),
        /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
        implicitRules: t.readonly(FhirUri),
        /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
        language: t.readonly(FhirCode),
        /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
        meta: t.readonly(FhirMeta),
        /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
        participantStatus: t.readonly(FhirCode),
        /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
        participantType: t.readonlyArray(FhirCodeableConcept),
        /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
        start: t.readonly(FhirInstant),
        /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
        text: t.readonly(FhirNarrative),
      }),
    ])
)

/** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
export interface FhirAppointmentResponse {
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  _comment?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  _end?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  _participantStatus?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  _start?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  actor?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  appointment: Readonly<t.TypeOf<typeof FhirReference>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  comment?: Readonly<t.TypeOf<typeof FhirString>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  end?: Readonly<t.TypeOf<typeof FhirInstant>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  participantStatus?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  participantType?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  resourceType: Readonly<'AppointmentResponse'>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  start?: Readonly<t.TypeOf<typeof FhirInstant>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
export interface FhirAppointmentResponseOutput {
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  _comment?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  _end?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  _participantStatus?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  _start?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  actor?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  appointment: Readonly<t.OutputOf<typeof FhirReference>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  comment?: Readonly<t.OutputOf<typeof FhirString>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  end?: Readonly<t.OutputOf<typeof FhirInstant>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  participantStatus?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  participantType?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  resourceType: Readonly<'AppointmentResponse'>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  start?: Readonly<t.OutputOf<typeof FhirInstant>>
  /** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
