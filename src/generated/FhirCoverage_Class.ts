import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
export const FhirCoverage_Class: t.Type<FhirCoverage_Class, FhirCoverage_ClassOutput> = t.recursion(
  'FhirCoverage_Class',
  () =>
    t.intersection([
      t.type({
        /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
        type: t.readonly(FhirCodeableConcept),
      }),
      t.partial({
        /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
        _name: t.readonly(FhirElement),
        /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
        _value: t.readonly(FhirElement),
        /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
        extension: t.readonlyArray(FhirExtension),
        /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
        id: t.readonly(FhirString),
        /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
        name: t.readonly(FhirString),
        /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
        value: t.readonly(FhirString),
      }),
    ])
)

/** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
export interface FhirCoverage_Class {
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  _value?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  type: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  value?: Readonly<t.TypeOf<typeof FhirString>>
}
/** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
export interface FhirCoverage_ClassOutput {
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  _value?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  type: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  value?: Readonly<t.OutputOf<typeof FhirString>>
}
