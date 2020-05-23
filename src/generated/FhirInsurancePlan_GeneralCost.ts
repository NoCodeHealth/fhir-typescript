import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirMoney } from './FhirMoney'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirString } from './FhirString'

/** Details of a Health Insurance product/plan provided by an organization. */
export const FhirInsurancePlan_GeneralCost: t.Type<
  FhirInsurancePlan_GeneralCost,
  FhirInsurancePlan_GeneralCostOutput
> = t.recursion('FhirInsurancePlan_GeneralCost', () =>
  t.partial({
    /** Details of a Health Insurance product/plan provided by an organization. */
    _comment: t.readonly(FhirElement),
    /** Details of a Health Insurance product/plan provided by an organization. */
    _groupSize: t.readonly(FhirElement),
    /** Details of a Health Insurance product/plan provided by an organization. */
    comment: t.readonly(FhirString),
    /** Details of a Health Insurance product/plan provided by an organization. */
    cost: t.readonly(FhirMoney),
    /** Details of a Health Insurance product/plan provided by an organization. */
    extension: t.readonlyArray(FhirExtension),
    /** Details of a Health Insurance product/plan provided by an organization. */
    groupSize: t.readonly(FhirPositiveInt),
    /** Details of a Health Insurance product/plan provided by an organization. */
    id: t.readonly(FhirString),
    /** Details of a Health Insurance product/plan provided by an organization. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Details of a Health Insurance product/plan provided by an organization. */
    type: t.readonly(FhirCodeableConcept),
  })
)

/** Details of a Health Insurance product/plan provided by an organization. */
export interface FhirInsurancePlan_GeneralCost {
  /** Details of a Health Insurance product/plan provided by an organization. */
  _comment?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  _groupSize?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  comment?: Readonly<t.TypeOf<typeof FhirString>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  cost?: Readonly<t.TypeOf<typeof FhirMoney>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  groupSize?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Details of a Health Insurance product/plan provided by an organization. */
export interface FhirInsurancePlan_GeneralCostOutput {
  /** Details of a Health Insurance product/plan provided by an organization. */
  _comment?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  _groupSize?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  comment?: Readonly<t.OutputOf<typeof FhirString>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  cost?: Readonly<t.OutputOf<typeof FhirMoney>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  groupSize?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
