import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirCoverageEligibilityRequest_Diagnosis } from './FhirCoverageEligibilityRequest_Diagnosis'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirMoney } from './FhirMoney'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirQuantity } from './FhirQuantity'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
export const FhirCoverageEligibilityRequest_Item: t.Type<
  FhirCoverageEligibilityRequest_Item,
  FhirCoverageEligibilityRequest_ItemOutput
> = t.recursion('FhirCoverageEligibilityRequest_Item', () =>
  t.partial({
    /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
    _supportingInfoSequence: t.readonlyArray(FhirElement),
    /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
    category: t.readonly(FhirCodeableConcept),
    /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
    detail: t.readonlyArray(FhirReference),
    /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
    diagnosis: t.readonlyArray(FhirCoverageEligibilityRequest_Diagnosis),
    /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
    extension: t.readonlyArray(FhirExtension),
    /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
    facility: t.readonly(FhirReference),
    /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
    id: t.readonly(FhirString),
    /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
    modifier: t.readonlyArray(FhirCodeableConcept),
    /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
    productOrService: t.readonly(FhirCodeableConcept),
    /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
    provider: t.readonly(FhirReference),
    /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
    quantity: t.readonly(FhirQuantity),
    /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
    supportingInfoSequence: t.readonlyArray(FhirPositiveInt),
    /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
    unitPrice: t.readonly(FhirMoney),
  })
)

/** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
export interface FhirCoverageEligibilityRequest_Item {
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  _supportingInfoSequence?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  category?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  detail?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  diagnosis?: ReadonlyArray<t.TypeOf<typeof FhirCoverageEligibilityRequest_Diagnosis>>
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  facility?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  modifier?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  productOrService?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  provider?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  quantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  supportingInfoSequence?: ReadonlyArray<t.TypeOf<typeof FhirPositiveInt>>
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  unitPrice?: Readonly<t.TypeOf<typeof FhirMoney>>
}
/** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
export interface FhirCoverageEligibilityRequest_ItemOutput {
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  _supportingInfoSequence?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  category?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  detail?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  diagnosis?: ReadonlyArray<t.OutputOf<typeof FhirCoverageEligibilityRequest_Diagnosis>>
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  facility?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  modifier?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  productOrService?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  provider?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  quantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  supportingInfoSequence?: ReadonlyArray<t.OutputOf<typeof FhirPositiveInt>>
  /** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
  unitPrice?: Readonly<t.OutputOf<typeof FhirMoney>>
}
