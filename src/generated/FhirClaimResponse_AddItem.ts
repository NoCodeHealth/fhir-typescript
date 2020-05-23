import * as t from 'io-ts'
import { FhirAddress } from './FhirAddress'
import { FhirClaimResponse_Adjudication } from './FhirClaimResponse_Adjudication'
import { FhirClaimResponse_Detail1 } from './FhirClaimResponse_Detail1'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDecimal } from './FhirDecimal'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirMoney } from './FhirMoney'
import { FhirPeriod } from './FhirPeriod'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirQuantity } from './FhirQuantity'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** This resource provides the adjudication details from the processing of a Claim resource. */
export const FhirClaimResponse_AddItem: t.Type<
  FhirClaimResponse_AddItem,
  FhirClaimResponse_AddItemOutput
> = t.recursion('FhirClaimResponse_AddItem', () =>
  t.intersection([
    t.type({
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      adjudication: t.readonlyArray(FhirClaimResponse_Adjudication),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      productOrService: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      _detailSequence: t.readonlyArray(FhirElement),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      _factor: t.readonly(FhirElement),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      _itemSequence: t.readonlyArray(FhirElement),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      _noteNumber: t.readonlyArray(FhirElement),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      _servicedDate: t.readonly(FhirElement),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      _subdetailSequence: t.readonlyArray(FhirElement),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      bodySite: t.readonly(FhirCodeableConcept),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      detail: t.readonlyArray(FhirClaimResponse_Detail1),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      detailSequence: t.readonlyArray(FhirPositiveInt),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      extension: t.readonlyArray(FhirExtension),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      factor: t.readonly(FhirDecimal),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      id: t.readonly(FhirString),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      itemSequence: t.readonlyArray(FhirPositiveInt),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      locationAddress: t.readonly(FhirAddress),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      locationCodeableConcept: t.readonly(FhirCodeableConcept),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      locationReference: t.readonly(FhirReference),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      modifier: t.readonlyArray(FhirCodeableConcept),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      net: t.readonly(FhirMoney),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      noteNumber: t.readonlyArray(FhirPositiveInt),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      programCode: t.readonlyArray(FhirCodeableConcept),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      provider: t.readonlyArray(FhirReference),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      quantity: t.readonly(FhirQuantity),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      servicedDate: t.readonly(t.string),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      servicedPeriod: t.readonly(FhirPeriod),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      subSite: t.readonlyArray(FhirCodeableConcept),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      subdetailSequence: t.readonlyArray(FhirPositiveInt),
      /** This resource provides the adjudication details from the processing of a Claim resource. */
      unitPrice: t.readonly(FhirMoney),
    }),
  ])
)

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface FhirClaimResponse_AddItem {
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _detailSequence?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _factor?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _itemSequence?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _noteNumber?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _servicedDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _subdetailSequence?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  adjudication: ReadonlyArray<t.TypeOf<typeof FhirClaimResponse_Adjudication>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  bodySite?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  detail?: ReadonlyArray<t.TypeOf<typeof FhirClaimResponse_Detail1>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  detailSequence?: ReadonlyArray<t.TypeOf<typeof FhirPositiveInt>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  factor?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  itemSequence?: ReadonlyArray<t.TypeOf<typeof FhirPositiveInt>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  locationAddress?: Readonly<t.TypeOf<typeof FhirAddress>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  locationCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  locationReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  modifier?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  net?: Readonly<t.TypeOf<typeof FhirMoney>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  noteNumber?: ReadonlyArray<t.TypeOf<typeof FhirPositiveInt>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  productOrService: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  programCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  provider?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  quantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  servicedDate?: Readonly<string>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  servicedPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  subSite?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  subdetailSequence?: ReadonlyArray<t.TypeOf<typeof FhirPositiveInt>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  unitPrice?: Readonly<t.TypeOf<typeof FhirMoney>>
}
/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface FhirClaimResponse_AddItemOutput {
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _detailSequence?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _factor?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _itemSequence?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _noteNumber?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _servicedDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  _subdetailSequence?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  adjudication: ReadonlyArray<t.OutputOf<typeof FhirClaimResponse_Adjudication>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  bodySite?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  detail?: ReadonlyArray<t.OutputOf<typeof FhirClaimResponse_Detail1>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  detailSequence?: ReadonlyArray<t.OutputOf<typeof FhirPositiveInt>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  factor?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  itemSequence?: ReadonlyArray<t.OutputOf<typeof FhirPositiveInt>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  locationAddress?: Readonly<t.OutputOf<typeof FhirAddress>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  locationCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  locationReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  modifier?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  net?: Readonly<t.OutputOf<typeof FhirMoney>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  noteNumber?: ReadonlyArray<t.OutputOf<typeof FhirPositiveInt>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  productOrService: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  programCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  provider?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  quantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  servicedDate?: Readonly<string>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  servicedPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  subSite?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  subdetailSequence?: ReadonlyArray<t.OutputOf<typeof FhirPositiveInt>>
  /** This resource provides the adjudication details from the processing of a Claim resource. */
  unitPrice?: Readonly<t.OutputOf<typeof FhirMoney>>
}
