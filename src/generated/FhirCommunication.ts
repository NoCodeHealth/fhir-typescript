import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCanonical } from './FhirCanonical'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirCommunication_Payload } from './FhirCommunication_Payload'
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

/** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
export const FhirCommunication: t.Type<FhirCommunication, FhirCommunicationOutput> = t.recursion(
  'FhirCommunication',
  () =>
    t.intersection([
      t.type({
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        resourceType: t.readonly(t.literal('Communication')),
      }),
      t.partial({
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        _implicitRules: t.readonly(FhirElement),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        _instantiatesUri: t.readonlyArray(FhirElement),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        _language: t.readonly(FhirElement),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        _priority: t.readonly(FhirElement),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        _received: t.readonly(FhirElement),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        _sent: t.readonly(FhirElement),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        _status: t.readonly(FhirElement),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        about: t.readonlyArray(FhirReference),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        basedOn: t.readonlyArray(FhirReference),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        category: t.readonlyArray(FhirCodeableConcept),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        contained: t.readonlyArray(FhirResourceList),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        encounter: t.readonly(FhirReference),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        extension: t.readonlyArray(FhirExtension),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        id: t.readonly(FhirId),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        implicitRules: t.readonly(FhirUri),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        inResponseTo: t.readonlyArray(FhirReference),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        instantiatesCanonical: t.readonlyArray(FhirCanonical),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        instantiatesUri: t.readonlyArray(FhirUri),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        language: t.readonly(FhirCode),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        medium: t.readonlyArray(FhirCodeableConcept),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        meta: t.readonly(FhirMeta),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        note: t.readonlyArray(FhirAnnotation),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        partOf: t.readonlyArray(FhirReference),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        payload: t.readonlyArray(FhirCommunication_Payload),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        priority: t.readonly(FhirCode),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        reasonCode: t.readonlyArray(FhirCodeableConcept),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        reasonReference: t.readonlyArray(FhirReference),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        received: t.readonly(FhirDateTime),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        recipient: t.readonlyArray(FhirReference),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        sender: t.readonly(FhirReference),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        sent: t.readonly(FhirDateTime),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        status: t.readonly(FhirCode),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        statusReason: t.readonly(FhirCodeableConcept),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        subject: t.readonly(FhirReference),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        text: t.readonly(FhirNarrative),
        /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
        topic: t.readonly(FhirCodeableConcept),
      }),
    ])
)

/** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
export interface FhirCommunication {
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  _instantiatesUri?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  _priority?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  _received?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  _sent?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  about?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  basedOn?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  category?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  encounter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  inResponseTo?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  instantiatesCanonical?: ReadonlyArray<t.TypeOf<typeof FhirCanonical>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  instantiatesUri?: ReadonlyArray<t.TypeOf<typeof FhirUri>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  medium?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  partOf?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  payload?: ReadonlyArray<t.TypeOf<typeof FhirCommunication_Payload>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  priority?: Readonly<t.TypeOf<typeof FhirCode>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  reasonCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  reasonReference?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  received?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  recipient?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  resourceType: Readonly<'Communication'>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  sender?: Readonly<t.TypeOf<typeof FhirReference>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  sent?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  status?: Readonly<t.TypeOf<typeof FhirCode>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  statusReason?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  subject?: Readonly<t.TypeOf<typeof FhirReference>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  topic?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
export interface FhirCommunicationOutput {
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  _instantiatesUri?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  _priority?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  _received?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  _sent?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  about?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  basedOn?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  category?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  encounter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  inResponseTo?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  instantiatesCanonical?: ReadonlyArray<t.OutputOf<typeof FhirCanonical>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  instantiatesUri?: ReadonlyArray<t.OutputOf<typeof FhirUri>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  medium?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  partOf?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  payload?: ReadonlyArray<t.OutputOf<typeof FhirCommunication_Payload>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  priority?: Readonly<t.OutputOf<typeof FhirCode>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  reasonCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  reasonReference?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  received?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  recipient?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  resourceType: Readonly<'Communication'>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  sender?: Readonly<t.OutputOf<typeof FhirReference>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  sent?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  status?: Readonly<t.OutputOf<typeof FhirCode>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  statusReason?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  subject?: Readonly<t.OutputOf<typeof FhirReference>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  topic?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
