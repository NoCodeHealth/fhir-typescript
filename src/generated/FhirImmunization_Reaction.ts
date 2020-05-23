import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
export const FhirImmunization_Reaction: t.Type<
  FhirImmunization_Reaction,
  FhirImmunization_ReactionOutput
> = t.recursion('FhirImmunization_Reaction', () =>
  t.partial({
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    _date: t.readonly(FhirElement),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    _reported: t.readonly(FhirElement),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    date: t.readonly(FhirDateTime),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    detail: t.readonly(FhirReference),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    extension: t.readonlyArray(FhirExtension),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    id: t.readonly(FhirString),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    reported: t.readonly(FhirBoolean),
  })
)

/** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
export interface FhirImmunization_Reaction {
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _reported?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  detail?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  reported?: Readonly<t.TypeOf<typeof FhirBoolean>>
}
/** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
export interface FhirImmunization_ReactionOutput {
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _reported?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  detail?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  reported?: Readonly<t.OutputOf<typeof FhirBoolean>>
}
