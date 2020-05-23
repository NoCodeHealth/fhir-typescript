import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirCoverage_Exception } from './FhirCoverage_Exception'
import { FhirExtension } from './FhirExtension'
import { FhirMoney } from './FhirMoney'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'

/** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
export const FhirCoverage_CostToBeneficiary: t.Type<
  FhirCoverage_CostToBeneficiary,
  FhirCoverage_CostToBeneficiaryOutput
> = t.recursion('FhirCoverage_CostToBeneficiary', () =>
  t.partial({
    /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
    exception: t.readonlyArray(FhirCoverage_Exception),
    /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
    extension: t.readonlyArray(FhirExtension),
    /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
    id: t.readonly(FhirString),
    /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
    type: t.readonly(FhirCodeableConcept),
    /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
    valueMoney: t.readonly(FhirMoney),
    /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
    valueQuantity: t.readonly(FhirQuantity),
  })
)

/** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
export interface FhirCoverage_CostToBeneficiary {
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  exception?: ReadonlyArray<t.TypeOf<typeof FhirCoverage_Exception>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  valueMoney?: Readonly<t.TypeOf<typeof FhirMoney>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  valueQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
}
/** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
export interface FhirCoverage_CostToBeneficiaryOutput {
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  exception?: ReadonlyArray<t.OutputOf<typeof FhirCoverage_Exception>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  valueMoney?: Readonly<t.OutputOf<typeof FhirMoney>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  valueQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
}
