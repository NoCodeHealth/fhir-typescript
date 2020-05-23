import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirInsurancePlan_Benefit1 } from './FhirInsurancePlan_Benefit1'
import { FhirString } from './FhirString'

/** Details of a Health Insurance product/plan provided by an organization. */
export const FhirInsurancePlan_SpecificCost: t.Type<
  FhirInsurancePlan_SpecificCost,
  FhirInsurancePlan_SpecificCostOutput
> = t.recursion('FhirInsurancePlan_SpecificCost', () =>
  t.intersection([
    t.type({
      /** Details of a Health Insurance product/plan provided by an organization. */
      category: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** Details of a Health Insurance product/plan provided by an organization. */
      benefit: t.readonlyArray(FhirInsurancePlan_Benefit1),
      /** Details of a Health Insurance product/plan provided by an organization. */
      extension: t.readonlyArray(FhirExtension),
      /** Details of a Health Insurance product/plan provided by an organization. */
      id: t.readonly(FhirString),
      /** Details of a Health Insurance product/plan provided by an organization. */
      modifierExtension: t.readonlyArray(FhirExtension),
    }),
  ])
)

/** Details of a Health Insurance product/plan provided by an organization. */
export interface FhirInsurancePlan_SpecificCost {
  /** Details of a Health Insurance product/plan provided by an organization. */
  benefit?: ReadonlyArray<t.TypeOf<typeof FhirInsurancePlan_Benefit1>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  category: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** Details of a Health Insurance product/plan provided by an organization. */
export interface FhirInsurancePlan_SpecificCostOutput {
  /** Details of a Health Insurance product/plan provided by an organization. */
  benefit?: ReadonlyArray<t.OutputOf<typeof FhirInsurancePlan_Benefit1>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  category: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
