import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirMarkdown } from './FhirMarkdown'
import { FhirString } from './FhirString'

/** Example of workflow instance. */
export const FhirExampleScenario_Actor: t.Type<
  FhirExampleScenario_Actor,
  FhirExampleScenario_ActorOutput
> = t.recursion('FhirExampleScenario_Actor', () =>
  t.partial({
    /** Example of workflow instance. */
    _actorId: t.readonly(FhirElement),
    /** Example of workflow instance. */
    _description: t.readonly(FhirElement),
    /** Example of workflow instance. */
    _name: t.readonly(FhirElement),
    /** Example of workflow instance. */
    _type: t.readonly(FhirElement),
    /** Example of workflow instance. */
    actorId: t.readonly(FhirString),
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
    type: t.readonly(
      t.keyof({
        person: null,
        entity: null,
      })
    ),
  })
)

/** Example of workflow instance. */
export interface FhirExampleScenario_Actor {
  /** Example of workflow instance. */
  _actorId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Example of workflow instance. */
  actorId?: Readonly<t.TypeOf<typeof FhirString>>
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
  type?: Readonly<'person' | 'entity'>
}
/** Example of workflow instance. */
export interface FhirExampleScenario_ActorOutput {
  /** Example of workflow instance. */
  _actorId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Example of workflow instance. */
  actorId?: Readonly<t.OutputOf<typeof FhirString>>
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
  type?: Readonly<'person' | 'entity'>
}
