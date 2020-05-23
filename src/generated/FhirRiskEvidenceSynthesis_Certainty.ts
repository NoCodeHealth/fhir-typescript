import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirRiskEvidenceSynthesis_CertaintySubcomponent } from './FhirRiskEvidenceSynthesis_CertaintySubcomponent'
import { FhirString } from './FhirString'

/** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
export const FhirRiskEvidenceSynthesis_Certainty: t.Type<
  FhirRiskEvidenceSynthesis_Certainty,
  FhirRiskEvidenceSynthesis_CertaintyOutput
> = t.recursion('FhirRiskEvidenceSynthesis_Certainty', () =>
  t.partial({
    /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
    certaintySubcomponent: t.readonlyArray(FhirRiskEvidenceSynthesis_CertaintySubcomponent),
    /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
    extension: t.readonlyArray(FhirExtension),
    /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
    id: t.readonly(FhirString),
    /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
    note: t.readonlyArray(FhirAnnotation),
    /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
    rating: t.readonlyArray(FhirCodeableConcept),
  })
)

/** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
export interface FhirRiskEvidenceSynthesis_Certainty {
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  certaintySubcomponent?: ReadonlyArray<t.TypeOf<typeof FhirRiskEvidenceSynthesis_CertaintySubcomponent>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  rating?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
}
/** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
export interface FhirRiskEvidenceSynthesis_CertaintyOutput {
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  certaintySubcomponent?: ReadonlyArray<t.OutputOf<typeof FhirRiskEvidenceSynthesis_CertaintySubcomponent>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  rating?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
}
