import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
export const FhirProcedure_Performer: t.Type<FhirProcedure_Performer, FhirProcedure_PerformerOutput> = t.recursion(
  'FhirProcedure_Performer',
  () =>
    t.intersection([
      t.type({
        /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
        actor: t.readonly(FhirReference),
      }),
      t.partial({
        /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
        extension: t.readonlyArray(FhirExtension),
        /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
        function: t.readonly(FhirCodeableConcept),
        /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
        id: t.readonly(FhirString),
        /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
        onBehalfOf: t.readonly(FhirReference),
      }),
    ])
)

/** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
export interface FhirProcedure_Performer {
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  actor: Readonly<t.TypeOf<typeof FhirReference>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  function?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  onBehalfOf?: Readonly<t.TypeOf<typeof FhirReference>>
}
/** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
export interface FhirProcedure_PerformerOutput {
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  actor: Readonly<t.OutputOf<typeof FhirReference>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  function?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  onBehalfOf?: Readonly<t.OutputOf<typeof FhirReference>>
}
