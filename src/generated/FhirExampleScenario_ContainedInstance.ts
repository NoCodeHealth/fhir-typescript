import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** Example of workflow instance. */
export const FhirExampleScenario_ContainedInstance: t.Type<
  FhirExampleScenario_ContainedInstance,
  FhirExampleScenario_ContainedInstanceOutput
> = t.recursion('FhirExampleScenario_ContainedInstance', () =>
  t.partial({
    /** Example of workflow instance. */
    _resourceId: t.readonly(FhirElement),
    /** Example of workflow instance. */
    _versionId: t.readonly(FhirElement),
    /** Example of workflow instance. */
    extension: t.readonlyArray(FhirExtension),
    /** Example of workflow instance. */
    id: t.readonly(FhirString),
    /** Example of workflow instance. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Example of workflow instance. */
    resourceId: t.readonly(FhirString),
    /** Example of workflow instance. */
    versionId: t.readonly(FhirString),
  })
)

/** Example of workflow instance. */
export interface FhirExampleScenario_ContainedInstance {
  /** Example of workflow instance. */
  _resourceId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _versionId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Example of workflow instance. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  resourceId?: Readonly<t.TypeOf<typeof FhirString>>
  /** Example of workflow instance. */
  versionId?: Readonly<t.TypeOf<typeof FhirString>>
}
/** Example of workflow instance. */
export interface FhirExampleScenario_ContainedInstanceOutput {
  /** Example of workflow instance. */
  _resourceId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _versionId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Example of workflow instance. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  resourceId?: Readonly<t.OutputOf<typeof FhirString>>
  /** Example of workflow instance. */
  versionId?: Readonly<t.OutputOf<typeof FhirString>>
}
