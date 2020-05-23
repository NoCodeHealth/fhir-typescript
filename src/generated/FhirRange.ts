import * as t from 'io-ts'
import { FhirExtension } from './FhirExtension'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'

/** A set of ordered Quantities defined by a low and high limit. */
export const FhirRange: t.Type<FhirRange, FhirRangeOutput> = t.recursion('FhirRange', () =>
  t.partial({
    /** A set of ordered Quantities defined by a low and high limit. */
    extension: t.readonlyArray(FhirExtension),
    /** A set of ordered Quantities defined by a low and high limit. */
    high: t.readonly(FhirQuantity),
    /** A set of ordered Quantities defined by a low and high limit. */
    id: t.readonly(FhirString),
    /** A set of ordered Quantities defined by a low and high limit. */
    low: t.readonly(FhirQuantity),
  })
)

/** A set of ordered Quantities defined by a low and high limit. */
export interface FhirRange {
  /** A set of ordered Quantities defined by a low and high limit. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A set of ordered Quantities defined by a low and high limit. */
  high?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** A set of ordered Quantities defined by a low and high limit. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A set of ordered Quantities defined by a low and high limit. */
  low?: Readonly<t.TypeOf<typeof FhirQuantity>>
}
/** A set of ordered Quantities defined by a low and high limit. */
export interface FhirRangeOutput {
  /** A set of ordered Quantities defined by a low and high limit. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A set of ordered Quantities defined by a low and high limit. */
  high?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** A set of ordered Quantities defined by a low and high limit. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A set of ordered Quantities defined by a low and high limit. */
  low?: Readonly<t.OutputOf<typeof FhirQuantity>>
}
