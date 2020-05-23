import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirInsurancePlan_Benefit } from './FhirInsurancePlan_Benefit'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Details of a Health Insurance product/plan provided by an organization. */
export const FhirInsurancePlan_Coverage: t.Type<
  FhirInsurancePlan_Coverage,
  FhirInsurancePlan_CoverageOutput
> = t.recursion('FhirInsurancePlan_Coverage', () =>
  t.intersection([
    t.type({
      /** Details of a Health Insurance product/plan provided by an organization. */
      benefit: t.readonlyArray(FhirInsurancePlan_Benefit),
      /** Details of a Health Insurance product/plan provided by an organization. */
      type: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** Details of a Health Insurance product/plan provided by an organization. */
      extension: t.readonlyArray(FhirExtension),
      /** Details of a Health Insurance product/plan provided by an organization. */
      id: t.readonly(FhirString),
      /** Details of a Health Insurance product/plan provided by an organization. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Details of a Health Insurance product/plan provided by an organization. */
      network: t.readonlyArray(FhirReference),
    }),
  ])
)

/** Details of a Health Insurance product/plan provided by an organization. */
export interface FhirInsurancePlan_Coverage {
  /** Details of a Health Insurance product/plan provided by an organization. */
  benefit: ReadonlyArray<t.TypeOf<typeof FhirInsurancePlan_Benefit>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  network?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  type: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Details of a Health Insurance product/plan provided by an organization. */
export interface FhirInsurancePlan_CoverageOutput {
  /** Details of a Health Insurance product/plan provided by an organization. */
  benefit: ReadonlyArray<t.OutputOf<typeof FhirInsurancePlan_Benefit>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  network?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  type: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
