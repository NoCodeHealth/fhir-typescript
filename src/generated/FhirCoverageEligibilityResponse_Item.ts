import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirCoverageEligibilityResponse_Benefit } from './FhirCoverageEligibilityResponse_Benefit'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
export const FhirCoverageEligibilityResponse_Item: t.Type<
  FhirCoverageEligibilityResponse_Item,
  FhirCoverageEligibilityResponse_ItemOutput
> = t.recursion('FhirCoverageEligibilityResponse_Item', () =>
  t.partial({
    /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
    _authorizationRequired: t.readonly(FhirElement),
    /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
    _authorizationUrl: t.readonly(FhirElement),
    /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
    _description: t.readonly(FhirElement),
    /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
    _excluded: t.readonly(FhirElement),
    /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
    _name: t.readonly(FhirElement),
    /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
    authorizationRequired: t.readonly(FhirBoolean),
    /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
    authorizationSupporting: t.readonlyArray(FhirCodeableConcept),
    /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
    authorizationUrl: t.readonly(FhirUri),
    /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
    benefit: t.readonlyArray(FhirCoverageEligibilityResponse_Benefit),
    /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
    category: t.readonly(FhirCodeableConcept),
    /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
    description: t.readonly(FhirString),
    /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
    excluded: t.readonly(FhirBoolean),
    /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
    extension: t.readonlyArray(FhirExtension),
    /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
    id: t.readonly(FhirString),
    /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
    modifier: t.readonlyArray(FhirCodeableConcept),
    /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
    name: t.readonly(FhirString),
    /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
    network: t.readonly(FhirCodeableConcept),
    /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
    productOrService: t.readonly(FhirCodeableConcept),
    /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
    provider: t.readonly(FhirReference),
    /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
    term: t.readonly(FhirCodeableConcept),
    /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
    unit: t.readonly(FhirCodeableConcept),
  })
)

/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
export interface FhirCoverageEligibilityResponse_Item {
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _authorizationRequired?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _authorizationUrl?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _excluded?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  authorizationRequired?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  authorizationSupporting?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  authorizationUrl?: Readonly<t.TypeOf<typeof FhirUri>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  benefit?: ReadonlyArray<t.TypeOf<typeof FhirCoverageEligibilityResponse_Benefit>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  category?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  excluded?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  modifier?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  network?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  productOrService?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  provider?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  term?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  unit?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
export interface FhirCoverageEligibilityResponse_ItemOutput {
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _authorizationRequired?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _authorizationUrl?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _excluded?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  authorizationRequired?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  authorizationSupporting?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  authorizationUrl?: Readonly<t.OutputOf<typeof FhirUri>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  benefit?: ReadonlyArray<t.OutputOf<typeof FhirCoverageEligibilityResponse_Benefit>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  category?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  excluded?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  modifier?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  network?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  productOrService?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  provider?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  term?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  unit?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
