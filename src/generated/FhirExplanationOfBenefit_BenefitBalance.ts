import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExplanationOfBenefit_Financial } from './FhirExplanationOfBenefit_Financial'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export const FhirExplanationOfBenefit_BenefitBalance: t.Type<
  FhirExplanationOfBenefit_BenefitBalance,
  FhirExplanationOfBenefit_BenefitBalanceOutput
> = t.recursion('FhirExplanationOfBenefit_BenefitBalance', () =>
  t.intersection([
    t.type({
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      category: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      _description: t.readonly(FhirElement),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      _excluded: t.readonly(FhirElement),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      _name: t.readonly(FhirElement),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      description: t.readonly(FhirString),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      excluded: t.readonly(FhirBoolean),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      extension: t.readonlyArray(FhirExtension),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      financial: t.readonlyArray(FhirExplanationOfBenefit_Financial),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      id: t.readonly(FhirString),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      name: t.readonly(FhirString),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      network: t.readonly(FhirCodeableConcept),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      term: t.readonly(FhirCodeableConcept),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      unit: t.readonly(FhirCodeableConcept),
    }),
  ])
)

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface FhirExplanationOfBenefit_BenefitBalance {
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _excluded?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  category: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  excluded?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  financial?: ReadonlyArray<t.TypeOf<typeof FhirExplanationOfBenefit_Financial>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  network?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  term?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  unit?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface FhirExplanationOfBenefit_BenefitBalanceOutput {
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _excluded?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  category: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  excluded?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  financial?: ReadonlyArray<t.OutputOf<typeof FhirExplanationOfBenefit_Financial>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  network?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  term?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  unit?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
