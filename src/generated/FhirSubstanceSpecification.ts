import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirSubstanceSpecification_Code } from './FhirSubstanceSpecification_Code'
import { FhirSubstanceSpecification_Moiety } from './FhirSubstanceSpecification_Moiety'
import { FhirSubstanceSpecification_MolecularWeight } from './FhirSubstanceSpecification_MolecularWeight'
import { FhirSubstanceSpecification_Name } from './FhirSubstanceSpecification_Name'
import { FhirSubstanceSpecification_Property } from './FhirSubstanceSpecification_Property'
import { FhirSubstanceSpecification_Relationship } from './FhirSubstanceSpecification_Relationship'
import { FhirSubstanceSpecification_Structure } from './FhirSubstanceSpecification_Structure'
import { FhirUri } from './FhirUri'

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export const FhirSubstanceSpecification: t.Type<
  FhirSubstanceSpecification,
  FhirSubstanceSpecificationOutput
> = t.recursion('FhirSubstanceSpecification', () =>
  t.intersection([
    t.type({
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      resourceType: t.readonly(t.literal('SubstanceSpecification')),
    }),
    t.partial({
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      _comment: t.readonly(FhirElement),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      _description: t.readonly(FhirElement),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      _implicitRules: t.readonly(FhirElement),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      _language: t.readonly(FhirElement),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      code: t.readonlyArray(FhirSubstanceSpecification_Code),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      comment: t.readonly(FhirString),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      contained: t.readonlyArray(FhirResourceList),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      description: t.readonly(FhirString),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      domain: t.readonly(FhirCodeableConcept),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      extension: t.readonlyArray(FhirExtension),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      id: t.readonly(FhirId),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      identifier: t.readonly(FhirIdentifier),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      implicitRules: t.readonly(FhirUri),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      language: t.readonly(FhirCode),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      meta: t.readonly(FhirMeta),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      moiety: t.readonlyArray(FhirSubstanceSpecification_Moiety),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      molecularWeight: t.readonlyArray(FhirSubstanceSpecification_MolecularWeight),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      name: t.readonlyArray(FhirSubstanceSpecification_Name),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      nucleicAcid: t.readonly(FhirReference),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      polymer: t.readonly(FhirReference),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      property: t.readonlyArray(FhirSubstanceSpecification_Property),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      protein: t.readonly(FhirReference),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      referenceInformation: t.readonly(FhirReference),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      relationship: t.readonlyArray(FhirSubstanceSpecification_Relationship),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      source: t.readonlyArray(FhirReference),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      sourceMaterial: t.readonly(FhirReference),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      status: t.readonly(FhirCodeableConcept),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      structure: t.readonly(FhirSubstanceSpecification_Structure),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      text: t.readonly(FhirNarrative),
      /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
      type: t.readonly(FhirCodeableConcept),
    }),
  ])
)

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface FhirSubstanceSpecification {
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _comment?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  code?: ReadonlyArray<t.TypeOf<typeof FhirSubstanceSpecification_Code>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  comment?: Readonly<t.TypeOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  domain?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  identifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  moiety?: ReadonlyArray<t.TypeOf<typeof FhirSubstanceSpecification_Moiety>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  molecularWeight?: ReadonlyArray<t.TypeOf<typeof FhirSubstanceSpecification_MolecularWeight>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  name?: ReadonlyArray<t.TypeOf<typeof FhirSubstanceSpecification_Name>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  nucleicAcid?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  polymer?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  property?: ReadonlyArray<t.TypeOf<typeof FhirSubstanceSpecification_Property>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  protein?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  referenceInformation?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  relationship?: ReadonlyArray<t.TypeOf<typeof FhirSubstanceSpecification_Relationship>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  resourceType: Readonly<'SubstanceSpecification'>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  source?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  sourceMaterial?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  status?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  structure?: Readonly<t.TypeOf<typeof FhirSubstanceSpecification_Structure>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface FhirSubstanceSpecificationOutput {
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _comment?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  code?: ReadonlyArray<t.OutputOf<typeof FhirSubstanceSpecification_Code>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  comment?: Readonly<t.OutputOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  domain?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  identifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  moiety?: ReadonlyArray<t.OutputOf<typeof FhirSubstanceSpecification_Moiety>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  molecularWeight?: ReadonlyArray<t.OutputOf<typeof FhirSubstanceSpecification_MolecularWeight>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  name?: ReadonlyArray<t.OutputOf<typeof FhirSubstanceSpecification_Name>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  nucleicAcid?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  polymer?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  property?: ReadonlyArray<t.OutputOf<typeof FhirSubstanceSpecification_Property>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  protein?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  referenceInformation?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  relationship?: ReadonlyArray<t.OutputOf<typeof FhirSubstanceSpecification_Relationship>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  resourceType: Readonly<'SubstanceSpecification'>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  source?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  sourceMaterial?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  status?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  structure?: Readonly<t.OutputOf<typeof FhirSubstanceSpecification_Structure>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
