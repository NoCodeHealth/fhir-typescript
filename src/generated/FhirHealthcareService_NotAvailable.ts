import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirString } from './FhirString'

/** The details of a healthcare service available at a location. */
export const FhirHealthcareService_NotAvailable: t.Type<
  FhirHealthcareService_NotAvailable,
  FhirHealthcareService_NotAvailableOutput
> = t.recursion('FhirHealthcareService_NotAvailable', () =>
  t.partial({
    /** The details of a healthcare service available at a location. */
    _description: t.readonly(FhirElement),
    /** The details of a healthcare service available at a location. */
    description: t.readonly(FhirString),
    /** The details of a healthcare service available at a location. */
    during: t.readonly(FhirPeriod),
    /** The details of a healthcare service available at a location. */
    extension: t.readonlyArray(FhirExtension),
    /** The details of a healthcare service available at a location. */
    id: t.readonly(FhirString),
    /** The details of a healthcare service available at a location. */
    modifierExtension: t.readonlyArray(FhirExtension),
  })
)

/** The details of a healthcare service available at a location. */
export interface FhirHealthcareService_NotAvailable {
  /** The details of a healthcare service available at a location. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** The details of a healthcare service available at a location. */
  during?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** The details of a healthcare service available at a location. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The details of a healthcare service available at a location. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The details of a healthcare service available at a location. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** The details of a healthcare service available at a location. */
export interface FhirHealthcareService_NotAvailableOutput {
  /** The details of a healthcare service available at a location. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** The details of a healthcare service available at a location. */
  during?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** The details of a healthcare service available at a location. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The details of a healthcare service available at a location. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The details of a healthcare service available at a location. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
