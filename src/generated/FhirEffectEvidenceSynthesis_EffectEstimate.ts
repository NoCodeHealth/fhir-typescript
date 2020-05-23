import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDecimal } from './FhirDecimal'
import { FhirEffectEvidenceSynthesis_PrecisionEstimate } from './FhirEffectEvidenceSynthesis_PrecisionEstimate'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
export const FhirEffectEvidenceSynthesis_EffectEstimate: t.Type<
  FhirEffectEvidenceSynthesis_EffectEstimate,
  FhirEffectEvidenceSynthesis_EffectEstimateOutput
> = t.recursion('FhirEffectEvidenceSynthesis_EffectEstimate', () =>
  t.partial({
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    _description: t.readonly(FhirElement),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    _value: t.readonly(FhirElement),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    description: t.readonly(FhirString),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    extension: t.readonlyArray(FhirExtension),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    id: t.readonly(FhirString),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    precisionEstimate: t.readonlyArray(FhirEffectEvidenceSynthesis_PrecisionEstimate),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    type: t.readonly(FhirCodeableConcept),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    unitOfMeasure: t.readonly(FhirCodeableConcept),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    value: t.readonly(FhirDecimal),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    variantState: t.readonly(FhirCodeableConcept),
  })
)

/** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
export interface FhirEffectEvidenceSynthesis_EffectEstimate {
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _value?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  precisionEstimate?: ReadonlyArray<t.TypeOf<typeof FhirEffectEvidenceSynthesis_PrecisionEstimate>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  unitOfMeasure?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  value?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  variantState?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
export interface FhirEffectEvidenceSynthesis_EffectEstimateOutput {
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _value?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  precisionEstimate?: ReadonlyArray<t.OutputOf<typeof FhirEffectEvidenceSynthesis_PrecisionEstimate>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  unitOfMeasure?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  value?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  variantState?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
