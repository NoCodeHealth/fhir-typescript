import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'

/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export const FhirNutritionOrder_Nutrient: t.Type<
  FhirNutritionOrder_Nutrient,
  FhirNutritionOrder_NutrientOutput
> = t.recursion('FhirNutritionOrder_Nutrient', () =>
  t.partial({
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    amount: t.readonly(FhirQuantity),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    extension: t.readonlyArray(FhirExtension),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    id: t.readonly(FhirString),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    modifier: t.readonly(FhirCodeableConcept),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    modifierExtension: t.readonlyArray(FhirExtension),
  })
)

/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export interface FhirNutritionOrder_Nutrient {
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  amount?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  modifier?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export interface FhirNutritionOrder_NutrientOutput {
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  amount?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  modifier?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
