import * as t from 'io-ts'
import { FhirDecimal } from './FhirDecimal'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirString } from './FhirString'

/** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
export const FhirBiologicallyDerivedProduct_Storage: t.Type<
  FhirBiologicallyDerivedProduct_Storage,
  FhirBiologicallyDerivedProduct_StorageOutput
> = t.recursion('FhirBiologicallyDerivedProduct_Storage', () =>
  t.partial({
    /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
    _description: t.readonly(FhirElement),
    /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
    _scale: t.readonly(FhirElement),
    /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
    _temperature: t.readonly(FhirElement),
    /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
    description: t.readonly(FhirString),
    /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
    duration: t.readonly(FhirPeriod),
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
    scale: t.readonly(
      t.keyof({
        farenheit: null,
        celsius: null,
        kelvin: null,
      })
    ),
    /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
    temperature: t.readonly(FhirDecimal),
  })
)

/** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
export interface FhirBiologicallyDerivedProduct_Storage {
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  _scale?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  _temperature?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  duration?: Readonly<t.TypeOf<typeof FhirPeriod>>
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
  scale?: Readonly<'farenheit' | 'celsius' | 'kelvin'>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  temperature?: Readonly<t.TypeOf<typeof FhirDecimal>>
}
/** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
export interface FhirBiologicallyDerivedProduct_StorageOutput {
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  _scale?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  _temperature?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  duration?: Readonly<t.OutputOf<typeof FhirPeriod>>
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
  scale?: Readonly<'farenheit' | 'celsius' | 'kelvin'>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  temperature?: Readonly<t.OutputOf<typeof FhirDecimal>>
}
