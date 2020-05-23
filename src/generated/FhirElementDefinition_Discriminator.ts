import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** Captures constraints on each element within the resource, profile, or extension. */
export const FhirElementDefinition_Discriminator: t.Type<
  FhirElementDefinition_Discriminator,
  FhirElementDefinition_DiscriminatorOutput
> = t.recursion('FhirElementDefinition_Discriminator', () =>
  t.partial({
    /** Captures constraints on each element within the resource, profile, or extension. */
    _path: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _type: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    extension: t.readonlyArray(FhirExtension),
    /** Captures constraints on each element within the resource, profile, or extension. */
    id: t.readonly(FhirString),
    /** Captures constraints on each element within the resource, profile, or extension. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Captures constraints on each element within the resource, profile, or extension. */
    path: t.readonly(FhirString),
    /** Captures constraints on each element within the resource, profile, or extension. */
    type: t.readonly(
      t.keyof({
        value: null,
        exists: null,
        pattern: null,
        type: null,
        profile: null,
      })
    ),
  })
)

/** Captures constraints on each element within the resource, profile, or extension. */
export interface FhirElementDefinition_Discriminator {
  /** Captures constraints on each element within the resource, profile, or extension. */
  _path?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  path?: Readonly<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  type?: Readonly<'value' | 'exists' | 'pattern' | 'type' | 'profile'>
}
/** Captures constraints on each element within the resource, profile, or extension. */
export interface FhirElementDefinition_DiscriminatorOutput {
  /** Captures constraints on each element within the resource, profile, or extension. */
  _path?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  path?: Readonly<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  type?: Readonly<'value' | 'exists' | 'pattern' | 'type' | 'profile'>
}
