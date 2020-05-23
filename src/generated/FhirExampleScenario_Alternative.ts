import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExampleScenario_Step } from './FhirExampleScenario_Step'
import { FhirExtension } from './FhirExtension'
import { FhirMarkdown } from './FhirMarkdown'
import { FhirString } from './FhirString'

/** Example of workflow instance. */
export const FhirExampleScenario_Alternative: t.Type<
  FhirExampleScenario_Alternative,
  FhirExampleScenario_AlternativeOutput
> = t.recursion('FhirExampleScenario_Alternative', () =>
  t.partial({
    /** Example of workflow instance. */
    _description: t.readonly(FhirElement),
    /** Example of workflow instance. */
    _title: t.readonly(FhirElement),
    /** Example of workflow instance. */
    description: t.readonly(FhirMarkdown),
    /** Example of workflow instance. */
    extension: t.readonlyArray(FhirExtension),
    /** Example of workflow instance. */
    id: t.readonly(FhirString),
    /** Example of workflow instance. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Example of workflow instance. */
    step: t.readonlyArray(FhirExampleScenario_Step),
    /** Example of workflow instance. */
    title: t.readonly(FhirString),
  })
)

/** Example of workflow instance. */
export interface FhirExampleScenario_Alternative {
  /** Example of workflow instance. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _title?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  description?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** Example of workflow instance. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Example of workflow instance. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  step?: ReadonlyArray<t.TypeOf<typeof FhirExampleScenario_Step>>
  /** Example of workflow instance. */
  title?: Readonly<t.TypeOf<typeof FhirString>>
}
/** Example of workflow instance. */
export interface FhirExampleScenario_AlternativeOutput {
  /** Example of workflow instance. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _title?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  description?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** Example of workflow instance. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Example of workflow instance. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  step?: ReadonlyArray<t.OutputOf<typeof FhirExampleScenario_Step>>
  /** Example of workflow instance. */
  title?: Readonly<t.OutputOf<typeof FhirString>>
}
