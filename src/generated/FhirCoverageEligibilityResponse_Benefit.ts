import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirMoney } from './FhirMoney'
import { FhirString } from './FhirString'

/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
export const FhirCoverageEligibilityResponse_Benefit: t.Type<
  FhirCoverageEligibilityResponse_Benefit,
  FhirCoverageEligibilityResponse_BenefitOutput
> = t.recursion('FhirCoverageEligibilityResponse_Benefit', () =>
  t.intersection([
    t.type({
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      type: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      _allowedString: t.readonly(FhirElement),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      _allowedUnsignedInt: t.readonly(FhirElement),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      _usedString: t.readonly(FhirElement),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      _usedUnsignedInt: t.readonly(FhirElement),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      allowedMoney: t.readonly(FhirMoney),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      allowedString: t.readonly(t.string),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      allowedUnsignedInt: t.readonly(t.number),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      extension: t.readonlyArray(FhirExtension),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      id: t.readonly(FhirString),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      usedMoney: t.readonly(FhirMoney),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      usedString: t.readonly(t.string),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      usedUnsignedInt: t.readonly(t.number),
    }),
  ])
)

/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
export interface FhirCoverageEligibilityResponse_Benefit {
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _allowedString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _allowedUnsignedInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _usedString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _usedUnsignedInt?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  allowedMoney?: Readonly<t.TypeOf<typeof FhirMoney>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  allowedString?: Readonly<string>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  allowedUnsignedInt?: Readonly<number>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  type: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  usedMoney?: Readonly<t.TypeOf<typeof FhirMoney>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  usedString?: Readonly<string>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  usedUnsignedInt?: Readonly<number>
}
/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
export interface FhirCoverageEligibilityResponse_BenefitOutput {
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _allowedString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _allowedUnsignedInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _usedString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _usedUnsignedInt?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  allowedMoney?: Readonly<t.OutputOf<typeof FhirMoney>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  allowedString?: Readonly<string>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  allowedUnsignedInt?: Readonly<number>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  type: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  usedMoney?: Readonly<t.OutputOf<typeof FhirMoney>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  usedString?: Readonly<string>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  usedUnsignedInt?: Readonly<number>
}
