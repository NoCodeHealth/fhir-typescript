import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCanonical } from './FhirCanonical'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirDeviceRequest_Parameter } from './FhirDeviceRequest_Parameter'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirTiming } from './FhirTiming'
import { FhirUri } from './FhirUri'

/** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
export const FhirDeviceRequest: t.Type<FhirDeviceRequest, FhirDeviceRequestOutput> = t.recursion(
  'FhirDeviceRequest',
  () =>
    t.intersection([
      t.type({
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        resourceType: t.readonly(t.literal('DeviceRequest')),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        subject: t.readonly(FhirReference),
      }),
      t.partial({
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        _authoredOn: t.readonly(FhirElement),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        _implicitRules: t.readonly(FhirElement),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        _instantiatesUri: t.readonlyArray(FhirElement),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        _intent: t.readonly(FhirElement),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        _language: t.readonly(FhirElement),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        _occurrenceDateTime: t.readonly(FhirElement),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        _priority: t.readonly(FhirElement),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        _status: t.readonly(FhirElement),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        authoredOn: t.readonly(FhirDateTime),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        basedOn: t.readonlyArray(FhirReference),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        codeCodeableConcept: t.readonly(FhirCodeableConcept),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        codeReference: t.readonly(FhirReference),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        contained: t.readonlyArray(FhirResourceList),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        encounter: t.readonly(FhirReference),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        extension: t.readonlyArray(FhirExtension),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        groupIdentifier: t.readonly(FhirIdentifier),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        id: t.readonly(FhirId),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        implicitRules: t.readonly(FhirUri),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        instantiatesCanonical: t.readonlyArray(FhirCanonical),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        instantiatesUri: t.readonlyArray(FhirUri),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        insurance: t.readonlyArray(FhirReference),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        intent: t.readonly(FhirCode),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        language: t.readonly(FhirCode),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        meta: t.readonly(FhirMeta),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        note: t.readonlyArray(FhirAnnotation),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        occurrenceDateTime: t.readonly(t.string),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        occurrencePeriod: t.readonly(FhirPeriod),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        occurrenceTiming: t.readonly(FhirTiming),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        parameter: t.readonlyArray(FhirDeviceRequest_Parameter),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        performer: t.readonly(FhirReference),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        performerType: t.readonly(FhirCodeableConcept),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        priorRequest: t.readonlyArray(FhirReference),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        priority: t.readonly(FhirCode),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        reasonCode: t.readonlyArray(FhirCodeableConcept),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        reasonReference: t.readonlyArray(FhirReference),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        relevantHistory: t.readonlyArray(FhirReference),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        requester: t.readonly(FhirReference),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        status: t.readonly(FhirCode),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        supportingInfo: t.readonlyArray(FhirReference),
        /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
        text: t.readonly(FhirNarrative),
      }),
    ])
)

/** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
export interface FhirDeviceRequest {
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  _authoredOn?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  _instantiatesUri?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  _intent?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  _occurrenceDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  _priority?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  authoredOn?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  basedOn?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  codeCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  codeReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  encounter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  groupIdentifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  instantiatesCanonical?: ReadonlyArray<t.TypeOf<typeof FhirCanonical>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  instantiatesUri?: ReadonlyArray<t.TypeOf<typeof FhirUri>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  insurance?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  intent?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  occurrenceDateTime?: Readonly<string>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  occurrencePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  occurrenceTiming?: Readonly<t.TypeOf<typeof FhirTiming>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  parameter?: ReadonlyArray<t.TypeOf<typeof FhirDeviceRequest_Parameter>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  performer?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  performerType?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  priorRequest?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  priority?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  reasonCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  reasonReference?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  relevantHistory?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  requester?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  resourceType: Readonly<'DeviceRequest'>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  status?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  subject: Readonly<t.TypeOf<typeof FhirReference>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  supportingInfo?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
export interface FhirDeviceRequestOutput {
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  _authoredOn?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  _instantiatesUri?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  _intent?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  _occurrenceDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  _priority?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  authoredOn?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  basedOn?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  codeCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  codeReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  encounter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  groupIdentifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  instantiatesCanonical?: ReadonlyArray<t.OutputOf<typeof FhirCanonical>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  instantiatesUri?: ReadonlyArray<t.OutputOf<typeof FhirUri>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  insurance?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  intent?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  occurrenceDateTime?: Readonly<string>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  occurrencePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  occurrenceTiming?: Readonly<t.OutputOf<typeof FhirTiming>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  parameter?: ReadonlyArray<t.OutputOf<typeof FhirDeviceRequest_Parameter>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  performer?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  performerType?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  priorRequest?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  priority?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  reasonCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  reasonReference?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  relevantHistory?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  requester?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  resourceType: Readonly<'DeviceRequest'>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  status?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  subject: Readonly<t.OutputOf<typeof FhirReference>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  supportingInfo?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
