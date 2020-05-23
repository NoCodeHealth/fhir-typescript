import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDetectedIssue_Evidence } from './FhirDetectedIssue_Evidence'
import { FhirDetectedIssue_Mitigation } from './FhirDetectedIssue_Mitigation'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
export const FhirDetectedIssue: t.Type<FhirDetectedIssue, FhirDetectedIssueOutput> = t.recursion(
  'FhirDetectedIssue',
  () =>
    t.intersection([
      t.type({
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        resourceType: t.readonly(t.literal('DetectedIssue')),
      }),
      t.partial({
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        _detail: t.readonly(FhirElement),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        _identifiedDateTime: t.readonly(FhirElement),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        _implicitRules: t.readonly(FhirElement),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        _language: t.readonly(FhirElement),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        _reference: t.readonly(FhirElement),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        _severity: t.readonly(FhirElement),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        _status: t.readonly(FhirElement),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        author: t.readonly(FhirReference),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        code: t.readonly(FhirCodeableConcept),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        contained: t.readonlyArray(FhirResourceList),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        detail: t.readonly(FhirString),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        evidence: t.readonlyArray(FhirDetectedIssue_Evidence),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        extension: t.readonlyArray(FhirExtension),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        id: t.readonly(FhirId),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        identifiedDateTime: t.readonly(t.string),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        identifiedPeriod: t.readonly(FhirPeriod),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        implicated: t.readonlyArray(FhirReference),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        implicitRules: t.readonly(FhirUri),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        language: t.readonly(FhirCode),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        meta: t.readonly(FhirMeta),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        mitigation: t.readonlyArray(FhirDetectedIssue_Mitigation),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        patient: t.readonly(FhirReference),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        reference: t.readonly(FhirUri),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        severity: t.readonly(
          t.keyof({
            high: null,
            moderate: null,
            low: null,
          })
        ),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        status: t.readonly(FhirCode),
        /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
        text: t.readonly(FhirNarrative),
      }),
    ])
)

/** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
export interface FhirDetectedIssue {
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  _detail?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  _identifiedDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  _reference?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  _severity?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  author?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  code?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  detail?: Readonly<t.TypeOf<typeof FhirString>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  evidence?: ReadonlyArray<t.TypeOf<typeof FhirDetectedIssue_Evidence>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  identifiedDateTime?: Readonly<string>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  identifiedPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  implicated?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  mitigation?: ReadonlyArray<t.TypeOf<typeof FhirDetectedIssue_Mitigation>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  patient?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  reference?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  resourceType: Readonly<'DetectedIssue'>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  severity?: Readonly<'high' | 'moderate' | 'low'>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  status?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
export interface FhirDetectedIssueOutput {
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  _detail?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  _identifiedDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  _reference?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  _severity?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  author?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  code?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  detail?: Readonly<t.OutputOf<typeof FhirString>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  evidence?: ReadonlyArray<t.OutputOf<typeof FhirDetectedIssue_Evidence>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  identifiedDateTime?: Readonly<string>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  identifiedPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  implicated?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  mitigation?: ReadonlyArray<t.OutputOf<typeof FhirDetectedIssue_Mitigation>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  patient?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  reference?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  resourceType: Readonly<'DetectedIssue'>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  severity?: Readonly<'high' | 'moderate' | 'low'>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  status?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
