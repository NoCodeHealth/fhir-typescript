import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDecimal } from './FhirDecimal'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirMoney } from './FhirMoney'
import { FhirString } from './FhirString'

/** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
export const FhirInvoice_PriceComponent: t.Type<
  FhirInvoice_PriceComponent,
  FhirInvoice_PriceComponentOutput
> = t.recursion('FhirInvoice_PriceComponent', () =>
  t.partial({
    /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
    _factor: t.readonly(FhirElement),
    /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
    _type: t.readonly(FhirElement),
    /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
    amount: t.readonly(FhirMoney),
    /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
    code: t.readonly(FhirCodeableConcept),
    /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
    extension: t.readonlyArray(FhirExtension),
    /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
    factor: t.readonly(FhirDecimal),
    /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
    id: t.readonly(FhirString),
    /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
    type: t.readonly(
      t.keyof({
        base: null,
        surcharge: null,
        deduction: null,
        discount: null,
        tax: null,
        informational: null,
      })
    ),
  })
)

/** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
export interface FhirInvoice_PriceComponent {
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  _factor?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  amount?: Readonly<t.TypeOf<typeof FhirMoney>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  code?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  factor?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  type?: Readonly<'base' | 'surcharge' | 'deduction' | 'discount' | 'tax' | 'informational'>
}
/** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
export interface FhirInvoice_PriceComponentOutput {
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  _factor?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  amount?: Readonly<t.OutputOf<typeof FhirMoney>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  code?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  factor?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
  type?: Readonly<'base' | 'surcharge' | 'deduction' | 'discount' | 'tax' | 'informational'>
}
