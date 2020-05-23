import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export const FhirDeviceDefinition_Capability: t.Type<
  FhirDeviceDefinition_Capability,
  FhirDeviceDefinition_CapabilityOutput
> = t.recursion('FhirDeviceDefinition_Capability', () =>
  t.intersection([
    t.type({
      /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
      type: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
      description: t.readonlyArray(FhirCodeableConcept),
      /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
      extension: t.readonlyArray(FhirExtension),
      /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
      id: t.readonly(FhirString),
      /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
      modifierExtension: t.readonlyArray(FhirExtension),
    }),
  ])
)

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface FhirDeviceDefinition_Capability {
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  description?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  type: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface FhirDeviceDefinition_CapabilityOutput {
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  description?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  type: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
