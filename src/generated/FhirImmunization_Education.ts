import * as t from 'io-ts'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
export const FhirImmunization_Education: t.Type<
  FhirImmunization_Education,
  FhirImmunization_EducationOutput
> = t.recursion('FhirImmunization_Education', () =>
  t.partial({
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    _documentType: t.readonly(FhirElement),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    _presentationDate: t.readonly(FhirElement),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    _publicationDate: t.readonly(FhirElement),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    _reference: t.readonly(FhirElement),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    documentType: t.readonly(FhirString),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    extension: t.readonlyArray(FhirExtension),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    id: t.readonly(FhirString),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    presentationDate: t.readonly(FhirDateTime),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    publicationDate: t.readonly(FhirDateTime),
    /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
    reference: t.readonly(FhirUri),
  })
)

/** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
export interface FhirImmunization_Education {
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _documentType?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _presentationDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _publicationDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _reference?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  documentType?: Readonly<t.TypeOf<typeof FhirString>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  presentationDate?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  publicationDate?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  reference?: Readonly<t.TypeOf<typeof FhirUri>>
}
/** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
export interface FhirImmunization_EducationOutput {
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _documentType?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _presentationDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _publicationDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _reference?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  documentType?: Readonly<t.OutputOf<typeof FhirString>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  presentationDate?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  publicationDate?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  reference?: Readonly<t.OutputOf<typeof FhirUri>>
}
