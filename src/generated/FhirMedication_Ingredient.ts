import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirRatio } from './FhirRatio'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
export const FhirMedication_Ingredient: t.Type<
  FhirMedication_Ingredient,
  FhirMedication_IngredientOutput
> = t.recursion('FhirMedication_Ingredient', () =>
  t.partial({
    /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
    _isActive: t.readonly(FhirElement),
    /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
    extension: t.readonlyArray(FhirExtension),
    /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
    id: t.readonly(FhirString),
    /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
    isActive: t.readonly(FhirBoolean),
    /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
    itemCodeableConcept: t.readonly(FhirCodeableConcept),
    /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
    itemReference: t.readonly(FhirReference),
    /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
    strength: t.readonly(FhirRatio),
  })
)

/** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
export interface FhirMedication_Ingredient {
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  _isActive?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  isActive?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  itemCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  itemReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  strength?: Readonly<t.TypeOf<typeof FhirRatio>>
}
/** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
export interface FhirMedication_IngredientOutput {
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  _isActive?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  isActive?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  itemCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  itemReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  strength?: Readonly<t.OutputOf<typeof FhirRatio>>
}
