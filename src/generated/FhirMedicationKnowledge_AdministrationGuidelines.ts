import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirMedicationKnowledge_Dosage } from './FhirMedicationKnowledge_Dosage'
import { FhirMedicationKnowledge_PatientCharacteristics } from './FhirMedicationKnowledge_PatientCharacteristics'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Information about a medication that is used to support knowledge. */
export const FhirMedicationKnowledge_AdministrationGuidelines: t.Type<
  FhirMedicationKnowledge_AdministrationGuidelines,
  FhirMedicationKnowledge_AdministrationGuidelinesOutput
> = t.recursion('FhirMedicationKnowledge_AdministrationGuidelines', () =>
  t.partial({
    /** Information about a medication that is used to support knowledge. */
    dosage: t.readonlyArray(FhirMedicationKnowledge_Dosage),
    /** Information about a medication that is used to support knowledge. */
    extension: t.readonlyArray(FhirExtension),
    /** Information about a medication that is used to support knowledge. */
    id: t.readonly(FhirString),
    /** Information about a medication that is used to support knowledge. */
    indicationCodeableConcept: t.readonly(FhirCodeableConcept),
    /** Information about a medication that is used to support knowledge. */
    indicationReference: t.readonly(FhirReference),
    /** Information about a medication that is used to support knowledge. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Information about a medication that is used to support knowledge. */
    patientCharacteristics: t.readonlyArray(FhirMedicationKnowledge_PatientCharacteristics),
  })
)

/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge_AdministrationGuidelines {
  /** Information about a medication that is used to support knowledge. */
  dosage?: ReadonlyArray<t.TypeOf<typeof FhirMedicationKnowledge_Dosage>>
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  indicationCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Information about a medication that is used to support knowledge. */
  indicationReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  patientCharacteristics?: ReadonlyArray<t.TypeOf<typeof FhirMedicationKnowledge_PatientCharacteristics>>
}
/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge_AdministrationGuidelinesOutput {
  /** Information about a medication that is used to support knowledge. */
  dosage?: ReadonlyArray<t.OutputOf<typeof FhirMedicationKnowledge_Dosage>>
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  indicationCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Information about a medication that is used to support knowledge. */
  indicationReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  patientCharacteristics?: ReadonlyArray<t.OutputOf<typeof FhirMedicationKnowledge_PatientCharacteristics>>
}
