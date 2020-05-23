import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirQuantity } from './FhirQuantity'
import { FhirRange } from './FhirRange'
import { FhirRatio } from './FhirRatio'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export const FhirSubstanceSpecification_Relationship: t.Type<
  FhirSubstanceSpecification_Relationship,
  FhirSubstanceSpecification_RelationshipOutput
> = t.recursion('FhirSubstanceSpecification_Relationship', () =>
  t.partial({
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    _amountString: t.readonly(FhirElement),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    _isDefining: t.readonly(FhirElement),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    amountQuantity: t.readonly(FhirQuantity),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    amountRange: t.readonly(FhirRange),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    amountRatio: t.readonly(FhirRatio),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    amountRatioLowLimit: t.readonly(FhirRatio),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    amountString: t.readonly(t.string),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    amountType: t.readonly(FhirCodeableConcept),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    extension: t.readonlyArray(FhirExtension),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    id: t.readonly(FhirString),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    isDefining: t.readonly(FhirBoolean),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    relationship: t.readonly(FhirCodeableConcept),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    source: t.readonlyArray(FhirReference),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    substanceCodeableConcept: t.readonly(FhirCodeableConcept),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    substanceReference: t.readonly(FhirReference),
  })
)

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface FhirSubstanceSpecification_Relationship {
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _amountString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _isDefining?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  amountQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  amountRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  amountRatio?: Readonly<t.TypeOf<typeof FhirRatio>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  amountRatioLowLimit?: Readonly<t.TypeOf<typeof FhirRatio>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  amountString?: Readonly<string>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  amountType?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  isDefining?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  relationship?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  source?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  substanceCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  substanceReference?: Readonly<t.TypeOf<typeof FhirReference>>
}
/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface FhirSubstanceSpecification_RelationshipOutput {
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _amountString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _isDefining?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  amountQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  amountRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  amountRatio?: Readonly<t.OutputOf<typeof FhirRatio>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  amountRatioLowLimit?: Readonly<t.OutputOf<typeof FhirRatio>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  amountString?: Readonly<string>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  amountType?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  isDefining?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  relationship?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  source?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  substanceCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  substanceReference?: Readonly<t.OutputOf<typeof FhirReference>>
}
