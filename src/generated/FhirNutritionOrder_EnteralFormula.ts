import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirNutritionOrder_Administration } from './FhirNutritionOrder_Administration'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'

/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export const FhirNutritionOrder_EnteralFormula: t.Type<
  FhirNutritionOrder_EnteralFormula,
  FhirNutritionOrder_EnteralFormulaOutput
> = t.recursion('FhirNutritionOrder_EnteralFormula', () =>
  t.partial({
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    _additiveProductName: t.readonly(FhirElement),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    _administrationInstruction: t.readonly(FhirElement),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    _baseFormulaProductName: t.readonly(FhirElement),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    additiveProductName: t.readonly(FhirString),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    additiveType: t.readonly(FhirCodeableConcept),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    administration: t.readonlyArray(FhirNutritionOrder_Administration),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    administrationInstruction: t.readonly(FhirString),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    baseFormulaProductName: t.readonly(FhirString),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    baseFormulaType: t.readonly(FhirCodeableConcept),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    caloricDensity: t.readonly(FhirQuantity),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    extension: t.readonlyArray(FhirExtension),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    id: t.readonly(FhirString),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    maxVolumeToDeliver: t.readonly(FhirQuantity),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    routeofAdministration: t.readonly(FhirCodeableConcept),
  })
)

/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export interface FhirNutritionOrder_EnteralFormula {
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  _additiveProductName?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  _administrationInstruction?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  _baseFormulaProductName?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  additiveProductName?: Readonly<t.TypeOf<typeof FhirString>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  additiveType?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  administration?: ReadonlyArray<t.TypeOf<typeof FhirNutritionOrder_Administration>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  administrationInstruction?: Readonly<t.TypeOf<typeof FhirString>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  baseFormulaProductName?: Readonly<t.TypeOf<typeof FhirString>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  baseFormulaType?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  caloricDensity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  maxVolumeToDeliver?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  routeofAdministration?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export interface FhirNutritionOrder_EnteralFormulaOutput {
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  _additiveProductName?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  _administrationInstruction?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  _baseFormulaProductName?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  additiveProductName?: Readonly<t.OutputOf<typeof FhirString>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  additiveType?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  administration?: ReadonlyArray<t.OutputOf<typeof FhirNutritionOrder_Administration>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  administrationInstruction?: Readonly<t.OutputOf<typeof FhirString>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  baseFormulaProductName?: Readonly<t.OutputOf<typeof FhirString>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  baseFormulaType?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  caloricDensity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  maxVolumeToDeliver?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  routeofAdministration?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
