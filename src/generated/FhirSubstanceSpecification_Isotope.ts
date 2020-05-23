import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'
import { FhirSubstanceSpecification_MolecularWeight } from './FhirSubstanceSpecification_MolecularWeight'

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export const FhirSubstanceSpecification_Isotope: t.Type<
  FhirSubstanceSpecification_Isotope,
  FhirSubstanceSpecification_IsotopeOutput
> = t.recursion('FhirSubstanceSpecification_Isotope', () =>
  t.partial({
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    extension: t.readonlyArray(FhirExtension),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    halfLife: t.readonly(FhirQuantity),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    id: t.readonly(FhirString),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    identifier: t.readonly(FhirIdentifier),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    molecularWeight: t.readonly(FhirSubstanceSpecification_MolecularWeight),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    name: t.readonly(FhirCodeableConcept),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    substitution: t.readonly(FhirCodeableConcept),
  })
)

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface FhirSubstanceSpecification_Isotope {
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  halfLife?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  identifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  molecularWeight?: Readonly<t.TypeOf<typeof FhirSubstanceSpecification_MolecularWeight>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  name?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  substitution?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface FhirSubstanceSpecification_IsotopeOutput {
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  halfLife?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  identifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  molecularWeight?: Readonly<t.OutputOf<typeof FhirSubstanceSpecification_MolecularWeight>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  name?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  substitution?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
