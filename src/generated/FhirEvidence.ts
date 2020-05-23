import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirContactDetail } from './FhirContactDetail'
import { FhirDate } from './FhirDate'
import { FhirDateTime } from './FhirDateTime'
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

/** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
export const FhirEvidence: t.Type<FhirEvidence, FhirEvidenceOutput> = t.recursion('FhirEvidence', () =>
  t.intersection([
    t.type({
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      exposureBackground: t.readonly(FhirReference),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      resourceType: t.readonly(t.literal('Evidence')),
    }),
    t.partial({
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      _approvalDate: t.readonly(FhirElement),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      _copyright: t.readonly(FhirElement),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      _date: t.readonly(FhirElement),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      _description: t.readonly(FhirElement),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      _implicitRules: t.readonly(FhirElement),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      _language: t.readonly(FhirElement),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      _lastReviewDate: t.readonly(FhirElement),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      _name: t.readonly(FhirElement),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      _publisher: t.readonly(FhirElement),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      _shortTitle: t.readonly(FhirElement),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      _status: t.readonly(FhirElement),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      _subtitle: t.readonly(FhirElement),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      _title: t.readonly(FhirElement),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      _url: t.readonly(FhirElement),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      _version: t.readonly(FhirElement),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      approvalDate: t.readonly(FhirDate),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      author: t.readonlyArray(FhirContactDetail),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      contact: t.readonlyArray(FhirContactDetail),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      contained: t.readonlyArray(FhirResourceList),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      copyright: t.readonly(FhirMarkdown),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      date: t.readonly(FhirDateTime),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      description: t.readonly(FhirMarkdown),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      editor: t.readonlyArray(FhirContactDetail),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      effectivePeriod: t.readonly(FhirPeriod),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      endorser: t.readonlyArray(FhirContactDetail),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      exposureVariant: t.readonlyArray(FhirReference),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      extension: t.readonlyArray(FhirExtension),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      id: t.readonly(FhirId),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      implicitRules: t.readonly(FhirUri),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      jurisdiction: t.readonlyArray(FhirCodeableConcept),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      language: t.readonly(FhirCode),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      lastReviewDate: t.readonly(FhirDate),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      meta: t.readonly(FhirMeta),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      name: t.readonly(FhirString),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      note: t.readonlyArray(FhirAnnotation),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      outcome: t.readonlyArray(FhirReference),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      publisher: t.readonly(FhirString),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      relatedArtifact: t.readonlyArray(FhirRelatedArtifact),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      reviewer: t.readonlyArray(FhirContactDetail),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      shortTitle: t.readonly(FhirString),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      status: t.readonly(
        t.keyof({
          draft: null,
          active: null,
          retired: null,
          unknown: null,
        })
      ),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      subtitle: t.readonly(FhirString),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      text: t.readonly(FhirNarrative),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      title: t.readonly(FhirString),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      topic: t.readonlyArray(FhirCodeableConcept),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      url: t.readonly(FhirUri),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      useContext: t.readonlyArray(FhirUsageContext),
      /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
      version: t.readonly(FhirString),
    }),
  ])
)

/** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
export interface FhirEvidence {
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _approvalDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _copyright?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _lastReviewDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _publisher?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _shortTitle?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _subtitle?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _title?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _version?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  approvalDate?: Readonly<t.TypeOf<typeof FhirDate>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  author?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  copyright?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  description?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  editor?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  effectivePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  endorser?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  exposureBackground: Readonly<t.TypeOf<typeof FhirReference>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  exposureVariant?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  jurisdiction?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  lastReviewDate?: Readonly<t.TypeOf<typeof FhirDate>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  outcome?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  publisher?: Readonly<t.TypeOf<typeof FhirString>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  relatedArtifact?: ReadonlyArray<t.TypeOf<typeof FhirRelatedArtifact>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  resourceType: Readonly<'Evidence'>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  reviewer?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  shortTitle?: Readonly<t.TypeOf<typeof FhirString>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  subtitle?: Readonly<t.TypeOf<typeof FhirString>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  title?: Readonly<t.TypeOf<typeof FhirString>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  topic?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  useContext?: ReadonlyArray<t.TypeOf<typeof FhirUsageContext>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  version?: Readonly<t.TypeOf<typeof FhirString>>
}
/** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
export interface FhirEvidenceOutput {
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _approvalDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _copyright?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _lastReviewDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _publisher?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _shortTitle?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _subtitle?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _title?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  _version?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  approvalDate?: Readonly<t.OutputOf<typeof FhirDate>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  author?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  copyright?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  description?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  editor?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  effectivePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  endorser?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  exposureBackground: Readonly<t.OutputOf<typeof FhirReference>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  exposureVariant?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  jurisdiction?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  lastReviewDate?: Readonly<t.OutputOf<typeof FhirDate>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  outcome?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  publisher?: Readonly<t.OutputOf<typeof FhirString>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  relatedArtifact?: ReadonlyArray<t.OutputOf<typeof FhirRelatedArtifact>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  resourceType: Readonly<'Evidence'>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  reviewer?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  shortTitle?: Readonly<t.OutputOf<typeof FhirString>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  subtitle?: Readonly<t.OutputOf<typeof FhirString>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  title?: Readonly<t.OutputOf<typeof FhirString>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  topic?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  useContext?: ReadonlyArray<t.OutputOf<typeof FhirUsageContext>>
  /** The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about. */
  version?: Readonly<t.OutputOf<typeof FhirString>>
}
