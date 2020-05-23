import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
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

/** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
export const FhirResearchSubject: t.Type<FhirResearchSubject, FhirResearchSubjectOutput> = t.recursion(
  'FhirResearchSubject',
  () =>
    t.intersection([
      t.type({
        /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
        individual: t.readonly(FhirReference),
        /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
        resourceType: t.readonly(t.literal('ResearchSubject')),
        /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
        study: t.readonly(FhirReference),
      }),
      t.partial({
        /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
        _actualArm: t.readonly(FhirElement),
        /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
        _assignedArm: t.readonly(FhirElement),
        /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
        _implicitRules: t.readonly(FhirElement),
        /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
        _language: t.readonly(FhirElement),
        /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
        _status: t.readonly(FhirElement),
        /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
        actualArm: t.readonly(FhirString),
        /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
        assignedArm: t.readonly(FhirString),
        /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
        consent: t.readonly(FhirReference),
        /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
        contained: t.readonlyArray(FhirResourceList),
        /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
        extension: t.readonlyArray(FhirExtension),
        /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
        id: t.readonly(FhirId),
        /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
        implicitRules: t.readonly(FhirUri),
        /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
        language: t.readonly(FhirCode),
        /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
        meta: t.readonly(FhirMeta),
        /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
        period: t.readonly(FhirPeriod),
        /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
        status: t.readonly(
          t.keyof({
            candidate: null,
            eligible: null,
            'follow-up': null,
            ineligible: null,
            'not-registered': null,
            'off-study': null,
            'on-study': null,
            'on-study-intervention': null,
            'on-study-observation': null,
            'pending-on-study': null,
            'potential-candidate': null,
            screening: null,
            withdrawn: null,
          })
        ),
        /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
        text: t.readonly(FhirNarrative),
      }),
    ])
)

/** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
export interface FhirResearchSubject {
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  _actualArm?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  _assignedArm?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  actualArm?: Readonly<t.TypeOf<typeof FhirString>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  assignedArm?: Readonly<t.TypeOf<typeof FhirString>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  consent?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  individual: Readonly<t.TypeOf<typeof FhirReference>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  period?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  resourceType: Readonly<'ResearchSubject'>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  status?: Readonly<
    | 'candidate'
    | 'eligible'
    | 'follow-up'
    | 'ineligible'
    | 'not-registered'
    | 'off-study'
    | 'on-study'
    | 'on-study-intervention'
    | 'on-study-observation'
    | 'pending-on-study'
    | 'potential-candidate'
    | 'screening'
    | 'withdrawn'
  >
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  study: Readonly<t.TypeOf<typeof FhirReference>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
export interface FhirResearchSubjectOutput {
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  _actualArm?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  _assignedArm?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  actualArm?: Readonly<t.OutputOf<typeof FhirString>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  assignedArm?: Readonly<t.OutputOf<typeof FhirString>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  consent?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  individual: Readonly<t.OutputOf<typeof FhirReference>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  period?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  resourceType: Readonly<'ResearchSubject'>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  status?: Readonly<
    | 'candidate'
    | 'eligible'
    | 'follow-up'
    | 'ineligible'
    | 'not-registered'
    | 'off-study'
    | 'on-study'
    | 'on-study-intervention'
    | 'on-study-observation'
    | 'pending-on-study'
    | 'potential-candidate'
    | 'screening'
    | 'withdrawn'
  >
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  study: Readonly<t.OutputOf<typeof FhirReference>>
  /** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
