import * as t from 'io-ts'
import { FhirAttachment } from './FhirAttachment'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'

/** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
export const FhirProdCharacteristic: t.Type<FhirProdCharacteristic, FhirProdCharacteristicOutput> = t.recursion(
  'FhirProdCharacteristic',
  () =>
    t.partial({
      /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
      _color: t.readonlyArray(FhirElement),
      /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
      _imprint: t.readonlyArray(FhirElement),
      /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
      _shape: t.readonly(FhirElement),
      /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
      color: t.readonlyArray(FhirString),
      /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
      depth: t.readonly(FhirQuantity),
      /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
      extension: t.readonlyArray(FhirExtension),
      /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
      externalDiameter: t.readonly(FhirQuantity),
      /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
      height: t.readonly(FhirQuantity),
      /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
      id: t.readonly(FhirString),
      /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
      image: t.readonlyArray(FhirAttachment),
      /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
      imprint: t.readonlyArray(FhirString),
      /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
      nominalVolume: t.readonly(FhirQuantity),
      /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
      scoring: t.readonly(FhirCodeableConcept),
      /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
      shape: t.readonly(FhirString),
      /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
      weight: t.readonly(FhirQuantity),
      /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
      width: t.readonly(FhirQuantity),
    })
)

/** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
export interface FhirProdCharacteristic {
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  _color?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  _imprint?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  _shape?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  color?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  depth?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  externalDiameter?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  height?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  image?: ReadonlyArray<t.TypeOf<typeof FhirAttachment>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  imprint?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  nominalVolume?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  scoring?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  shape?: Readonly<t.TypeOf<typeof FhirString>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  weight?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  width?: Readonly<t.TypeOf<typeof FhirQuantity>>
}
/** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
export interface FhirProdCharacteristicOutput {
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  _color?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  _imprint?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  _shape?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  color?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  depth?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  externalDiameter?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  height?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  image?: ReadonlyArray<t.OutputOf<typeof FhirAttachment>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  imprint?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  nominalVolume?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  scoring?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  shape?: Readonly<t.OutputOf<typeof FhirString>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  weight?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  width?: Readonly<t.OutputOf<typeof FhirQuantity>>
}
