import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCarePlan_Detail } from './FhirCarePlan_Detail'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
export const FhirCarePlan_Activity: t.Type<FhirCarePlan_Activity, FhirCarePlan_ActivityOutput> = t.recursion(
  'FhirCarePlan_Activity',
  () =>
    t.partial({
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      detail: t.readonly(FhirCarePlan_Detail),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      extension: t.readonlyArray(FhirExtension),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      id: t.readonly(FhirString),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      outcomeCodeableConcept: t.readonlyArray(FhirCodeableConcept),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      outcomeReference: t.readonlyArray(FhirReference),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      progress: t.readonlyArray(FhirAnnotation),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      reference: t.readonly(FhirReference),
    })
)

/** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
export interface FhirCarePlan_Activity {
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  detail?: Readonly<t.TypeOf<typeof FhirCarePlan_Detail>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  outcomeCodeableConcept?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  outcomeReference?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  progress?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  reference?: Readonly<t.TypeOf<typeof FhirReference>>
}
/** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
export interface FhirCarePlan_ActivityOutput {
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  detail?: Readonly<t.OutputOf<typeof FhirCarePlan_Detail>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  outcomeCodeableConcept?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  outcomeReference?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  progress?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  reference?: Readonly<t.OutputOf<typeof FhirReference>>
}
