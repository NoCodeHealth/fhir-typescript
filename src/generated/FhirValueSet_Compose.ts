import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirDate } from './FhirDate'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirValueSet_Include } from './FhirValueSet_Include'

/** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
export const FhirValueSet_Compose: t.Type<FhirValueSet_Compose, FhirValueSet_ComposeOutput> = t.recursion(
  'FhirValueSet_Compose',
  () =>
    t.intersection([
      t.type({
        /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
        include: t.readonlyArray(FhirValueSet_Include),
      }),
      t.partial({
        /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
        _inactive: t.readonly(FhirElement),
        /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
        _lockedDate: t.readonly(FhirElement),
        /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
        exclude: t.readonlyArray(FhirValueSet_Include),
        /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
        extension: t.readonlyArray(FhirExtension),
        /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
        id: t.readonly(FhirString),
        /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
        inactive: t.readonly(FhirBoolean),
        /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
        lockedDate: t.readonly(FhirDate),
        /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
        modifierExtension: t.readonlyArray(FhirExtension),
      }),
    ])
)

/** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
export interface FhirValueSet_Compose {
  /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
  _inactive?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
  _lockedDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
  exclude?: ReadonlyArray<t.TypeOf<typeof FhirValueSet_Include>>
  /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
  inactive?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
  include: ReadonlyArray<t.TypeOf<typeof FhirValueSet_Include>>
  /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
  lockedDate?: Readonly<t.TypeOf<typeof FhirDate>>
  /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
export interface FhirValueSet_ComposeOutput {
  /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
  _inactive?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
  _lockedDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
  exclude?: ReadonlyArray<t.OutputOf<typeof FhirValueSet_Include>>
  /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
  inactive?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
  include: ReadonlyArray<t.OutputOf<typeof FhirValueSet_Include>>
  /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
  lockedDate?: Readonly<t.OutputOf<typeof FhirDate>>
  /** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
