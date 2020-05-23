import * as t from 'io-ts'
import { FhirActivityDefinition_DynamicValue } from './FhirActivityDefinition_DynamicValue'
import { FhirActivityDefinition_Participant } from './FhirActivityDefinition_Participant'
import { FhirAge } from './FhirAge'
import { FhirBoolean } from './FhirBoolean'
import { FhirCanonical } from './FhirCanonical'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirContactDetail } from './FhirContactDetail'
import { FhirDate } from './FhirDate'
import { FhirDateTime } from './FhirDateTime'
import { FhirDosage } from './FhirDosage'
import { FhirDuration } from './FhirDuration'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMarkdown } from './FhirMarkdown'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirQuantity } from './FhirQuantity'
import { FhirRange } from './FhirRange'
import { FhirReference } from './FhirReference'
import { FhirRelatedArtifact } from './FhirRelatedArtifact'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirTiming } from './FhirTiming'
import { FhirUri } from './FhirUri'
import { FhirUsageContext } from './FhirUsageContext'

/** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
export const FhirActivityDefinition: t.Type<FhirActivityDefinition, FhirActivityDefinitionOutput> = t.recursion(
  'FhirActivityDefinition',
  () =>
    t.intersection([
      t.type({
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        resourceType: t.readonly(t.literal('ActivityDefinition')),
      }),
      t.partial({
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        _approvalDate: t.readonly(FhirElement),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        _copyright: t.readonly(FhirElement),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        _date: t.readonly(FhirElement),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        _description: t.readonly(FhirElement),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        _doNotPerform: t.readonly(FhirElement),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        _experimental: t.readonly(FhirElement),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        _implicitRules: t.readonly(FhirElement),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        _intent: t.readonly(FhirElement),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        _kind: t.readonly(FhirElement),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        _language: t.readonly(FhirElement),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        _lastReviewDate: t.readonly(FhirElement),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        _name: t.readonly(FhirElement),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        _priority: t.readonly(FhirElement),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        _publisher: t.readonly(FhirElement),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        _purpose: t.readonly(FhirElement),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        _status: t.readonly(FhirElement),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        _subtitle: t.readonly(FhirElement),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        _timingDateTime: t.readonly(FhirElement),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        _title: t.readonly(FhirElement),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        _url: t.readonly(FhirElement),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        _usage: t.readonly(FhirElement),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        _version: t.readonly(FhirElement),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        approvalDate: t.readonly(FhirDate),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        author: t.readonlyArray(FhirContactDetail),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        bodySite: t.readonlyArray(FhirCodeableConcept),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        code: t.readonly(FhirCodeableConcept),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        contact: t.readonlyArray(FhirContactDetail),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        contained: t.readonlyArray(FhirResourceList),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        copyright: t.readonly(FhirMarkdown),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        date: t.readonly(FhirDateTime),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        description: t.readonly(FhirMarkdown),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        doNotPerform: t.readonly(FhirBoolean),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        dosage: t.readonlyArray(FhirDosage),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        dynamicValue: t.readonlyArray(FhirActivityDefinition_DynamicValue),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        editor: t.readonlyArray(FhirContactDetail),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        effectivePeriod: t.readonly(FhirPeriod),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        endorser: t.readonlyArray(FhirContactDetail),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        experimental: t.readonly(FhirBoolean),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        extension: t.readonlyArray(FhirExtension),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        id: t.readonly(FhirId),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        implicitRules: t.readonly(FhirUri),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        intent: t.readonly(FhirCode),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        jurisdiction: t.readonlyArray(FhirCodeableConcept),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        kind: t.readonly(FhirCode),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        language: t.readonly(FhirCode),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        lastReviewDate: t.readonly(FhirDate),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        library: t.readonlyArray(FhirCanonical),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        location: t.readonly(FhirReference),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        meta: t.readonly(FhirMeta),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        name: t.readonly(FhirString),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        observationRequirement: t.readonlyArray(FhirReference),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        observationResultRequirement: t.readonlyArray(FhirReference),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        participant: t.readonlyArray(FhirActivityDefinition_Participant),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        priority: t.readonly(FhirCode),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        productCodeableConcept: t.readonly(FhirCodeableConcept),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        productReference: t.readonly(FhirReference),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        profile: t.readonly(FhirCanonical),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        publisher: t.readonly(FhirString),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        purpose: t.readonly(FhirMarkdown),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        quantity: t.readonly(FhirQuantity),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        relatedArtifact: t.readonlyArray(FhirRelatedArtifact),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        reviewer: t.readonlyArray(FhirContactDetail),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        specimenRequirement: t.readonlyArray(FhirReference),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        status: t.readonly(
          t.keyof({
            draft: null,
            active: null,
            retired: null,
            unknown: null,
          })
        ),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        subjectCodeableConcept: t.readonly(FhirCodeableConcept),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        subjectReference: t.readonly(FhirReference),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        subtitle: t.readonly(FhirString),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        text: t.readonly(FhirNarrative),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        timingAge: t.readonly(FhirAge),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        timingDateTime: t.readonly(t.string),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        timingDuration: t.readonly(FhirDuration),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        timingPeriod: t.readonly(FhirPeriod),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        timingRange: t.readonly(FhirRange),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        timingTiming: t.readonly(FhirTiming),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        title: t.readonly(FhirString),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        topic: t.readonlyArray(FhirCodeableConcept),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        transform: t.readonly(FhirCanonical),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        url: t.readonly(FhirUri),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        usage: t.readonly(FhirString),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        useContext: t.readonlyArray(FhirUsageContext),
        /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
        version: t.readonly(FhirString),
      }),
    ])
)

/** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
export interface FhirActivityDefinition {
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _approvalDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _copyright?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _doNotPerform?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _experimental?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _intent?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _kind?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _lastReviewDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _priority?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _publisher?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _purpose?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _subtitle?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _timingDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _title?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _usage?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _version?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  approvalDate?: Readonly<t.TypeOf<typeof FhirDate>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  author?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  bodySite?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  code?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  copyright?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  description?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  doNotPerform?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  dosage?: ReadonlyArray<t.TypeOf<typeof FhirDosage>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  dynamicValue?: ReadonlyArray<t.TypeOf<typeof FhirActivityDefinition_DynamicValue>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  editor?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  effectivePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  endorser?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  experimental?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  intent?: Readonly<t.TypeOf<typeof FhirCode>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  jurisdiction?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  kind?: Readonly<t.TypeOf<typeof FhirCode>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  lastReviewDate?: Readonly<t.TypeOf<typeof FhirDate>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  library?: ReadonlyArray<t.TypeOf<typeof FhirCanonical>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  location?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  observationRequirement?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  observationResultRequirement?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  participant?: ReadonlyArray<t.TypeOf<typeof FhirActivityDefinition_Participant>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  priority?: Readonly<t.TypeOf<typeof FhirCode>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  productCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  productReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  profile?: Readonly<t.TypeOf<typeof FhirCanonical>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  publisher?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  purpose?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  quantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  relatedArtifact?: ReadonlyArray<t.TypeOf<typeof FhirRelatedArtifact>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  resourceType: Readonly<'ActivityDefinition'>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  reviewer?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  specimenRequirement?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  subjectCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  subjectReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  subtitle?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  timingAge?: Readonly<t.TypeOf<typeof FhirAge>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  timingDateTime?: Readonly<string>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  timingDuration?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  timingPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  timingRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  timingTiming?: Readonly<t.TypeOf<typeof FhirTiming>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  title?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  topic?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  transform?: Readonly<t.TypeOf<typeof FhirCanonical>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  usage?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  useContext?: ReadonlyArray<t.TypeOf<typeof FhirUsageContext>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  version?: Readonly<t.TypeOf<typeof FhirString>>
}
/** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
export interface FhirActivityDefinitionOutput {
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _approvalDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _copyright?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _doNotPerform?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _experimental?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _intent?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _kind?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _lastReviewDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _priority?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _publisher?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _purpose?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _subtitle?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _timingDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _title?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _usage?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _version?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  approvalDate?: Readonly<t.OutputOf<typeof FhirDate>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  author?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  bodySite?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  code?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  copyright?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  description?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  doNotPerform?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  dosage?: ReadonlyArray<t.OutputOf<typeof FhirDosage>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  dynamicValue?: ReadonlyArray<t.OutputOf<typeof FhirActivityDefinition_DynamicValue>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  editor?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  effectivePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  endorser?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  experimental?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  intent?: Readonly<t.OutputOf<typeof FhirCode>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  jurisdiction?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  kind?: Readonly<t.OutputOf<typeof FhirCode>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  lastReviewDate?: Readonly<t.OutputOf<typeof FhirDate>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  library?: ReadonlyArray<t.OutputOf<typeof FhirCanonical>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  location?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  observationRequirement?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  observationResultRequirement?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  participant?: ReadonlyArray<t.OutputOf<typeof FhirActivityDefinition_Participant>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  priority?: Readonly<t.OutputOf<typeof FhirCode>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  productCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  productReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  profile?: Readonly<t.OutputOf<typeof FhirCanonical>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  publisher?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  purpose?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  quantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  relatedArtifact?: ReadonlyArray<t.OutputOf<typeof FhirRelatedArtifact>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  resourceType: Readonly<'ActivityDefinition'>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  reviewer?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  specimenRequirement?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  subjectCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  subjectReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  subtitle?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  timingAge?: Readonly<t.OutputOf<typeof FhirAge>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  timingDateTime?: Readonly<string>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  timingDuration?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  timingPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  timingRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  timingTiming?: Readonly<t.OutputOf<typeof FhirTiming>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  title?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  topic?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  transform?: Readonly<t.OutputOf<typeof FhirCanonical>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  usage?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  useContext?: ReadonlyArray<t.OutputOf<typeof FhirUsageContext>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  version?: Readonly<t.OutputOf<typeof FhirString>>
}
