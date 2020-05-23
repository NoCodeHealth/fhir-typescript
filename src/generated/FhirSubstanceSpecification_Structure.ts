import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'
import { FhirSubstanceSpecification_Isotope } from './FhirSubstanceSpecification_Isotope'
import { FhirSubstanceSpecification_MolecularWeight } from './FhirSubstanceSpecification_MolecularWeight'
import { FhirSubstanceSpecification_Representation } from './FhirSubstanceSpecification_Representation'

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export const FhirSubstanceSpecification_Structure: t.Type<
  FhirSubstanceSpecification_Structure,
  FhirSubstanceSpecification_StructureOutput
> = t.recursion('FhirSubstanceSpecification_Structure', () =>
  t.partial({
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    _molecularFormula: t.readonly(FhirElement),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    _molecularFormulaByMoiety: t.readonly(FhirElement),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    extension: t.readonlyArray(FhirExtension),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    id: t.readonly(FhirString),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    isotope: t.readonlyArray(FhirSubstanceSpecification_Isotope),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    molecularFormula: t.readonly(FhirString),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    molecularFormulaByMoiety: t.readonly(FhirString),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    molecularWeight: t.readonly(FhirSubstanceSpecification_MolecularWeight),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    opticalActivity: t.readonly(FhirCodeableConcept),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    representation: t.readonlyArray(FhirSubstanceSpecification_Representation),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    source: t.readonlyArray(FhirReference),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    stereochemistry: t.readonly(FhirCodeableConcept),
  })
)

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface FhirSubstanceSpecification_Structure {
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _molecularFormula?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _molecularFormulaByMoiety?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  isotope?: ReadonlyArray<t.TypeOf<typeof FhirSubstanceSpecification_Isotope>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  molecularFormula?: Readonly<t.TypeOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  molecularFormulaByMoiety?: Readonly<t.TypeOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  molecularWeight?: Readonly<t.TypeOf<typeof FhirSubstanceSpecification_MolecularWeight>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  opticalActivity?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  representation?: ReadonlyArray<t.TypeOf<typeof FhirSubstanceSpecification_Representation>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  source?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  stereochemistry?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface FhirSubstanceSpecification_StructureOutput {
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _molecularFormula?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _molecularFormulaByMoiety?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  isotope?: ReadonlyArray<t.OutputOf<typeof FhirSubstanceSpecification_Isotope>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  molecularFormula?: Readonly<t.OutputOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  molecularFormulaByMoiety?: Readonly<t.OutputOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  molecularWeight?: Readonly<t.OutputOf<typeof FhirSubstanceSpecification_MolecularWeight>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  opticalActivity?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  representation?: ReadonlyArray<t.OutputOf<typeof FhirSubstanceSpecification_Representation>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  source?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  stereochemistry?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
