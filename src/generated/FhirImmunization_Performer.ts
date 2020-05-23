import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
export const FhirImmunization_Performer: t.Type<
  FhirImmunization_Performer,
  FhirImmunization_PerformerOutput
> = t.recursion('FhirImmunization_Performer', () =>
  t.intersection([
    t.type({
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      actor: t.readonly(FhirReference),
    }),
    t.partial({
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      extension: t.readonlyArray(FhirExtension),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      function: t.readonly(FhirCodeableConcept),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      id: t.readonly(FhirString),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      modifierExtension: t.readonlyArray(FhirExtension),
    }),
  ])
)

/** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
export interface FhirImmunization_Performer {
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  actor: Readonly<t.TypeOf<typeof FhirReference>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  function?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
export interface FhirImmunization_PerformerOutput {
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  actor: Readonly<t.OutputOf<typeof FhirReference>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  function?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
