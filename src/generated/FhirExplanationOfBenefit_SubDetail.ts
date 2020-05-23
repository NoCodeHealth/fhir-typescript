import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDecimal } from './FhirDecimal'
import { FhirElement } from './FhirElement'
import { FhirExplanationOfBenefit_Adjudication } from './FhirExplanationOfBenefit_Adjudication'
import { FhirExtension } from './FhirExtension'
import { FhirMoney } from './FhirMoney'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirQuantity } from './FhirQuantity'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export const FhirExplanationOfBenefit_SubDetail: t.Type<
  FhirExplanationOfBenefit_SubDetail,
  FhirExplanationOfBenefit_SubDetailOutput
> = t.recursion('FhirExplanationOfBenefit_SubDetail', () =>
  t.intersection([
    t.type({
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      productOrService: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      _factor: t.readonly(FhirElement),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      _noteNumber: t.readonlyArray(FhirElement),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      _sequence: t.readonly(FhirElement),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      adjudication: t.readonlyArray(FhirExplanationOfBenefit_Adjudication),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      category: t.readonly(FhirCodeableConcept),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      extension: t.readonlyArray(FhirExtension),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      factor: t.readonly(FhirDecimal),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      id: t.readonly(FhirString),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      modifier: t.readonlyArray(FhirCodeableConcept),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      net: t.readonly(FhirMoney),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      noteNumber: t.readonlyArray(FhirPositiveInt),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      programCode: t.readonlyArray(FhirCodeableConcept),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      quantity: t.readonly(FhirQuantity),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      revenue: t.readonly(FhirCodeableConcept),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      sequence: t.readonly(FhirPositiveInt),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      udi: t.readonlyArray(FhirReference),
      /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
      unitPrice: t.readonly(FhirMoney),
    }),
  ])
)

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface FhirExplanationOfBenefit_SubDetail {
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _factor?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _noteNumber?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _sequence?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  adjudication?: ReadonlyArray<t.TypeOf<typeof FhirExplanationOfBenefit_Adjudication>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  category?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  factor?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  modifier?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  net?: Readonly<t.TypeOf<typeof FhirMoney>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  noteNumber?: ReadonlyArray<t.TypeOf<typeof FhirPositiveInt>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  productOrService: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  programCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  quantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  revenue?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  sequence?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  udi?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  unitPrice?: Readonly<t.TypeOf<typeof FhirMoney>>
}
/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface FhirExplanationOfBenefit_SubDetailOutput {
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _factor?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _noteNumber?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  _sequence?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  adjudication?: ReadonlyArray<t.OutputOf<typeof FhirExplanationOfBenefit_Adjudication>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  category?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  factor?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  modifier?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  net?: Readonly<t.OutputOf<typeof FhirMoney>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  noteNumber?: ReadonlyArray<t.OutputOf<typeof FhirPositiveInt>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  productOrService: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  programCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  quantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  revenue?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  sequence?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  udi?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
  unitPrice?: Readonly<t.OutputOf<typeof FhirMoney>>
}
