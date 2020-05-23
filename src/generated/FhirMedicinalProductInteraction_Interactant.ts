import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
export const FhirMedicinalProductInteraction_Interactant: t.Type<
  FhirMedicinalProductInteraction_Interactant,
  FhirMedicinalProductInteraction_InteractantOutput
> = t.recursion('FhirMedicinalProductInteraction_Interactant', () =>
  t.partial({
    /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
    extension: t.readonlyArray(FhirExtension),
    /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
    id: t.readonly(FhirString),
    /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
    itemCodeableConcept: t.readonly(FhirCodeableConcept),
    /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
    itemReference: t.readonly(FhirReference),
    /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
    modifierExtension: t.readonlyArray(FhirExtension),
  })
)

/** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
export interface FhirMedicinalProductInteraction_Interactant {
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  itemCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  itemReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
export interface FhirMedicinalProductInteraction_InteractantOutput {
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  itemCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  itemReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
