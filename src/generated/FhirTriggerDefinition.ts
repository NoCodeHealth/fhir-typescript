import * as t from 'io-ts'
import { FhirDataRequirement } from './FhirDataRequirement'
import { FhirElement } from './FhirElement'
import { FhirExpression } from './FhirExpression'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'
import { FhirTiming } from './FhirTiming'

/** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
export const FhirTriggerDefinition: t.Type<FhirTriggerDefinition, FhirTriggerDefinitionOutput> = t.recursion(
  'FhirTriggerDefinition',
  () =>
    t.partial({
      /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
      _name: t.readonly(FhirElement),
      /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
      _timingDate: t.readonly(FhirElement),
      /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
      _timingDateTime: t.readonly(FhirElement),
      /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
      _type: t.readonly(FhirElement),
      /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
      condition: t.readonly(FhirExpression),
      /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
      data: t.readonlyArray(FhirDataRequirement),
      /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
      extension: t.readonlyArray(FhirExtension),
      /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
      id: t.readonly(FhirString),
      /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
      name: t.readonly(FhirString),
      /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
      timingDate: t.readonly(t.string),
      /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
      timingDateTime: t.readonly(t.string),
      /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
      timingReference: t.readonly(FhirReference),
      /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
      timingTiming: t.readonly(FhirTiming),
      /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
      type: t.readonly(
        t.keyof({
          'named-event': null,
          periodic: null,
          'data-changed': null,
          'data-added': null,
          'data-modified': null,
          'data-removed': null,
          'data-accessed': null,
          'data-access-ended': null,
        })
      ),
    })
)

/** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
export interface FhirTriggerDefinition {
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  _timingDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  _timingDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  condition?: Readonly<t.TypeOf<typeof FhirExpression>>
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  data?: ReadonlyArray<t.TypeOf<typeof FhirDataRequirement>>
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  timingDate?: Readonly<string>
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  timingDateTime?: Readonly<string>
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  timingReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  timingTiming?: Readonly<t.TypeOf<typeof FhirTiming>>
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  type?: Readonly<
    | 'named-event'
    | 'periodic'
    | 'data-changed'
    | 'data-added'
    | 'data-modified'
    | 'data-removed'
    | 'data-accessed'
    | 'data-access-ended'
  >
}
/** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
export interface FhirTriggerDefinitionOutput {
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  _timingDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  _timingDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  condition?: Readonly<t.OutputOf<typeof FhirExpression>>
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  data?: ReadonlyArray<t.OutputOf<typeof FhirDataRequirement>>
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  timingDate?: Readonly<string>
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  timingDateTime?: Readonly<string>
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  timingReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  timingTiming?: Readonly<t.OutputOf<typeof FhirTiming>>
  /** A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
  type?: Readonly<
    | 'named-event'
    | 'periodic'
    | 'data-changed'
    | 'data-added'
    | 'data-modified'
    | 'data-removed'
    | 'data-accessed'
    | 'data-access-ended'
  >
}
