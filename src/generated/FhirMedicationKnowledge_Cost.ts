import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirMoney } from './FhirMoney'
import { FhirString } from './FhirString'

/** Information about a medication that is used to support knowledge. */
export const FhirMedicationKnowledge_Cost: t.Type<
  FhirMedicationKnowledge_Cost,
  FhirMedicationKnowledge_CostOutput
> = t.recursion('FhirMedicationKnowledge_Cost', () =>
  t.intersection([
    t.type({
      /** Information about a medication that is used to support knowledge. */
      cost: t.readonly(FhirMoney),
      /** Information about a medication that is used to support knowledge. */
      type: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** Information about a medication that is used to support knowledge. */
      _source: t.readonly(FhirElement),
      /** Information about a medication that is used to support knowledge. */
      extension: t.readonlyArray(FhirExtension),
      /** Information about a medication that is used to support knowledge. */
      id: t.readonly(FhirString),
      /** Information about a medication that is used to support knowledge. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Information about a medication that is used to support knowledge. */
      source: t.readonly(FhirString),
    }),
  ])
)

/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge_Cost {
  /** Information about a medication that is used to support knowledge. */
  _source?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Information about a medication that is used to support knowledge. */
  cost: Readonly<t.TypeOf<typeof FhirMoney>>
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  source?: Readonly<t.TypeOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  type: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge_CostOutput {
  /** Information about a medication that is used to support knowledge. */
  _source?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Information about a medication that is used to support knowledge. */
  cost: Readonly<t.OutputOf<typeof FhirMoney>>
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  source?: Readonly<t.OutputOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  type: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
