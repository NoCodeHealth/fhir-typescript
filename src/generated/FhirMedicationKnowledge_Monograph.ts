import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Information about a medication that is used to support knowledge. */
export const FhirMedicationKnowledge_Monograph: t.Type<
  FhirMedicationKnowledge_Monograph,
  FhirMedicationKnowledge_MonographOutput
> = t.recursion('FhirMedicationKnowledge_Monograph', () =>
  t.partial({
    /** Information about a medication that is used to support knowledge. */
    extension: t.readonlyArray(FhirExtension),
    /** Information about a medication that is used to support knowledge. */
    id: t.readonly(FhirString),
    /** Information about a medication that is used to support knowledge. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Information about a medication that is used to support knowledge. */
    source: t.readonly(FhirReference),
    /** Information about a medication that is used to support knowledge. */
    type: t.readonly(FhirCodeableConcept),
  })
)

/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge_Monograph {
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  source?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Information about a medication that is used to support knowledge. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge_MonographOutput {
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  source?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Information about a medication that is used to support knowledge. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
