import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirQuantity } from './FhirQuantity'
import { FhirRange } from './FhirRange'
import { FhirRatio } from './FhirRatio'
import { FhirString } from './FhirString'

/** Indicates how the medication is/was taken or should be taken by the patient. */
export const FhirDosage_DoseAndRate: t.Type<FhirDosage_DoseAndRate, FhirDosage_DoseAndRateOutput> = t.recursion(
  'FhirDosage_DoseAndRate',
  () =>
    t.partial({
      /** Indicates how the medication is/was taken or should be taken by the patient. */
      doseQuantity: t.readonly(FhirQuantity),
      /** Indicates how the medication is/was taken or should be taken by the patient. */
      doseRange: t.readonly(FhirRange),
      /** Indicates how the medication is/was taken or should be taken by the patient. */
      extension: t.readonlyArray(FhirExtension),
      /** Indicates how the medication is/was taken or should be taken by the patient. */
      id: t.readonly(FhirString),
      /** Indicates how the medication is/was taken or should be taken by the patient. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Indicates how the medication is/was taken or should be taken by the patient. */
      rateQuantity: t.readonly(FhirQuantity),
      /** Indicates how the medication is/was taken or should be taken by the patient. */
      rateRange: t.readonly(FhirRange),
      /** Indicates how the medication is/was taken or should be taken by the patient. */
      rateRatio: t.readonly(FhirRatio),
      /** Indicates how the medication is/was taken or should be taken by the patient. */
      type: t.readonly(FhirCodeableConcept),
    })
)

/** Indicates how the medication is/was taken or should be taken by the patient. */
export interface FhirDosage_DoseAndRate {
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  doseQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  doseRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  rateQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  rateRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  rateRatio?: Readonly<t.TypeOf<typeof FhirRatio>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Indicates how the medication is/was taken or should be taken by the patient. */
export interface FhirDosage_DoseAndRateOutput {
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  doseQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  doseRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  rateQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  rateRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  rateRatio?: Readonly<t.OutputOf<typeof FhirRatio>>
  /** Indicates how the medication is/was taken or should be taken by the patient. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
