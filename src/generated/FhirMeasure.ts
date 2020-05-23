import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCanonical } from './FhirCanonical'
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
import { FhirMeasure_Group } from './FhirMeasure_Group'
import { FhirMeasure_SupplementalData } from './FhirMeasure_SupplementalData'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirRelatedArtifact } from './FhirRelatedArtifact'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'
import { FhirUsageContext } from './FhirUsageContext'

/** The Measure resource provides the definition of a quality measure. */
export const FhirMeasure: t.Type<FhirMeasure, FhirMeasureOutput> = t.recursion('FhirMeasure', () =>
  t.intersection([
    t.type({
      /** The Measure resource provides the definition of a quality measure. */
      resourceType: t.readonly(t.literal('Measure')),
    }),
    t.partial({
      /** The Measure resource provides the definition of a quality measure. */
      _approvalDate: t.readonly(FhirElement),
      /** The Measure resource provides the definition of a quality measure. */
      _clinicalRecommendationStatement: t.readonly(FhirElement),
      /** The Measure resource provides the definition of a quality measure. */
      _copyright: t.readonly(FhirElement),
      /** The Measure resource provides the definition of a quality measure. */
      _date: t.readonly(FhirElement),
      /** The Measure resource provides the definition of a quality measure. */
      _definition: t.readonlyArray(FhirElement),
      /** The Measure resource provides the definition of a quality measure. */
      _description: t.readonly(FhirElement),
      /** The Measure resource provides the definition of a quality measure. */
      _disclaimer: t.readonly(FhirElement),
      /** The Measure resource provides the definition of a quality measure. */
      _experimental: t.readonly(FhirElement),
      /** The Measure resource provides the definition of a quality measure. */
      _guidance: t.readonly(FhirElement),
      /** The Measure resource provides the definition of a quality measure. */
      _implicitRules: t.readonly(FhirElement),
      /** The Measure resource provides the definition of a quality measure. */
      _language: t.readonly(FhirElement),
      /** The Measure resource provides the definition of a quality measure. */
      _lastReviewDate: t.readonly(FhirElement),
      /** The Measure resource provides the definition of a quality measure. */
      _name: t.readonly(FhirElement),
      /** The Measure resource provides the definition of a quality measure. */
      _publisher: t.readonly(FhirElement),
      /** The Measure resource provides the definition of a quality measure. */
      _purpose: t.readonly(FhirElement),
      /** The Measure resource provides the definition of a quality measure. */
      _rateAggregation: t.readonly(FhirElement),
      /** The Measure resource provides the definition of a quality measure. */
      _rationale: t.readonly(FhirElement),
      /** The Measure resource provides the definition of a quality measure. */
      _riskAdjustment: t.readonly(FhirElement),
      /** The Measure resource provides the definition of a quality measure. */
      _status: t.readonly(FhirElement),
      /** The Measure resource provides the definition of a quality measure. */
      _subtitle: t.readonly(FhirElement),
      /** The Measure resource provides the definition of a quality measure. */
      _title: t.readonly(FhirElement),
      /** The Measure resource provides the definition of a quality measure. */
      _url: t.readonly(FhirElement),
      /** The Measure resource provides the definition of a quality measure. */
      _usage: t.readonly(FhirElement),
      /** The Measure resource provides the definition of a quality measure. */
      _version: t.readonly(FhirElement),
      /** The Measure resource provides the definition of a quality measure. */
      approvalDate: t.readonly(FhirDate),
      /** The Measure resource provides the definition of a quality measure. */
      author: t.readonlyArray(FhirContactDetail),
      /** The Measure resource provides the definition of a quality measure. */
      clinicalRecommendationStatement: t.readonly(FhirMarkdown),
      /** The Measure resource provides the definition of a quality measure. */
      compositeScoring: t.readonly(FhirCodeableConcept),
      /** The Measure resource provides the definition of a quality measure. */
      contact: t.readonlyArray(FhirContactDetail),
      /** The Measure resource provides the definition of a quality measure. */
      contained: t.readonlyArray(FhirResourceList),
      /** The Measure resource provides the definition of a quality measure. */
      copyright: t.readonly(FhirMarkdown),
      /** The Measure resource provides the definition of a quality measure. */
      date: t.readonly(FhirDateTime),
      /** The Measure resource provides the definition of a quality measure. */
      definition: t.readonlyArray(FhirMarkdown),
      /** The Measure resource provides the definition of a quality measure. */
      description: t.readonly(FhirMarkdown),
      /** The Measure resource provides the definition of a quality measure. */
      disclaimer: t.readonly(FhirMarkdown),
      /** The Measure resource provides the definition of a quality measure. */
      editor: t.readonlyArray(FhirContactDetail),
      /** The Measure resource provides the definition of a quality measure. */
      effectivePeriod: t.readonly(FhirPeriod),
      /** The Measure resource provides the definition of a quality measure. */
      endorser: t.readonlyArray(FhirContactDetail),
      /** The Measure resource provides the definition of a quality measure. */
      experimental: t.readonly(FhirBoolean),
      /** The Measure resource provides the definition of a quality measure. */
      extension: t.readonlyArray(FhirExtension),
      /** The Measure resource provides the definition of a quality measure. */
      group: t.readonlyArray(FhirMeasure_Group),
      /** The Measure resource provides the definition of a quality measure. */
      guidance: t.readonly(FhirMarkdown),
      /** The Measure resource provides the definition of a quality measure. */
      id: t.readonly(FhirId),
      /** The Measure resource provides the definition of a quality measure. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** The Measure resource provides the definition of a quality measure. */
      implicitRules: t.readonly(FhirUri),
      /** The Measure resource provides the definition of a quality measure. */
      improvementNotation: t.readonly(FhirCodeableConcept),
      /** The Measure resource provides the definition of a quality measure. */
      jurisdiction: t.readonlyArray(FhirCodeableConcept),
      /** The Measure resource provides the definition of a quality measure. */
      language: t.readonly(FhirCode),
      /** The Measure resource provides the definition of a quality measure. */
      lastReviewDate: t.readonly(FhirDate),
      /** The Measure resource provides the definition of a quality measure. */
      library: t.readonlyArray(FhirCanonical),
      /** The Measure resource provides the definition of a quality measure. */
      meta: t.readonly(FhirMeta),
      /** The Measure resource provides the definition of a quality measure. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** The Measure resource provides the definition of a quality measure. */
      name: t.readonly(FhirString),
      /** The Measure resource provides the definition of a quality measure. */
      publisher: t.readonly(FhirString),
      /** The Measure resource provides the definition of a quality measure. */
      purpose: t.readonly(FhirMarkdown),
      /** The Measure resource provides the definition of a quality measure. */
      rateAggregation: t.readonly(FhirString),
      /** The Measure resource provides the definition of a quality measure. */
      rationale: t.readonly(FhirMarkdown),
      /** The Measure resource provides the definition of a quality measure. */
      relatedArtifact: t.readonlyArray(FhirRelatedArtifact),
      /** The Measure resource provides the definition of a quality measure. */
      reviewer: t.readonlyArray(FhirContactDetail),
      /** The Measure resource provides the definition of a quality measure. */
      riskAdjustment: t.readonly(FhirString),
      /** The Measure resource provides the definition of a quality measure. */
      scoring: t.readonly(FhirCodeableConcept),
      /** The Measure resource provides the definition of a quality measure. */
      status: t.readonly(
        t.keyof({
          draft: null,
          active: null,
          retired: null,
          unknown: null,
        })
      ),
      /** The Measure resource provides the definition of a quality measure. */
      subjectCodeableConcept: t.readonly(FhirCodeableConcept),
      /** The Measure resource provides the definition of a quality measure. */
      subjectReference: t.readonly(FhirReference),
      /** The Measure resource provides the definition of a quality measure. */
      subtitle: t.readonly(FhirString),
      /** The Measure resource provides the definition of a quality measure. */
      supplementalData: t.readonlyArray(FhirMeasure_SupplementalData),
      /** The Measure resource provides the definition of a quality measure. */
      text: t.readonly(FhirNarrative),
      /** The Measure resource provides the definition of a quality measure. */
      title: t.readonly(FhirString),
      /** The Measure resource provides the definition of a quality measure. */
      topic: t.readonlyArray(FhirCodeableConcept),
      /** The Measure resource provides the definition of a quality measure. */
      type: t.readonlyArray(FhirCodeableConcept),
      /** The Measure resource provides the definition of a quality measure. */
      url: t.readonly(FhirUri),
      /** The Measure resource provides the definition of a quality measure. */
      usage: t.readonly(FhirString),
      /** The Measure resource provides the definition of a quality measure. */
      useContext: t.readonlyArray(FhirUsageContext),
      /** The Measure resource provides the definition of a quality measure. */
      version: t.readonly(FhirString),
    }),
  ])
)

