import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDecimal } from './FhirDecimal'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirMoney } from './FhirMoney'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirQuantity } from './FhirQuantity'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export const FhirClaim_SubDetail: t.Type<FhirClaim_SubDetail, FhirClaim_SubDetailOutput> = t.recursion(
  'FhirClaim_SubDetail',
  () =>
    t.intersection([
      t.type({
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        productOrService: t.readonly(FhirCodeableConcept),
      }),
      t.partial({
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        _factor: t.readonly(FhirElement),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        _sequence: t.readonly(FhirElement),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        category: t.readonly(FhirCodeableConcept),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        extension: t.readonlyArray(FhirExtension),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        factor: t.readonly(FhirDecimal),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        id: t.readonly(FhirString),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        modifier: t.readonlyArray(FhirCodeableConcept),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        net: t.readonly(FhirMoney),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        programCode: t.readonlyArray(FhirCodeableConcept),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        quantity: t.readonly(FhirQuantity),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        revenue: t.readonly(FhirCodeableConcept),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        sequence: t.readonly(FhirPositiveInt),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        udi: t.readonlyArray(FhirReference),
        /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
        unitPrice: t.readonly(FhirMoney),
      }),
    ])
)

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export interface FhirClaim_SubDetail {
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _factor?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _sequence?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  category?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  factor?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  modifier?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  net?: Readonly<t.TypeOf<typeof FhirMoney>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  productOrService: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  programCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  quantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  revenue?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  sequence?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  udi?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  unitPrice?: Readonly<t.TypeOf<typeof FhirMoney>>
}
/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export interface FhirClaim_SubDetailOutput {
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _factor?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  _sequence?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  category?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  factor?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  modifier?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  net?: Readonly<t.OutputOf<typeof FhirMoney>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  productOrService: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  programCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  quantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  revenue?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  sequence?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  udi?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
  unitPrice?: Readonly<t.OutputOf<typeof FhirMoney>>
}
