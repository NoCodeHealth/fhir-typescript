import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
export const FhirAppointment_Participant: t.Type<
  FhirAppointment_Participant,
  FhirAppointment_ParticipantOutput
> = t.recursion('FhirAppointment_Participant', () =>
  t.partial({
    /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
    _required: t.readonly(FhirElement),
    /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
    _status: t.readonly(FhirElement),
    /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
    actor: t.readonly(FhirReference),
    /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
    extension: t.readonlyArray(FhirExtension),
    /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
    id: t.readonly(FhirString),
    /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
    period: t.readonly(FhirPeriod),
    /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
    required: t.readonly(
      t.keyof({
        required: null,
        optional: null,
        'information-only': null,
      })
    ),
    /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
    status: t.readonly(
      t.keyof({
        accepted: null,
        declined: null,
        tentative: null,
        'needs-action': null,
      })
    ),
    /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
    type: t.readonlyArray(FhirCodeableConcept),
  })
)

/** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
export interface FhirAppointment_Participant {
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  _required?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  actor?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  period?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  required?: Readonly<'required' | 'optional' | 'information-only'>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  status?: Readonly<'accepted' | 'declined' | 'tentative' | 'needs-action'>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  type?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
}
/** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
export interface FhirAppointment_ParticipantOutput {
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  _required?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  actor?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  period?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  required?: Readonly<'required' | 'optional' | 'information-only'>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  status?: Readonly<'accepted' | 'declined' | 'tentative' | 'needs-action'>
  /** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
  type?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
}
