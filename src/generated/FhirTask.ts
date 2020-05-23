import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCanonical } from './FhirCanonical'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
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
import { FhirTask_Input } from './FhirTask_Input'
import { FhirTask_Output } from './FhirTask_Output'
import { FhirTask_Restriction } from './FhirTask_Restriction'
import { FhirUri } from './FhirUri'

/** A task to be performed. */
export const FhirTask: t.Type<FhirTask, FhirTaskOutput> = t.recursion('FhirTask', () =>
  t.intersection([
    t.type({
      /** A task to be performed. */
      resourceType: t.readonly(t.literal('Task')),
    }),
    t.partial({
      /** A task to be performed. */
      _authoredOn: t.readonly(FhirElement),
      /** A task to be performed. */
      _description: t.readonly(FhirElement),
      /** A task to be performed. */
      _implicitRules: t.readonly(FhirElement),
      /** A task to be performed. */
      _instantiatesUri: t.readonly(FhirElement),
      /** A task to be performed. */
      _intent: t.readonly(FhirElement),
      /** A task to be performed. */
      _language: t.readonly(FhirElement),
      /** A task to be performed. */
      _lastModified: t.readonly(FhirElement),
      /** A task to be performed. */
      _priority: t.readonly(FhirElement),
      /** A task to be performed. */
      _status: t.readonly(FhirElement),
      /** A task to be performed. */
      authoredOn: t.readonly(FhirDateTime),
      /** A task to be performed. */
      basedOn: t.readonlyArray(FhirReference),
      /** A task to be performed. */
      businessStatus: t.readonly(FhirCodeableConcept),
      /** A task to be performed. */
      code: t.readonly(FhirCodeableConcept),
      /** A task to be performed. */
      contained: t.readonlyArray(FhirResourceList),
      /** A task to be performed. */
      description: t.readonly(FhirString),
      /** A task to be performed. */
      encounter: t.readonly(FhirReference),
      /** A task to be performed. */
      executionPeriod: t.readonly(FhirPeriod),
      /** A task to be performed. */
      extension: t.readonlyArray(FhirExtension),
      /** A task to be performed. */
      focus: t.readonly(FhirReference),
      /** A task to be performed. */
      for: t.readonly(FhirReference),
      /** A task to be performed. */
      groupIdentifier: t.readonly(FhirIdentifier),
      /** A task to be performed. */
      id: t.readonly(FhirId),
      /** A task to be performed. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** A task to be performed. */
      implicitRules: t.readonly(FhirUri),
      /** A task to be performed. */
      input: t.readonlyArray(FhirTask_Input),
      /** A task to be performed. */
      instantiatesCanonical: t.readonly(FhirCanonical),
      /** A task to be performed. */
      instantiatesUri: t.readonly(FhirUri),
      /** A task to be performed. */
      insurance: t.readonlyArray(FhirReference),
      /** A task to be performed. */
      intent: t.readonly(
        t.keyof({
          unknown: null,
          proposal: null,
          plan: null,
          order: null,
          'original-order': null,
          'reflex-order': null,
          'filler-order': null,
          'instance-order': null,
          option: null,
        })
      ),
      /** A task to be performed. */
      language: t.readonly(FhirCode),
      /** A task to be performed. */
      lastModified: t.readonly(FhirDateTime),
      /** A task to be performed. */
      location: t.readonly(FhirReference),
      /** A task to be performed. */
      meta: t.readonly(FhirMeta),
      /** A task to be performed. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A task to be performed. */
      note: t.readonlyArray(FhirAnnotation),
      /** A task to be performed. */
      output: t.readonlyArray(FhirTask_Output),
      /** A task to be performed. */
      owner: t.readonly(FhirReference),
      /** A task to be performed. */
      partOf: t.readonlyArray(FhirReference),
      /** A task to be performed. */
      performerType: t.readonlyArray(FhirCodeableConcept),
      /** A task to be performed. */
      priority: t.readonly(FhirCode),
      /** A task to be performed. */
      reasonCode: t.readonly(FhirCodeableConcept),
      /** A task to be performed. */
      reasonReference: t.readonly(FhirReference),
      /** A task to be performed. */
      relevantHistory: t.readonlyArray(FhirReference),
      /** A task to be performed. */
      requester: t.readonly(FhirReference),
      /** A task to be performed. */
      restriction: t.readonly(FhirTask_Restriction),
      /** A task to be performed. */
      status: t.readonly(
        t.keyof({
          draft: null,
          requested: null,
          received: null,
          accepted: null,
          rejected: null,
          ready: null,
          cancelled: null,
          'in-progress': null,
          'on-hold': null,
          failed: null,
          completed: null,
          'entered-in-error': null,
        })
      ),
      /** A task to be performed. */
      statusReason: t.readonly(FhirCodeableConcept),
      /** A task to be performed. */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** A task to be performed. */
export interface FhirTask {
  /** A task to be performed. */
  _authoredOn?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  _instantiatesUri?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  _intent?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  _lastModified?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  _priority?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  authoredOn?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A task to be performed. */
  basedOn?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A task to be performed. */
  businessStatus?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A task to be performed. */
  code?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A task to be performed. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A task to be performed. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** A task to be performed. */
  encounter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A task to be performed. */
  executionPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A task to be performed. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A task to be performed. */
  focus?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A task to be performed. */
  for?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A task to be performed. */
  groupIdentifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** A task to be performed. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A task to be performed. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A task to be performed. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A task to be performed. */
  input?: ReadonlyArray<t.TypeOf<typeof FhirTask_Input>>
  /** A task to be performed. */
  instantiatesCanonical?: Readonly<t.TypeOf<typeof FhirCanonical>>
  /** A task to be performed. */
  instantiatesUri?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A task to be performed. */
  insurance?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A task to be performed. */
  intent?: Readonly<
    | 'unknown'
    | 'proposal'
    | 'plan'
    | 'order'
    | 'original-order'
    | 'reflex-order'
    | 'filler-order'
    | 'instance-order'
    | 'option'
  >
  /** A task to be performed. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A task to be performed. */
  lastModified?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A task to be performed. */
  location?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A task to be performed. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A task to be performed. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A task to be performed. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** A task to be performed. */
  output?: ReadonlyArray<t.TypeOf<typeof FhirTask_Output>>
  /** A task to be performed. */
  owner?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A task to be performed. */
  partOf?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A task to be performed. */
  performerType?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A task to be performed. */
  priority?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A task to be performed. */
  reasonCode?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A task to be performed. */
  reasonReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A task to be performed. */
  relevantHistory?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A task to be performed. */
  requester?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A task to be performed. */
  resourceType: Readonly<'Task'>
  /** A task to be performed. */
  restriction?: Readonly<t.TypeOf<typeof FhirTask_Restriction>>
  /** A task to be performed. */
  status?: Readonly<
    | 'draft'
    | 'requested'
    | 'received'
    | 'accepted'
    | 'rejected'
    | 'ready'
    | 'cancelled'
    | 'in-progress'
    | 'on-hold'
    | 'failed'
    | 'completed'
    | 'entered-in-error'
  >
  /** A task to be performed. */
  statusReason?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A task to be performed. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** A task to be performed. */
export interface FhirTaskOutput {
  /** A task to be performed. */
  _authoredOn?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  _instantiatesUri?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  _intent?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  _lastModified?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  _priority?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  authoredOn?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A task to be performed. */
  basedOn?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A task to be performed. */
  businessStatus?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A task to be performed. */
  code?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A task to be performed. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A task to be performed. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** A task to be performed. */
  encounter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A task to be performed. */
  executionPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A task to be performed. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A task to be performed. */
  focus?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A task to be performed. */
  for?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A task to be performed. */
  groupIdentifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** A task to be performed. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A task to be performed. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A task to be performed. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A task to be performed. */
  input?: ReadonlyArray<t.OutputOf<typeof FhirTask_Input>>
  /** A task to be performed. */
  instantiatesCanonical?: Readonly<t.OutputOf<typeof FhirCanonical>>
  /** A task to be performed. */
  instantiatesUri?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A task to be performed. */
  insurance?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A task to be performed. */
  intent?: Readonly<
    | 'unknown'
    | 'proposal'
    | 'plan'
    | 'order'
    | 'original-order'
    | 'reflex-order'
    | 'filler-order'
    | 'instance-order'
    | 'option'
  >
  /** A task to be performed. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A task to be performed. */
  lastModified?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A task to be performed. */
  location?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A task to be performed. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A task to be performed. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A task to be performed. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** A task to be performed. */
  output?: ReadonlyArray<t.OutputOf<typeof FhirTask_Output>>
  /** A task to be performed. */
  owner?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A task to be performed. */
  partOf?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A task to be performed. */
  performerType?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A task to be performed. */
  priority?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A task to be performed. */
  reasonCode?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A task to be performed. */
  reasonReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A task to be performed. */
  relevantHistory?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A task to be performed. */
  requester?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A task to be performed. */
  resourceType: Readonly<'Task'>
  /** A task to be performed. */
  restriction?: Readonly<t.OutputOf<typeof FhirTask_Restriction>>
  /** A task to be performed. */
  status?: Readonly<
    | 'draft'
    | 'requested'
    | 'received'
    | 'accepted'
    | 'rejected'
    | 'ready'
    | 'cancelled'
    | 'in-progress'
    | 'on-hold'
    | 'failed'
    | 'completed'
    | 'entered-in-error'
  >
  /** A task to be performed. */
  statusReason?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A task to be performed. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
