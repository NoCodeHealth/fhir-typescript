import * as t from 'io-ts'
import { FhirExtension } from './FhirExtension'
import { FhirMedicationKnowledge_MaxDispense } from './FhirMedicationKnowledge_MaxDispense'
import { FhirMedicationKnowledge_Schedule } from './FhirMedicationKnowledge_Schedule'
import { FhirMedicationKnowledge_Substitution } from './FhirMedicationKnowledge_Substitution'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Information about a medication that is used to support knowledge. */
export const FhirMedicationKnowledge_Regulatory: t.Type<
  FhirMedicationKnowledge_Regulatory,
  FhirMedicationKnowledge_RegulatoryOutput
> = t.recursion('FhirMedicationKnowledge_Regulatory', () =>
  t.intersection([
    t.type({
      /** Information about a medication that is used to support knowledge. */
      regulatoryAuthority: t.readonly(FhirReference),
    }),
    t.partial({
      /** Information about a medication that is used to support knowledge. */
      extension: t.readonlyArray(FhirExtension),
      /** Information about a medication that is used to support knowledge. */
      id: t.readonly(FhirString),
      /** Information about a medication that is used to support knowledge. */
      maxDispense: t.readonly(FhirMedicationKnowledge_MaxDispense),
      /** Information about a medication that is used to support knowledge. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Information about a medication that is used to support knowledge. */
      schedule: t.readonlyArray(FhirMedicationKnowledge_Schedule),
      /** Information about a medication that is used to support knowledge. */
      substitution: t.readonlyArray(FhirMedicationKnowledge_Substitution),
    }),
  ])
)

/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge_Regulatory {
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  maxDispense?: Readonly<t.TypeOf<typeof FhirMedicationKnowledge_MaxDispense>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  regulatoryAuthority: Readonly<t.TypeOf<typeof FhirReference>>
  /** Information about a medication that is used to support knowledge. */
  schedule?: ReadonlyArray<t.TypeOf<typeof FhirMedicationKnowledge_Schedule>>
  /** Information about a medication that is used to support knowledge. */
  substitution?: ReadonlyArray<t.TypeOf<typeof FhirMedicationKnowledge_Substitution>>
}
/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge_RegulatoryOutput {
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  maxDispense?: Readonly<t.OutputOf<typeof FhirMedicationKnowledge_MaxDispense>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  regulatoryAuthority: Readonly<t.OutputOf<typeof FhirReference>>
  /** Information about a medication that is used to support knowledge. */
  schedule?: ReadonlyArray<t.OutputOf<typeof FhirMedicationKnowledge_Schedule>>
  /** Information about a medication that is used to support knowledge. */
  substitution?: ReadonlyArray<t.OutputOf<typeof FhirMedicationKnowledge_Substitution>>
}
