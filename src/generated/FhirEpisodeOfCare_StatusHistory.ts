import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirString } from './FhirString'

/** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
export const FhirEpisodeOfCare_StatusHistory: t.Type<
  FhirEpisodeOfCare_StatusHistory,
  FhirEpisodeOfCare_StatusHistoryOutput
> = t.recursion('FhirEpisodeOfCare_StatusHistory', () =>
  t.intersection([
    t.type({
      /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
      period: t.readonly(FhirPeriod),
    }),
    t.partial({
      /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
      _status: t.readonly(FhirElement),
      /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
      extension: t.readonlyArray(FhirExtension),
      /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
      id: t.readonly(FhirString),
      /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
      modifierExtension: t.readonlyArray(FhirExtension),
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
    }),
  ])
)

/** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
export interface FhirEpisodeOfCare_StatusHistory {
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  period: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  status?: Readonly<'planned' | 'waitlist' | 'active' | 'onhold' | 'finished' | 'cancelled' | 'entered-in-error'>
}
/** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
export interface FhirEpisodeOfCare_StatusHistoryOutput {
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  period: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
  status?: Readonly<'planned' | 'waitlist' | 'active' | 'onhold' | 'finished' | 'cancelled' | 'entered-in-error'>
}
