import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDecimal } from './FhirDecimal'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirRange } from './FhirRange'
import { FhirString } from './FhirString'

/** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
export const FhirRiskAssessment_Prediction: t.Type<
  FhirRiskAssessment_Prediction,
  FhirRiskAssessment_PredictionOutput
> = t.recursion('FhirRiskAssessment_Prediction', () =>
  t.partial({
    /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
    _probabilityDecimal: t.readonly(FhirElement),
    /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
    _rationale: t.readonly(FhirElement),
    /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
    _relativeRisk: t.readonly(FhirElement),
    /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
    extension: t.readonlyArray(FhirExtension),
    /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
    id: t.readonly(FhirString),
    /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
    outcome: t.readonly(FhirCodeableConcept),
    /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
    probabilityDecimal: t.readonly(t.number),
    /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
    probabilityRange: t.readonly(FhirRange),
    /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
    qualitativeRisk: t.readonly(FhirCodeableConcept),
    /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
    rationale: t.readonly(FhirString),
    /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
    relativeRisk: t.readonly(FhirDecimal),
    /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
    whenPeriod: t.readonly(FhirPeriod),
    /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
    whenRange: t.readonly(FhirRange),
  })
)

/** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
export interface FhirRiskAssessment_Prediction {
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  _probabilityDecimal?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  _rationale?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  _relativeRisk?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  outcome?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  probabilityDecimal?: Readonly<number>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  probabilityRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  qualitativeRisk?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  rationale?: Readonly<t.TypeOf<typeof FhirString>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  relativeRisk?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  whenPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  whenRange?: Readonly<t.TypeOf<typeof FhirRange>>
}
/** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
export interface FhirRiskAssessment_PredictionOutput {
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  _probabilityDecimal?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  _rationale?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  _relativeRisk?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  outcome?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  probabilityDecimal?: Readonly<number>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  probabilityRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  qualitativeRisk?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  rationale?: Readonly<t.OutputOf<typeof FhirString>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  relativeRisk?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  whenPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
  whenRange?: Readonly<t.OutputOf<typeof FhirRange>>
}
