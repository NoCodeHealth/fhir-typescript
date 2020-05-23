import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirString } from './FhirString'

/** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
export const FhirCoverage_Exception: t.Type<FhirCoverage_Exception, FhirCoverage_ExceptionOutput> = t.recursion(
  'FhirCoverage_Exception',
  () =>
    t.intersection([
      t.type({
        /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
        type: t.readonly(FhirCodeableConcept),
      }),
      t.partial({
        /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
        extension: t.readonlyArray(FhirExtension),
        /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
        id: t.readonly(FhirString),
        /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
        period: t.readonly(FhirPeriod),
      }),
    ])
)

/** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
export interface FhirCoverage_Exception {
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  period?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  type: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
export interface FhirCoverage_ExceptionOutput {
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  period?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  type: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
