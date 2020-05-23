import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
export const FhirProcedure_FocalDevice: t.Type<
  FhirProcedure_FocalDevice,
  FhirProcedure_FocalDeviceOutput
> = t.recursion('FhirProcedure_FocalDevice', () =>
  t.intersection([
    t.type({
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      manipulated: t.readonly(FhirReference),
    }),
    t.partial({
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      action: t.readonly(FhirCodeableConcept),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      extension: t.readonlyArray(FhirExtension),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      id: t.readonly(FhirString),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      modifierExtension: t.readonlyArray(FhirExtension),
    }),
  ])
)

/** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
export interface FhirProcedure_FocalDevice {
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  action?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  manipulated: Readonly<t.TypeOf<typeof FhirReference>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
export interface FhirProcedure_FocalDeviceOutput {
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  action?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  manipulated: Readonly<t.OutputOf<typeof FhirReference>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
