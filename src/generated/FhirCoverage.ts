import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirCoverage_Class } from './FhirCoverage_Class'
import { FhirCoverage_CostToBeneficiary } from './FhirCoverage_CostToBeneficiary'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
export const FhirCoverage: t.Type<FhirCoverage, FhirCoverageOutput> = t.recursion('FhirCoverage', () =>
  t.intersection([
    t.type({
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      beneficiary: t.readonly(FhirReference),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      payor: t.readonlyArray(FhirReference),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      resourceType: t.readonly(t.literal('Coverage')),
    }),
    t.partial({
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      _dependent: t.readonly(FhirElement),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      _implicitRules: t.readonly(FhirElement),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      _language: t.readonly(FhirElement),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      _network: t.readonly(FhirElement),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      _order: t.readonly(FhirElement),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      _status: t.readonly(FhirElement),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      _subrogation: t.readonly(FhirElement),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      _subscriberId: t.readonly(FhirElement),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      class: t.readonlyArray(FhirCoverage_Class),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      contained: t.readonlyArray(FhirResourceList),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      contract: t.readonlyArray(FhirReference),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      costToBeneficiary: t.readonlyArray(FhirCoverage_CostToBeneficiary),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      dependent: t.readonly(FhirString),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      extension: t.readonlyArray(FhirExtension),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      id: t.readonly(FhirId),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      implicitRules: t.readonly(FhirUri),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      language: t.readonly(FhirCode),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      meta: t.readonly(FhirMeta),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      network: t.readonly(FhirString),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      order: t.readonly(FhirPositiveInt),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      period: t.readonly(FhirPeriod),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      policyHolder: t.readonly(FhirReference),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      relationship: t.readonly(FhirCodeableConcept),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      status: t.readonly(FhirCode),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      subrogation: t.readonly(FhirBoolean),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      subscriber: t.readonly(FhirReference),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      subscriberId: t.readonly(FhirString),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      text: t.readonly(FhirNarrative),
      /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
      type: t.readonly(FhirCodeableConcept),
    }),
  ])
)

/** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
export interface FhirCoverage {
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  _dependent?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  _network?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  _order?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  _subrogation?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  _subscriberId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  beneficiary: Readonly<t.TypeOf<typeof FhirReference>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  class?: ReadonlyArray<t.TypeOf<typeof FhirCoverage_Class>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  contract?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  costToBeneficiary?: ReadonlyArray<t.TypeOf<typeof FhirCoverage_CostToBeneficiary>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  dependent?: Readonly<t.TypeOf<typeof FhirString>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  network?: Readonly<t.TypeOf<typeof FhirString>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  order?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  payor: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  period?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  policyHolder?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  relationship?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  resourceType: Readonly<'Coverage'>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  status?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  subrogation?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  subscriber?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  subscriberId?: Readonly<t.TypeOf<typeof FhirString>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
export interface FhirCoverageOutput {
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  _dependent?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  _network?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  _order?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  _subrogation?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  _subscriberId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  beneficiary: Readonly<t.OutputOf<typeof FhirReference>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  class?: ReadonlyArray<t.OutputOf<typeof FhirCoverage_Class>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  contract?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  costToBeneficiary?: ReadonlyArray<t.OutputOf<typeof FhirCoverage_CostToBeneficiary>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  dependent?: Readonly<t.OutputOf<typeof FhirString>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  network?: Readonly<t.OutputOf<typeof FhirString>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  order?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  payor: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  period?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  policyHolder?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  relationship?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  resourceType: Readonly<'Coverage'>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  status?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  subrogation?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  subscriber?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  subscriberId?: Readonly<t.OutputOf<typeof FhirString>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
