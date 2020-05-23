import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export const FhirDeviceDefinition_Property: t.Type<
  FhirDeviceDefinition_Property,
  FhirDeviceDefinition_PropertyOutput
> = t.recursion('FhirDeviceDefinition_Property', () =>
  t.intersection([
    t.type({
      /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
      type: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
      extension: t.readonlyArray(FhirExtension),
      /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
      id: t.readonly(FhirString),
      /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
      valueCode: t.readonlyArray(FhirCodeableConcept),
      /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
      valueQuantity: t.readonlyArray(FhirQuantity),
    }),
  ])
)

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface FhirDeviceDefinition_Property {
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  type: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  valueCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  valueQuantity?: ReadonlyArray<t.TypeOf<typeof FhirQuantity>>
}
/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface FhirDeviceDefinition_PropertyOutput {
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  type: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  valueCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  valueQuantity?: ReadonlyArray<t.OutputOf<typeof FhirQuantity>>
}
