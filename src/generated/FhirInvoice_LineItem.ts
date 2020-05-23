import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirInvoice_PriceComponent } from './FhirInvoice_PriceComponent'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
export const FhirInvoice_LineItem: t.Type<FhirInvoice_LineItem, FhirInvoice_LineItemOutput> = t.recursion(
  'FhirInvoice_LineItem',
  () =>
    t.partial({
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      _sequence: t.readonly(FhirElement),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      chargeItemCodeableConcept: t.readonly(FhirCodeableConcept),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      chargeItemReference: t.readonly(FhirReference),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      extension: t.readonlyArray(FhirExtension),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      id: t.readonly(FhirString),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      priceComponent: t.readonlyArray(FhirInvoice_PriceComponent),
      /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
      sequence: t.readonly(FhirPositiveInt),
    })
)

/** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
export interface FhirInvoice_LineItem {
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  _sequence?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  chargeItemCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  chargeItemReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  priceComponent?: ReadonlyArray<t.TypeOf<typeof FhirInvoice_PriceComponent>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  sequence?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
}
/** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
export interface FhirInvoice_LineItemOutput {
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  _sequence?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  chargeItemCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  chargeItemReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  priceComponent?: ReadonlyArray<t.OutputOf<typeof FhirInvoice_PriceComponent>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  sequence?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
}
