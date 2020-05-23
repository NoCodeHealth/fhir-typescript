import * as t from 'io-ts'
import { FhirCanonical } from './FhirCanonical'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** Captures constraints on each element within the resource, profile, or extension. */
export const FhirElementDefinition_Type: t.Type<
  FhirElementDefinition_Type,
  FhirElementDefinition_TypeOutput
> = t.recursion('FhirElementDefinition_Type', () =>
  t.partial({
    /** Captures constraints on each element within the resource, profile, or extension. */
    _aggregation: t.readonlyArray(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _code: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _versioning: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    aggregation: t.readonlyArray(
      t.keyof({
        contained: null,
        referenced: null,
        bundled: null,
      })
    ),
    /** Captures constraints on each element within the resource, profile, or extension. */
    code: t.readonly(FhirUri),
    /** Captures constraints on each element within the resource, profile, or extension. */
    extension: t.readonlyArray(FhirExtension),
    /** Captures constraints on each element within the resource, profile, or extension. */
    id: t.readonly(FhirString),
    /** Captures constraints on each element within the resource, profile, or extension. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Captures constraints on each element within the resource, profile, or extension. */
    profile: t.readonlyArray(FhirCanonical),
    /** Captures constraints on each element within the resource, profile, or extension. */
    targetProfile: t.readonlyArray(FhirCanonical),
    /** Captures constraints on each element within the resource, profile, or extension. */
    versioning: t.readonly(
      t.keyof({
        either: null,
        independent: null,
        specific: null,
      })
    ),
  })
)

/** Captures constraints on each element within the resource, profile, or extension. */
export interface FhirElementDefinition_Type {
  /** Captures constraints on each element within the resource, profile, or extension. */
  _aggregation?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _code?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _versioning?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  aggregation?: ReadonlyArray<'contained' | 'referenced' | 'bundled'>
  /** Captures constraints on each element within the resource, profile, or extension. */
  code?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  profile?: ReadonlyArray<t.TypeOf<typeof FhirCanonical>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  targetProfile?: ReadonlyArray<t.TypeOf<typeof FhirCanonical>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  versioning?: Readonly<'either' | 'independent' | 'specific'>
}
/** Captures constraints on each element within the resource, profile, or extension. */
export interface FhirElementDefinition_TypeOutput {
  /** Captures constraints on each element within the resource, profile, or extension. */
  _aggregation?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _code?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _versioning?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  aggregation?: ReadonlyArray<'contained' | 'referenced' | 'bundled'>
  /** Captures constraints on each element within the resource, profile, or extension. */
  code?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  profile?: ReadonlyArray<t.OutputOf<typeof FhirCanonical>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  targetProfile?: ReadonlyArray<t.OutputOf<typeof FhirCanonical>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  versioning?: Readonly<'either' | 'independent' | 'specific'>
}
