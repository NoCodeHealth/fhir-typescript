import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export const FhirDeviceDefinition_DeviceName: t.Type<
  FhirDeviceDefinition_DeviceName,
  FhirDeviceDefinition_DeviceNameOutput
> = t.recursion('FhirDeviceDefinition_DeviceName', () =>
  t.partial({
    /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
    _name: t.readonly(FhirElement),
    /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
    _type: t.readonly(FhirElement),
    /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
    extension: t.readonlyArray(FhirExtension),
    /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
    id: t.readonly(FhirString),
    /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
    name: t.readonly(FhirString),
    /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
    type: t.readonly(
      t.keyof({
        'udi-label-name': null,
        'user-friendly-name': null,
        'patient-reported-name': null,
        'manufacturer-name': null,
        'model-name': null,
        other: null,
      })
    ),
  })
)

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface FhirDeviceDefinition_DeviceName {
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  type?: Readonly<
    'udi-label-name' | 'user-friendly-name' | 'patient-reported-name' | 'manufacturer-name' | 'model-name' | 'other'
  >
}
/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface FhirDeviceDefinition_DeviceNameOutput {
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
  type?: Readonly<
    'udi-label-name' | 'user-friendly-name' | 'patient-reported-name' | 'manufacturer-name' | 'model-name' | 'other'
  >
}
