import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirString } from './FhirString'

/** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
export const FhirBiologicallyDerivedProduct_Manipulation: t.Type<
  FhirBiologicallyDerivedProduct_Manipulation,
  FhirBiologicallyDerivedProduct_ManipulationOutput
> = t.recursion('FhirBiologicallyDerivedProduct_Manipulation', () =>
  t.partial({
    /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
    _description: t.readonly(FhirElement),
    /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
    _timeDateTime: t.readonly(FhirElement),
    /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
    description: t.readonly(FhirString),
    /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
    extension: t.readonlyArray(FhirExtension),
    /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
    id: t.readonly(FhirString),
    /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
    timeDateTime: t.readonly(t.string),
    /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
    timePeriod: t.readonly(FhirPeriod),
  })
)

/** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
export interface FhirBiologicallyDerivedProduct_Manipulation {
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  _timeDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  timeDateTime?: Readonly<string>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  timePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
}
/** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
export interface FhirBiologicallyDerivedProduct_ManipulationOutput {
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  _timeDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  timeDateTime?: Readonly<string>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  timePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
}
