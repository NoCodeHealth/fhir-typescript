import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirContactDetail } from './FhirContactDetail'
import { FhirDate } from './FhirDate'
import { FhirDateTime } from './FhirDateTime'
import { FhirEffectEvidenceSynthesis_Certainty } from './FhirEffectEvidenceSynthesis_Certainty'
import { FhirEffectEvidenceSynthesis_EffectEstimate } from './FhirEffectEvidenceSynthesis_EffectEstimate'
import { FhirEffectEvidenceSynthesis_ResultsByExposure } from './FhirEffectEvidenceSynthesis_ResultsByExposure'
import { FhirEffectEvidenceSynthesis_SampleSize } from './FhirEffectEvidenceSynthesis_SampleSize'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMarkdown } from './FhirMarkdown'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirRelatedArtifact } from './FhirRelatedArtifact'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'
import { FhirUsageContext } from './FhirUsageContext'

/** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
export const FhirEffectEvidenceSynthesis: t.Type<
  FhirEffectEvidenceSynthesis,
  FhirEffectEvidenceSynthesisOutput
> = t.recursion('FhirEffectEvidenceSynthesis', () =>
  t.intersection([
    t.type({
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      exposure: t.readonly(FhirReference),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      exposureAlternative: t.readonly(FhirReference),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      outcome: t.readonly(FhirReference),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      population: t.readonly(FhirReference),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      resourceType: t.readonly(t.literal('EffectEvidenceSynthesis')),
    }),
    t.partial({
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      _approvalDate: t.readonly(FhirElement),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      _copyright: t.readonly(FhirElement),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      _date: t.readonly(FhirElement),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      _description: t.readonly(FhirElement),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      _implicitRules: t.readonly(FhirElement),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      _language: t.readonly(FhirElement),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      _lastReviewDate: t.readonly(FhirElement),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      _name: t.readonly(FhirElement),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      _publisher: t.readonly(FhirElement),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      _status: t.readonly(FhirElement),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      _title: t.readonly(FhirElement),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      _url: t.readonly(FhirElement),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      _version: t.readonly(FhirElement),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      approvalDate: t.readonly(FhirDate),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      author: t.readonlyArray(FhirContactDetail),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      certainty: t.readonlyArray(FhirEffectEvidenceSynthesis_Certainty),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      contact: t.readonlyArray(FhirContactDetail),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      contained: t.readonlyArray(FhirResourceList),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      copyright: t.readonly(FhirMarkdown),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      date: t.readonly(FhirDateTime),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      description: t.readonly(FhirMarkdown),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      editor: t.readonlyArray(FhirContactDetail),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      effectEstimate: t.readonlyArray(FhirEffectEvidenceSynthesis_EffectEstimate),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      effectivePeriod: t.readonly(FhirPeriod),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      endorser: t.readonlyArray(FhirContactDetail),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      extension: t.readonlyArray(FhirExtension),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      id: t.readonly(FhirId),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      implicitRules: t.readonly(FhirUri),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      jurisdiction: t.readonlyArray(FhirCodeableConcept),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      language: t.readonly(FhirCode),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      lastReviewDate: t.readonly(FhirDate),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      meta: t.readonly(FhirMeta),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      name: t.readonly(FhirString),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      note: t.readonlyArray(FhirAnnotation),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      publisher: t.readonly(FhirString),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      relatedArtifact: t.readonlyArray(FhirRelatedArtifact),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      resultsByExposure: t.readonlyArray(FhirEffectEvidenceSynthesis_ResultsByExposure),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      reviewer: t.readonlyArray(FhirContactDetail),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      sampleSize: t.readonly(FhirEffectEvidenceSynthesis_SampleSize),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      status: t.readonly(
        t.keyof({
          draft: null,
          active: null,
          retired: null,
          unknown: null,
        })
      ),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      studyType: t.readonly(FhirCodeableConcept),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      synthesisType: t.readonly(FhirCodeableConcept),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      text: t.readonly(FhirNarrative),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      title: t.readonly(FhirString),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      topic: t.readonlyArray(FhirCodeableConcept),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      url: t.readonly(FhirUri),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      useContext: t.readonlyArray(FhirUsageContext),
      /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
      version: t.readonly(FhirString),
    }),
  ])
)

/** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
export interface FhirEffectEvidenceSynthesis {
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _approvalDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _copyright?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _lastReviewDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _publisher?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _title?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _version?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  approvalDate?: Readonly<t.TypeOf<typeof FhirDate>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  author?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  certainty?: ReadonlyArray<t.TypeOf<typeof FhirEffectEvidenceSynthesis_Certainty>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  copyright?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  description?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  editor?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  effectEstimate?: ReadonlyArray<t.TypeOf<typeof FhirEffectEvidenceSynthesis_EffectEstimate>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  effectivePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  endorser?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  exposure: Readonly<t.TypeOf<typeof FhirReference>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  exposureAlternative: Readonly<t.TypeOf<typeof FhirReference>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  jurisdiction?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  lastReviewDate?: Readonly<t.TypeOf<typeof FhirDate>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  outcome: Readonly<t.TypeOf<typeof FhirReference>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  population: Readonly<t.TypeOf<typeof FhirReference>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  publisher?: Readonly<t.TypeOf<typeof FhirString>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  relatedArtifact?: ReadonlyArray<t.TypeOf<typeof FhirRelatedArtifact>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  resourceType: Readonly<'EffectEvidenceSynthesis'>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  resultsByExposure?: ReadonlyArray<t.TypeOf<typeof FhirEffectEvidenceSynthesis_ResultsByExposure>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  reviewer?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  sampleSize?: Readonly<t.TypeOf<typeof FhirEffectEvidenceSynthesis_SampleSize>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  studyType?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  synthesisType?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  title?: Readonly<t.TypeOf<typeof FhirString>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  topic?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  useContext?: ReadonlyArray<t.TypeOf<typeof FhirUsageContext>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  version?: Readonly<t.TypeOf<typeof FhirString>>
}
/** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
export interface FhirEffectEvidenceSynthesisOutput {
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _approvalDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _copyright?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _lastReviewDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _publisher?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _title?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  _version?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  approvalDate?: Readonly<t.OutputOf<typeof FhirDate>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  author?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  certainty?: ReadonlyArray<t.OutputOf<typeof FhirEffectEvidenceSynthesis_Certainty>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  copyright?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  description?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  editor?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  effectEstimate?: ReadonlyArray<t.OutputOf<typeof FhirEffectEvidenceSynthesis_EffectEstimate>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  effectivePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  endorser?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  exposure: Readonly<t.OutputOf<typeof FhirReference>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  exposureAlternative: Readonly<t.OutputOf<typeof FhirReference>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  jurisdiction?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  lastReviewDate?: Readonly<t.OutputOf<typeof FhirDate>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  outcome: Readonly<t.OutputOf<typeof FhirReference>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  population: Readonly<t.OutputOf<typeof FhirReference>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  publisher?: Readonly<t.OutputOf<typeof FhirString>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  relatedArtifact?: ReadonlyArray<t.OutputOf<typeof FhirRelatedArtifact>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  resourceType: Readonly<'EffectEvidenceSynthesis'>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  resultsByExposure?: ReadonlyArray<t.OutputOf<typeof FhirEffectEvidenceSynthesis_ResultsByExposure>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  reviewer?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  sampleSize?: Readonly<t.OutputOf<typeof FhirEffectEvidenceSynthesis_SampleSize>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  studyType?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  synthesisType?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  title?: Readonly<t.OutputOf<typeof FhirString>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  topic?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  useContext?: ReadonlyArray<t.OutputOf<typeof FhirUsageContext>>
  /** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
  version?: Readonly<t.OutputOf<typeof FhirString>>
}
