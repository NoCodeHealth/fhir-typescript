import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
export const FhirBiologicallyDerivedProduct_Processing: t.Type<
  FhirBiologicallyDerivedProduct_Processing,
  FhirBiologicallyDerivedProduct_ProcessingOutput
> = t.recursion('FhirBiologicallyDerivedProduct_Processing', () =>
  t.partial({
    /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
    _description: t.readonly(FhirElement),
    /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
    _timeDateTime: t.readonly(FhirElement),
    /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
    additive: t.readonly(FhirReference),
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
    procedure: t.readonly(FhirCodeableConcept),
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
export interface FhirBiologicallyDerivedProduct_Processing {
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  _timeDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  additive?: Readonly<t.TypeOf<typeof FhirReference>>
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
  procedure?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  timeDateTime?: Readonly<string>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  timePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
}
/** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
export interface FhirBiologicallyDerivedProduct_ProcessingOutput {
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  _timeDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  additive?: Readonly<t.OutputOf<typeof FhirReference>>
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
  procedure?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  timeDateTime?: Readonly<string>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  timePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
}
