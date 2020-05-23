import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDecimal } from './FhirDecimal'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
export const FhirEffectEvidenceSynthesis_PrecisionEstimate: t.Type<
  FhirEffectEvidenceSynthesis_PrecisionEstimate,
  FhirEffectEvidenceSynthesis_PrecisionEstimateOutput
> = t.recursion('FhirEffectEvidenceSynthesis_PrecisionEstimate', () =>
  t.partial({
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    _from: t.readonly(FhirElement),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    _level: t.readonly(FhirElement),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    _to: t.readonly(FhirElement),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    extension: t.readonlyArray(FhirExtension),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    from: t.readonly(FhirDecimal),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    id: t.readonly(FhirString),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    level: t.readonly(FhirDecimal),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    to: t.readonly(FhirDecimal),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    type: t.readonly(FhirCodeableConcept),
  })
)

/** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
export interface FhirEffectEvidenceSynthesis_PrecisionEstimate {
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _from?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _level?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _to?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  from?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  level?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  to?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
export interface FhirEffectEvidenceSynthesis_PrecisionEstimateOutput {
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _from?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _level?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _to?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  from?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  level?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  to?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
