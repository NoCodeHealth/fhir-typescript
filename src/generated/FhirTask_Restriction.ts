import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A task to be performed. */
export const FhirTask_Restriction: t.Type<FhirTask_Restriction, FhirTask_RestrictionOutput> = t.recursion(
  'FhirTask_Restriction',
  () =>
    t.partial({
      /** A task to be performed. */
      _repetitions: t.readonly(FhirElement),
      /** A task to be performed. */
      extension: t.readonlyArray(FhirExtension),
      /** A task to be performed. */
      id: t.readonly(FhirString),
      /** A task to be performed. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A task to be performed. */
      period: t.readonly(FhirPeriod),
      /** A task to be performed. */
      recipient: t.readonlyArray(FhirReference),
      /** A task to be performed. */
      repetitions: t.readonly(FhirPositiveInt),
    })
)

/** A task to be performed. */
export interface FhirTask_Restriction {
  /** A task to be performed. */
  _repetitions?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A task to be performed. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A task to be performed. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A task to be performed. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A task to be performed. */
  period?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A task to be performed. */
  recipient?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A task to be performed. */
  repetitions?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
}
/** A task to be performed. */
export interface FhirTask_RestrictionOutput {
  /** A task to be performed. */
  _repetitions?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A task to be performed. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A task to be performed. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A task to be performed. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A task to be performed. */
  period?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A task to be performed. */
  recipient?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A task to be performed. */
  repetitions?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
}
