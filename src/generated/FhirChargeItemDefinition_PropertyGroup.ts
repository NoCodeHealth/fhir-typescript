import * as t from 'io-ts'
import { FhirChargeItemDefinition_Applicability } from './FhirChargeItemDefinition_Applicability'
import { FhirChargeItemDefinition_PriceComponent } from './FhirChargeItemDefinition_PriceComponent'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */
export const FhirChargeItemDefinition_PropertyGroup: t.Type<
  FhirChargeItemDefinition_PropertyGroup,
  FhirChargeItemDefinition_PropertyGroupOutput
> = t.recursion('FhirChargeItemDefinition_PropertyGroup', () =>
  t.partial({
    /** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */
    applicability: t.readonlyArray(FhirChargeItemDefinition_Applicability),
    /** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */
    extension: t.readonlyArray(FhirExtension),
    /** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */
    id: t.readonly(FhirString),
    /** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */
    priceComponent: t.readonlyArray(FhirChargeItemDefinition_PriceComponent),
  })
)

/** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */
export interface FhirChargeItemDefinition_PropertyGroup {
  /** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */
  applicability?: ReadonlyArray<t.TypeOf<typeof FhirChargeItemDefinition_Applicability>>
  /** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */
  priceComponent?: ReadonlyArray<t.TypeOf<typeof FhirChargeItemDefinition_PriceComponent>>
}
/** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */
export interface FhirChargeItemDefinition_PropertyGroupOutput {
  /** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */
  applicability?: ReadonlyArray<t.OutputOf<typeof FhirChargeItemDefinition_Applicability>>
  /** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */
  priceComponent?: ReadonlyArray<t.OutputOf<typeof FhirChargeItemDefinition_PriceComponent>>
}
