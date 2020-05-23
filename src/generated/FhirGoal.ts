import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDate } from './FhirDate'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirGoal_Target } from './FhirGoal_Target'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
export const FhirGoal: t.Type<FhirGoal, FhirGoalOutput> = t.recursion('FhirGoal', () =>
  t.intersection([
    t.type({
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      description: t.readonly(FhirCodeableConcept),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      resourceType: t.readonly(t.literal('Goal')),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      subject: t.readonly(FhirReference),
    }),
    t.partial({
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      _implicitRules: t.readonly(FhirElement),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      _language: t.readonly(FhirElement),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      _lifecycleStatus: t.readonly(FhirElement),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      _startDate: t.readonly(FhirElement),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      _statusDate: t.readonly(FhirElement),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      _statusReason: t.readonly(FhirElement),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      achievementStatus: t.readonly(FhirCodeableConcept),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      addresses: t.readonlyArray(FhirReference),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      category: t.readonlyArray(FhirCodeableConcept),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      contained: t.readonlyArray(FhirResourceList),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      expressedBy: t.readonly(FhirReference),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      extension: t.readonlyArray(FhirExtension),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      id: t.readonly(FhirId),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      implicitRules: t.readonly(FhirUri),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      language: t.readonly(FhirCode),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      lifecycleStatus: t.readonly(
        t.keyof({
          proposed: null,
          planned: null,
          accepted: null,
          active: null,
          'on-hold': null,
          completed: null,
          cancelled: null,
          'entered-in-error': null,
          rejected: null,
        })
      ),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      meta: t.readonly(FhirMeta),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      note: t.readonlyArray(FhirAnnotation),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      outcomeCode: t.readonlyArray(FhirCodeableConcept),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      outcomeReference: t.readonlyArray(FhirReference),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      priority: t.readonly(FhirCodeableConcept),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      startCodeableConcept: t.readonly(FhirCodeableConcept),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      startDate: t.readonly(t.string),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      statusDate: t.readonly(FhirDate),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      statusReason: t.readonly(FhirString),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      target: t.readonlyArray(FhirGoal_Target),
      /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
export interface FhirGoal {
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  _lifecycleStatus?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  _startDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  _statusDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  _statusReason?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  achievementStatus?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  addresses?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  category?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  description: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  expressedBy?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  lifecycleStatus?: Readonly<
    | 'proposed'
    | 'planned'
    | 'accepted'
    | 'active'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'entered-in-error'
    | 'rejected'
  >
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  outcomeCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  outcomeReference?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  priority?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  resourceType: Readonly<'Goal'>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  startCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  startDate?: Readonly<string>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  statusDate?: Readonly<t.TypeOf<typeof FhirDate>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  statusReason?: Readonly<t.TypeOf<typeof FhirString>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  subject: Readonly<t.TypeOf<typeof FhirReference>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  target?: ReadonlyArray<t.TypeOf<typeof FhirGoal_Target>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
export interface FhirGoalOutput {
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  _lifecycleStatus?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  _startDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  _statusDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  _statusReason?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  achievementStatus?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  addresses?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  category?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  description: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  expressedBy?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  lifecycleStatus?: Readonly<
    | 'proposed'
    | 'planned'
    | 'accepted'
    | 'active'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'entered-in-error'
    | 'rejected'
  >
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  outcomeCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  outcomeReference?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  priority?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  resourceType: Readonly<'Goal'>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  startCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  startDate?: Readonly<string>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  statusDate?: Readonly<t.OutputOf<typeof FhirDate>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  statusReason?: Readonly<t.OutputOf<typeof FhirString>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  subject: Readonly<t.OutputOf<typeof FhirReference>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  target?: ReadonlyArray<t.OutputOf<typeof FhirGoal_Target>>
  /** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
