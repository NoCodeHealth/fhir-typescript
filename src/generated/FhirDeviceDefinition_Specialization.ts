import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export const FhirDeviceDefinition_Specialization: t.Type<
  FhirDeviceDefinition_Specialization,
  FhirDeviceDefinition_SpecializationOutput
> = t.recursion('FhirDeviceDefinition_Specialization', () =>
  t.partial({
    /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
    _systemType: t.readonly(FhirElement),
    /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
    _version: t.readonly(FhirElement),
    /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
    extension: t.readonlyArray(FhirExtension),
    /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
    id: t.readonly(FhirString),
    /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
    systemType: t.readonly(FhirString),
    /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
    version: t.readonly(FhirString),
  })
)

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface FhirDeviceDefinition_Specialization {
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _systemType?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _version?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  systemType?: Readonly<t.TypeOf<typeof FhirString>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  version?: Readonly<t.TypeOf<typeof FhirString>>
}
/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface FhirDeviceDefinition_SpecializationOutput {
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _systemType?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _version?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  systemType?: Readonly<t.OutputOf<typeof FhirString>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  version?: Readonly<t.OutputOf<typeof FhirString>>
}
