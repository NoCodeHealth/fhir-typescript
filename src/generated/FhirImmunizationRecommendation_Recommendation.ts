import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirImmunizationRecommendation_DateCriterion } from './FhirImmunizationRecommendation_DateCriterion'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
export const FhirImmunizationRecommendation_Recommendation: t.Type<
  FhirImmunizationRecommendation_Recommendation,
  FhirImmunizationRecommendation_RecommendationOutput
> = t.recursion('FhirImmunizationRecommendation_Recommendation', () =>
  t.intersection([
    t.type({
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      forecastStatus: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      _description: t.readonly(FhirElement),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      _doseNumberPositiveInt: t.readonly(FhirElement),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      _doseNumberString: t.readonly(FhirElement),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      _series: t.readonly(FhirElement),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      _seriesDosesPositiveInt: t.readonly(FhirElement),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      _seriesDosesString: t.readonly(FhirElement),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      contraindicatedVaccineCode: t.readonlyArray(FhirCodeableConcept),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      dateCriterion: t.readonlyArray(FhirImmunizationRecommendation_DateCriterion),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      description: t.readonly(FhirString),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      doseNumberPositiveInt: t.readonly(t.number),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      doseNumberString: t.readonly(t.string),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      extension: t.readonlyArray(FhirExtension),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      forecastReason: t.readonlyArray(FhirCodeableConcept),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      id: t.readonly(FhirString),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      series: t.readonly(FhirString),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      seriesDosesPositiveInt: t.readonly(t.number),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      seriesDosesString: t.readonly(t.string),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      supportingImmunization: t.readonlyArray(FhirReference),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      supportingPatientInformation: t.readonlyArray(FhirReference),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      targetDisease: t.readonly(FhirCodeableConcept),
      /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
      vaccineCode: t.readonlyArray(FhirCodeableConcept),
    }),
  ])
)

/** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
export interface FhirImmunizationRecommendation_Recommendation {
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  _doseNumberPositiveInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  _doseNumberString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  _series?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  _seriesDosesPositiveInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  _seriesDosesString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  contraindicatedVaccineCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  dateCriterion?: ReadonlyArray<t.TypeOf<typeof FhirImmunizationRecommendation_DateCriterion>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  doseNumberPositiveInt?: Readonly<number>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  doseNumberString?: Readonly<string>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  forecastReason?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  forecastStatus: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  series?: Readonly<t.TypeOf<typeof FhirString>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  seriesDosesPositiveInt?: Readonly<number>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  seriesDosesString?: Readonly<string>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  supportingImmunization?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  supportingPatientInformation?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  targetDisease?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  vaccineCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
}
/** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
export interface FhirImmunizationRecommendation_RecommendationOutput {
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  _doseNumberPositiveInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  _doseNumberString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  _series?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  _seriesDosesPositiveInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  _seriesDosesString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  contraindicatedVaccineCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  dateCriterion?: ReadonlyArray<t.OutputOf<typeof FhirImmunizationRecommendation_DateCriterion>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  doseNumberPositiveInt?: Readonly<number>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  doseNumberString?: Readonly<string>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  forecastReason?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  forecastStatus: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  series?: Readonly<t.OutputOf<typeof FhirString>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  seriesDosesPositiveInt?: Readonly<number>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  seriesDosesString?: Readonly<string>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  supportingImmunization?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  supportingPatientInformation?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  targetDisease?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
  vaccineCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
}
