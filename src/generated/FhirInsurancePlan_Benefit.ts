import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirInsurancePlan_Limit } from './FhirInsurancePlan_Limit'
import { FhirString } from './FhirString'

/** Details of a Health Insurance product/plan provided by an organization. */
export const FhirInsurancePlan_Benefit: t.Type<
  FhirInsurancePlan_Benefit,
  FhirInsurancePlan_BenefitOutput
> = t.recursion('FhirInsurancePlan_Benefit', () =>
  t.intersection([
    t.type({
      /** Details of a Health Insurance product/plan provided by an organization. */
      type: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** Details of a Health Insurance product/plan provided by an organization. */
      _requirement: t.readonly(FhirElement),
      /** Details of a Health Insurance product/plan provided by an organization. */
      extension: t.readonlyArray(FhirExtension),
      /** Details of a Health Insurance product/plan provided by an organization. */
      id: t.readonly(FhirString),
      /** Details of a Health Insurance product/plan provided by an organization. */
      limit: t.readonlyArray(FhirInsurancePlan_Limit),
      /** Details of a Health Insurance product/plan provided by an organization. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Details of a Health Insurance product/plan provided by an organization. */
      requirement: t.readonly(FhirString),
    }),
  ])
)

/** Details of a Health Insurance product/plan provided by an organization. */
export interface FhirInsurancePlan_Benefit {
  /** Details of a Health Insurance product/plan provided by an organization. */
  _requirement?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  limit?: ReadonlyArray<t.TypeOf<typeof FhirInsurancePlan_Limit>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  requirement?: Readonly<t.TypeOf<typeof FhirString>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  type: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Details of a Health Insurance product/plan provided by an organization. */
export interface FhirInsurancePlan_BenefitOutput {
  /** Details of a Health Insurance product/plan provided by an organization. */
  _requirement?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  limit?: ReadonlyArray<t.OutputOf<typeof FhirInsurancePlan_Limit>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  requirement?: Readonly<t.OutputOf<typeof FhirString>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  type: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
