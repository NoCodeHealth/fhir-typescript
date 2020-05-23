import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirBoolean } from './FhirBoolean'
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
import { FhirQuantity } from './FhirQuantity'
import { FhirRange } from './FhirRange'
import { FhirRatio } from './FhirRatio'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirTiming } from './FhirTiming'
import { FhirUri } from './FhirUri'

/** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
export const FhirServiceRequest: t.Type<FhirServiceRequest, FhirServiceRequestOutput> = t.recursion(
  'FhirServiceRequest',
  () =>
    t.intersection([
      t.type({
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        resourceType: t.readonly(t.literal('ServiceRequest')),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        subject: t.readonly(FhirReference),
      }),
      t.partial({
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        _asNeededBoolean: t.readonly(FhirElement),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        _authoredOn: t.readonly(FhirElement),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        _doNotPerform: t.readonly(FhirElement),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        _implicitRules: t.readonly(FhirElement),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        _instantiatesUri: t.readonlyArray(FhirElement),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        _intent: t.readonly(FhirElement),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        _language: t.readonly(FhirElement),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        _occurrenceDateTime: t.readonly(FhirElement),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        _patientInstruction: t.readonly(FhirElement),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        _priority: t.readonly(FhirElement),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        _status: t.readonly(FhirElement),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        asNeededBoolean: t.readonly(t.boolean),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        asNeededCodeableConcept: t.readonly(FhirCodeableConcept),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        authoredOn: t.readonly(FhirDateTime),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        basedOn: t.readonlyArray(FhirReference),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        bodySite: t.readonlyArray(FhirCodeableConcept),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        category: t.readonlyArray(FhirCodeableConcept),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        code: t.readonly(FhirCodeableConcept),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        contained: t.readonlyArray(FhirResourceList),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        doNotPerform: t.readonly(FhirBoolean),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        encounter: t.readonly(FhirReference),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        extension: t.readonlyArray(FhirExtension),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        id: t.readonly(FhirId),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        implicitRules: t.readonly(FhirUri),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        instantiatesCanonical: t.readonlyArray(FhirCanonical),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        instantiatesUri: t.readonlyArray(FhirUri),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        insurance: t.readonlyArray(FhirReference),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        intent: t.readonly(FhirCode),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        language: t.readonly(FhirCode),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        locationCode: t.readonlyArray(FhirCodeableConcept),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        locationReference: t.readonlyArray(FhirReference),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        meta: t.readonly(FhirMeta),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        note: t.readonlyArray(FhirAnnotation),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        occurrenceDateTime: t.readonly(t.string),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        occurrencePeriod: t.readonly(FhirPeriod),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        occurrenceTiming: t.readonly(FhirTiming),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        orderDetail: t.readonlyArray(FhirCodeableConcept),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        patientInstruction: t.readonly(FhirString),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        performer: t.readonlyArray(FhirReference),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        performerType: t.readonly(FhirCodeableConcept),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        priority: t.readonly(FhirCode),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        quantityQuantity: t.readonly(FhirQuantity),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        quantityRange: t.readonly(FhirRange),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        quantityRatio: t.readonly(FhirRatio),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        reasonCode: t.readonlyArray(FhirCodeableConcept),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        reasonReference: t.readonlyArray(FhirReference),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        relevantHistory: t.readonlyArray(FhirReference),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        replaces: t.readonlyArray(FhirReference),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        requester: t.readonly(FhirReference),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        requisition: t.readonly(FhirIdentifier),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        specimen: t.readonlyArray(FhirReference),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        status: t.readonly(FhirCode),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        supportingInfo: t.readonlyArray(FhirReference),
        /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
        text: t.readonly(FhirNarrative),
      }),
    ])
)

/** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
export interface FhirServiceRequest {
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  _asNeededBoolean?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  _authoredOn?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  _doNotPerform?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  _instantiatesUri?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  _intent?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  _occurrenceDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  _patientInstruction?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  _priority?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  asNeededBoolean?: Readonly<boolean>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  asNeededCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  authoredOn?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  basedOn?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  bodySite?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  category?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  code?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  doNotPerform?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  encounter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  instantiatesCanonical?: ReadonlyArray<t.TypeOf<typeof FhirCanonical>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  instantiatesUri?: ReadonlyArray<t.TypeOf<typeof FhirUri>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  insurance?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  intent?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  locationCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  locationReference?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  occurrenceDateTime?: Readonly<string>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  occurrencePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  occurrenceTiming?: Readonly<t.TypeOf<typeof FhirTiming>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  orderDetail?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  patientInstruction?: Readonly<t.TypeOf<typeof FhirString>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  performer?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  performerType?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  priority?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  quantityQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  quantityRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  quantityRatio?: Readonly<t.TypeOf<typeof FhirRatio>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  reasonCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  reasonReference?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  relevantHistory?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  replaces?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  requester?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  requisition?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  resourceType: Readonly<'ServiceRequest'>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  specimen?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  status?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  subject: Readonly<t.TypeOf<typeof FhirReference>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  supportingInfo?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
export interface FhirServiceRequestOutput {
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  _asNeededBoolean?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  _authoredOn?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  _doNotPerform?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  _instantiatesUri?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  _intent?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  _occurrenceDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  _patientInstruction?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  _priority?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  asNeededBoolean?: Readonly<boolean>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  asNeededCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  authoredOn?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  basedOn?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  bodySite?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  category?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  code?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  doNotPerform?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  encounter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  instantiatesCanonical?: ReadonlyArray<t.OutputOf<typeof FhirCanonical>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  instantiatesUri?: ReadonlyArray<t.OutputOf<typeof FhirUri>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  insurance?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  intent?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  locationCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  locationReference?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  occurrenceDateTime?: Readonly<string>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  occurrencePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  occurrenceTiming?: Readonly<t.OutputOf<typeof FhirTiming>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  orderDetail?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  patientInstruction?: Readonly<t.OutputOf<typeof FhirString>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  performer?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  performerType?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  priority?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  quantityQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  quantityRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  quantityRatio?: Readonly<t.OutputOf<typeof FhirRatio>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  reasonCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  reasonReference?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  relevantHistory?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  replaces?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  requester?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  requisition?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  resourceType: Readonly<'ServiceRequest'>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  specimen?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  status?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  subject: Readonly<t.OutputOf<typeof FhirReference>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  supportingInfo?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
