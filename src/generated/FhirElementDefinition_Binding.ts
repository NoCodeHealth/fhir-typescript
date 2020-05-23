import * as t from 'io-ts'
import { FhirCanonical } from './FhirCanonical'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** Captures constraints on each element within the resource, profile, or extension. */
export const FhirElementDefinition_Binding: t.Type<
  FhirElementDefinition_Binding,
  FhirElementDefinition_BindingOutput
> = t.recursion('FhirElementDefinition_Binding', () =>
  t.partial({
    /** Captures constraints on each element within the resource, profile, or extension. */
    _description: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _strength: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    description: t.readonly(FhirString),
    /** Captures constraints on each element within the resource, profile, or extension. */
    extension: t.readonlyArray(FhirExtension),
    /** Captures constraints on each element within the resource, profile, or extension. */
    id: t.readonly(FhirString),
    /** Captures constraints on each element within the resource, profile, or extension. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Captures constraints on each element within the resource, profile, or extension. */
    strength: t.readonly(
      t.keyof({
        required: null,
        extensible: null,
        preferred: null,
        example: null,
      })
    ),
    /** Captures constraints on each element within the resource, profile, or extension. */
    valueSet: t.readonly(FhirCanonical),
  })
)

/** Captures constraints on each element within the resource, profile, or extension. */
export interface FhirElementDefinition_Binding {
  /** Captures constraints on each element within the resource, profile, or extension. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _strength?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  strength?: Readonly<'required' | 'extensible' | 'preferred' | 'example'>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueSet?: Readonly<t.TypeOf<typeof FhirCanonical>>
}
/** Captures constraints on each element within the resource, profile, or extension. */
export interface FhirElementDefinition_BindingOutput {
  /** Captures constraints on each element within the resource, profile, or extension. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _strength?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  strength?: Readonly<'required' | 'extensible' | 'preferred' | 'example'>
  /** Captures constraints on each element within the resource, profile, or extension. */
  valueSet?: Readonly<t.OutputOf<typeof FhirCanonical>>
}
