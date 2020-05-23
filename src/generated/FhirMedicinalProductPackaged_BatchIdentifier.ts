import * as t from 'io-ts'
import { FhirExtension } from './FhirExtension'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirString } from './FhirString'

/** A medicinal product in a container or package. */
export const FhirMedicinalProductPackaged_BatchIdentifier: t.Type<
  FhirMedicinalProductPackaged_BatchIdentifier,
  FhirMedicinalProductPackaged_BatchIdentifierOutput
> = t.recursion('FhirMedicinalProductPackaged_BatchIdentifier', () =>
  t.intersection([
    t.type({
      /** A medicinal product in a container or package. */
      outerPackaging: t.readonly(FhirIdentifier),
    }),
    t.partial({
      /** A medicinal product in a container or package. */
      extension: t.readonlyArray(FhirExtension),
      /** A medicinal product in a container or package. */
      id: t.readonly(FhirString),
      /** A medicinal product in a container or package. */
      immediatePackaging: t.readonly(FhirIdentifier),
      /** A medicinal product in a container or package. */
      modifierExtension: t.readonlyArray(FhirExtension),
    }),
  ])
)

/** A medicinal product in a container or package. */
export interface FhirMedicinalProductPackaged_BatchIdentifier {
  /** A medicinal product in a container or package. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A medicinal product in a container or package. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A medicinal product in a container or package. */
  immediatePackaging?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** A medicinal product in a container or package. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A medicinal product in a container or package. */
  outerPackaging: Readonly<t.TypeOf<typeof FhirIdentifier>>
}
/** A medicinal product in a container or package. */
export interface FhirMedicinalProductPackaged_BatchIdentifierOutput {
  /** A medicinal product in a container or package. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A medicinal product in a container or package. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A medicinal product in a container or package. */
  immediatePackaging?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** A medicinal product in a container or package. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A medicinal product in a container or package. */
  outerPackaging: Readonly<t.OutputOf<typeof FhirIdentifier>>
}
