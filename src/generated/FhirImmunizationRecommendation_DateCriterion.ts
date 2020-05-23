import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
export const FhirImmunizationRecommendation_DateCriterion: t.Type<
  FhirImmunizationRecommendation_DateCriterion,
  FhirImmunizationRecommendation_DateCriterionOutput
> = t.recursion('FhirImmunizationRecommendation_DateCriterion', () =>
  t.intersection([
    t.type({
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      code: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      _value: t.readonly(FhirElement),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      extension: t.readonlyArray(FhirExtension),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      id: t.readonly(FhirString),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      value: t.readonly(FhirDateTime),
    }),
  ])
)

/** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
export interface FhirImmunizationRecommendation_DateCriterion {
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  _value?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  code: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  value?: Readonly<t.TypeOf<typeof FhirDateTime>>
}
/** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
export interface FhirImmunizationRecommendation_DateCriterionOutput {
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  _value?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  code: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  value?: Readonly<t.OutputOf<typeof FhirDateTime>>
}
