import * as t from 'io-ts'
import { FhirAttachment } from './FhirAttachment'
import { FhirBoolean } from './FhirBoolean'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirContactPoint } from './FhirContactPoint'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirHealthcareService_AvailableTime } from './FhirHealthcareService_AvailableTime'
import { FhirHealthcareService_Eligibility } from './FhirHealthcareService_Eligibility'
import { FhirHealthcareService_NotAvailable } from './FhirHealthcareService_NotAvailable'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMarkdown } from './FhirMarkdown'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** The details of a healthcare service available at a location. */
export const FhirHealthcareService: t.Type<FhirHealthcareService, FhirHealthcareServiceOutput> = t.recursion(
  'FhirHealthcareService',
  () =>
    t.intersection([
      t.type({
        /** The details of a healthcare service available at a location. */
        resourceType: t.readonly(t.literal('HealthcareService')),
      }),
      t.partial({
        /** The details of a healthcare service available at a location. */
        _active: t.readonly(FhirElement),
        /** The details of a healthcare service available at a location. */
        _appointmentRequired: t.readonly(FhirElement),
        /** The details of a healthcare service available at a location. */
        _availabilityExceptions: t.readonly(FhirElement),
        /** The details of a healthcare service available at a location. */
        _comment: t.readonly(FhirElement),
        /** The details of a healthcare service available at a location. */
        _extraDetails: t.readonly(FhirElement),
        /** The details of a healthcare service available at a location. */
        _implicitRules: t.readonly(FhirElement),
        /** The details of a healthcare service available at a location. */
        _language: t.readonly(FhirElement),
        /** The details of a healthcare service available at a location. */
        _name: t.readonly(FhirElement),
        /** The details of a healthcare service available at a location. */
        active: t.readonly(FhirBoolean),
        /** The details of a healthcare service available at a location. */
        appointmentRequired: t.readonly(FhirBoolean),
        /** The details of a healthcare service available at a location. */
        availabilityExceptions: t.readonly(FhirString),
        /** The details of a healthcare service available at a location. */
        availableTime: t.readonlyArray(FhirHealthcareService_AvailableTime),
        /** The details of a healthcare service available at a location. */
        category: t.readonlyArray(FhirCodeableConcept),
        /** The details of a healthcare service available at a location. */
        characteristic: t.readonlyArray(FhirCodeableConcept),
        /** The details of a healthcare service available at a location. */
        comment: t.readonly(FhirString),
        /** The details of a healthcare service available at a location. */
        communication: t.readonlyArray(FhirCodeableConcept),
        /** The details of a healthcare service available at a location. */
        contained: t.readonlyArray(FhirResourceList),
        /** The details of a healthcare service available at a location. */
        coverageArea: t.readonlyArray(FhirReference),
        /** The details of a healthcare service available at a location. */
        eligibility: t.readonlyArray(FhirHealthcareService_Eligibility),
        /** The details of a healthcare service available at a location. */
        endpoint: t.readonlyArray(FhirReference),
        /** The details of a healthcare service available at a location. */
        extension: t.readonlyArray(FhirExtension),
        /** The details of a healthcare service available at a location. */
        extraDetails: t.readonly(FhirMarkdown),
        /** The details of a healthcare service available at a location. */
        id: t.readonly(FhirId),
        /** The details of a healthcare service available at a location. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** The details of a healthcare service available at a location. */
        implicitRules: t.readonly(FhirUri),
        /** The details of a healthcare service available at a location. */
        language: t.readonly(FhirCode),
        /** The details of a healthcare service available at a location. */
        location: t.readonlyArray(FhirReference),
        /** The details of a healthcare service available at a location. */
        meta: t.readonly(FhirMeta),
        /** The details of a healthcare service available at a location. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** The details of a healthcare service available at a location. */
        name: t.readonly(FhirString),
        /** The details of a healthcare service available at a location. */
        notAvailable: t.readonlyArray(FhirHealthcareService_NotAvailable),
        /** The details of a healthcare service available at a location. */
        photo: t.readonly(FhirAttachment),
        /** The details of a healthcare service available at a location. */
        program: t.readonlyArray(FhirCodeableConcept),
        /** The details of a healthcare service available at a location. */
        providedBy: t.readonly(FhirReference),
        /** The details of a healthcare service available at a location. */
        referralMethod: t.readonlyArray(FhirCodeableConcept),
        /** The details of a healthcare service available at a location. */
        serviceProvisionCode: t.readonlyArray(FhirCodeableConcept),
        /** The details of a healthcare service available at a location. */
        specialty: t.readonlyArray(FhirCodeableConcept),
        /** The details of a healthcare service available at a location. */
        telecom: t.readonlyArray(FhirContactPoint),
        /** The details of a healthcare service available at a location. */
        text: t.readonly(FhirNarrative),
        /** The details of a healthcare service available at a location. */
        type: t.readonlyArray(FhirCodeableConcept),
      }),
    ])
)

