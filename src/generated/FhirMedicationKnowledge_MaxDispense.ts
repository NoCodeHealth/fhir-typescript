import * as t from 'io-ts'
import { FhirDuration } from './FhirDuration'
import { FhirExtension } from './FhirExtension'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'

/** Information about a medication that is used to support knowledge. */
export const FhirMedicationKnowledge_MaxDispense: t.Type<
  FhirMedicationKnowledge_MaxDispense,
  FhirMedicationKnowledge_MaxDispenseOutput
> = t.recursion('FhirMedicationKnowledge_MaxDispense', () =>
  t.intersection([
    t.type({
      /** Information about a medication that is used to support knowledge. */
      quantity: t.readonly(FhirQuantity),
    }),
    t.partial({
      /** Information about a medication that is used to support knowledge. */
      extension: t.readonlyArray(FhirExtension),
      /** Information about a medication that is used to support knowledge. */
      id: t.readonly(FhirString),
      /** Information about a medication that is used to support knowledge. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Information about a medication that is used to support knowledge. */
      period: t.readonly(FhirDuration),
    }),
  ])
)

/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge_MaxDispense {
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  period?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** Information about a medication that is used to support knowledge. */
  quantity: Readonly<t.TypeOf<typeof FhirQuantity>>
}
/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge_MaxDispenseOutput {
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  period?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** Information about a medication that is used to support knowledge. */
  quantity: Readonly<t.OutputOf<typeof FhirQuantity>>
}
