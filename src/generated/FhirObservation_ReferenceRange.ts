import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirQuantity } from './FhirQuantity'
import { FhirRange } from './FhirRange'
import { FhirString } from './FhirString'

/** Measurements and simple assertions made about a patient, device or other subject. */
export const FhirObservation_ReferenceRange: t.Type<
  FhirObservation_ReferenceRange,
  FhirObservation_ReferenceRangeOutput
> = t.recursion('FhirObservation_ReferenceRange', () =>
  t.partial({
    /** Measurements and simple assertions made about a patient, device or other subject. */
    _text: t.readonly(FhirElement),
    /** Measurements and simple assertions made about a patient, device or other subject. */
    age: t.readonly(FhirRange),
    /** Measurements and simple assertions made about a patient, device or other subject. */
    appliesTo: t.readonlyArray(FhirCodeableConcept),
    /** Measurements and simple assertions made about a patient, device or other subject. */
    extension: t.readonlyArray(FhirExtension),
    /** Measurements and simple assertions made about a patient, device or other subject. */
    high: t.readonly(FhirQuantity),
    /** Measurements and simple assertions made about a patient, device or other subject. */
    id: t.readonly(FhirString),
    /** Measurements and simple assertions made about a patient, device or other subject. */
    low: t.readonly(FhirQuantity),
    /** Measurements and simple assertions made about a patient, device or other subject. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Measurements and simple assertions made about a patient, device or other subject. */
    text: t.readonly(FhirString),
    /** Measurements and simple assertions made about a patient, device or other subject. */
    type: t.readonly(FhirCodeableConcept),
  })
)

/** Measurements and simple assertions made about a patient, device or other subject. */
export interface FhirObservation_ReferenceRange {
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _text?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  age?: Readonly<t.TypeOf<typeof FhirRange>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  appliesTo?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  high?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  low?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  text?: Readonly<t.TypeOf<typeof FhirString>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Measurements and simple assertions made about a patient, device or other subject. */
export interface FhirObservation_ReferenceRangeOutput {
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _text?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  age?: Readonly<t.OutputOf<typeof FhirRange>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  appliesTo?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  high?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  low?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  text?: Readonly<t.OutputOf<typeof FhirString>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
