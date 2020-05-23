import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'

/** Information about a medication that is used to support knowledge. */
export const FhirMedicationKnowledge_DrugCharacteristic: t.Type<
  FhirMedicationKnowledge_DrugCharacteristic,
  FhirMedicationKnowledge_DrugCharacteristicOutput
> = t.recursion('FhirMedicationKnowledge_DrugCharacteristic', () =>
  t.partial({
    /** Information about a medication that is used to support knowledge. */
    _valueBase64Binary: t.readonly(FhirElement),
    /** Information about a medication that is used to support knowledge. */
    _valueString: t.readonly(FhirElement),
    /** Information about a medication that is used to support knowledge. */
    extension: t.readonlyArray(FhirExtension),
    /** Information about a medication that is used to support knowledge. */
    id: t.readonly(FhirString),
    /** Information about a medication that is used to support knowledge. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Information about a medication that is used to support knowledge. */
    type: t.readonly(FhirCodeableConcept),
    /** Information about a medication that is used to support knowledge. */
    valueBase64Binary: t.readonly(t.string),
    /** Information about a medication that is used to support knowledge. */
    valueCodeableConcept: t.readonly(FhirCodeableConcept),
    /** Information about a medication that is used to support knowledge. */
    valueQuantity: t.readonly(FhirQuantity),
    /** Information about a medication that is used to support knowledge. */
    valueString: t.readonly(t.string),
  })
)

/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge_DrugCharacteristic {
  /** Information about a medication that is used to support knowledge. */
  _valueBase64Binary?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Information about a medication that is used to support knowledge. */
  _valueString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Information about a medication that is used to support knowledge. */
  valueBase64Binary?: Readonly<string>
  /** Information about a medication that is used to support knowledge. */
  valueCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Information about a medication that is used to support knowledge. */
  valueQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Information about a medication that is used to support knowledge. */
  valueString?: Readonly<string>
}
/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge_DrugCharacteristicOutput {
  /** Information about a medication that is used to support knowledge. */
  _valueBase64Binary?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Information about a medication that is used to support knowledge. */
  _valueString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Information about a medication that is used to support knowledge. */
  valueBase64Binary?: Readonly<string>
  /** Information about a medication that is used to support knowledge. */
  valueCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Information about a medication that is used to support knowledge. */
  valueQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Information about a medication that is used to support knowledge. */
  valueString?: Readonly<string>
}
