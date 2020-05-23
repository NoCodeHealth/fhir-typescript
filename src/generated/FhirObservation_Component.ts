import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirObservation_ReferenceRange } from './FhirObservation_ReferenceRange'
import { FhirPeriod } from './FhirPeriod'
import { FhirQuantity } from './FhirQuantity'
import { FhirRange } from './FhirRange'
import { FhirRatio } from './FhirRatio'
import { FhirSampledData } from './FhirSampledData'
import { FhirString } from './FhirString'

/** Measurements and simple assertions made about a patient, device or other subject. */
export const FhirObservation_Component: t.Type<
  FhirObservation_Component,
  FhirObservation_ComponentOutput
> = t.recursion('FhirObservation_Component', () =>
  t.intersection([
    t.type({
      /** Measurements and simple assertions made about a patient, device or other subject. */
      code: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** Measurements and simple assertions made about a patient, device or other subject. */
      _valueBoolean: t.readonly(FhirElement),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      _valueDateTime: t.readonly(FhirElement),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      _valueInteger: t.readonly(FhirElement),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      _valueString: t.readonly(FhirElement),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      _valueTime: t.readonly(FhirElement),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      dataAbsentReason: t.readonly(FhirCodeableConcept),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      extension: t.readonlyArray(FhirExtension),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      id: t.readonly(FhirString),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      interpretation: t.readonlyArray(FhirCodeableConcept),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      referenceRange: t.readonlyArray(FhirObservation_ReferenceRange),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      valueBoolean: t.readonly(t.boolean),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      valueCodeableConcept: t.readonly(FhirCodeableConcept),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      valueDateTime: t.readonly(t.string),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      valueInteger: t.readonly(t.number),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      valuePeriod: t.readonly(FhirPeriod),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      valueQuantity: t.readonly(FhirQuantity),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      valueRange: t.readonly(FhirRange),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      valueRatio: t.readonly(FhirRatio),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      valueSampledData: t.readonly(FhirSampledData),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      valueString: t.readonly(t.string),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      valueTime: t.readonly(t.string),
    }),
  ])
)

/** Measurements and simple assertions made about a patient, device or other subject. */
export interface FhirObservation_Component {
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _valueBoolean?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _valueDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _valueInteger?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _valueString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _valueTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  code: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  dataAbsentReason?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  interpretation?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  referenceRange?: ReadonlyArray<t.TypeOf<typeof FhirObservation_ReferenceRange>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueBoolean?: Readonly<boolean>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueDateTime?: Readonly<string>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueInteger?: Readonly<number>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valuePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueRatio?: Readonly<t.TypeOf<typeof FhirRatio>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueSampledData?: Readonly<t.TypeOf<typeof FhirSampledData>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueString?: Readonly<string>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueTime?: Readonly<string>
}
/** Measurements and simple assertions made about a patient, device or other subject. */
export interface FhirObservation_ComponentOutput {
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _valueBoolean?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _valueDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _valueInteger?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _valueString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _valueTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  code: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  dataAbsentReason?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  interpretation?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  referenceRange?: ReadonlyArray<t.OutputOf<typeof FhirObservation_ReferenceRange>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueBoolean?: Readonly<boolean>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueDateTime?: Readonly<string>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueInteger?: Readonly<number>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valuePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueRatio?: Readonly<t.OutputOf<typeof FhirRatio>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueSampledData?: Readonly<t.OutputOf<typeof FhirSampledData>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueString?: Readonly<string>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueTime?: Readonly<string>
}
