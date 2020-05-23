import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirElement } from './FhirElement'
import { FhirExampleScenario_ContainedInstance } from './FhirExampleScenario_ContainedInstance'
import { FhirExtension } from './FhirExtension'
import { FhirMarkdown } from './FhirMarkdown'
import { FhirString } from './FhirString'

/** Example of workflow instance. */
export const FhirExampleScenario_Operation: t.Type<
  FhirExampleScenario_Operation,
  FhirExampleScenario_OperationOutput
> = t.recursion('FhirExampleScenario_Operation', () =>
  t.partial({
    /** Example of workflow instance. */
    _description: t.readonly(FhirElement),
    /** Example of workflow instance. */
    _initiator: t.readonly(FhirElement),
    /** Example of workflow instance. */
    _initiatorActive: t.readonly(FhirElement),
    /** Example of workflow instance. */
    _name: t.readonly(FhirElement),
    /** Example of workflow instance. */
    _number: t.readonly(FhirElement),
    /** Example of workflow instance. */
    _receiver: t.readonly(FhirElement),
    /** Example of workflow instance. */
    _receiverActive: t.readonly(FhirElement),
    /** Example of workflow instance. */
    _type: t.readonly(FhirElement),
    /** Example of workflow instance. */
    description: t.readonly(FhirMarkdown),
    /** Example of workflow instance. */
    extension: t.readonlyArray(FhirExtension),
    /** Example of workflow instance. */
    id: t.readonly(FhirString),
    /** Example of workflow instance. */
    initiator: t.readonly(FhirString),
    /** Example of workflow instance. */
    initiatorActive: t.readonly(FhirBoolean),
    /** Example of workflow instance. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Example of workflow instance. */
    name: t.readonly(FhirString),
    /** Example of workflow instance. */
    number: t.readonly(FhirString),
    /** Example of workflow instance. */
    receiver: t.readonly(FhirString),
    /** Example of workflow instance. */
    receiverActive: t.readonly(FhirBoolean),
    /** Example of workflow instance. */
    request: t.readonly(FhirExampleScenario_ContainedInstance),
    /** Example of workflow instance. */
    response: t.readonly(FhirExampleScenario_ContainedInstance),
    /** Example of workflow instance. */
    type: t.readonly(FhirString),
  })
)

/** Example of workflow instance. */
export interface FhirExampleScenario_Operation {
  /** Example of workflow instance. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _initiator?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _initiatorActive?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _number?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _receiver?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _receiverActive?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  description?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** Example of workflow instance. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Example of workflow instance. */
  initiator?: Readonly<t.TypeOf<typeof FhirString>>
  /** Example of workflow instance. */
  initiatorActive?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Example of workflow instance. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** Example of workflow instance. */
  number?: Readonly<t.TypeOf<typeof FhirString>>
  /** Example of workflow instance. */
  receiver?: Readonly<t.TypeOf<typeof FhirString>>
  /** Example of workflow instance. */
  receiverActive?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Example of workflow instance. */
  request?: Readonly<t.TypeOf<typeof FhirExampleScenario_ContainedInstance>>
  /** Example of workflow instance. */
  response?: Readonly<t.TypeOf<typeof FhirExampleScenario_ContainedInstance>>
  /** Example of workflow instance. */
  type?: Readonly<t.TypeOf<typeof FhirString>>
}
/** Example of workflow instance. */
export interface FhirExampleScenario_OperationOutput {
  /** Example of workflow instance. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _initiator?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _initiatorActive?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _number?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _receiver?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _receiverActive?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  description?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** Example of workflow instance. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Example of workflow instance. */
  initiator?: Readonly<t.OutputOf<typeof FhirString>>
  /** Example of workflow instance. */
  initiatorActive?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Example of workflow instance. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Example of workflow instance. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** Example of workflow instance. */
  number?: Readonly<t.OutputOf<typeof FhirString>>
  /** Example of workflow instance. */
  receiver?: Readonly<t.OutputOf<typeof FhirString>>
  /** Example of workflow instance. */
  receiverActive?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Example of workflow instance. */
  request?: Readonly<t.OutputOf<typeof FhirExampleScenario_ContainedInstance>>
  /** Example of workflow instance. */
  response?: Readonly<t.OutputOf<typeof FhirExampleScenario_ContainedInstance>>
  /** Example of workflow instance. */
  type?: Readonly<t.OutputOf<typeof FhirString>>
}
