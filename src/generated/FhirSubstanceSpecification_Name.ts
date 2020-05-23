import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'
import { FhirSubstanceSpecification_Official } from './FhirSubstanceSpecification_Official'

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export const FhirSubstanceSpecification_Name: t.Type<
  FhirSubstanceSpecification_Name,
  FhirSubstanceSpecification_NameOutput
> = t.recursion('FhirSubstanceSpecification_Name', () =>
  t.partial({
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    _name: t.readonly(FhirElement),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    _preferred: t.readonly(FhirElement),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    domain: t.readonlyArray(FhirCodeableConcept),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    extension: t.readonlyArray(FhirExtension),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    id: t.readonly(FhirString),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    jurisdiction: t.readonlyArray(FhirCodeableConcept),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    language: t.readonlyArray(FhirCodeableConcept),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    name: t.readonly(FhirString),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    official: t.readonlyArray(FhirSubstanceSpecification_Official),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    preferred: t.readonly(FhirBoolean),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    source: t.readonlyArray(FhirReference),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    status: t.readonly(FhirCodeableConcept),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    synonym: t.readonlyArray(FhirSubstanceSpecification_Name),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    translation: t.readonlyArray(FhirSubstanceSpecification_Name),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    type: t.readonly(FhirCodeableConcept),
  })
)

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface FhirSubstanceSpecification_Name {
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _preferred?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  domain?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  jurisdiction?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  language?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  official?: ReadonlyArray<t.TypeOf<typeof FhirSubstanceSpecification_Official>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  preferred?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  source?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  status?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  synonym?: ReadonlyArray<FhirSubstanceSpecification_Name>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  translation?: ReadonlyArray<FhirSubstanceSpecification_Name>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface FhirSubstanceSpecification_NameOutput {
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _preferred?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  domain?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  jurisdiction?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  language?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  official?: ReadonlyArray<t.OutputOf<typeof FhirSubstanceSpecification_Official>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  preferred?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  source?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  status?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  synonym?: ReadonlyArray<FhirSubstanceSpecification_NameOutput>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  translation?: ReadonlyArray<FhirSubstanceSpecification_NameOutput>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
