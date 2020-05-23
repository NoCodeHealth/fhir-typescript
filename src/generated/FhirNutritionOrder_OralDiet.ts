import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirNutritionOrder_Nutrient } from './FhirNutritionOrder_Nutrient'
import { FhirNutritionOrder_Texture } from './FhirNutritionOrder_Texture'
import { FhirString } from './FhirString'
import { FhirTiming } from './FhirTiming'

/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export const FhirNutritionOrder_OralDiet: t.Type<
  FhirNutritionOrder_OralDiet,
  FhirNutritionOrder_OralDietOutput
> = t.recursion('FhirNutritionOrder_OralDiet', () =>
  t.partial({
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    _instruction: t.readonly(FhirElement),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    extension: t.readonlyArray(FhirExtension),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    fluidConsistencyType: t.readonlyArray(FhirCodeableConcept),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    id: t.readonly(FhirString),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    instruction: t.readonly(FhirString),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    nutrient: t.readonlyArray(FhirNutritionOrder_Nutrient),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    schedule: t.readonlyArray(FhirTiming),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    texture: t.readonlyArray(FhirNutritionOrder_Texture),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    type: t.readonlyArray(FhirCodeableConcept),
  })
)

/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export interface FhirNutritionOrder_OralDiet {
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  _instruction?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  fluidConsistencyType?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  instruction?: Readonly<t.TypeOf<typeof FhirString>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  nutrient?: ReadonlyArray<t.TypeOf<typeof FhirNutritionOrder_Nutrient>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  schedule?: ReadonlyArray<t.TypeOf<typeof FhirTiming>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  texture?: ReadonlyArray<t.TypeOf<typeof FhirNutritionOrder_Texture>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  type?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
}
/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export interface FhirNutritionOrder_OralDietOutput {
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  _instruction?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  fluidConsistencyType?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  instruction?: Readonly<t.OutputOf<typeof FhirString>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  nutrient?: ReadonlyArray<t.OutputOf<typeof FhirNutritionOrder_Nutrient>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  schedule?: ReadonlyArray<t.OutputOf<typeof FhirTiming>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  texture?: ReadonlyArray<t.OutputOf<typeof FhirNutritionOrder_Texture>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  type?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
}
