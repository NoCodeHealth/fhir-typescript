import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirInsurancePlan_Cost } from './FhirInsurancePlan_Cost'
import { FhirString } from './FhirString'

/** Details of a Health Insurance product/plan provided by an organization. */
export const FhirInsurancePlan_Benefit1: t.Type<
  FhirInsurancePlan_Benefit1,
  FhirInsurancePlan_Benefit1Output
> = t.recursion('FhirInsurancePlan_Benefit1', () =>
  t.intersection([
    t.type({
      /** Details of a Health Insurance product/plan provided by an organization. */
      type: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** Details of a Health Insurance product/plan provided by an organization. */
      cost: t.readonlyArray(FhirInsurancePlan_Cost),
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
export interface FhirInsurancePlan_Benefit1 {
  /** Details of a Health Insurance product/plan provided by an organization. */
  cost?: ReadonlyArray<t.TypeOf<typeof FhirInsurancePlan_Cost>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  type: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Details of a Health Insurance product/plan provided by an organization. */
export interface FhirInsurancePlan_Benefit1Output {
  /** Details of a Health Insurance product/plan provided by an organization. */
  cost?: ReadonlyArray<t.OutputOf<typeof FhirInsurancePlan_Cost>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  type: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
