import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirContactDetail } from './FhirContactDetail'
import { FhirDate } from './FhirDate'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirEvidenceVariable_Characteristic } from './FhirEvidenceVariable_Characteristic'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMarkdown } from './FhirMarkdown'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirRelatedArtifact } from './FhirRelatedArtifact'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'
import { FhirUsageContext } from './FhirUsageContext'

/** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
export const FhirEvidenceVariable: t.Type<FhirEvidenceVariable, FhirEvidenceVariableOutput> = t.recursion(
  'FhirEvidenceVariable',
  () =>
    t.intersection([
      t.type({
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        characteristic: t.readonlyArray(FhirEvidenceVariable_Characteristic),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        resourceType: t.readonly(t.literal('EvidenceVariable')),
      }),
      t.partial({
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        _approvalDate: t.readonly(FhirElement),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        _copyright: t.readonly(FhirElement),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        _date: t.readonly(FhirElement),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        _description: t.readonly(FhirElement),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        _implicitRules: t.readonly(FhirElement),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        _language: t.readonly(FhirElement),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        _lastReviewDate: t.readonly(FhirElement),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        _name: t.readonly(FhirElement),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        _publisher: t.readonly(FhirElement),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        _shortTitle: t.readonly(FhirElement),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        _status: t.readonly(FhirElement),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        _subtitle: t.readonly(FhirElement),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        _title: t.readonly(FhirElement),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        _type: t.readonly(FhirElement),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        _url: t.readonly(FhirElement),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        _version: t.readonly(FhirElement),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        approvalDate: t.readonly(FhirDate),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        author: t.readonlyArray(FhirContactDetail),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        contact: t.readonlyArray(FhirContactDetail),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        contained: t.readonlyArray(FhirResourceList),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        copyright: t.readonly(FhirMarkdown),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        date: t.readonly(FhirDateTime),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        description: t.readonly(FhirMarkdown),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        editor: t.readonlyArray(FhirContactDetail),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        effectivePeriod: t.readonly(FhirPeriod),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        endorser: t.readonlyArray(FhirContactDetail),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        extension: t.readonlyArray(FhirExtension),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        id: t.readonly(FhirId),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        implicitRules: t.readonly(FhirUri),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        jurisdiction: t.readonlyArray(FhirCodeableConcept),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        language: t.readonly(FhirCode),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        lastReviewDate: t.readonly(FhirDate),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        meta: t.readonly(FhirMeta),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        name: t.readonly(FhirString),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        note: t.readonlyArray(FhirAnnotation),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        publisher: t.readonly(FhirString),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        relatedArtifact: t.readonlyArray(FhirRelatedArtifact),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        reviewer: t.readonlyArray(FhirContactDetail),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        shortTitle: t.readonly(FhirString),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        status: t.readonly(
          t.keyof({
            draft: null,
            active: null,
            retired: null,
            unknown: null,
          })
        ),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        subtitle: t.readonly(FhirString),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        text: t.readonly(FhirNarrative),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        title: t.readonly(FhirString),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        topic: t.readonlyArray(FhirCodeableConcept),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        type: t.readonly(
          t.keyof({
            dichotomous: null,
            continuous: null,
            descriptive: null,
          })
        ),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        url: t.readonly(FhirUri),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        useContext: t.readonlyArray(FhirUsageContext),
        /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
        version: t.readonly(FhirString),
      }),
    ])
)

/** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
export interface FhirEvidenceVariable {
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _approvalDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _copyright?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _lastReviewDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _publisher?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _shortTitle?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _subtitle?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _title?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _version?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  approvalDate?: Readonly<t.TypeOf<typeof FhirDate>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  author?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  characteristic: ReadonlyArray<t.TypeOf<typeof FhirEvidenceVariable_Characteristic>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  copyright?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  description?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  editor?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  effectivePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  endorser?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  jurisdiction?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  lastReviewDate?: Readonly<t.TypeOf<typeof FhirDate>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  publisher?: Readonly<t.TypeOf<typeof FhirString>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  relatedArtifact?: ReadonlyArray<t.TypeOf<typeof FhirRelatedArtifact>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  resourceType: Readonly<'EvidenceVariable'>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  reviewer?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  shortTitle?: Readonly<t.TypeOf<typeof FhirString>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  subtitle?: Readonly<t.TypeOf<typeof FhirString>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  title?: Readonly<t.TypeOf<typeof FhirString>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  topic?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  type?: Readonly<'dichotomous' | 'continuous' | 'descriptive'>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  useContext?: ReadonlyArray<t.TypeOf<typeof FhirUsageContext>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  version?: Readonly<t.TypeOf<typeof FhirString>>
}
/** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
export interface FhirEvidenceVariableOutput {
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _approvalDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _copyright?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _lastReviewDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _publisher?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _shortTitle?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _subtitle?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _title?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _version?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  approvalDate?: Readonly<t.OutputOf<typeof FhirDate>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  author?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  characteristic: ReadonlyArray<t.OutputOf<typeof FhirEvidenceVariable_Characteristic>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  copyright?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  description?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  editor?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  effectivePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  endorser?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  jurisdiction?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  lastReviewDate?: Readonly<t.OutputOf<typeof FhirDate>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  publisher?: Readonly<t.OutputOf<typeof FhirString>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  relatedArtifact?: ReadonlyArray<t.OutputOf<typeof FhirRelatedArtifact>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  resourceType: Readonly<'EvidenceVariable'>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  reviewer?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  shortTitle?: Readonly<t.OutputOf<typeof FhirString>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  subtitle?: Readonly<t.OutputOf<typeof FhirString>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  title?: Readonly<t.OutputOf<typeof FhirString>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  topic?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  type?: Readonly<'dichotomous' | 'continuous' | 'descriptive'>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  useContext?: ReadonlyArray<t.OutputOf<typeof FhirUsageContext>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  version?: Readonly<t.OutputOf<typeof FhirString>>
}
