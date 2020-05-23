import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDecimal } from './FhirDecimal'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
export const FhirRiskEvidenceSynthesis_PrecisionEstimate: t.Type<
  FhirRiskEvidenceSynthesis_PrecisionEstimate,
  FhirRiskEvidenceSynthesis_PrecisionEstimateOutput
> = t.recursion('FhirRiskEvidenceSynthesis_PrecisionEstimate', () =>
  t.partial({
    /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
    _from: t.readonly(FhirElement),
    /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
    _level: t.readonly(FhirElement),
    /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
    _to: t.readonly(FhirElement),
    /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
    extension: t.readonlyArray(FhirExtension),
    /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
    from: t.readonly(FhirDecimal),
    /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
    id: t.readonly(FhirString),
    /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
    level: t.readonly(FhirDecimal),
    /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
    to: t.readonly(FhirDecimal),
    /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
    type: t.readonly(FhirCodeableConcept),
  })
)

/** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
export interface FhirRiskEvidenceSynthesis_PrecisionEstimate {
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  _from?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  _level?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  _to?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  from?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  level?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  to?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
export interface FhirRiskEvidenceSynthesis_PrecisionEstimateOutput {
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  _from?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  _level?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  _to?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  from?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  level?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  to?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
