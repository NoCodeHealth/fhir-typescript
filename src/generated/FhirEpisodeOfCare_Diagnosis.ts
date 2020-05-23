import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
export const FhirEpisodeOfCare_Diagnosis: t.Type<
  FhirEpisodeOfCare_Diagnosis,
  FhirEpisodeOfCare_DiagnosisOutput
> = t.recursion('FhirEpisodeOfCare_Diagnosis', () =>
  t.intersection([
    t.type({
      /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
      condition: t.readonly(FhirReference),
    }),
    t.partial({
      /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
      _rank: t.readonly(FhirElement),
      /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
      extension: t.readonlyArray(FhirExtension),
      /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
      id: t.readonly(FhirString),
      /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
      rank: t.readonly(FhirPositiveInt),
      /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
      role: t.readonly(FhirCodeableConcept),
    }),
  ])
)

/** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
export interface FhirEpisodeOfCare_Diagnosis {
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  _rank?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  condition: Readonly<t.TypeOf<typeof FhirReference>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  rank?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  role?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
export interface FhirEpisodeOfCare_DiagnosisOutput {
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  _rank?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  condition: Readonly<t.OutputOf<typeof FhirReference>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  rank?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  role?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
