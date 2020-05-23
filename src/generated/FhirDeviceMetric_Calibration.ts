import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirInstant } from './FhirInstant'
import { FhirString } from './FhirString'

/** Describes a measurement, calculation or setting capability of a medical device. */
export const FhirDeviceMetric_Calibration: t.Type<
  FhirDeviceMetric_Calibration,
  FhirDeviceMetric_CalibrationOutput
> = t.recursion('FhirDeviceMetric_Calibration', () =>
  t.partial({
    /** Describes a measurement, calculation or setting capability of a medical device. */
    _state: t.readonly(FhirElement),
    /** Describes a measurement, calculation or setting capability of a medical device. */
    _time: t.readonly(FhirElement),
    /** Describes a measurement, calculation or setting capability of a medical device. */
    _type: t.readonly(FhirElement),
    /** Describes a measurement, calculation or setting capability of a medical device. */
    extension: t.readonlyArray(FhirExtension),
    /** Describes a measurement, calculation or setting capability of a medical device. */
    id: t.readonly(FhirString),
    /** Describes a measurement, calculation or setting capability of a medical device. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Describes a measurement, calculation or setting capability of a medical device. */
    state: t.readonly(
      t.keyof({
        'not-calibrated': null,
        'calibration-required': null,
        calibrated: null,
        unspecified: null,
      })
    ),
    /** Describes a measurement, calculation or setting capability of a medical device. */
    time: t.readonly(FhirInstant),
    /** Describes a measurement, calculation or setting capability of a medical device. */
    type: t.readonly(
      t.keyof({
        unspecified: null,
        offset: null,
        gain: null,
        'two-point': null,
      })
    ),
  })
)

/** Describes a measurement, calculation or setting capability of a medical device. */
export interface FhirDeviceMetric_Calibration {
  /** Describes a measurement, calculation or setting capability of a medical device. */
  _state?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  _time?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  state?: Readonly<'not-calibrated' | 'calibration-required' | 'calibrated' | 'unspecified'>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  time?: Readonly<t.TypeOf<typeof FhirInstant>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  type?: Readonly<'unspecified' | 'offset' | 'gain' | 'two-point'>
}
/** Describes a measurement, calculation or setting capability of a medical device. */
export interface FhirDeviceMetric_CalibrationOutput {
  /** Describes a measurement, calculation or setting capability of a medical device. */
  _state?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  _time?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  state?: Readonly<'not-calibrated' | 'calibration-required' | 'calibrated' | 'unspecified'>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  time?: Readonly<t.OutputOf<typeof FhirInstant>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  type?: Readonly<'unspecified' | 'offset' | 'gain' | 'two-point'>
}
