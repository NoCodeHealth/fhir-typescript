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
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirPlanDefinition_Action } from './FhirPlanDefinition_Action'
import { FhirPlanDefinition_Goal } from './FhirPlanDefinition_Goal'
import { FhirReference } from './FhirReference'
import { FhirRelatedArtifact } from './FhirRelatedArtifact'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'
import { FhirUsageContext } from './FhirUsageContext'

/** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
export const FhirPlanDefinition: t.Type<FhirPlanDefinition, FhirPlanDefinitionOutput> = t.recursion(
  'FhirPlanDefinition',
  () =>
    t.intersection([
      t.type({
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        resourceType: t.readonly(t.literal('PlanDefinition')),
      }),
      t.partial({
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        _approvalDate: t.readonly(FhirElement),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        _copyright: t.readonly(FhirElement),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        _date: t.readonly(FhirElement),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        _description: t.readonly(FhirElement),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        _experimental: t.readonly(FhirElement),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        _implicitRules: t.readonly(FhirElement),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        _language: t.readonly(FhirElement),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        _lastReviewDate: t.readonly(FhirElement),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        _name: t.readonly(FhirElement),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        _publisher: t.readonly(FhirElement),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        _purpose: t.readonly(FhirElement),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        _status: t.readonly(FhirElement),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        _subtitle: t.readonly(FhirElement),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        _title: t.readonly(FhirElement),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        _url: t.readonly(FhirElement),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        _usage: t.readonly(FhirElement),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        _version: t.readonly(FhirElement),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        action: t.readonlyArray(FhirPlanDefinition_Action),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        approvalDate: t.readonly(FhirDate),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        author: t.readonlyArray(FhirContactDetail),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        contact: t.readonlyArray(FhirContactDetail),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        contained: t.readonlyArray(FhirResourceList),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        copyright: t.readonly(FhirMarkdown),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        date: t.readonly(FhirDateTime),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        description: t.readonly(FhirMarkdown),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        editor: t.readonlyArray(FhirContactDetail),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        effectivePeriod: t.readonly(FhirPeriod),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        endorser: t.readonlyArray(FhirContactDetail),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        experimental: t.readonly(FhirBoolean),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        extension: t.readonlyArray(FhirExtension),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        goal: t.readonlyArray(FhirPlanDefinition_Goal),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        id: t.readonly(FhirId),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        implicitRules: t.readonly(FhirUri),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        jurisdiction: t.readonlyArray(FhirCodeableConcept),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        language: t.readonly(FhirCode),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        lastReviewDate: t.readonly(FhirDate),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        library: t.readonlyArray(FhirCanonical),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        meta: t.readonly(FhirMeta),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        name: t.readonly(FhirString),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        publisher: t.readonly(FhirString),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        purpose: t.readonly(FhirMarkdown),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        relatedArtifact: t.readonlyArray(FhirRelatedArtifact),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        reviewer: t.readonlyArray(FhirContactDetail),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        status: t.readonly(
          t.keyof({
            draft: null,
            active: null,
            retired: null,
            unknown: null,
          })
        ),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        subjectCodeableConcept: t.readonly(FhirCodeableConcept),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        subjectReference: t.readonly(FhirReference),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        subtitle: t.readonly(FhirString),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        text: t.readonly(FhirNarrative),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        title: t.readonly(FhirString),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        topic: t.readonlyArray(FhirCodeableConcept),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        type: t.readonly(FhirCodeableConcept),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        url: t.readonly(FhirUri),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        usage: t.readonly(FhirString),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        useContext: t.readonlyArray(FhirUsageContext),
        /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
        version: t.readonly(FhirString),
      }),
    ])
)

/** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
export interface FhirPlanDefinition {
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _approvalDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _copyright?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _experimental?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _lastReviewDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _publisher?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _purpose?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _subtitle?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _title?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _usage?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _version?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  action?: ReadonlyArray<t.TypeOf<typeof FhirPlanDefinition_Action>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  approvalDate?: Readonly<t.TypeOf<typeof FhirDate>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  author?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  copyright?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  description?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  editor?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  effectivePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  endorser?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  experimental?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  goal?: ReadonlyArray<t.TypeOf<typeof FhirPlanDefinition_Goal>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  jurisdiction?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  lastReviewDate?: Readonly<t.TypeOf<typeof FhirDate>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  library?: ReadonlyArray<t.TypeOf<typeof FhirCanonical>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  publisher?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  purpose?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  relatedArtifact?: ReadonlyArray<t.TypeOf<typeof FhirRelatedArtifact>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  resourceType: Readonly<'PlanDefinition'>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  reviewer?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  subjectCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  subjectReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  subtitle?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  title?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  topic?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  usage?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  useContext?: ReadonlyArray<t.TypeOf<typeof FhirUsageContext>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  version?: Readonly<t.TypeOf<typeof FhirString>>
}
/** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
export interface FhirPlanDefinitionOutput {
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _approvalDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _copyright?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _experimental?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _lastReviewDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _publisher?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _purpose?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _subtitle?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _title?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _usage?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _version?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  action?: ReadonlyArray<t.OutputOf<typeof FhirPlanDefinition_Action>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  approvalDate?: Readonly<t.OutputOf<typeof FhirDate>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  author?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  copyright?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  description?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  editor?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  effectivePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  endorser?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  experimental?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  goal?: ReadonlyArray<t.OutputOf<typeof FhirPlanDefinition_Goal>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  jurisdiction?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  lastReviewDate?: Readonly<t.OutputOf<typeof FhirDate>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  library?: ReadonlyArray<t.OutputOf<typeof FhirCanonical>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  publisher?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  purpose?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  relatedArtifact?: ReadonlyArray<t.OutputOf<typeof FhirRelatedArtifact>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  resourceType: Readonly<'PlanDefinition'>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  reviewer?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  subjectCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  subjectReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  subtitle?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  title?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  topic?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  usage?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  useContext?: ReadonlyArray<t.OutputOf<typeof FhirUsageContext>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  version?: Readonly<t.OutputOf<typeof FhirString>>
}
