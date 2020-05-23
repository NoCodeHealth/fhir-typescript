import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirProdCharacteristic } from './FhirProdCharacteristic'
import { FhirProductShelfLife } from './FhirProductShelfLife'
import { FhirQuantity } from './FhirQuantity'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A medicinal product in a container or package. */
export const FhirMedicinalProductPackaged_PackageItem: t.Type<
  FhirMedicinalProductPackaged_PackageItem,
  FhirMedicinalProductPackaged_PackageItemOutput
> = t.recursion('FhirMedicinalProductPackaged_PackageItem', () =>
  t.intersection([
    t.type({
      /** A medicinal product in a container or package. */
      quantity: t.readonly(FhirQuantity),
      /** A medicinal product in a container or package. */
      type: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** A medicinal product in a container or package. */
      alternateMaterial: t.readonlyArray(FhirCodeableConcept),
      /** A medicinal product in a container or package. */
      device: t.readonlyArray(FhirReference),
      /** A medicinal product in a container or package. */
      extension: t.readonlyArray(FhirExtension),
      /** A medicinal product in a container or package. */
      id: t.readonly(FhirString),
      /** A medicinal product in a container or package. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** A medicinal product in a container or package. */
      manufacturedItem: t.readonlyArray(FhirReference),
      /** A medicinal product in a container or package. */
      manufacturer: t.readonlyArray(FhirReference),
      /** A medicinal product in a container or package. */
      material: t.readonlyArray(FhirCodeableConcept),
      /** A medicinal product in a container or package. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A medicinal product in a container or package. */
      otherCharacteristics: t.readonlyArray(FhirCodeableConcept),
      /** A medicinal product in a container or package. */
      packageItem: t.readonlyArray(FhirMedicinalProductPackaged_PackageItem),
      /** A medicinal product in a container or package. */
      physicalCharacteristics: t.readonly(FhirProdCharacteristic),
      /** A medicinal product in a container or package. */
      shelfLifeStorage: t.readonlyArray(FhirProductShelfLife),
    }),
  ])
)

/** A medicinal product in a container or package. */
export interface FhirMedicinalProductPackaged_PackageItem {
  /** A medicinal product in a container or package. */
  alternateMaterial?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A medicinal product in a container or package. */
  device?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A medicinal product in a container or package. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A medicinal product in a container or package. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A medicinal product in a container or package. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A medicinal product in a container or package. */
  manufacturedItem?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A medicinal product in a container or package. */
  manufacturer?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A medicinal product in a container or package. */
  material?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A medicinal product in a container or package. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A medicinal product in a container or package. */
  otherCharacteristics?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A medicinal product in a container or package. */
  packageItem?: ReadonlyArray<FhirMedicinalProductPackaged_PackageItem>
  /** A medicinal product in a container or package. */
  physicalCharacteristics?: Readonly<t.TypeOf<typeof FhirProdCharacteristic>>
  /** A medicinal product in a container or package. */
  quantity: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** A medicinal product in a container or package. */
  shelfLifeStorage?: ReadonlyArray<t.TypeOf<typeof FhirProductShelfLife>>
  /** A medicinal product in a container or package. */
  type: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** A medicinal product in a container or package. */
export interface FhirMedicinalProductPackaged_PackageItemOutput {
  /** A medicinal product in a container or package. */
  alternateMaterial?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A medicinal product in a container or package. */
  device?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A medicinal product in a container or package. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A medicinal product in a container or package. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A medicinal product in a container or package. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A medicinal product in a container or package. */
  manufacturedItem?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A medicinal product in a container or package. */
  manufacturer?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A medicinal product in a container or package. */
  material?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A medicinal product in a container or package. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A medicinal product in a container or package. */
  otherCharacteristics?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A medicinal product in a container or package. */
  packageItem?: ReadonlyArray<FhirMedicinalProductPackaged_PackageItemOutput>
  /** A medicinal product in a container or package. */
  physicalCharacteristics?: Readonly<t.OutputOf<typeof FhirProdCharacteristic>>
  /** A medicinal product in a container or package. */
  quantity: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** A medicinal product in a container or package. */
  shelfLifeStorage?: ReadonlyArray<t.OutputOf<typeof FhirProductShelfLife>>
  /** A medicinal product in a container or package. */
  type: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
