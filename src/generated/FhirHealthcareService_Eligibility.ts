import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirMarkdown } from './FhirMarkdown'
import { FhirString } from './FhirString'

/** The details of a healthcare service available at a location. */
export const FhirHealthcareService_Eligibility: t.Type<
  FhirHealthcareService_Eligibility,
  FhirHealthcareService_EligibilityOutput
> = t.recursion('FhirHealthcareService_Eligibility', () =>
  t.partial({
    /** The details of a healthcare service available at a location. */
    _comment: t.readonly(FhirElement),
    /** The details of a healthcare service available at a location. */
    code: t.readonly(FhirCodeableConcept),
    /** The details of a healthcare service available at a location. */
    comment: t.readonly(FhirMarkdown),
    /** The details of a healthcare service available at a location. */
    extension: t.readonlyArray(FhirExtension),
    /** The details of a healthcare service available at a location. */
    id: t.readonly(FhirString),
    /** The details of a healthcare service available at a location. */
    modifierExtension: t.readonlyArray(FhirExtension),
  })
)

/** The details of a healthcare service available at a location. */
export interface FhirHealthcareService_Eligibility {
  /** The details of a healthcare service available at a location. */
  _comment?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  code?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The details of a healthcare service available at a location. */
  comment?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** The details of a healthcare service available at a location. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The details of a healthcare service available at a location. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The details of a healthcare service available at a location. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** The details of a healthcare service available at a location. */
export interface FhirHealthcareService_EligibilityOutput {
  /** The details of a healthcare service available at a location. */
  _comment?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  code?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The details of a healthcare service available at a location. */
  comment?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** The details of a healthcare service available at a location. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The details of a healthcare service available at a location. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The details of a healthcare service available at a location. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