/** The Measure resource provides the definition of a quality measure. */
export interface FhirMeasure {
  /** The Measure resource provides the definition of a quality measure. */
  _approvalDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _clinicalRecommendationStatement?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _copyright?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _definition?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _disclaimer?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _experimental?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _guidance?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _lastReviewDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _publisher?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _purpose?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _rateAggregation?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _rationale?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _riskAdjustment?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _subtitle?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _title?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _usage?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _version?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  approvalDate?: Readonly<t.TypeOf<typeof FhirDate>>
  /** The Measure resource provides the definition of a quality measure. */
  author?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** The Measure resource provides the definition of a quality measure. */
  clinicalRecommendationStatement?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** The Measure resource provides the definition of a quality measure. */
  compositeScoring?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The Measure resource provides the definition of a quality measure. */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** The Measure resource provides the definition of a quality measure. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** The Measure resource provides the definition of a quality measure. */
  copyright?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** The Measure resource provides the definition of a quality measure. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** The Measure resource provides the definition of a quality measure. */
  definition?: ReadonlyArray<t.TypeOf<typeof FhirMarkdown>>
  /** The Measure resource provides the definition of a quality measure. */
  description?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** The Measure resource provides the definition of a quality measure. */
  disclaimer?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** The Measure resource provides the definition of a quality measure. */
  editor?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** The Measure resource provides the definition of a quality measure. */
  effectivePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** The Measure resource provides the definition of a quality measure. */
  endorser?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** The Measure resource provides the definition of a quality measure. */
  experimental?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** The Measure resource provides the definition of a quality measure. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The Measure resource provides the definition of a quality measure. */
  group?: ReadonlyArray<t.TypeOf<typeof FhirMeasure_Group>>
  /** The Measure resource provides the definition of a quality measure. */
  guidance?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** The Measure resource provides the definition of a quality measure. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** The Measure resource provides the definition of a quality measure. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** The Measure resource provides the definition of a quality measure. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The Measure resource provides the definition of a quality measure. */
  improvementNotation?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The Measure resource provides the definition of a quality measure. */
  jurisdiction?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The Measure resource provides the definition of a quality measure. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** The Measure resource provides the definition of a quality measure. */
  lastReviewDate?: Readonly<t.TypeOf<typeof FhirDate>>
  /** The Measure resource provides the definition of a quality measure. */
  library?: ReadonlyArray<t.TypeOf<typeof FhirCanonical>>
  /** The Measure resource provides the definition of a quality measure. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** The Measure resource provides the definition of a quality measure. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The Measure resource provides the definition of a quality measure. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** The Measure resource provides the definition of a quality measure. */
  publisher?: Readonly<t.TypeOf<typeof FhirString>>
  /** The Measure resource provides the definition of a quality measure. */
  purpose?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** The Measure resource provides the definition of a quality measure. */
  rateAggregation?: Readonly<t.TypeOf<typeof FhirString>>
  /** The Measure resource provides the definition of a quality measure. */
  rationale?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** The Measure resource provides the definition of a quality measure. */
  relatedArtifact?: ReadonlyArray<t.TypeOf<typeof FhirRelatedArtifact>>
  /** The Measure resource provides the definition of a quality measure. */
  resourceType: Readonly<'Measure'>
  /** The Measure resource provides the definition of a quality measure. */
  reviewer?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** The Measure resource provides the definition of a quality measure. */
  riskAdjustment?: Readonly<t.TypeOf<typeof FhirString>>
  /** The Measure resource provides the definition of a quality measure. */
  scoring?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The Measure resource provides the definition of a quality measure. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** The Measure resource provides the definition of a quality measure. */
  subjectCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The Measure resource provides the definition of a quality measure. */
  subjectReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The Measure resource provides the definition of a quality measure. */
  subtitle?: Readonly<t.TypeOf<typeof FhirString>>
  /** The Measure resource provides the definition of a quality measure. */
  supplementalData?: ReadonlyArray<t.TypeOf<typeof FhirMeasure_SupplementalData>>
  /** The Measure resource provides the definition of a quality measure. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** The Measure resource provides the definition of a quality measure. */
  title?: Readonly<t.TypeOf<typeof FhirString>>
  /** The Measure resource provides the definition of a quality measure. */
  topic?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The Measure resource provides the definition of a quality measure. */
  type?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The Measure resource provides the definition of a quality measure. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The Measure resource provides the definition of a quality measure. */
  usage?: Readonly<t.TypeOf<typeof FhirString>>
  /** The Measure resource provides the definition of a quality measure. */
  useContext?: ReadonlyArray<t.TypeOf<typeof FhirUsageContext>>
  /** The Measure resource provides the definition of a quality measure. */
  version?: Readonly<t.TypeOf<typeof FhirString>>
}
/** The Measure resource provides the definition of a quality measure. */
export interface FhirMeasureOutput {
  /** The Measure resource provides the definition of a quality measure. */
  _approvalDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _clinicalRecommendationStatement?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _copyright?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _definition?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _disclaimer?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _experimental?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _guidance?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _lastReviewDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _publisher?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _purpose?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _rateAggregation?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _rationale?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _riskAdjustment?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _subtitle?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _title?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _usage?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  _version?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  approvalDate?: Readonly<t.OutputOf<typeof FhirDate>>
  /** The Measure resource provides the definition of a quality measure. */
  author?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** The Measure resource provides the definition of a quality measure. */
  clinicalRecommendationStatement?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** The Measure resource provides the definition of a quality measure. */
  compositeScoring?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The Measure resource provides the definition of a quality measure. */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** The Measure resource provides the definition of a quality measure. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** The Measure resource provides the definition of a quality measure. */
  copyright?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** The Measure resource provides the definition of a quality measure. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** The Measure resource provides the definition of a quality measure. */
  definition?: ReadonlyArray<t.OutputOf<typeof FhirMarkdown>>
  /** The Measure resource provides the definition of a quality measure. */
  description?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** The Measure resource provides the definition of a quality measure. */
  disclaimer?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** The Measure resource provides the definition of a quality measure. */
  editor?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** The Measure resource provides the definition of a quality measure. */
  effectivePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** The Measure resource provides the definition of a quality measure. */
  endorser?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** The Measure resource provides the definition of a quality measure. */
  experimental?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** The Measure resource provides the definition of a quality measure. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The Measure resource provides the definition of a quality measure. */
  group?: ReadonlyArray<t.OutputOf<typeof FhirMeasure_Group>>
  /** The Measure resource provides the definition of a quality measure. */
  guidance?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** The Measure resource provides the definition of a quality measure. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** The Measure resource provides the definition of a quality measure. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** The Measure resource provides the definition of a quality measure. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The Measure resource provides the definition of a quality measure. */
  improvementNotation?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The Measure resource provides the definition of a quality measure. */
  jurisdiction?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The Measure resource provides the definition of a quality measure. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** The Measure resource provides the definition of a quality measure. */
  lastReviewDate?: Readonly<t.OutputOf<typeof FhirDate>>
  /** The Measure resource provides the definition of a quality measure. */
  library?: ReadonlyArray<t.OutputOf<typeof FhirCanonical>>
  /** The Measure resource provides the definition of a quality measure. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** The Measure resource provides the definition of a quality measure. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The Measure resource provides the definition of a quality measure. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** The Measure resource provides the definition of a quality measure. */
  publisher?: Readonly<t.OutputOf<typeof FhirString>>
  /** The Measure resource provides the definition of a quality measure. */
  purpose?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** The Measure resource provides the definition of a quality measure. */
  rateAggregation?: Readonly<t.OutputOf<typeof FhirString>>
  /** The Measure resource provides the definition of a quality measure. */
  rationale?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** The Measure resource provides the definition of a quality measure. */
  relatedArtifact?: ReadonlyArray<t.OutputOf<typeof FhirRelatedArtifact>>
  /** The Measure resource provides the definition of a quality measure. */
  resourceType: Readonly<'Measure'>
  /** The Measure resource provides the definition of a quality measure. */
  reviewer?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** The Measure resource provides the definition of a quality measure. */
  riskAdjustment?: Readonly<t.OutputOf<typeof FhirString>>
  /** The Measure resource provides the definition of a quality measure. */
  scoring?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The Measure resource provides the definition of a quality measure. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** The Measure resource provides the definition of a quality measure. */
  subjectCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The Measure resource provides the definition of a quality measure. */
  subjectReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The Measure resource provides the definition of a quality measure. */
  subtitle?: Readonly<t.OutputOf<typeof FhirString>>
  /** The Measure resource provides the definition of a quality measure. */
  supplementalData?: ReadonlyArray<t.OutputOf<typeof FhirMeasure_SupplementalData>>
  /** The Measure resource provides the definition of a quality measure. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** The Measure resource provides the definition of a quality measure. */
  title?: Readonly<t.OutputOf<typeof FhirString>>
  /** The Measure resource provides the definition of a quality measure. */
  topic?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The Measure resource provides the definition of a quality measure. */
  type?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The Measure resource provides the definition of a quality measure. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The Measure resource provides the definition of a quality measure. */
  usage?: Readonly<t.OutputOf<typeof FhirString>>
  /** The Measure resource provides the definition of a quality measure. */
  useContext?: ReadonlyArray<t.OutputOf<typeof FhirUsageContext>>
  /** The Measure resource provides the definition of a quality measure. */
  version?: Readonly<t.OutputOf<typeof FhirString>>
}
