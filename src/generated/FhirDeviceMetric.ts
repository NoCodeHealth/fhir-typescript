import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDeviceMetric_Calibration } from './FhirDeviceMetric_Calibration'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirTiming } from './FhirTiming'
import { FhirUri } from './FhirUri'

/** Describes a measurement, calculation or setting capability of a medical device. */
export const FhirDeviceMetric: t.Type<FhirDeviceMetric, FhirDeviceMetricOutput> = t.recursion('FhirDeviceMetric', () =>
  t.intersection([
    t.type({
      /** Describes a measurement, calculation or setting capability of a medical device. */
      resourceType: t.readonly(t.literal('DeviceMetric')),
      /** Describes a measurement, calculation or setting capability of a medical device. */
      type: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** Describes a measurement, calculation or setting capability of a medical device. */
      _category: t.readonly(FhirElement),
      /** Describes a measurement, calculation or setting capability of a medical device. */
      _color: t.readonly(FhirElement),
      /** Describes a measurement, calculation or setting capability of a medical device. */
      _implicitRules: t.readonly(FhirElement),
      /** Describes a measurement, calculation or setting capability of a medical device. */
      _language: t.readonly(FhirElement),
      /** Describes a measurement, calculation or setting capability of a medical device. */
      _operationalStatus: t.readonly(FhirElement),
      /** Describes a measurement, calculation or setting capability of a medical device. */
      calibration: t.readonlyArray(FhirDeviceMetric_Calibration),
      /** Describes a measurement, calculation or setting capability of a medical device. */
      category: t.readonly(
        t.keyof({
          measurement: null,
          setting: null,
          calculation: null,
          unspecified: null,
        })
      ),
      /** Describes a measurement, calculation or setting capability of a medical device. */
      color: t.readonly(
        t.keyof({
          black: null,
          red: null,
          green: null,
          yellow: null,
          blue: null,
          magenta: null,
          cyan: null,
          white: null,
        })
      ),
      /** Describes a measurement, calculation or setting capability of a medical device. */
      contained: t.readonlyArray(FhirResourceList),
      /** Describes a measurement, calculation or setting capability of a medical device. */
      extension: t.readonlyArray(FhirExtension),
      /** Describes a measurement, calculation or setting capability of a medical device. */
      id: t.readonly(FhirId),
      /** Describes a measurement, calculation or setting capability of a medical device. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** Describes a measurement, calculation or setting capability of a medical device. */
      implicitRules: t.readonly(FhirUri),
      /** Describes a measurement, calculation or setting capability of a medical device. */
      language: t.readonly(FhirCode),
      /** Describes a measurement, calculation or setting capability of a medical device. */
      measurementPeriod: t.readonly(FhirTiming),
      /** Describes a measurement, calculation or setting capability of a medical device. */
      meta: t.readonly(FhirMeta),
      /** Describes a measurement, calculation or setting capability of a medical device. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Describes a measurement, calculation or setting capability of a medical device. */
      operationalStatus: t.readonly(
        t.keyof({
          on: null,
          off: null,
          standby: null,
          'entered-in-error': null,
        })
      ),
      /** Describes a measurement, calculation or setting capability of a medical device. */
      parent: t.readonly(FhirReference),
      /** Describes a measurement, calculation or setting capability of a medical device. */
      source: t.readonly(FhirReference),
      /** Describes a measurement, calculation or setting capability of a medical device. */
      text: t.readonly(FhirNarrative),
      /** Describes a measurement, calculation or setting capability of a medical device. */
      unit: t.readonly(FhirCodeableConcept),
    }),
  ])
)

/** Describes a measurement, calculation or setting capability of a medical device. */
export interface FhirDeviceMetric {
  /** Describes a measurement, calculation or setting capability of a medical device. */
  _category?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  _color?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  _operationalStatus?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  calibration?: ReadonlyArray<t.TypeOf<typeof FhirDeviceMetric_Calibration>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  category?: Readonly<'measurement' | 'setting' | 'calculation' | 'unspecified'>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  color?: Readonly<'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white'>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  measurementPeriod?: Readonly<t.TypeOf<typeof FhirTiming>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  operationalStatus?: Readonly<'on' | 'off' | 'standby' | 'entered-in-error'>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  parent?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  resourceType: Readonly<'DeviceMetric'>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  source?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  type: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  unit?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Describes a measurement, calculation or setting capability of a medical device. */
export interface FhirDeviceMetricOutput {
  /** Describes a measurement, calculation or setting capability of a medical device. */
  _category?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  _color?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  _operationalStatus?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  calibration?: ReadonlyArray<t.OutputOf<typeof FhirDeviceMetric_Calibration>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  category?: Readonly<'measurement' | 'setting' | 'calculation' | 'unspecified'>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  color?: Readonly<'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white'>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  measurementPeriod?: Readonly<t.OutputOf<typeof FhirTiming>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  operationalStatus?: Readonly<'on' | 'off' | 'standby' | 'entered-in-error'>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  parent?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  resourceType: Readonly<'DeviceMetric'>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  source?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  type: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes a measurement, calculation or setting capability of a medical device. */
  unit?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
