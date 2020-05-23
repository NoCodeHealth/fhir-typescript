import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirEpisodeOfCare_Diagnosis } from './FhirEpisodeOfCare_Diagnosis'
import { FhirEpisodeOfCare_StatusHistory } from './FhirEpisodeOfCare_StatusHistory'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
export const FhirEpisodeOfCare: t.Type<FhirEpisodeOfCare, FhirEpisodeOfCareOutput> = t.recursion(
  'FhirEpisodeOfCare',
  () =>
    t.intersection([
      t.type({
        /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
        patient: t.readonly(FhirReference),
        /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
        resourceType: t.readonly(t.literal('EpisodeOfCare')),
      }),
      t.partial({
        /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
        _implicitRules: t.readonly(FhirElement),
        /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
        _language: t.readonly(FhirElement),
        /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
        _status: t.readonly(FhirElement),
        /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
        account: t.readonlyArray(FhirReference),
        /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
        careManager: t.readonly(FhirReference),
        /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
        contained: t.readonlyArray(FhirResourceList),
        /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
        diagnosis: t.readonlyArray(FhirEpisodeOfCare_Diagnosis),
        /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
        extension: t.readonlyArray(FhirExtension),
        /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
        id: t.readonly(FhirId),
        /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
        implicitRules: t.readonly(FhirUri),
        /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
        language: t.readonly(FhirCode),
        /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
        managingOrganization: t.readonly(FhirReference),
        /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
        meta: t.readonly(FhirMeta),
        /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
        period: t.readonly(FhirPeriod),
        /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
        referralRequest: t.readonlyArray(FhirReference),
        /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
        status: t.readonly(
          t.keyof({
            planned: null,
            waitlist: null,
            active: null,
            onhold: null,
            finished: null,
            cancelled: null,
            'entered-in-error': null,
          })
        ),
        /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
        statusHistory: t.readonlyArray(FhirEpisodeOfCare_StatusHistory),
        /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
        team: t.readonlyArray(FhirReference),
        /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
        text: t.readonly(FhirNarrative),
        /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
        type: t.readonlyArray(FhirCodeableConcept),
      }),
    ])
)

/** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
export interface FhirEpisodeOfCare {
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  account?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  careManager?: Readonly<t.TypeOf<typeof FhirReference>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  diagnosis?: ReadonlyArray<t.TypeOf<typeof FhirEpisodeOfCare_Diagnosis>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  managingOrganization?: Readonly<t.TypeOf<typeof FhirReference>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  patient: Readonly<t.TypeOf<typeof FhirReference>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  period?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  referralRequest?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  resourceType: Readonly<'EpisodeOfCare'>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  status?: Readonly<'planned' | 'waitlist' | 'active' | 'onhold' | 'finished' | 'cancelled' | 'entered-in-error'>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  statusHistory?: ReadonlyArray<t.TypeOf<typeof FhirEpisodeOfCare_StatusHistory>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  team?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  type?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
}
/** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
export interface FhirEpisodeOfCareOutput {
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  account?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  careManager?: Readonly<t.OutputOf<typeof FhirReference>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  diagnosis?: ReadonlyArray<t.OutputOf<typeof FhirEpisodeOfCare_Diagnosis>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  managingOrganization?: Readonly<t.OutputOf<typeof FhirReference>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  patient: Readonly<t.OutputOf<typeof FhirReference>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  period?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  referralRequest?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  resourceType: Readonly<'EpisodeOfCare'>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  status?: Readonly<'planned' | 'waitlist' | 'active' | 'onhold' | 'finished' | 'cancelled' | 'entered-in-error'>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  statusHistory?: ReadonlyArray<t.OutputOf<typeof FhirEpisodeOfCare_StatusHistory>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  team?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  type?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
}