/** The details of a healthcare service available at a location. */
export interface FhirHealthcareService {
  /** The details of a healthcare service available at a location. */
  _active?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  _appointmentRequired?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  _availabilityExceptions?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  _comment?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  _extraDetails?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  active?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** The details of a healthcare service available at a location. */
  appointmentRequired?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** The details of a healthcare service available at a location. */
  availabilityExceptions?: Readonly<t.TypeOf<typeof FhirString>>
  /** The details of a healthcare service available at a location. */
  availableTime?: ReadonlyArray<t.TypeOf<typeof FhirHealthcareService_AvailableTime>>
  /** The details of a healthcare service available at a location. */
  category?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The details of a healthcare service available at a location. */
  characteristic?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The details of a healthcare service available at a location. */
  comment?: Readonly<t.TypeOf<typeof FhirString>>
  /** The details of a healthcare service available at a location. */
  communication?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The details of a healthcare service available at a location. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** The details of a healthcare service available at a location. */
  coverageArea?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** The details of a healthcare service available at a location. */
  eligibility?: ReadonlyArray<t.TypeOf<typeof FhirHealthcareService_Eligibility>>
  /** The details of a healthcare service available at a location. */
  endpoint?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** The details of a healthcare service available at a location. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The details of a healthcare service available at a location. */
  extraDetails?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** The details of a healthcare service available at a location. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** The details of a healthcare service available at a location. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** The details of a healthcare service available at a location. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The details of a healthcare service available at a location. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** The details of a healthcare service available at a location. */
  location?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** The details of a healthcare service available at a location. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** The details of a healthcare service available at a location. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The details of a healthcare service available at a location. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** The details of a healthcare service available at a location. */
  notAvailable?: ReadonlyArray<t.TypeOf<typeof FhirHealthcareService_NotAvailable>>
  /** The details of a healthcare service available at a location. */
  photo?: Readonly<t.TypeOf<typeof FhirAttachment>>
  /** The details of a healthcare service available at a location. */
  program?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The details of a healthcare service available at a location. */
  providedBy?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The details of a healthcare service available at a location. */
  referralMethod?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The details of a healthcare service available at a location. */
  resourceType: Readonly<'HealthcareService'>
  /** The details of a healthcare service available at a location. */
  serviceProvisionCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The details of a healthcare service available at a location. */
  specialty?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The details of a healthcare service available at a location. */
  telecom?: ReadonlyArray<t.TypeOf<typeof FhirContactPoint>>
  /** The details of a healthcare service available at a location. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** The details of a healthcare service available at a location. */
  type?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
}
/** The details of a healthcare service available at a location. */
export interface FhirHealthcareServiceOutput {
  /** The details of a healthcare service available at a location. */
  _active?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  _appointmentRequired?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  _availabilityExceptions?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  _comment?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  _extraDetails?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  active?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** The details of a healthcare service available at a location. */
  appointmentRequired?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** The details of a healthcare service available at a location. */
  availabilityExceptions?: Readonly<t.OutputOf<typeof FhirString>>
  /** The details of a healthcare service available at a location. */
  availableTime?: ReadonlyArray<t.OutputOf<typeof FhirHealthcareService_AvailableTime>>
  /** The details of a healthcare service available at a location. */
  category?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The details of a healthcare service available at a location. */
  characteristic?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The details of a healthcare service available at a location. */
  comment?: Readonly<t.OutputOf<typeof FhirString>>
  /** The details of a healthcare service available at a location. */
  communication?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The details of a healthcare service available at a location. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** The details of a healthcare service available at a location. */
  coverageArea?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** The details of a healthcare service available at a location. */
  eligibility?: ReadonlyArray<t.OutputOf<typeof FhirHealthcareService_Eligibility>>
  /** The details of a healthcare service available at a location. */
  endpoint?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** The details of a healthcare service available at a location. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The details of a healthcare service available at a location. */
  extraDetails?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** The details of a healthcare service available at a location. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** The details of a healthcare service available at a location. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** The details of a healthcare service available at a location. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The details of a healthcare service available at a location. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** The details of a healthcare service available at a location. */
  location?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** The details of a healthcare service available at a location. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** The details of a healthcare service available at a location. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The details of a healthcare service available at a location. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** The details of a healthcare service available at a location. */
  notAvailable?: ReadonlyArray<t.OutputOf<typeof FhirHealthcareService_NotAvailable>>
  /** The details of a healthcare service available at a location. */
  photo?: Readonly<t.OutputOf<typeof FhirAttachment>>
  /** The details of a healthcare service available at a location. */
  program?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The details of a healthcare service available at a location. */
  providedBy?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The details of a healthcare service available at a location. */
  referralMethod?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The details of a healthcare service available at a location. */
  resourceType: Readonly<'HealthcareService'>
  /** The details of a healthcare service available at a location. */
  serviceProvisionCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The details of a healthcare service available at a location. */
  specialty?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The details of a healthcare service available at a location. */
  telecom?: ReadonlyArray<t.OutputOf<typeof FhirContactPoint>>
  /** The details of a healthcare service available at a location. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** The details of a healthcare service available at a location. */
  type?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
}
