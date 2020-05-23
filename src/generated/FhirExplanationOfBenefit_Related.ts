import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export const FhirExplanationOfBenefit_Related: t.Type<
  FhirExplanationOfBenefit_Related,
  FhirExplanationOfBenefit_RelatedOutput
> = t.recursion('FhirExplanationOfBenefit_Related', () =>
  t.partial({
    /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
    claim: t.readonly(FhirReference),
    /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
    extension: t.readonlyArray(FhirExtension),
    /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
    id: t.readonly(FhirString),
    /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
    reference: t.readonly(FhirIdentifier),
    /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
    relationship: t.readonly(FhirCodeableConcept),
  })
)

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface FhirExplanationOfBenefit_Related {
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  claim?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  reference?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  relationship?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface FhirExplanationOfBenefit_RelatedOutput {
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  claim?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  reference?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  relationship?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
