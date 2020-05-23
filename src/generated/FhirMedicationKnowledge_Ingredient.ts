import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirRatio } from './FhirRatio'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Information about a medication that is used to support knowledge. */
export const FhirMedicationKnowledge_Ingredient: t.Type<
  FhirMedicationKnowledge_Ingredient,
  FhirMedicationKnowledge_IngredientOutput
> = t.recursion('FhirMedicationKnowledge_Ingredient', () =>
  t.partial({
    /** Information about a medication that is used to support knowledge. */
    _isActive: t.readonly(FhirElement),
    /** Information about a medication that is used to support knowledge. */
    extension: t.readonlyArray(FhirExtension),
    /** Information about a medication that is used to support knowledge. */
    id: t.readonly(FhirString),
    /** Information about a medication that is used to support knowledge. */
    isActive: t.readonly(FhirBoolean),
    /** Information about a medication that is used to support knowledge. */
    itemCodeableConcept: t.readonly(FhirCodeableConcept),
    /** Information about a medication that is used to support knowledge. */
    itemReference: t.readonly(FhirReference),
    /** Information about a medication that is used to support knowledge. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Information about a medication that is used to support knowledge. */
    strength: t.readonly(FhirRatio),
  })
)

/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge_Ingredient {
  /** Information about a medication that is used to support knowledge. */
  _isActive?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  isActive?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Information about a medication that is used to support knowledge. */
  itemCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Information about a medication that is used to support knowledge. */
  itemReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  strength?: Readonly<t.TypeOf<typeof FhirRatio>>
}
/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge_IngredientOutput {
  /** Information about a medication that is used to support knowledge. */
  _isActive?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  isActive?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Information about a medication that is used to support knowledge. */
  itemCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Information about a medication that is used to support knowledge. */
  itemReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  strength?: Readonly<t.OutputOf<typeof FhirRatio>>
}
