import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export const FhirDeviceDefinition_Material: t.Type<
  FhirDeviceDefinition_Material,
  FhirDeviceDefinition_MaterialOutput
> = t.recursion('FhirDeviceDefinition_Material', () =>
  t.intersection([
    t.type({
      /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
      substance: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
      _allergenicIndicator: t.readonly(FhirElement),
      /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
      _alternate: t.readonly(FhirElement),
      /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
      allergenicIndicator: t.readonly(FhirBoolean),
      /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
      alternate: t.readonly(FhirBoolean),
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
export interface FhirDeviceDefinition_Material {
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _allergenicIndicator?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _alternate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  allergenicIndicator?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  alternate?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  substance: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface FhirDeviceDefinition_MaterialOutput {
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _allergenicIndicator?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _alternate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  allergenicIndicator?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  alternate?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  substance: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
