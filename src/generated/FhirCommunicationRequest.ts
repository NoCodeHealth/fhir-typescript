import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirBoolean } from './FhirBoolean'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirCommunicationRequest_Payload } from './FhirCommunicationRequest_Payload'
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
import { FhirUri } from './FhirUri'

/** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
export const FhirCommunicationRequest: t.Type<FhirCommunicationRequest, FhirCommunicationRequestOutput> = t.recursion(
  'FhirCommunicationRequest',
  () =>
    t.intersection([
      t.type({
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        resourceType: t.readonly(t.literal('CommunicationRequest')),
      }),
      t.partial({
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        _authoredOn: t.readonly(FhirElement),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        _doNotPerform: t.readonly(FhirElement),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        _implicitRules: t.readonly(FhirElement),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        _language: t.readonly(FhirElement),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        _occurrenceDateTime: t.readonly(FhirElement),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        _priority: t.readonly(FhirElement),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        _status: t.readonly(FhirElement),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        about: t.readonlyArray(FhirReference),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        authoredOn: t.readonly(FhirDateTime),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        basedOn: t.readonlyArray(FhirReference),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        category: t.readonlyArray(FhirCodeableConcept),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        contained: t.readonlyArray(FhirResourceList),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        doNotPerform: t.readonly(FhirBoolean),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        encounter: t.readonly(FhirReference),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        extension: t.readonlyArray(FhirExtension),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        groupIdentifier: t.readonly(FhirIdentifier),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        id: t.readonly(FhirId),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        implicitRules: t.readonly(FhirUri),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        language: t.readonly(FhirCode),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        medium: t.readonlyArray(FhirCodeableConcept),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        meta: t.readonly(FhirMeta),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        note: t.readonlyArray(FhirAnnotation),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        occurrenceDateTime: t.readonly(t.string),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        occurrencePeriod: t.readonly(FhirPeriod),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        payload: t.readonlyArray(FhirCommunicationRequest_Payload),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        priority: t.readonly(FhirCode),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        reasonCode: t.readonlyArray(FhirCodeableConcept),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        reasonReference: t.readonlyArray(FhirReference),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        recipient: t.readonlyArray(FhirReference),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        replaces: t.readonlyArray(FhirReference),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        requester: t.readonly(FhirReference),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        sender: t.readonly(FhirReference),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        status: t.readonly(FhirCode),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        statusReason: t.readonly(FhirCodeableConcept),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        subject: t.readonly(FhirReference),
        /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
        text: t.readonly(FhirNarrative),
      }),
    ])
)

/** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
export interface FhirCommunicationRequest {
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  _authoredOn?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  _doNotPerform?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  _occurrenceDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  _priority?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  about?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  authoredOn?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  basedOn?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  category?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  doNotPerform?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  encounter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  groupIdentifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  medium?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  occurrenceDateTime?: Readonly<string>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  occurrencePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  payload?: ReadonlyArray<t.TypeOf<typeof FhirCommunicationRequest_Payload>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  priority?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  reasonCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  reasonReference?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  recipient?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  replaces?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  requester?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  resourceType: Readonly<'CommunicationRequest'>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  sender?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  status?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  statusReason?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  subject?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
export interface FhirCommunicationRequestOutput {
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  _authoredOn?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  _doNotPerform?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  _occurrenceDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  _priority?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  about?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  authoredOn?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  basedOn?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  category?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  doNotPerform?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  encounter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  groupIdentifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  medium?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  occurrenceDateTime?: Readonly<string>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  occurrencePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  payload?: ReadonlyArray<t.OutputOf<typeof FhirCommunicationRequest_Payload>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  priority?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  reasonCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  reasonReference?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  recipient?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  replaces?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  requester?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  resourceType: Readonly<'CommunicationRequest'>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  sender?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  status?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  statusReason?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  subject?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
