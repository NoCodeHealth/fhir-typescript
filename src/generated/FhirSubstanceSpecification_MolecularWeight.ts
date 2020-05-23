import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export const FhirSubstanceSpecification_MolecularWeight: t.Type<
  FhirSubstanceSpecification_MolecularWeight,
  FhirSubstanceSpecification_MolecularWeightOutput
> = t.recursion('FhirSubstanceSpecification_MolecularWeight', () =>
  t.partial({
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    amount: t.readonly(FhirQuantity),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    extension: t.readonlyArray(FhirExtension),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    id: t.readonly(FhirString),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    method: t.readonly(FhirCodeableConcept),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    type: t.readonly(FhirCodeableConcept),
  })
)

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface FhirSubstanceSpecification_MolecularWeight {
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  amount?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  method?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface FhirSubstanceSpecification_MolecularWeightOutput {
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  amount?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  method?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
