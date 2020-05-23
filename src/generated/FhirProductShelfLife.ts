import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'

/** The shelf-life and storage information for a medicinal product item or container can be described using this class. */
export const FhirProductShelfLife: t.Type<FhirProductShelfLife, FhirProductShelfLifeOutput> = t.recursion(
  'FhirProductShelfLife',
  () =>
    t.intersection([
      t.type({
        /** The shelf-life and storage information for a medicinal product item or container can be described using this class. */
        period: t.readonly(FhirQuantity),
        /** The shelf-life and storage information for a medicinal product item or container can be described using this class. */
        type: t.readonly(FhirCodeableConcept),
      }),
      t.partial({
        /** The shelf-life and storage information for a medicinal product item or container can be described using this class. */
        extension: t.readonlyArray(FhirExtension),
        /** The shelf-life and storage information for a medicinal product item or container can be described using this class. */
        id: t.readonly(FhirString),
        /** The shelf-life and storage information for a medicinal product item or container can be described using this class. */
        identifier: t.readonly(FhirIdentifier),
        /** The shelf-life and storage information for a medicinal product item or container can be described using this class. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** The shelf-life and storage information for a medicinal product item or container can be described using this class. */
        specialPrecautionsForStorage: t.readonlyArray(FhirCodeableConcept),
      }),
    ])
)

/** The shelf-life and storage information for a medicinal product item or container can be described using this class. */
export interface FhirProductShelfLife {
  /** The shelf-life and storage information for a medicinal product item or container can be described using this class. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The shelf-life and storage information for a medicinal product item or container can be described using this class. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The shelf-life and storage information for a medicinal product item or container can be described using this class. */
  identifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** The shelf-life and storage information for a medicinal product item or container can be described using this class. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The shelf-life and storage information for a medicinal product item or container can be described using this class. */
  period: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** The shelf-life and storage information for a medicinal product item or container can be described using this class. */
  specialPrecautionsForStorage?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The shelf-life and storage information for a medicinal product item or container can be described using this class. */
  type: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** The shelf-life and storage information for a medicinal product item or container can be described using this class. */
export interface FhirProductShelfLifeOutput {
  /** The shelf-life and storage information for a medicinal product item or container can be described using this class. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The shelf-life and storage information for a medicinal product item or container can be described using this class. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The shelf-life and storage information for a medicinal product item or container can be described using this class. */
  identifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** The shelf-life and storage information for a medicinal product item or container can be described using this class. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The shelf-life and storage information for a medicinal product item or container can be described using this class. */
  period: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** The shelf-life and storage information for a medicinal product item or container can be described using this class. */
  specialPrecautionsForStorage?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The shelf-life and storage information for a medicinal product item or container can be described using this class. */
  type: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
