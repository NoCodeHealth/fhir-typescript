import * as t from 'io-ts'
import { FhirAppointment_Participant } from './FhirAppointment_Participant'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirInstant } from './FhirInstant'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUnsignedInt } from './FhirUnsignedInt'
import { FhirUri } from './FhirUri'

/** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
export const FhirAppointment: t.Type<FhirAppointment, FhirAppointmentOutput> = t.recursion('FhirAppointment', () =>
  t.intersection([
    t.type({
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      participant: t.readonlyArray(FhirAppointment_Participant),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      resourceType: t.readonly(t.literal('Appointment')),
    }),
    t.partial({
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      _comment: t.readonly(FhirElement),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      _created: t.readonly(FhirElement),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      _description: t.readonly(FhirElement),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      _end: t.readonly(FhirElement),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      _implicitRules: t.readonly(FhirElement),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      _language: t.readonly(FhirElement),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      _minutesDuration: t.readonly(FhirElement),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      _patientInstruction: t.readonly(FhirElement),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      _priority: t.readonly(FhirElement),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      _start: t.readonly(FhirElement),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      _status: t.readonly(FhirElement),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      appointmentType: t.readonly(FhirCodeableConcept),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      basedOn: t.readonlyArray(FhirReference),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      cancelationReason: t.readonly(FhirCodeableConcept),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      comment: t.readonly(FhirString),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      contained: t.readonlyArray(FhirResourceList),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      created: t.readonly(FhirDateTime),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      description: t.readonly(FhirString),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      end: t.readonly(FhirInstant),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      extension: t.readonlyArray(FhirExtension),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      id: t.readonly(FhirId),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      identifier: t.readonlyArray(FhirIdentifier),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      implicitRules: t.readonly(FhirUri),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      language: t.readonly(FhirCode),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      meta: t.readonly(FhirMeta),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      minutesDuration: t.readonly(FhirPositiveInt),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      patientInstruction: t.readonly(FhirString),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      priority: t.readonly(FhirUnsignedInt),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      reasonCode: t.readonlyArray(FhirCodeableConcept),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      reasonReference: t.readonlyArray(FhirReference),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      requestedPeriod: t.readonlyArray(FhirPeriod),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      serviceCategory: t.readonlyArray(FhirCodeableConcept),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      serviceType: t.readonlyArray(FhirCodeableConcept),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      slot: t.readonlyArray(FhirReference),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      specialty: t.readonlyArray(FhirCodeableConcept),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      start: t.readonly(FhirInstant),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      status: t.readonly(
        t.keyof({
          proposed: null,
          pending: null,
          booked: null,
          arrived: null,
          fulfilled: null,
          cancelled: null,
          noshow: null,
          'entered-in-error': null,
          'checked-in': null,
          waitlist: null,
        })
      ),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      supportingInformation: t.readonlyArray(FhirReference),
      /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
export interface FhirAppointment {
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  _comment?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  _created?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  _end?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  _minutesDuration?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  _patientInstruction?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  _priority?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  _start?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  appointmentType?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  basedOn?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  cancelationReason?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  comment?: Readonly<t.TypeOf<typeof FhirString>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  created?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  end?: Readonly<t.TypeOf<typeof FhirInstant>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  minutesDuration?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  participant: ReadonlyArray<t.TypeOf<typeof FhirAppointment_Participant>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  patientInstruction?: Readonly<t.TypeOf<typeof FhirString>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  priority?: Readonly<t.TypeOf<typeof FhirUnsignedInt>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  reasonCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  reasonReference?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  requestedPeriod?: ReadonlyArray<t.TypeOf<typeof FhirPeriod>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  resourceType: Readonly<'Appointment'>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  serviceCategory?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  serviceType?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  slot?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  specialty?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  start?: Readonly<t.TypeOf<typeof FhirInstant>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  status?: Readonly<
    | 'proposed'
    | 'pending'
    | 'booked'
    | 'arrived'
    | 'fulfilled'
    | 'cancelled'
    | 'noshow'
    | 'entered-in-error'
    | 'checked-in'
    | 'waitlist'
  >
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  supportingInformation?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
export interface FhirAppointmentOutput {
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  _comment?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  _created?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  _end?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  _minutesDuration?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  _patientInstruction?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  _priority?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  _start?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  appointmentType?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  basedOn?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  cancelationReason?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  comment?: Readonly<t.OutputOf<typeof FhirString>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  created?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  end?: Readonly<t.OutputOf<typeof FhirInstant>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  minutesDuration?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  participant: ReadonlyArray<t.OutputOf<typeof FhirAppointment_Participant>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  patientInstruction?: Readonly<t.OutputOf<typeof FhirString>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  priority?: Readonly<t.OutputOf<typeof FhirUnsignedInt>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  reasonCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  reasonReference?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  requestedPeriod?: ReadonlyArray<t.OutputOf<typeof FhirPeriod>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  resourceType: Readonly<'Appointment'>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  serviceCategory?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  serviceType?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  slot?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  specialty?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  start?: Readonly<t.OutputOf<typeof FhirInstant>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  status?: Readonly<
    | 'proposed'
    | 'pending'
    | 'booked'
    | 'arrived'
    | 'fulfilled'
    | 'cancelled'
    | 'noshow'
    | 'entered-in-error'
    | 'checked-in'
    | 'waitlist'
  >
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  supportingInformation?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
