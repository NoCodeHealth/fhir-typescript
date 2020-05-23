import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirImmunizationRecommendation_Recommendation } from './FhirImmunizationRecommendation_Recommendation'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
export const FhirImmunizationRecommendation: t.Type<
  FhirImmunizationRecommendation,
  FhirImmunizationRecommendationOutput
> = t.recursion('FhirImmunizationRecommendation', () =>
  t.intersection([
    t.type({
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      patient: t.readonly(FhirReference),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      recommendation: t.readonlyArray(FhirImmunizationRecommendation_Recommendation),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      resourceType: t.readonly(t.literal('ImmunizationRecommendation')),
    }),
    t.partial({
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      _date: t.readonly(FhirElement),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      _implicitRules: t.readonly(FhirElement),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      _language: t.readonly(FhirElement),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      authority: t.readonly(FhirReference),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      contained: t.readonlyArray(FhirResourceList),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      date: t.readonly(FhirDateTime),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      extension: t.readonlyArray(FhirExtension),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      id: t.readonly(FhirId),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      implicitRules: t.readonly(FhirUri),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      language: t.readonly(FhirCode),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      meta: t.readonly(FhirMeta),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
export interface FhirImmunizationRecommendation {
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  authority?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  patient: Readonly<t.TypeOf<typeof FhirReference>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  recommendation: ReadonlyArray<t.TypeOf<typeof FhirImmunizationRecommendation_Recommendation>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  resourceType: Readonly<'ImmunizationRecommendation'>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
export interface FhirImmunizationRecommendationOutput {
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  authority?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  patient: Readonly<t.OutputOf<typeof FhirReference>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  recommendation: ReadonlyArray<t.OutputOf<typeof FhirImmunizationRecommendation_Recommendation>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  resourceType: Readonly<'ImmunizationRecommendation'>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
