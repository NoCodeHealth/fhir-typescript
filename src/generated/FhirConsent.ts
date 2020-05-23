import * as t from 'io-ts'
import { FhirAttachment } from './FhirAttachment'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirConsent_Policy } from './FhirConsent_Policy'
import { FhirConsent_Provision } from './FhirConsent_Provision'
import { FhirConsent_Verification } from './FhirConsent_Verification'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
export const FhirConsent: t.Type<FhirConsent, FhirConsentOutput> = t.recursion('FhirConsent', () =>
  t.intersection([
    t.type({
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      category: t.readonlyArray(FhirCodeableConcept),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      resourceType: t.readonly(t.literal('Consent')),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      scope: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      _dateTime: t.readonly(FhirElement),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      _implicitRules: t.readonly(FhirElement),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      _language: t.readonly(FhirElement),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      _status: t.readonly(FhirElement),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      contained: t.readonlyArray(FhirResourceList),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      dateTime: t.readonly(FhirDateTime),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      extension: t.readonlyArray(FhirExtension),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      id: t.readonly(FhirId),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      implicitRules: t.readonly(FhirUri),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      language: t.readonly(FhirCode),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      meta: t.readonly(FhirMeta),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      organization: t.readonlyArray(FhirReference),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      patient: t.readonly(FhirReference),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      performer: t.readonlyArray(FhirReference),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      policy: t.readonlyArray(FhirConsent_Policy),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      policyRule: t.readonly(FhirCodeableConcept),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      provision: t.readonly(FhirConsent_Provision),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      sourceAttachment: t.readonly(FhirAttachment),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      sourceReference: t.readonly(FhirReference),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      status: t.readonly(
        t.keyof({
          draft: null,
          proposed: null,
          active: null,
          rejected: null,
          inactive: null,
          'entered-in-error': null,
        })
      ),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      text: t.readonly(FhirNarrative),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      verification: t.readonlyArray(FhirConsent_Verification),
    }),
  ])
)

/** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
export interface FhirConsent {
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  _dateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  category: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  dateTime?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  organization?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  patient?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  performer?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  policy?: ReadonlyArray<t.TypeOf<typeof FhirConsent_Policy>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  policyRule?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  provision?: Readonly<t.TypeOf<typeof FhirConsent_Provision>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  resourceType: Readonly<'Consent'>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  scope: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  sourceAttachment?: Readonly<t.TypeOf<typeof FhirAttachment>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  sourceReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  status?: Readonly<'draft' | 'proposed' | 'active' | 'rejected' | 'inactive' | 'entered-in-error'>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  verification?: ReadonlyArray<t.TypeOf<typeof FhirConsent_Verification>>
}
/** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
export interface FhirConsentOutput {
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  _dateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  category: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  dateTime?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  organization?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  patient?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  performer?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  policy?: ReadonlyArray<t.OutputOf<typeof FhirConsent_Policy>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  policyRule?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  provision?: Readonly<t.OutputOf<typeof FhirConsent_Provision>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  resourceType: Readonly<'Consent'>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  scope: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  sourceAttachment?: Readonly<t.OutputOf<typeof FhirAttachment>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  sourceReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  status?: Readonly<'draft' | 'proposed' | 'active' | 'rejected' | 'inactive' | 'entered-in-error'>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  verification?: ReadonlyArray<t.OutputOf<typeof FhirConsent_Verification>>
}
