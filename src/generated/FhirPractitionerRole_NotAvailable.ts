import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirString } from './FhirString'

/** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
export const FhirPractitionerRole_NotAvailable: t.Type<
  FhirPractitionerRole_NotAvailable,
  FhirPractitionerRole_NotAvailableOutput
> = t.recursion('FhirPractitionerRole_NotAvailable', () =>
  t.partial({
    /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
    _description: t.readonly(FhirElement),
    /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
    description: t.readonly(FhirString),
    /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
    during: t.readonly(FhirPeriod),
    /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
    extension: t.readonlyArray(FhirExtension),
    /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
    id: t.readonly(FhirString),
    /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
    modifierExtension: t.readonlyArray(FhirExtension),
  })
)

/** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
export interface FhirPractitionerRole_NotAvailable {
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  during?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
export interface FhirPractitionerRole_NotAvailableOutput {
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  during?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
