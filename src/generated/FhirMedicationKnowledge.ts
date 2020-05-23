import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirMarkdown } from './FhirMarkdown'
import { FhirMedicationKnowledge_AdministrationGuidelines } from './FhirMedicationKnowledge_AdministrationGuidelines'
import { FhirMedicationKnowledge_Cost } from './FhirMedicationKnowledge_Cost'
import { FhirMedicationKnowledge_DrugCharacteristic } from './FhirMedicationKnowledge_DrugCharacteristic'
import { FhirMedicationKnowledge_Ingredient } from './FhirMedicationKnowledge_Ingredient'
import { FhirMedicationKnowledge_Kinetics } from './FhirMedicationKnowledge_Kinetics'
import { FhirMedicationKnowledge_MedicineClassification } from './FhirMedicationKnowledge_MedicineClassification'
import { FhirMedicationKnowledge_MonitoringProgram } from './FhirMedicationKnowledge_MonitoringProgram'
import { FhirMedicationKnowledge_Monograph } from './FhirMedicationKnowledge_Monograph'
import { FhirMedicationKnowledge_Packaging } from './FhirMedicationKnowledge_Packaging'
import { FhirMedicationKnowledge_Regulatory } from './FhirMedicationKnowledge_Regulatory'
import { FhirMedicationKnowledge_RelatedMedicationKnowledge } from './FhirMedicationKnowledge_RelatedMedicationKnowledge'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirQuantity } from './FhirQuantity'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** Information about a medication that is used to support knowledge. */
export const FhirMedicationKnowledge: t.Type<FhirMedicationKnowledge, FhirMedicationKnowledgeOutput> = t.recursion(
  'FhirMedicationKnowledge',
  () =>
    t.intersection([
      t.type({
        /** Information about a medication that is used to support knowledge. */
        resourceType: t.readonly(t.literal('MedicationKnowledge')),
      }),
      t.partial({
        /** Information about a medication that is used to support knowledge. */
        _implicitRules: t.readonly(FhirElement),
        /** Information about a medication that is used to support knowledge. */
        _language: t.readonly(FhirElement),
        /** Information about a medication that is used to support knowledge. */
        _preparationInstruction: t.readonly(FhirElement),
        /** Information about a medication that is used to support knowledge. */
        _status: t.readonly(FhirElement),
        /** Information about a medication that is used to support knowledge. */
        _synonym: t.readonlyArray(FhirElement),
        /** Information about a medication that is used to support knowledge. */
        administrationGuidelines: t.readonlyArray(FhirMedicationKnowledge_AdministrationGuidelines),
        /** Information about a medication that is used to support knowledge. */
        amount: t.readonly(FhirQuantity),
        /** Information about a medication that is used to support knowledge. */
        associatedMedication: t.readonlyArray(FhirReference),
        /** Information about a medication that is used to support knowledge. */
        code: t.readonly(FhirCodeableConcept),
        /** Information about a medication that is used to support knowledge. */
        contained: t.readonlyArray(FhirResourceList),
        /** Information about a medication that is used to support knowledge. */
        contraindication: t.readonlyArray(FhirReference),
        /** Information about a medication that is used to support knowledge. */
        cost: t.readonlyArray(FhirMedicationKnowledge_Cost),
        /** Information about a medication that is used to support knowledge. */
        doseForm: t.readonly(FhirCodeableConcept),
        /** Information about a medication that is used to support knowledge. */
        drugCharacteristic: t.readonlyArray(FhirMedicationKnowledge_DrugCharacteristic),
        /** Information about a medication that is used to support knowledge. */
        extension: t.readonlyArray(FhirExtension),
        /** Information about a medication that is used to support knowledge. */
        id: t.readonly(FhirId),
        /** Information about a medication that is used to support knowledge. */
        implicitRules: t.readonly(FhirUri),
        /** Information about a medication that is used to support knowledge. */
        ingredient: t.readonlyArray(FhirMedicationKnowledge_Ingredient),
        /** Information about a medication that is used to support knowledge. */
        intendedRoute: t.readonlyArray(FhirCodeableConcept),
        /** Information about a medication that is used to support knowledge. */
        kinetics: t.readonlyArray(FhirMedicationKnowledge_Kinetics),
        /** Information about a medication that is used to support knowledge. */
        language: t.readonly(FhirCode),
        /** Information about a medication that is used to support knowledge. */
        manufacturer: t.readonly(FhirReference),
        /** Information about a medication that is used to support knowledge. */
        medicineClassification: t.readonlyArray(FhirMedicationKnowledge_MedicineClassification),
        /** Information about a medication that is used to support knowledge. */
        meta: t.readonly(FhirMeta),
        /** Information about a medication that is used to support knowledge. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** Information about a medication that is used to support knowledge. */
        monitoringProgram: t.readonlyArray(FhirMedicationKnowledge_MonitoringProgram),
        /** Information about a medication that is used to support knowledge. */
        monograph: t.readonlyArray(FhirMedicationKnowledge_Monograph),
        /** Information about a medication that is used to support knowledge. */
        packaging: t.readonly(FhirMedicationKnowledge_Packaging),
        /** Information about a medication that is used to support knowledge. */
        preparationInstruction: t.readonly(FhirMarkdown),
        /** Information about a medication that is used to support knowledge. */
        productType: t.readonlyArray(FhirCodeableConcept),
        /** Information about a medication that is used to support knowledge. */
        regulatory: t.readonlyArray(FhirMedicationKnowledge_Regulatory),
        /** Information about a medication that is used to support knowledge. */
        relatedMedicationKnowledge: t.readonlyArray(FhirMedicationKnowledge_RelatedMedicationKnowledge),
        /** Information about a medication that is used to support knowledge. */
        status: t.readonly(FhirCode),
        /** Information about a medication that is used to support knowledge. */
        synonym: t.readonlyArray(FhirString),
        /** Information about a medication that is used to support knowledge. */
        text: t.readonly(FhirNarrative),
      }),
    ])
)

