import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** Information about a medication that is used to support knowledge. */
export const FhirMedicationKnowledge_MonitoringProgram: t.Type<
  FhirMedicationKnowledge_MonitoringProgram,
  FhirMedicationKnowledge_MonitoringProgramOutput
> = t.recursion('FhirMedicationKnowledge_MonitoringProgram', () =>
  t.partial({
    /** Information about a medication that is used to support knowledge. */
    _name: t.readonly(FhirElement),
    /** Information about a medication that is used to support knowledge. */
    extension: t.readonlyArray(FhirExtension),
    /** Information about a medication that is used to support knowledge. */
    id: t.readonly(FhirString),
    /** Information about a medication that is used to support knowledge. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Information about a medication that is used to support knowledge. */
    name: t.readonly(FhirString),
    /** Information about a medication that is used to support knowledge. */
    type: t.readonly(FhirCodeableConcept),
  })
)

/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge_MonitoringProgram {
  /** Information about a medication that is used to support knowledge. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Information about a medication that is used to support knowledge. */
export interface FhirMedicationKnowledge_MonitoringProgramOutput {
  /** Information about a medication that is used to support knowledge. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Information about a medication that is used to support knowledge. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a medication that is used to support knowledge. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** Information about a medication that is used to support knowledge. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
