import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirInsurancePlan_GeneralCost } from './FhirInsurancePlan_GeneralCost'
import { FhirInsurancePlan_SpecificCost } from './FhirInsurancePlan_SpecificCost'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Details of a Health Insurance product/plan provided by an organization. */
export const FhirInsurancePlan_Plan: t.Type<FhirInsurancePlan_Plan, FhirInsurancePlan_PlanOutput> = t.recursion(
  'FhirInsurancePlan_Plan',
  () =>
    t.partial({
      /** Details of a Health Insurance product/plan provided by an organization. */
      coverageArea: t.readonlyArray(FhirReference),
      /** Details of a Health Insurance product/plan provided by an organization. */
      extension: t.readonlyArray(FhirExtension),
      /** Details of a Health Insurance product/plan provided by an organization. */
      generalCost: t.readonlyArray(FhirInsurancePlan_GeneralCost),
      /** Details of a Health Insurance product/plan provided by an organization. */
      id: t.readonly(FhirString),
      /** Details of a Health Insurance product/plan provided by an organization. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** Details of a Health Insurance product/plan provided by an organization. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Details of a Health Insurance product/plan provided by an organization. */
      network: t.readonlyArray(FhirReference),
      /** Details of a Health Insurance product/plan provided by an organization. */
      specificCost: t.readonlyArray(FhirInsurancePlan_SpecificCost),
      /** Details of a Health Insurance product/plan provided by an organization. */
      type: t.readonly(FhirCodeableConcept),
    })
)

/** Details of a Health Insurance product/plan provided by an organization. */
export interface FhirInsurancePlan_Plan {
  /** Details of a Health Insurance product/plan provided by an organization. */
  coverageArea?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  generalCost?: ReadonlyArray<t.TypeOf<typeof FhirInsurancePlan_GeneralCost>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  network?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  specificCost?: ReadonlyArray<t.TypeOf<typeof FhirInsurancePlan_SpecificCost>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Details of a Health Insurance product/plan provided by an organization. */
export interface FhirInsurancePlan_PlanOutput {
  /** Details of a Health Insurance product/plan provided by an organization. */
  coverageArea?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  generalCost?: ReadonlyArray<t.OutputOf<typeof FhirInsurancePlan_GeneralCost>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  network?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  specificCost?: ReadonlyArray<t.OutputOf<typeof FhirInsurancePlan_SpecificCost>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
