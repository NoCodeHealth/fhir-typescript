import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
export const FhirCareTeam_Participant: t.Type<FhirCareTeam_Participant, FhirCareTeam_ParticipantOutput> = t.recursion(
  'FhirCareTeam_Participant',
  () =>
    t.partial({
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      extension: t.readonlyArray(FhirExtension),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      id: t.readonly(FhirString),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      member: t.readonly(FhirReference),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      onBehalfOf: t.readonly(FhirReference),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      period: t.readonly(FhirPeriod),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      role: t.readonlyArray(FhirCodeableConcept),
    })
)

/** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
export interface FhirCareTeam_Participant {
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  member?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  onBehalfOf?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  period?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  role?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
}
/** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
export interface FhirCareTeam_ParticipantOutput {
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  member?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  onBehalfOf?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  period?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  role?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
}
