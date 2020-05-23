import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'

/** Information about a medication that is used to support knowledge. */
export const FhirMedicationKnowledge_Packaging: t.Type<
  FhirMedicationKnowledge_Packaging,
  FhirMedicationKnowledge_PackagingOutput
> = t.recursion('FhirMedicationKnowledge_Packaging', () =>
  t.partial({
    /** Information about a medication that is used to support knowledge. */
    extension: t.readonlyArray(FhirExtension),
    /** Information about a medication that is used to support knowledge. */
    id: t.readonly(FhirString),
    /** Information about a medication that is used to support knowledge. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Information about a medication that is used to support knowledge. */
    quantity: t.readonly(FhirQuantity),
    /** Information about a medication that is used to support knowledge. */
    type: t.readonly(FhirCodeableConcept),
  })
)

/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge_Packaging {
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  quantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Information about a medication that is used to support knowledge. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge_PackagingOutput {
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  quantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Information about a medication that is used to support knowledge. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
