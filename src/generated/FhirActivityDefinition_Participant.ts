import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
export const FhirActivityDefinition_Participant: t.Type<
  FhirActivityDefinition_Participant,
  FhirActivityDefinition_ParticipantOutput
> = t.recursion('FhirActivityDefinition_Participant', () =>
  t.partial({
    /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
    _type: t.readonly(FhirElement),
    /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
    extension: t.readonlyArray(FhirExtension),
    /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
    id: t.readonly(FhirString),
    /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
    role: t.readonly(FhirCodeableConcept),
    /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
    type: t.readonly(FhirCode),
  })
)

/** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
export interface FhirActivityDefinition_Participant {
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  role?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  type?: Readonly<t.TypeOf<typeof FhirCode>>
}
/** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
export interface FhirActivityDefinition_ParticipantOutput {
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  role?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  type?: Readonly<t.OutputOf<typeof FhirCode>>
}
