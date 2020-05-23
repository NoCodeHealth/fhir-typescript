import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCanonical } from './FhirCanonical'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirNutritionOrder_EnteralFormula } from './FhirNutritionOrder_EnteralFormula'
import { FhirNutritionOrder_OralDiet } from './FhirNutritionOrder_OralDiet'
import { FhirNutritionOrder_Supplement } from './FhirNutritionOrder_Supplement'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export const FhirNutritionOrder: t.Type<FhirNutritionOrder, FhirNutritionOrderOutput> = t.recursion(
  'FhirNutritionOrder',
  () =>
    t.intersection([
      t.type({
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        patient: t.readonly(FhirReference),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        resourceType: t.readonly(t.literal('NutritionOrder')),
      }),
      t.partial({
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        _dateTime: t.readonly(FhirElement),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        _implicitRules: t.readonly(FhirElement),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        _instantiates: t.readonlyArray(FhirElement),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        _instantiatesUri: t.readonlyArray(FhirElement),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        _intent: t.readonly(FhirElement),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        _language: t.readonly(FhirElement),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        _status: t.readonly(FhirElement),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        allergyIntolerance: t.readonlyArray(FhirReference),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        contained: t.readonlyArray(FhirResourceList),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        dateTime: t.readonly(FhirDateTime),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        encounter: t.readonly(FhirReference),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        enteralFormula: t.readonly(FhirNutritionOrder_EnteralFormula),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        excludeFoodModifier: t.readonlyArray(FhirCodeableConcept),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        extension: t.readonlyArray(FhirExtension),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        foodPreferenceModifier: t.readonlyArray(FhirCodeableConcept),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        id: t.readonly(FhirId),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        implicitRules: t.readonly(FhirUri),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        instantiates: t.readonlyArray(FhirUri),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        instantiatesCanonical: t.readonlyArray(FhirCanonical),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        instantiatesUri: t.readonlyArray(FhirUri),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        intent: t.readonly(FhirCode),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        language: t.readonly(FhirCode),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        meta: t.readonly(FhirMeta),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        note: t.readonlyArray(FhirAnnotation),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        oralDiet: t.readonly(FhirNutritionOrder_OralDiet),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        orderer: t.readonly(FhirReference),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        status: t.readonly(FhirCode),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        supplement: t.readonlyArray(FhirNutritionOrder_Supplement),
        /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
        text: t.readonly(FhirNarrative),
      }),
    ])
)

/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export interface FhirNutritionOrder {
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  _dateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  _instantiates?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  _instantiatesUri?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  _intent?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  allergyIntolerance?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  dateTime?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  encounter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  enteralFormula?: Readonly<t.TypeOf<typeof FhirNutritionOrder_EnteralFormula>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  excludeFoodModifier?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  foodPreferenceModifier?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  instantiates?: ReadonlyArray<t.TypeOf<typeof FhirUri>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  instantiatesCanonical?: ReadonlyArray<t.TypeOf<typeof FhirCanonical>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  instantiatesUri?: ReadonlyArray<t.TypeOf<typeof FhirUri>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  intent?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  oralDiet?: Readonly<t.TypeOf<typeof FhirNutritionOrder_OralDiet>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  orderer?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  patient: Readonly<t.TypeOf<typeof FhirReference>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  resourceType: Readonly<'NutritionOrder'>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  status?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  supplement?: ReadonlyArray<t.TypeOf<typeof FhirNutritionOrder_Supplement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export interface FhirNutritionOrderOutput {
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  _dateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  _instantiates?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  _instantiatesUri?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  _intent?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  allergyIntolerance?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  dateTime?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  encounter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  enteralFormula?: Readonly<t.OutputOf<typeof FhirNutritionOrder_EnteralFormula>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  excludeFoodModifier?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  foodPreferenceModifier?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  instantiates?: ReadonlyArray<t.OutputOf<typeof FhirUri>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  instantiatesCanonical?: ReadonlyArray<t.OutputOf<typeof FhirCanonical>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  instantiatesUri?: ReadonlyArray<t.OutputOf<typeof FhirUri>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  intent?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  oralDiet?: Readonly<t.OutputOf<typeof FhirNutritionOrder_OralDiet>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  orderer?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  patient: Readonly<t.OutputOf<typeof FhirReference>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  resourceType: Readonly<'NutritionOrder'>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  status?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  supplement?: ReadonlyArray<t.OutputOf<typeof FhirNutritionOrder_Supplement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
