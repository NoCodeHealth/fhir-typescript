import * as t from 'io-ts'
import { FhirDuration } from './FhirDuration'
import { FhirExtension } from './FhirExtension'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'

/** Information about a medication that is used to support knowledge. */
export const FhirMedicationKnowledge_Kinetics: t.Type<
  FhirMedicationKnowledge_Kinetics,
  FhirMedicationKnowledge_KineticsOutput
> = t.recursion('FhirMedicationKnowledge_Kinetics', () =>
  t.partial({
    /** Information about a medication that is used to support knowledge. */
    areaUnderCurve: t.readonlyArray(FhirQuantity),
    /** Information about a medication that is used to support knowledge. */
    extension: t.readonlyArray(FhirExtension),
    /** Information about a medication that is used to support knowledge. */
    halfLifePeriod: t.readonly(FhirDuration),
    /** Information about a medication that is used to support knowledge. */
    id: t.readonly(FhirString),
    /** Information about a medication that is used to support knowledge. */
    lethalDose50: t.readonlyArray(FhirQuantity),
    /** Information about a medication that is used to support knowledge. */
    modifierExtension: t.readonlyArray(FhirExtension),
  })
)

/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge_Kinetics {
  /** Information about a medication that is used to support knowledge. */
  areaUnderCurve?: ReadonlyArray<t.TypeOf<typeof FhirQuantity>>
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  halfLifePeriod?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  lethalDose50?: ReadonlyArray<t.TypeOf<typeof FhirQuantity>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge_KineticsOutput {
  /** Information about a medication that is used to support knowledge. */
  areaUnderCurve?: ReadonlyArray<t.OutputOf<typeof FhirQuantity>>
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  halfLifePeriod?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  lethalDose50?: ReadonlyArray<t.OutputOf<typeof FhirQuantity>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
