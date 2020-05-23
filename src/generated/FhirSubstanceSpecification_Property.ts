import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirQuantity } from './FhirQuantity'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export const FhirSubstanceSpecification_Property: t.Type<
  FhirSubstanceSpecification_Property,
  FhirSubstanceSpecification_PropertyOutput
> = t.recursion('FhirSubstanceSpecification_Property', () =>
  t.partial({
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    _amountString: t.readonly(FhirElement),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    _parameters: t.readonly(FhirElement),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    amountQuantity: t.readonly(FhirQuantity),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    amountString: t.readonly(t.string),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    category: t.readonly(FhirCodeableConcept),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    code: t.readonly(FhirCodeableConcept),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    definingSubstanceCodeableConcept: t.readonly(FhirCodeableConcept),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    definingSubstanceReference: t.readonly(FhirReference),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    extension: t.readonlyArray(FhirExtension),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    id: t.readonly(FhirString),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    parameters: t.readonly(FhirString),
  })
)

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface FhirSubstanceSpecification_Property {
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _amountString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _parameters?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  amountQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  amountString?: Readonly<string>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  category?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  code?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  definingSubstanceCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  definingSubstanceReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  parameters?: Readonly<t.TypeOf<typeof FhirString>>
}
/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface FhirSubstanceSpecification_PropertyOutput {
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _amountString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _parameters?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  amountQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  amountString?: Readonly<string>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  category?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  code?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  definingSubstanceCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  definingSubstanceReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  parameters?: Readonly<t.OutputOf<typeof FhirString>>
}
