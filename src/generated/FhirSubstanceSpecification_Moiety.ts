import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export const FhirSubstanceSpecification_Moiety: t.Type<
  FhirSubstanceSpecification_Moiety,
  FhirSubstanceSpecification_MoietyOutput
> = t.recursion('FhirSubstanceSpecification_Moiety', () =>
  t.partial({
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    _amountString: t.readonly(FhirElement),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    _molecularFormula: t.readonly(FhirElement),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    _name: t.readonly(FhirElement),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    amountQuantity: t.readonly(FhirQuantity),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    amountString: t.readonly(t.string),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    extension: t.readonlyArray(FhirExtension),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    id: t.readonly(FhirString),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    identifier: t.readonly(FhirIdentifier),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    molecularFormula: t.readonly(FhirString),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    name: t.readonly(FhirString),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    opticalActivity: t.readonly(FhirCodeableConcept),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    role: t.readonly(FhirCodeableConcept),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    stereochemistry: t.readonly(FhirCodeableConcept),
  })
)

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface FhirSubstanceSpecification_Moiety {
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _amountString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _molecularFormula?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  amountQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  amountString?: Readonly<string>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  identifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  molecularFormula?: Readonly<t.TypeOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  opticalActivity?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  role?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  stereochemistry?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface FhirSubstanceSpecification_MoietyOutput {
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _amountString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _molecularFormula?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  amountQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  amountString?: Readonly<string>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  identifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  molecularFormula?: Readonly<t.OutputOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  opticalActivity?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  role?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  stereochemistry?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
