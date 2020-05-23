import * as t from 'io-ts'
import { FhirCanonical } from './FhirCanonical'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirString } from './FhirString'

/** Captures constraints on each element within the resource, profile, or extension. */
export const FhirElementDefinition_Constraint: t.Type<
  FhirElementDefinition_Constraint,
  FhirElementDefinition_ConstraintOutput
> = t.recursion('FhirElementDefinition_Constraint', () =>
  t.partial({
    /** Captures constraints on each element within the resource, profile, or extension. */
    _expression: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _human: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _key: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _requirements: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _severity: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _xpath: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    expression: t.readonly(FhirString),
    /** Captures constraints on each element within the resource, profile, or extension. */
    extension: t.readonlyArray(FhirExtension),
    /** Captures constraints on each element within the resource, profile, or extension. */
    human: t.readonly(FhirString),
    /** Captures constraints on each element within the resource, profile, or extension. */
    id: t.readonly(FhirString),
    /** Captures constraints on each element within the resource, profile, or extension. */
    key: t.readonly(FhirId),
    /** Captures constraints on each element within the resource, profile, or extension. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Captures constraints on each element within the resource, profile, or extension. */
    requirements: t.readonly(FhirString),
    /** Captures constraints on each element within the resource, profile, or extension. */
    severity: t.readonly(
      t.keyof({
        error: null,
        warning: null,
      })
    ),
    /** Captures constraints on each element within the resource, profile, or extension. */
    source: t.readonly(FhirCanonical),
    /** Captures constraints on each element within the resource, profile, or extension. */
    xpath: t.readonly(FhirString),
  })
)

/** Captures constraints on each element within the resource, profile, or extension. */
export interface FhirElementDefinition_Constraint {
  /** Captures constraints on each element within the resource, profile, or extension. */
  _expression?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _human?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _key?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _requirements?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _severity?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _xpath?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  expression?: Readonly<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  human?: Readonly<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  key?: Readonly<t.TypeOf<typeof FhirId>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  requirements?: Readonly<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  severity?: Readonly<'error' | 'warning'>
  /** Captures constraints on each element within the resource, profile, or extension. */
  source?: Readonly<t.TypeOf<typeof FhirCanonical>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  xpath?: Readonly<t.TypeOf<typeof FhirString>>
}
/** Captures constraints on each element within the resource, profile, or extension. */
export interface FhirElementDefinition_ConstraintOutput {
  /** Captures constraints on each element within the resource, profile, or extension. */
  _expression?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _human?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _key?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _requirements?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _severity?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _xpath?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  expression?: Readonly<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  human?: Readonly<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  key?: Readonly<t.OutputOf<typeof FhirId>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  requirements?: Readonly<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  severity?: Readonly<'error' | 'warning'>
  /** Captures constraints on each element within the resource, profile, or extension. */
  source?: Readonly<t.OutputOf<typeof FhirCanonical>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  xpath?: Readonly<t.OutputOf<typeof FhirString>>
}
