import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirEffectEvidenceSynthesis_CertaintySubcomponent } from './FhirEffectEvidenceSynthesis_CertaintySubcomponent'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
export const FhirEffectEvidenceSynthesis_Certainty: t.Type<
  FhirEffectEvidenceSynthesis_Certainty,
  FhirEffectEvidenceSynthesis_CertaintyOutput
> = t.recursion('FhirEffectEvidenceSynthesis_Certainty', () =>
  t.partial({
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    certaintySubcomponent: t.readonlyArray(FhirEffectEvidenceSynthesis_CertaintySubcomponent),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    extension: t.readonlyArray(FhirExtension),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    id: t.readonly(FhirString),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    note: t.readonlyArray(FhirAnnotation),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    rating: t.readonlyArray(FhirCodeableConcept),
  })
)

/** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
export interface FhirEffectEvidenceSynthesis_Certainty {
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  certaintySubcomponent?: ReadonlyArray<t.TypeOf<typeof FhirEffectEvidenceSynthesis_CertaintySubcomponent>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  rating?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
}
/** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
export interface FhirEffectEvidenceSynthesis_CertaintyOutput {
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  certaintySubcomponent?: ReadonlyArray<t.OutputOf<typeof FhirEffectEvidenceSynthesis_CertaintySubcomponent>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  rating?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
}
