import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
export const FhirCondition_Stage: t.Type<FhirCondition_Stage, FhirCondition_StageOutput> = t.recursion(
  'FhirCondition_Stage',
  () =>
    t.partial({
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      assessment: t.readonlyArray(FhirReference),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      extension: t.readonlyArray(FhirExtension),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      id: t.readonly(FhirString),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      summary: t.readonly(FhirCodeableConcept),
      /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
      type: t.readonly(FhirCodeableConcept),
    })
)

/** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
export interface FhirCondition_Stage {
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  assessment?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  summary?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
export interface FhirCondition_StageOutput {
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  assessment?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  summary?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
