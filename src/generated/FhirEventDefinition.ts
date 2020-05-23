import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
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
import { FhirTriggerDefinition } from './FhirTriggerDefinition'
import { FhirUri } from './FhirUri'
import { FhirUsageContext } from './FhirUsageContext'

/** The EventDefinition resource provides a reusable description of when a particular event can occur. */
export const FhirEventDefinition: t.Type<FhirEventDefinition, FhirEventDefinitionOutput> = t.recursion(
  'FhirEventDefinition',
  () =>
    t.intersection([
      t.type({
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        resourceType: t.readonly(t.literal('EventDefinition')),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        trigger: t.readonlyArray(FhirTriggerDefinition),
      }),
      t.partial({
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        _approvalDate: t.readonly(FhirElement),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        _copyright: t.readonly(FhirElement),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        _date: t.readonly(FhirElement),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        _description: t.readonly(FhirElement),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        _experimental: t.readonly(FhirElement),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        _implicitRules: t.readonly(FhirElement),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        _language: t.readonly(FhirElement),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        _lastReviewDate: t.readonly(FhirElement),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        _name: t.readonly(FhirElement),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        _publisher: t.readonly(FhirElement),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        _purpose: t.readonly(FhirElement),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        _status: t.readonly(FhirElement),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        _subtitle: t.readonly(FhirElement),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        _title: t.readonly(FhirElement),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        _url: t.readonly(FhirElement),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        _usage: t.readonly(FhirElement),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        _version: t.readonly(FhirElement),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        approvalDate: t.readonly(FhirDate),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        author: t.readonlyArray(FhirContactDetail),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        contact: t.readonlyArray(FhirContactDetail),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        contained: t.readonlyArray(FhirResourceList),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        copyright: t.readonly(FhirMarkdown),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        date: t.readonly(FhirDateTime),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        description: t.readonly(FhirMarkdown),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        editor: t.readonlyArray(FhirContactDetail),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        effectivePeriod: t.readonly(FhirPeriod),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        endorser: t.readonlyArray(FhirContactDetail),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        experimental: t.readonly(FhirBoolean),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        extension: t.readonlyArray(FhirExtension),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        id: t.readonly(FhirId),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        implicitRules: t.readonly(FhirUri),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        jurisdiction: t.readonlyArray(FhirCodeableConcept),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        language: t.readonly(FhirCode),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        lastReviewDate: t.readonly(FhirDate),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        meta: t.readonly(FhirMeta),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        name: t.readonly(FhirString),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        publisher: t.readonly(FhirString),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        purpose: t.readonly(FhirMarkdown),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        relatedArtifact: t.readonlyArray(FhirRelatedArtifact),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        reviewer: t.readonlyArray(FhirContactDetail),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        status: t.readonly(
          t.keyof({
            draft: null,
            active: null,
            retired: null,
            unknown: null,
          })
        ),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        subjectCodeableConcept: t.readonly(FhirCodeableConcept),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        subjectReference: t.readonly(FhirReference),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        subtitle: t.readonly(FhirString),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        text: t.readonly(FhirNarrative),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        title: t.readonly(FhirString),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        topic: t.readonlyArray(FhirCodeableConcept),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        url: t.readonly(FhirUri),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        usage: t.readonly(FhirString),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        useContext: t.readonlyArray(FhirUsageContext),
        /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
        version: t.readonly(FhirString),
      }),
    ])
)

/** The EventDefinition resource provides a reusable description of when a particular event can occur. */
export interface FhirEventDefinition {
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _approvalDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _copyright?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _experimental?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _lastReviewDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _publisher?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _purpose?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _subtitle?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _title?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _usage?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _version?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  approvalDate?: Readonly<t.TypeOf<typeof FhirDate>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  author?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  copyright?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  description?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  editor?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  effectivePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  endorser?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  experimental?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  jurisdiction?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  lastReviewDate?: Readonly<t.TypeOf<typeof FhirDate>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  publisher?: Readonly<t.TypeOf<typeof FhirString>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  purpose?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  relatedArtifact?: ReadonlyArray<t.TypeOf<typeof FhirRelatedArtifact>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  resourceType: Readonly<'EventDefinition'>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  reviewer?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  subjectCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  subjectReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  subtitle?: Readonly<t.TypeOf<typeof FhirString>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  title?: Readonly<t.TypeOf<typeof FhirString>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  topic?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  trigger: ReadonlyArray<t.TypeOf<typeof FhirTriggerDefinition>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  usage?: Readonly<t.TypeOf<typeof FhirString>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  useContext?: ReadonlyArray<t.TypeOf<typeof FhirUsageContext>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  version?: Readonly<t.TypeOf<typeof FhirString>>
}
/** The EventDefinition resource provides a reusable description of when a particular event can occur. */
export interface FhirEventDefinitionOutput {
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _approvalDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _copyright?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _experimental?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _lastReviewDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _publisher?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _purpose?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _subtitle?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _title?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _usage?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  _version?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  approvalDate?: Readonly<t.OutputOf<typeof FhirDate>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  author?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  copyright?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  description?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  editor?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  effectivePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  endorser?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  experimental?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  jurisdiction?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  lastReviewDate?: Readonly<t.OutputOf<typeof FhirDate>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  publisher?: Readonly<t.OutputOf<typeof FhirString>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  purpose?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  relatedArtifact?: ReadonlyArray<t.OutputOf<typeof FhirRelatedArtifact>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  resourceType: Readonly<'EventDefinition'>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  reviewer?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  subjectCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  subjectReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  subtitle?: Readonly<t.OutputOf<typeof FhirString>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  title?: Readonly<t.OutputOf<typeof FhirString>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  topic?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  trigger: ReadonlyArray<t.OutputOf<typeof FhirTriggerDefinition>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  usage?: Readonly<t.OutputOf<typeof FhirString>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  useContext?: ReadonlyArray<t.OutputOf<typeof FhirUsageContext>>
  /** The EventDefinition resource provides a reusable description of when a particular event can occur. */
  version?: Readonly<t.OutputOf<typeof FhirString>>
}
