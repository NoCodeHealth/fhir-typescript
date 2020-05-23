import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCode } from './FhirCode'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirTime } from './FhirTime'

/** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
export const FhirPractitionerRole_AvailableTime: t.Type<
  FhirPractitionerRole_AvailableTime,
  FhirPractitionerRole_AvailableTimeOutput
> = t.recursion('FhirPractitionerRole_AvailableTime', () =>
  t.partial({
    /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
    _allDay: t.readonly(FhirElement),
    /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
    _availableEndTime: t.readonly(FhirElement),
    /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
    _availableStartTime: t.readonly(FhirElement),
    /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
    _daysOfWeek: t.readonlyArray(FhirElement),
    /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
    allDay: t.readonly(FhirBoolean),
    /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
    availableEndTime: t.readonly(FhirTime),
    /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
    availableStartTime: t.readonly(FhirTime),
    /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
    daysOfWeek: t.readonlyArray(FhirCode),
    /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
    extension: t.readonlyArray(FhirExtension),
    /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
    id: t.readonly(FhirString),
    /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
    modifierExtension: t.readonlyArray(FhirExtension),
  })
)

/** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
export interface FhirPractitionerRole_AvailableTime {
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  _allDay?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  _availableEndTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  _availableStartTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  _daysOfWeek?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  allDay?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  availableEndTime?: Readonly<t.TypeOf<typeof FhirTime>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  availableStartTime?: Readonly<t.TypeOf<typeof FhirTime>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  daysOfWeek?: ReadonlyArray<t.TypeOf<typeof FhirCode>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
export interface FhirPractitionerRole_AvailableTimeOutput {
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  _allDay?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  _availableEndTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  _availableStartTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  _daysOfWeek?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  allDay?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  availableEndTime?: Readonly<t.OutputOf<typeof FhirTime>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  availableStartTime?: Readonly<t.OutputOf<typeof FhirTime>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  daysOfWeek?: ReadonlyArray<t.OutputOf<typeof FhirCode>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