/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge {
  /** Information about a medication that is used to support knowledge. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Information about a medication that is used to support knowledge. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Information about a medication that is used to support knowledge. */
  _preparationInstruction?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Information about a medication that is used to support knowledge. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Information about a medication that is used to support knowledge. */
  _synonym?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Information about a medication that is used to support knowledge. */
  administrationGuidelines?: ReadonlyArray<t.TypeOf<typeof FhirMedicationKnowledge_AdministrationGuidelines>>
  /** Information about a medication that is used to support knowledge. */
  amount?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Information about a medication that is used to support knowledge. */
  associatedMedication?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Information about a medication that is used to support knowledge. */
  code?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Information about a medication that is used to support knowledge. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Information about a medication that is used to support knowledge. */
  contraindication?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Information about a medication that is used to support knowledge. */
  cost?: ReadonlyArray<t.TypeOf<typeof FhirMedicationKnowledge_Cost>>
  /** Information about a medication that is used to support knowledge. */
  doseForm?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Information about a medication that is used to support knowledge. */
  drugCharacteristic?: ReadonlyArray<t.TypeOf<typeof FhirMedicationKnowledge_DrugCharacteristic>>
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Information about a medication that is used to support knowledge. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Information about a medication that is used to support knowledge. */
  ingredient?: ReadonlyArray<t.TypeOf<typeof FhirMedicationKnowledge_Ingredient>>
  /** Information about a medication that is used to support knowledge. */
  intendedRoute?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Information about a medication that is used to support knowledge. */
  kinetics?: ReadonlyArray<t.TypeOf<typeof FhirMedicationKnowledge_Kinetics>>
  /** Information about a medication that is used to support knowledge. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Information about a medication that is used to support knowledge. */
  manufacturer?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Information about a medication that is used to support knowledge. */
  medicineClassification?: ReadonlyArray<t.TypeOf<typeof FhirMedicationKnowledge_MedicineClassification>>
  /** Information about a medication that is used to support knowledge. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  monitoringProgram?: ReadonlyArray<t.TypeOf<typeof FhirMedicationKnowledge_MonitoringProgram>>
  /** Information about a medication that is used to support knowledge. */
  monograph?: ReadonlyArray<t.TypeOf<typeof FhirMedicationKnowledge_Monograph>>
  /** Information about a medication that is used to support knowledge. */
  packaging?: Readonly<t.TypeOf<typeof FhirMedicationKnowledge_Packaging>>
  /** Information about a medication that is used to support knowledge. */
  preparationInstruction?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** Information about a medication that is used to support knowledge. */
  productType?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Information about a medication that is used to support knowledge. */
  regulatory?: ReadonlyArray<t.TypeOf<typeof FhirMedicationKnowledge_Regulatory>>
  /** Information about a medication that is used to support knowledge. */
  relatedMedicationKnowledge?: ReadonlyArray<t.TypeOf<typeof FhirMedicationKnowledge_RelatedMedicationKnowledge>>
  /** Information about a medication that is used to support knowledge. */
  resourceType: Readonly<'MedicationKnowledge'>
  /** Information about a medication that is used to support knowledge. */
  status?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Information about a medication that is used to support knowledge. */
  synonym?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledgeOutput {
  /** Information about a medication that is used to support knowledge. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Information about a medication that is used to support knowledge. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Information about a medication that is used to support knowledge. */
  _preparationInstruction?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Information about a medication that is used to support knowledge. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Information about a medication that is used to support knowledge. */
  _synonym?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Information about a medication that is used to support knowledge. */
  administrationGuidelines?: ReadonlyArray<t.OutputOf<typeof FhirMedicationKnowledge_AdministrationGuidelines>>
  /** Information about a medication that is used to support knowledge. */
  amount?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Information about a medication that is used to support knowledge. */
  associatedMedication?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Information about a medication that is used to support knowledge. */
  code?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Information about a medication that is used to support knowledge. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Information about a medication that is used to support knowledge. */
  contraindication?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Information about a medication that is used to support knowledge. */
  cost?: ReadonlyArray<t.OutputOf<typeof FhirMedicationKnowledge_Cost>>
  /** Information about a medication that is used to support knowledge. */
  doseForm?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Information about a medication that is used to support knowledge. */
  drugCharacteristic?: ReadonlyArray<t.OutputOf<typeof FhirMedicationKnowledge_DrugCharacteristic>>
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Information about a medication that is used to support knowledge. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Information about a medication that is used to support knowledge. */
  ingredient?: ReadonlyArray<t.OutputOf<typeof FhirMedicationKnowledge_Ingredient>>
  /** Information about a medication that is used to support knowledge. */
  intendedRoute?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Information about a medication that is used to support knowledge. */
  kinetics?: ReadonlyArray<t.OutputOf<typeof FhirMedicationKnowledge_Kinetics>>
  /** Information about a medication that is used to support knowledge. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Information about a medication that is used to support knowledge. */
  manufacturer?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Information about a medication that is used to support knowledge. */
  medicineClassification?: ReadonlyArray<t.OutputOf<typeof FhirMedicationKnowledge_MedicineClassification>>
  /** Information about a medication that is used to support knowledge. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  monitoringProgram?: ReadonlyArray<t.OutputOf<typeof FhirMedicationKnowledge_MonitoringProgram>>
  /** Information about a medication that is used to support knowledge. */
  monograph?: ReadonlyArray<t.OutputOf<typeof FhirMedicationKnowledge_Monograph>>
  /** Information about a medication that is used to support knowledge. */
  packaging?: Readonly<t.OutputOf<typeof FhirMedicationKnowledge_Packaging>>
  /** Information about a medication that is used to support knowledge. */
  preparationInstruction?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** Information about a medication that is used to support knowledge. */
  productType?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Information about a medication that is used to support knowledge. */
  regulatory?: ReadonlyArray<t.OutputOf<typeof FhirMedicationKnowledge_Regulatory>>
  /** Information about a medication that is used to support knowledge. */
  relatedMedicationKnowledge?: ReadonlyArray<t.OutputOf<typeof FhirMedicationKnowledge_RelatedMedicationKnowledge>>
  /** Information about a medication that is used to support knowledge. */
  resourceType: Readonly<'MedicationKnowledge'>
  /** Information about a medication that is used to support knowledge. */
  status?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Information about a medication that is used to support knowledge. */
  synonym?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
