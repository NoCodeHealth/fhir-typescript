import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'
import { FhirTiming } from './FhirTiming'

/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export const FhirNutritionOrder_Supplement: t.Type<
  FhirNutritionOrder_Supplement,
  FhirNutritionOrder_SupplementOutput
> = t.recursion('FhirNutritionOrder_Supplement', () =>
  t.partial({
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    _instruction: t.readonly(FhirElement),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    _productName: t.readonly(FhirElement),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    extension: t.readonlyArray(FhirExtension),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    id: t.readonly(FhirString),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    instruction: t.readonly(FhirString),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    productName: t.readonly(FhirString),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    quantity: t.readonly(FhirQuantity),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    schedule: t.readonlyArray(FhirTiming),
    /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
    type: t.readonly(FhirCodeableConcept),
  })
)

/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export interface FhirNutritionOrder_Supplement {
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  _instruction?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  _productName?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  instruction?: Readonly<t.TypeOf<typeof FhirString>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  productName?: Readonly<t.TypeOf<typeof FhirString>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  quantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  schedule?: ReadonlyArray<t.TypeOf<typeof FhirTiming>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export interface FhirNutritionOrder_SupplementOutput {
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  _instruction?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  _productName?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  instruction?: Readonly<t.OutputOf<typeof FhirString>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  productName?: Readonly<t.OutputOf<typeof FhirString>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  quantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  schedule?: ReadonlyArray<t.OutputOf<typeof FhirTiming>>
  /** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
