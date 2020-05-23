import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'

/** Details of a Health Insurance product/plan provided by an organization. */
export const FhirInsurancePlan_Cost: t.Type<FhirInsurancePlan_Cost, FhirInsurancePlan_CostOutput> = t.recursion(
  'FhirInsurancePlan_Cost',
  () =>
    t.intersection([
      t.type({
        /** Details of a Health Insurance product/plan provided by an organization. */
        type: t.readonly(FhirCodeableConcept),
      }),
      t.partial({
        /** Details of a Health Insurance product/plan provided by an organization. */
        applicability: t.readonly(FhirCodeableConcept),
        /** Details of a Health Insurance product/plan provided by an organization. */
        extension: t.readonlyArray(FhirExtension),
        /** Details of a Health Insurance product/plan provided by an organization. */
        id: t.readonly(FhirString),
        /** Details of a Health Insurance product/plan provided by an organization. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** Details of a Health Insurance product/plan provided by an organization. */
        qualifiers: t.readonlyArray(FhirCodeableConcept),
        /** Details of a Health Insurance product/plan provided by an organization. */
        value: t.readonly(FhirQuantity),
      }),
    ])
)

/** Details of a Health Insurance product/plan provided by an organization. */
export interface FhirInsurancePlan_Cost {
  /** Details of a Health Insurance product/plan provided by an organization. */
  applicability?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  qualifiers?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  type: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  value?: Readonly<t.TypeOf<typeof FhirQuantity>>
}
/** Details of a Health Insurance product/plan provided by an organization. */
export interface FhirInsurancePlan_CostOutput {
  /** Details of a Health Insurance product/plan provided by an organization. */
  applicability?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  qualifiers?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  type: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  value?: Readonly<t.OutputOf<typeof FhirQuantity>>
}
