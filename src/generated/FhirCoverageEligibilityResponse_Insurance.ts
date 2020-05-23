import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCoverageEligibilityResponse_Item } from './FhirCoverageEligibilityResponse_Item'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
export const FhirCoverageEligibilityResponse_Insurance: t.Type<
  FhirCoverageEligibilityResponse_Insurance,
  FhirCoverageEligibilityResponse_InsuranceOutput
> = t.recursion('FhirCoverageEligibilityResponse_Insurance', () =>
  t.intersection([
    t.type({
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      coverage: t.readonly(FhirReference),
    }),
    t.partial({
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      _inforce: t.readonly(FhirElement),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      benefitPeriod: t.readonly(FhirPeriod),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      extension: t.readonlyArray(FhirExtension),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      id: t.readonly(FhirString),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      inforce: t.readonly(FhirBoolean),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      item: t.readonlyArray(FhirCoverageEligibilityResponse_Item),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      modifierExtension: t.readonlyArray(FhirExtension),
    }),
  ])
)

/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
export interface FhirCoverageEligibilityResponse_Insurance {
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _inforce?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  benefitPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  coverage: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  inforce?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  item?: ReadonlyArray<t.TypeOf<typeof FhirCoverageEligibilityResponse_Item>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
export interface FhirCoverageEligibilityResponse_InsuranceOutput {
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _inforce?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  benefitPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  coverage: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  inforce?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  item?: ReadonlyArray<t.OutputOf<typeof FhirCoverageEligibilityResponse_Item>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
