import * as t from 'io-ts'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'

/** A homogeneous material with a definite composition. */
export const FhirSubstance_Instance: t.Type<FhirSubstance_Instance, FhirSubstance_InstanceOutput> = t.recursion(
  'FhirSubstance_Instance',
  () =>
    t.partial({
      /** A homogeneous material with a definite composition. */
      _expiry: t.readonly(FhirElement),
      /** A homogeneous material with a definite composition. */
      expiry: t.readonly(FhirDateTime),
      /** A homogeneous material with a definite composition. */
      extension: t.readonlyArray(FhirExtension),
      /** A homogeneous material with a definite composition. */
      id: t.readonly(FhirString),
      /** A homogeneous material with a definite composition. */
      identifier: t.readonly(FhirIdentifier),
      /** A homogeneous material with a definite composition. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A homogeneous material with a definite composition. */
      quantity: t.readonly(FhirQuantity),
    })
)

/** A homogeneous material with a definite composition. */
export interface FhirSubstance_Instance {
  /** A homogeneous material with a definite composition. */
  _expiry?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A homogeneous material with a definite composition. */
  expiry?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A homogeneous material with a definite composition. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A homogeneous material with a definite composition. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A homogeneous material with a definite composition. */
  identifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** A homogeneous material with a definite composition. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A homogeneous material with a definite composition. */
  quantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
}
/** A homogeneous material with a definite composition. */
export interface FhirSubstance_InstanceOutput {
  /** A homogeneous material with a definite composition. */
  _expiry?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A homogeneous material with a definite composition. */
  expiry?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A homogeneous material with a definite composition. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A homogeneous material with a definite composition. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A homogeneous material with a definite composition. */
  identifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** A homogeneous material with a definite composition. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A homogeneous material with a definite composition. */
  quantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
}
