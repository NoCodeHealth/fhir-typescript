import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirElement } from './FhirElement'
import { FhirExampleScenario_ContainedInstance } from './FhirExampleScenario_ContainedInstance'
import { FhirExampleScenario_Version } from './FhirExampleScenario_Version'
import { FhirExtension } from './FhirExtension'
import { FhirMarkdown } from './FhirMarkdown'
import { FhirString } from './FhirString'

/** Example of workflow instance. */
export const FhirExampleScenario_Instance: t.Type<
  FhirExampleScenario_Instance,
  FhirExampleScenario_InstanceOutput
> = t.recursion('FhirExampleScenario_Instance', () =>
  t.partial({
    /** Example of workflow instance. */
    _description: t.readonly(FhirElement),
    /** Example of workflow instance. */
    _name: t.readonly(FhirElement),
    /** Example of workflow instance. */
    _resourceId: t.readonly(FhirElement),
    /** Example of workflow instance. */
    _resourceType: t.readonly(FhirElement),
    /** Example of workflow instance. */
    containedInstance: t.readonlyArray(FhirExampleScenario_ContainedInstance),
    /** Example of workflow instance. */
    description: t.readonly(FhirMarkdown),
    /** Example of workflow instance. */
    extension: t.readonlyArray(FhirExtension),
    /** Example of workflow instance. */
    id: t.readonly(FhirString),
    /** Example of workflow instance. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Example of workflow instance. */
    name: t.readonly(FhirString),
    /** Example of workflow instance. */
    resourceId: t.readonly(FhirString),
    /** Example of workflow instance. */
    resourceType: t.readonly(FhirCode),
    /** Example of workflow instance. */
    version: t.readonlyArray(FhirExampleScenario_Version),
  })
)

/** Example of workflow instance. */
export interface FhirExampleScenario_Instance {
  /** Example of workflow instance. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _resourceId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _resourceType?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  containedInstance?: ReadonlyArray<t.TypeOf<typeof FhirExampleScenario_ContainedInstance>>
  /** Example of workflow instance. */
  description?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** Example of workflow instance. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Example of workflow instance. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** Example of workflow instance. */
  resourceId?: Readonly<t.TypeOf<typeof FhirString>>
  /** Example of workflow instance. */
  resourceType?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Example of workflow instance. */
  version?: ReadonlyArray<t.TypeOf<typeof FhirExampleScenario_Version>>
}
/** Example of workflow instance. */
export interface FhirExampleScenario_InstanceOutput {
  /** Example of workflow instance. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _resourceId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _resourceType?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  containedInstance?: ReadonlyArray<t.OutputOf<typeof FhirExampleScenario_ContainedInstance>>
  /** Example of workflow instance. */
  description?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** Example of workflow instance. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Example of workflow instance. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** Example of workflow instance. */
  resourceId?: Readonly<t.OutputOf<typeof FhirString>>
  /** Example of workflow instance. */
  resourceType?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Example of workflow instance. */
  version?: ReadonlyArray<t.OutputOf<typeof FhirExampleScenario_Version>>
}
