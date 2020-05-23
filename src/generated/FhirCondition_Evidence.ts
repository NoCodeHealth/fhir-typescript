import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
export const FhirCondition_Evidence: t.Type<FhirCondition_Evidence, FhirCondition_EvidenceOutput> = t.recursion(
  'FhirCondition_Evidence',
  () =>
    t.partial({
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      code: t.readonlyArray(FhirCodeableConcept),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      detail: t.readonlyArray(FhirReference),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      extension: t.readonlyArray(FhirExtension),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      id: t.readonly(FhirString),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      modifierExtension: t.readonlyArray(FhirExtension),
    })
)

/** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
export interface FhirCondition_Evidence {
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  code?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  detail?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
export interface FhirCondition_EvidenceOutput {
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  code?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  detail?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
