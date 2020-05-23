import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
export const FhirRiskEvidenceSynthesis_CertaintySubcomponent: t.Type<
  FhirRiskEvidenceSynthesis_CertaintySubcomponent,
  FhirRiskEvidenceSynthesis_CertaintySubcomponentOutput
> = t.recursion('FhirRiskEvidenceSynthesis_CertaintySubcomponent', () =>
  t.partial({
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
    /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
    type: t.readonly(FhirCodeableConcept),
  })
)

/** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
export interface FhirRiskEvidenceSynthesis_CertaintySubcomponent {
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
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
export interface FhirRiskEvidenceSynthesis_CertaintySubcomponentOutput {
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
  /** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
