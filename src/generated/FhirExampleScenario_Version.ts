import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirMarkdown } from './FhirMarkdown'
import { FhirString } from './FhirString'

/** Example of workflow instance. */
export const FhirExampleScenario_Version: t.Type<
  FhirExampleScenario_Version,
  FhirExampleScenario_VersionOutput
> = t.recursion('FhirExampleScenario_Version', () =>
  t.partial({
    /** Example of workflow instance. */
    _description: t.readonly(FhirElement),
    /** Example of workflow instance. */
    _versionId: t.readonly(FhirElement),
    /** Example of workflow instance. */
    description: t.readonly(FhirMarkdown),
    /** Example of workflow instance. */
    extension: t.readonlyArray(FhirExtension),
    /** Example of workflow instance. */
    id: t.readonly(FhirString),
    /** Example of workflow instance. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Example of workflow instance. */
    versionId: t.readonly(FhirString),
  })
)

/** Example of workflow instance. */
export interface FhirExampleScenario_Version {
  /** Example of workflow instance. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _versionId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  description?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** Example of workflow instance. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Example of workflow instance. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  versionId?: Readonly<t.TypeOf<typeof FhirString>>
}
/** Example of workflow instance. */
export interface FhirExampleScenario_VersionOutput {
  /** Example of workflow instance. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _versionId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  description?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** Example of workflow instance. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Example of workflow instance. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  versionId?: Readonly<t.OutputOf<typeof FhirString>>
}
