import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
export const FhirCoverageEligibilityResponse_Error: t.Type<
  FhirCoverageEligibilityResponse_Error,
  FhirCoverageEligibilityResponse_ErrorOutput
> = t.recursion('FhirCoverageEligibilityResponse_Error', () =>
  t.intersection([
    t.type({
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      code: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      extension: t.readonlyArray(FhirExtension),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      id: t.readonly(FhirString),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      modifierExtension: t.readonlyArray(FhirExtension),
    }),
  ])
)

/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
export interface FhirCoverageEligibilityResponse_Error {
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  code: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
export interface FhirCoverageEligibilityResponse_ErrorOutput {
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  code: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
