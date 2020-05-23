import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDosage } from './FhirDosage'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** Information about a medication that is used to support knowledge. */
export const FhirMedicationKnowledge_Dosage: t.Type<
  FhirMedicationKnowledge_Dosage,
  FhirMedicationKnowledge_DosageOutput
> = t.recursion('FhirMedicationKnowledge_Dosage', () =>
  t.intersection([
    t.type({
      /** Information about a medication that is used to support knowledge. */
      dosage: t.readonlyArray(FhirDosage),
      /** Information about a medication that is used to support knowledge. */
      type: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** Information about a medication that is used to support knowledge. */
      extension: t.readonlyArray(FhirExtension),
      /** Information about a medication that is used to support knowledge. */
      id: t.readonly(FhirString),
      /** Information about a medication that is used to support knowledge. */
      modifierExtension: t.readonlyArray(FhirExtension),
    }),
  ])
)

/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge_Dosage {
  /** Information about a medication that is used to support knowledge. */
  dosage: ReadonlyArray<t.TypeOf<typeof FhirDosage>>
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  type: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge_DosageOutput {
  /** Information about a medication that is used to support knowledge. */
  dosage: ReadonlyArray<t.OutputOf<typeof FhirDosage>>
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  type: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
