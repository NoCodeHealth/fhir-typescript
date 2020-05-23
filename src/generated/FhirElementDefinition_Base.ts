import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirUnsignedInt } from './FhirUnsignedInt'

/** Captures constraints on each element within the resource, profile, or extension. */
export const FhirElementDefinition_Base: t.Type<
  FhirElementDefinition_Base,
  FhirElementDefinition_BaseOutput
> = t.recursion('FhirElementDefinition_Base', () =>
  t.partial({
    /** Captures constraints on each element within the resource, profile, or extension. */
    _max: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _min: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _path: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    extension: t.readonlyArray(FhirExtension),
    /** Captures constraints on each element within the resource, profile, or extension. */
    id: t.readonly(FhirString),
    /** Captures constraints on each element within the resource, profile, or extension. */
    max: t.readonly(FhirString),
    /** Captures constraints on each element within the resource, profile, or extension. */
    min: t.readonly(FhirUnsignedInt),
    /** Captures constraints on each element within the resource, profile, or extension. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Captures constraints on each element within the resource, profile, or extension. */
    path: t.readonly(FhirString),
  })
)

/** Captures constraints on each element within the resource, profile, or extension. */
export interface FhirElementDefinition_Base {
  /** Captures constraints on each element within the resource, profile, or extension. */
  _max?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _min?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _path?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  max?: Readonly<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  min?: Readonly<t.TypeOf<typeof FhirUnsignedInt>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  path?: Readonly<t.TypeOf<typeof FhirString>>
}
/** Captures constraints on each element within the resource, profile, or extension. */
export interface FhirElementDefinition_BaseOutput {
  /** Captures constraints on each element within the resource, profile, or extension. */
  _max?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _min?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _path?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  max?: Readonly<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  min?: Readonly<t.OutputOf<typeof FhirUnsignedInt>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  path?: Readonly<t.OutputOf<typeof FhirString>>
}
