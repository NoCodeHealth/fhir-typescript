import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
export const FhirBiologicallyDerivedProduct_Collection: t.Type<
  FhirBiologicallyDerivedProduct_Collection,
  FhirBiologicallyDerivedProduct_CollectionOutput
> = t.recursion('FhirBiologicallyDerivedProduct_Collection', () =>
  t.partial({
    /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
    _collectedDateTime: t.readonly(FhirElement),
    /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
    collectedDateTime: t.readonly(t.string),
    /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
    collectedPeriod: t.readonly(FhirPeriod),
    /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
    collector: t.readonly(FhirReference),
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
    source: t.readonly(FhirReference),
  })
)

/** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
export interface FhirBiologicallyDerivedProduct_Collection {
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  _collectedDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  collectedDateTime?: Readonly<string>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  collectedPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  collector?: Readonly<t.TypeOf<typeof FhirReference>>
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
  source?: Readonly<t.TypeOf<typeof FhirReference>>
}
/** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
export interface FhirBiologicallyDerivedProduct_CollectionOutput {
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  _collectedDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  collectedDateTime?: Readonly<string>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  collectedPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  collector?: Readonly<t.OutputOf<typeof FhirReference>>
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
  source?: Readonly<t.OutputOf<typeof FhirReference>>
}
