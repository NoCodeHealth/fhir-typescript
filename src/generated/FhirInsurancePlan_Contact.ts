import * as t from 'io-ts'
import { FhirAddress } from './FhirAddress'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirContactPoint } from './FhirContactPoint'
import { FhirExtension } from './FhirExtension'
import { FhirHumanName } from './FhirHumanName'
import { FhirString } from './FhirString'

/** Details of a Health Insurance product/plan provided by an organization. */
export const FhirInsurancePlan_Contact: t.Type<
  FhirInsurancePlan_Contact,
  FhirInsurancePlan_ContactOutput
> = t.recursion('FhirInsurancePlan_Contact', () =>
  t.partial({
    /** Details of a Health Insurance product/plan provided by an organization. */
    address: t.readonly(FhirAddress),
    /** Details of a Health Insurance product/plan provided by an organization. */
    extension: t.readonlyArray(FhirExtension),
    /** Details of a Health Insurance product/plan provided by an organization. */
    id: t.readonly(FhirString),
    /** Details of a Health Insurance product/plan provided by an organization. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Details of a Health Insurance product/plan provided by an organization. */
    name: t.readonly(FhirHumanName),
    /** Details of a Health Insurance product/plan provided by an organization. */
    purpose: t.readonly(FhirCodeableConcept),
    /** Details of a Health Insurance product/plan provided by an organization. */
    telecom: t.readonlyArray(FhirContactPoint),
  })
)

/** Details of a Health Insurance product/plan provided by an organization. */
export interface FhirInsurancePlan_Contact {
  /** Details of a Health Insurance product/plan provided by an organization. */
  address?: Readonly<t.TypeOf<typeof FhirAddress>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  name?: Readonly<t.TypeOf<typeof FhirHumanName>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  purpose?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  telecom?: ReadonlyArray<t.TypeOf<typeof FhirContactPoint>>
}
/** Details of a Health Insurance product/plan provided by an organization. */
export interface FhirInsurancePlan_ContactOutput {
  /** Details of a Health Insurance product/plan provided by an organization. */
  address?: Readonly<t.OutputOf<typeof FhirAddress>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  name?: Readonly<t.OutputOf<typeof FhirHumanName>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  purpose?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Details of a Health Insurance product/plan provided by an organization. */
  telecom?: ReadonlyArray<t.OutputOf<typeof FhirContactPoint>>
}
