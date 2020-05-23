import * as t from 'io-ts'
import { FhirExtension } from './FhirExtension'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'

/** A relationship of two Quantity values - expressed as a numerator and a denominator. */
export const FhirRatio: t.Type<FhirRatio, FhirRatioOutput> = t.recursion('FhirRatio', () =>
  t.partial({
    /** A relationship of two Quantity values - expressed as a numerator and a denominator. */
    denominator: t.readonly(FhirQuantity),
    /** A relationship of two Quantity values - expressed as a numerator and a denominator. */
    extension: t.readonlyArray(FhirExtension),
    /** A relationship of two Quantity values - expressed as a numerator and a denominator. */
    id: t.readonly(FhirString),
    /** A relationship of two Quantity values - expressed as a numerator and a denominator. */
    numerator: t.readonly(FhirQuantity),
  })
)

/** A relationship of two Quantity values - expressed as a numerator and a denominator. */
export interface FhirRatio {
  /** A relationship of two Quantity values - expressed as a numerator and a denominator. */
  denominator?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** A relationship of two Quantity values - expressed as a numerator and a denominator. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A relationship of two Quantity values - expressed as a numerator and a denominator. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A relationship of two Quantity values - expressed as a numerator and a denominator. */
  numerator?: Readonly<t.TypeOf<typeof FhirQuantity>>
}
/** A relationship of two Quantity values - expressed as a numerator and a denominator. */
export interface FhirRatioOutput {
  /** A relationship of two Quantity values - expressed as a numerator and a denominator. */
  denominator?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** A relationship of two Quantity values - expressed as a numerator and a denominator. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A relationship of two Quantity values - expressed as a numerator and a denominator. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A relationship of two Quantity values - expressed as a numerator and a denominator. */
  numerator?: Readonly<t.OutputOf<typeof FhirQuantity>>
}
