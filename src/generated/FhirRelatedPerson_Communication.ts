import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
export const FhirRelatedPerson_Communication: t.Type<
  FhirRelatedPerson_Communication,
  FhirRelatedPerson_CommunicationOutput
> = t.recursion('FhirRelatedPerson_Communication', () =>
  t.intersection([
    t.type({
      /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
      language: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
      _preferred: t.readonly(FhirElement),
      /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
      extension: t.readonlyArray(FhirExtension),
      /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
      id: t.readonly(FhirString),
      /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
      preferred: t.readonly(FhirBoolean),
    }),
  ])
)

/** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
export interface FhirRelatedPerson_Communication {
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  _preferred?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  language: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  preferred?: Readonly<t.TypeOf<typeof FhirBoolean>>
}
/** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
export interface FhirRelatedPerson_CommunicationOutput {
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  _preferred?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  language: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
  preferred?: Readonly<t.OutputOf<typeof FhirBoolean>>
}
