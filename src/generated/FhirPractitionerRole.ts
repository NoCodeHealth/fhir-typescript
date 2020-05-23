import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirContactPoint } from './FhirContactPoint'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirPractitionerRole_AvailableTime } from './FhirPractitionerRole_AvailableTime'
import { FhirPractitionerRole_NotAvailable } from './FhirPractitionerRole_NotAvailable'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
export const FhirPractitionerRole: t.Type<FhirPractitionerRole, FhirPractitionerRoleOutput> = t.recursion(
  'FhirPractitionerRole',
  () =>
    t.intersection([
      t.type({
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        resourceType: t.readonly(t.literal('PractitionerRole')),
      }),
      t.partial({
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        _active: t.readonly(FhirElement),
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        _availabilityExceptions: t.readonly(FhirElement),
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        _implicitRules: t.readonly(FhirElement),
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        _language: t.readonly(FhirElement),
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        active: t.readonly(FhirBoolean),
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        availabilityExceptions: t.readonly(FhirString),
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        availableTime: t.readonlyArray(FhirPractitionerRole_AvailableTime),
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        code: t.readonlyArray(FhirCodeableConcept),
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        contained: t.readonlyArray(FhirResourceList),
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        endpoint: t.readonlyArray(FhirReference),
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        extension: t.readonlyArray(FhirExtension),
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        healthcareService: t.readonlyArray(FhirReference),
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        id: t.readonly(FhirId),
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        implicitRules: t.readonly(FhirUri),
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        language: t.readonly(FhirCode),
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        location: t.readonlyArray(FhirReference),
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        meta: t.readonly(FhirMeta),
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        notAvailable: t.readonlyArray(FhirPractitionerRole_NotAvailable),
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        organization: t.readonly(FhirReference),
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        period: t.readonly(FhirPeriod),
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        practitioner: t.readonly(FhirReference),
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        specialty: t.readonlyArray(FhirCodeableConcept),
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        telecom: t.readonlyArray(FhirContactPoint),
        /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
        text: t.readonly(FhirNarrative),
      }),
    ])
)

/** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
export interface FhirPractitionerRole {
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  _active?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  _availabilityExceptions?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  active?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  availabilityExceptions?: Readonly<t.TypeOf<typeof FhirString>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  availableTime?: ReadonlyArray<t.TypeOf<typeof FhirPractitionerRole_AvailableTime>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  code?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  endpoint?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  healthcareService?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  location?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  notAvailable?: ReadonlyArray<t.TypeOf<typeof FhirPractitionerRole_NotAvailable>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  organization?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  period?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  practitioner?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  resourceType: Readonly<'PractitionerRole'>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  specialty?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  telecom?: ReadonlyArray<t.TypeOf<typeof FhirContactPoint>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
export interface FhirPractitionerRoleOutput {
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  _active?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  _availabilityExceptions?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  active?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  availabilityExceptions?: Readonly<t.OutputOf<typeof FhirString>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  availableTime?: ReadonlyArray<t.OutputOf<typeof FhirPractitionerRole_AvailableTime>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  code?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  endpoint?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  healthcareService?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  location?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  notAvailable?: ReadonlyArray<t.OutputOf<typeof FhirPractitionerRole_NotAvailable>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  organization?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  period?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  practitioner?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  resourceType: Readonly<'PractitionerRole'>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  specialty?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  telecom?: ReadonlyArray<t.OutputOf<typeof FhirContactPoint>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
