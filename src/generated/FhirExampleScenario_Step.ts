import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirElement } from './FhirElement'
import { FhirExampleScenario_Alternative } from './FhirExampleScenario_Alternative'
import { FhirExampleScenario_Operation } from './FhirExampleScenario_Operation'
import { FhirExampleScenario_Process } from './FhirExampleScenario_Process'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** Example of workflow instance. */
export const FhirExampleScenario_Step: t.Type<FhirExampleScenario_Step, FhirExampleScenario_StepOutput> = t.recursion(
  'FhirExampleScenario_Step',
  () =>
    t.partial({
      /** Example of workflow instance. */
      _pause: t.readonly(FhirElement),
      /** Example of workflow instance. */
      alternative: t.readonlyArray(FhirExampleScenario_Alternative),
      /** Example of workflow instance. */
      extension: t.readonlyArray(FhirExtension),
      /** Example of workflow instance. */
      id: t.readonly(FhirString),
      /** Example of workflow instance. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Example of workflow instance. */
      operation: t.readonly(FhirExampleScenario_Operation),
      /** Example of workflow instance. */
      pause: t.readonly(FhirBoolean),
      /** Example of workflow instance. */
      process: t.readonlyArray(FhirExampleScenario_Process),
    })
)

/** Example of workflow instance. */
export interface FhirExampleScenario_Step {
  /** Example of workflow instance. */
  _pause?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  alternative?: ReadonlyArray<t.TypeOf<typeof FhirExampleScenario_Alternative>>
  /** Example of workflow instance. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Example of workflow instance. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  operation?: Readonly<t.TypeOf<typeof FhirExampleScenario_Operation>>
  /** Example of workflow instance. */
  pause?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Example of workflow instance. */
  process?: ReadonlyArray<t.TypeOf<typeof FhirExampleScenario_Process>>
}
/** Example of workflow instance. */
export interface FhirExampleScenario_StepOutput {
  /** Example of workflow instance. */
  _pause?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  alternative?: ReadonlyArray<t.OutputOf<typeof FhirExampleScenario_Alternative>>
  /** Example of workflow instance. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Example of workflow instance. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  operation?: Readonly<t.OutputOf<typeof FhirExampleScenario_Operation>>
  /** Example of workflow instance. */
  pause?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Example of workflow instance. */
  process?: ReadonlyArray<t.OutputOf<typeof FhirExampleScenario_Process>>
}
