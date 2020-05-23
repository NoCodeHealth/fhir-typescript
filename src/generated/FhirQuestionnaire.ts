import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCanonical } from './FhirCanonical'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirCoding } from './FhirCoding'
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
import { FhirQuestionnaire_Item } from './FhirQuestionnaire_Item'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'
import { FhirUsageContext } from './FhirUsageContext'

/** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
export const FhirQuestionnaire: t.Type<FhirQuestionnaire, FhirQuestionnaireOutput> = t.recursion(
  'FhirQuestionnaire',
  () =>
    t.intersection([
      t.type({
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        resourceType: t.readonly(t.literal('Questionnaire')),
      }),
      t.partial({
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        _approvalDate: t.readonly(FhirElement),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        _copyright: t.readonly(FhirElement),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        _date: t.readonly(FhirElement),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        _description: t.readonly(FhirElement),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        _experimental: t.readonly(FhirElement),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        _implicitRules: t.readonly(FhirElement),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        _language: t.readonly(FhirElement),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        _lastReviewDate: t.readonly(FhirElement),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        _name: t.readonly(FhirElement),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        _publisher: t.readonly(FhirElement),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        _purpose: t.readonly(FhirElement),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        _status: t.readonly(FhirElement),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        _subjectType: t.readonlyArray(FhirElement),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        _title: t.readonly(FhirElement),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        _url: t.readonly(FhirElement),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        _version: t.readonly(FhirElement),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        approvalDate: t.readonly(FhirDate),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        code: t.readonlyArray(FhirCoding),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        contact: t.readonlyArray(FhirContactDetail),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        contained: t.readonlyArray(FhirResourceList),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        copyright: t.readonly(FhirMarkdown),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        date: t.readonly(FhirDateTime),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        derivedFrom: t.readonlyArray(FhirCanonical),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        description: t.readonly(FhirMarkdown),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        effectivePeriod: t.readonly(FhirPeriod),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        experimental: t.readonly(FhirBoolean),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        extension: t.readonlyArray(FhirExtension),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        id: t.readonly(FhirId),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        implicitRules: t.readonly(FhirUri),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        item: t.readonlyArray(FhirQuestionnaire_Item),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        jurisdiction: t.readonlyArray(FhirCodeableConcept),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        language: t.readonly(FhirCode),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        lastReviewDate: t.readonly(FhirDate),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        meta: t.readonly(FhirMeta),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        name: t.readonly(FhirString),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        publisher: t.readonly(FhirString),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        purpose: t.readonly(FhirMarkdown),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        status: t.readonly(
          t.keyof({
            draft: null,
            active: null,
            retired: null,
            unknown: null,
          })
        ),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        subjectType: t.readonlyArray(FhirCode),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        text: t.readonly(FhirNarrative),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        title: t.readonly(FhirString),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        url: t.readonly(FhirUri),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        useContext: t.readonlyArray(FhirUsageContext),
        /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
        version: t.readonly(FhirString),
      }),
    ])
)

/** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
export interface FhirQuestionnaire {
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _approvalDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _copyright?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _experimental?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _lastReviewDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _publisher?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _purpose?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _subjectType?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _title?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _version?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  approvalDate?: Readonly<t.TypeOf<typeof FhirDate>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  code?: ReadonlyArray<t.TypeOf<typeof FhirCoding>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  copyright?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  derivedFrom?: ReadonlyArray<t.TypeOf<typeof FhirCanonical>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  description?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  effectivePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  experimental?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  item?: ReadonlyArray<t.TypeOf<typeof FhirQuestionnaire_Item>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  jurisdiction?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  lastReviewDate?: Readonly<t.TypeOf<typeof FhirDate>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  publisher?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  purpose?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  resourceType: Readonly<'Questionnaire'>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  subjectType?: ReadonlyArray<t.TypeOf<typeof FhirCode>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  title?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  useContext?: ReadonlyArray<t.TypeOf<typeof FhirUsageContext>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  version?: Readonly<t.TypeOf<typeof FhirString>>
}
/** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
export interface FhirQuestionnaireOutput {
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _approvalDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _copyright?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _experimental?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _lastReviewDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _publisher?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _purpose?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _subjectType?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _title?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _version?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  approvalDate?: Readonly<t.OutputOf<typeof FhirDate>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  code?: ReadonlyArray<t.OutputOf<typeof FhirCoding>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  copyright?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  derivedFrom?: ReadonlyArray<t.OutputOf<typeof FhirCanonical>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  description?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  effectivePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  experimental?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  item?: ReadonlyArray<t.OutputOf<typeof FhirQuestionnaire_Item>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  jurisdiction?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  lastReviewDate?: Readonly<t.OutputOf<typeof FhirDate>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  publisher?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  purpose?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  resourceType: Readonly<'Questionnaire'>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  subjectType?: ReadonlyArray<t.OutputOf<typeof FhirCode>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  title?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  useContext?: ReadonlyArray<t.OutputOf<typeof FhirUsageContext>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  version?: Readonly<t.OutputOf<typeof FhirString>>
}
