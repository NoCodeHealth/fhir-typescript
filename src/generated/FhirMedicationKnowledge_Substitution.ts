import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** Information about a medication that is used to support knowledge. */
export const FhirMedicationKnowledge_Substitution: t.Type<
  FhirMedicationKnowledge_Substitution,
  FhirMedicationKnowledge_SubstitutionOutput
> = t.recursion('FhirMedicationKnowledge_Substitution', () =>
  t.intersection([
    t.type({
      /** Information about a medication that is used to support knowledge. */
      type: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** Information about a medication that is used to support knowledge. */
      _allowed: t.readonly(FhirElement),
      /** Information about a medication that is used to support knowledge. */
      allowed: t.readonly(FhirBoolean),
      /** Information about a medication that is used to support knowledge. */
      extension: t.readonlyArray(FhirExtension),
      /** Information about a medication that is used to support knowledge. */
      id: t.readonly(FhirString),
      /** Information about a medication that is used to support knowledge. */
      modifierExtension: t.readonlyArray(FhirExtension),
    }),
  ])
)

/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge_Substitution {
  /** Information about a medication that is used to support knowledge. */
  _allowed?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Information about a medication that is used to support knowledge. */
  allowed?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  type: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge_SubstitutionOutput {
  /** Information about a medication that is used to support knowledge. */
  _allowed?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Information about a medication that is used to support knowledge. */
  allowed?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  type: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
