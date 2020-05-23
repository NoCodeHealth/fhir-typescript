import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirInteger } from './FhirInteger'
import { FhirString } from './FhirString'

/** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
export const FhirEffectEvidenceSynthesis_SampleSize: t.Type<
  FhirEffectEvidenceSynthesis_SampleSize,
  FhirEffectEvidenceSynthesis_SampleSizeOutput
> = t.recursion('FhirEffectEvidenceSynthesis_SampleSize', () =>
  t.partial({
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    _description: t.readonly(FhirElement),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    _numberOfParticipants: t.readonly(FhirElement),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    _numberOfStudies: t.readonly(FhirElement),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    description: t.readonly(FhirString),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    extension: t.readonlyArray(FhirExtension),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    id: t.readonly(FhirString),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    numberOfParticipants: t.readonly(FhirInteger),
    /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
    numberOfStudies: t.readonly(FhirInteger),
  })
)

/** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
export interface FhirEffectEvidenceSynthesis_SampleSize {
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _numberOfParticipants?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _numberOfStudies?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  numberOfParticipants?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  numberOfStudies?: Readonly<t.TypeOf<typeof FhirInteger>>
}
/** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
export interface FhirEffectEvidenceSynthesis_SampleSizeOutput {
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _numberOfParticipants?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _numberOfStudies?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  numberOfParticipants?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  numberOfStudies?: Readonly<t.OutputOf<typeof FhirInteger>>
}
