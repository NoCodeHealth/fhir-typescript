import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirQuantity } from './FhirQuantity'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Record of delivery of what is supplied. */
export const FhirSupplyDelivery_SuppliedItem: t.Type<
  FhirSupplyDelivery_SuppliedItem,
  FhirSupplyDelivery_SuppliedItemOutput
> = t.recursion('FhirSupplyDelivery_SuppliedItem', () =>
  t.partial({
    /** Record of delivery of what is supplied. */
    extension: t.readonlyArray(FhirExtension),
    /** Record of delivery of what is supplied. */
    id: t.readonly(FhirString),
    /** Record of delivery of what is supplied. */
    itemCodeableConcept: t.readonly(FhirCodeableConcept),
    /** Record of delivery of what is supplied. */
    itemReference: t.readonly(FhirReference),
    /** Record of delivery of what is supplied. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Record of delivery of what is supplied. */
    quantity: t.readonly(FhirQuantity),
  })
)

/** Record of delivery of what is supplied. */
export interface FhirSupplyDelivery_SuppliedItem {
  /** Record of delivery of what is supplied. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Record of delivery of what is supplied. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Record of delivery of what is supplied. */
  itemCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Record of delivery of what is supplied. */
  itemReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Record of delivery of what is supplied. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Record of delivery of what is supplied. */
  quantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
}
/** Record of delivery of what is supplied. */
export interface FhirSupplyDelivery_SuppliedItemOutput {
  /** Record of delivery of what is supplied. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Record of delivery of what is supplied. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Record of delivery of what is supplied. */
  itemCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Record of delivery of what is supplied. */
  itemReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Record of delivery of what is supplied. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Record of delivery of what is supplied. */
  quantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
}
