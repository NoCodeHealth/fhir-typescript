import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'

/** Information about a medication that is used to support knowledge. */
export const FhirMedicationKnowledge_PatientCharacteristics: t.Type<
  FhirMedicationKnowledge_PatientCharacteristics,
  FhirMedicationKnowledge_PatientCharacteristicsOutput
> = t.recursion('FhirMedicationKnowledge_PatientCharacteristics', () =>
  t.partial({
    /** Information about a medication that is used to support knowledge. */
    _value: t.readonlyArray(FhirElement),
    /** Information about a medication that is used to support knowledge. */
    characteristicCodeableConcept: t.readonly(FhirCodeableConcept),
    /** Information about a medication that is used to support knowledge. */
    characteristicQuantity: t.readonly(FhirQuantity),
    /** Information about a medication that is used to support knowledge. */
    extension: t.readonlyArray(FhirExtension),
    /** Information about a medication that is used to support knowledge. */
    id: t.readonly(FhirString),
    /** Information about a medication that is used to support knowledge. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Information about a medication that is used to support knowledge. */
    value: t.readonlyArray(FhirString),
  })
)

/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge_PatientCharacteristics {
  /** Information about a medication that is used to support knowledge. */
  _value?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Information about a medication that is used to support knowledge. */
  characteristicCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Information about a medication that is used to support knowledge. */
  characteristicQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  value?: ReadonlyArray<t.TypeOf<typeof FhirString>>
}
/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge_PatientCharacteristicsOutput {
  /** Information about a medication that is used to support knowledge. */
  _value?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Information about a medication that is used to support knowledge. */
  characteristicCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Information about a medication that is used to support knowledge. */
  characteristicQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  value?: ReadonlyArray<t.OutputOf<typeof FhirString>>
}
