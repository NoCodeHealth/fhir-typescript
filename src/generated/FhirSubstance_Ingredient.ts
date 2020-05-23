import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirRatio } from './FhirRatio'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A homogeneous material with a definite composition. */
export const FhirSubstance_Ingredient: t.Type<FhirSubstance_Ingredient, FhirSubstance_IngredientOutput> = t.recursion(
  'FhirSubstance_Ingredient',
  () =>
    t.partial({
      /** A homogeneous material with a definite composition. */
      extension: t.readonlyArray(FhirExtension),
      /** A homogeneous material with a definite composition. */
      id: t.readonly(FhirString),
      /** A homogeneous material with a definite composition. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A homogeneous material with a definite composition. */
      quantity: t.readonly(FhirRatio),
      /** A homogeneous material with a definite composition. */
      substanceCodeableConcept: t.readonly(FhirCodeableConcept),
      /** A homogeneous material with a definite composition. */
      substanceReference: t.readonly(FhirReference),
    })
)

/** A homogeneous material with a definite composition. */
export interface FhirSubstance_Ingredient {
  /** A homogeneous material with a definite composition. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A homogeneous material with a definite composition. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A homogeneous material with a definite composition. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A homogeneous material with a definite composition. */
  quantity?: Readonly<t.TypeOf<typeof FhirRatio>>
  /** A homogeneous material with a definite composition. */
  substanceCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A homogeneous material with a definite composition. */
  substanceReference?: Readonly<t.TypeOf<typeof FhirReference>>
}
/** A homogeneous material with a definite composition. */
export interface FhirSubstance_IngredientOutput {
  /** A homogeneous material with a definite composition. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A homogeneous material with a definite composition. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A homogeneous material with a definite composition. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A homogeneous material with a definite composition. */
  quantity?: Readonly<t.OutputOf<typeof FhirRatio>>
  /** A homogeneous material with a definite composition. */
  substanceCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A homogeneous material with a definite composition. */
  substanceReference?: Readonly<t.OutputOf<typeof FhirReference>>
}
