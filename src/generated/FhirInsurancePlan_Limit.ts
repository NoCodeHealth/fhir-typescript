import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'

/** Details of a Health Insurance product/plan provided by an organization. */
export const FhirInsurancePlan_Limit: t.Type<FhirInsurancePlan_Limit, FhirInsurancePlan_LimitOutput> = t.recursion(
  'FhirInsurancePlan_Limit',
  () =>
    t.partial({
      /** Details of a Health Insurance product/plan provided by an organization. */
      code: t.readonly(FhirCodeableConcept),
      /** Details of a Health Insurance product/plan provided by an organization. */
      extension: t.readonlyArray(FhirExtension),
      /** Details of a Health Insurance product/plan provided by an organization. */
      id: t.readonly(FhirString),
      /** Details of a Health Insurance product/plan provided by an organization. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Details of a Health Insurance product/plan provided by an organization. */
      value: t.readonly(FhirQuantity),
    })
)

/** Details of a Health Insurance product/plan provided by an organization. */
export interface FhirInsurancePlan_Limit {
  /** Details of a Health Insurance product/plan provided by an organization. */
  code?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  value?: Readonly<t.TypeOf<typeof FhirQuantity>>
}
/** Details of a Health Insurance product/plan provided by an organization. */
export interface FhirInsurancePlan_LimitOutput {
  /** Details of a Health Insurance product/plan provided by an organization. */
  code?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  value?: Readonly<t.OutputOf<typeof FhirQuantity>>
}
