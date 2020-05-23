import * as t from 'io-ts'
import { FhirDecimal } from './FhirDecimal'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'

/** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
export const FhirSampledData: t.Type<FhirSampledData, FhirSampledDataOutput> = t.recursion('FhirSampledData', () =>
  t.intersection([
    t.type({
      /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
      origin: t.readonly(FhirQuantity),
    }),
    t.partial({
      /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
      _data: t.readonly(FhirElement),
      /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
      _dimensions: t.readonly(FhirElement),
      /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
      _factor: t.readonly(FhirElement),
      /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
      _lowerLimit: t.readonly(FhirElement),
      /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
      _period: t.readonly(FhirElement),
      /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
      _upperLimit: t.readonly(FhirElement),
      /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
      data: t.readonly(FhirString),
      /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
      dimensions: t.readonly(FhirPositiveInt),
      /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
      extension: t.readonlyArray(FhirExtension),
      /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
      factor: t.readonly(FhirDecimal),
      /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
      id: t.readonly(FhirString),
      /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
      lowerLimit: t.readonly(FhirDecimal),
      /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
      period: t.readonly(FhirDecimal),
      /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
      upperLimit: t.readonly(FhirDecimal),
    }),
  ])
)

/** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
export interface FhirSampledData {
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  _data?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  _dimensions?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  _factor?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  _lowerLimit?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  _period?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  _upperLimit?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  data?: Readonly<t.TypeOf<typeof FhirString>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  dimensions?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  factor?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  lowerLimit?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  origin: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  period?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  upperLimit?: Readonly<t.TypeOf<typeof FhirDecimal>>
}
/** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
export interface FhirSampledDataOutput {
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  _data?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  _dimensions?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  _factor?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  _lowerLimit?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  _period?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  _upperLimit?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  data?: Readonly<t.OutputOf<typeof FhirString>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  dimensions?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  factor?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  lowerLimit?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  origin: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  period?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
  upperLimit?: Readonly<t.OutputOf<typeof FhirDecimal>>
}
