import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirElement } from './FhirElement'
import { FhirElementDefinition_Discriminator } from './FhirElementDefinition_Discriminator'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** Captures constraints on each element within the resource, profile, or extension. */
export const FhirElementDefinition_Slicing: t.Type<
  FhirElementDefinition_Slicing,
  FhirElementDefinition_SlicingOutput
> = t.recursion('FhirElementDefinition_Slicing', () =>
  t.partial({
    /** Captures constraints on each element within the resource, profile, or extension. */
    _description: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _ordered: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _rules: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    description: t.readonly(FhirString),
    /** Captures constraints on each element within the resource, profile, or extension. */
    discriminator: t.readonlyArray(FhirElementDefinition_Discriminator),
    /** Captures constraints on each element within the resource, profile, or extension. */
    extension: t.readonlyArray(FhirExtension),
    /** Captures constraints on each element within the resource, profile, or extension. */
    id: t.readonly(FhirString),
    /** Captures constraints on each element within the resource, profile, or extension. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Captures constraints on each element within the resource, profile, or extension. */
    ordered: t.readonly(FhirBoolean),
    /** Captures constraints on each element within the resource, profile, or extension. */
    rules: t.readonly(
      t.keyof({
        closed: null,
        open: null,
        openAtEnd: null,
      })
    ),
  })
)

/** Captures constraints on each element within the resource, profile, or extension. */
export interface FhirElementDefinition_Slicing {
  /** Captures constraints on each element within the resource, profile, or extension. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _ordered?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _rules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  discriminator?: ReadonlyArray<t.TypeOf<typeof FhirElementDefinition_Discriminator>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  ordered?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  rules?: Readonly<'closed' | 'open' | 'openAtEnd'>
}
/** Captures constraints on each element within the resource, profile, or extension. */
export interface FhirElementDefinition_SlicingOutput {
  /** Captures constraints on each element within the resource, profile, or extension. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _ordered?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _rules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  discriminator?: ReadonlyArray<t.OutputOf<typeof FhirElementDefinition_Discriminator>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  ordered?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  rules?: Readonly<'closed' | 'open' | 'openAtEnd'>
}
