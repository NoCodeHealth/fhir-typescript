import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export const FhirSubstanceSpecification_Official: t.Type<
  FhirSubstanceSpecification_Official,
  FhirSubstanceSpecification_OfficialOutput
> = t.recursion('FhirSubstanceSpecification_Official', () =>
  t.partial({
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    _date: t.readonly(FhirElement),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    authority: t.readonly(FhirCodeableConcept),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    date: t.readonly(FhirDateTime),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    extension: t.readonlyArray(FhirExtension),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    id: t.readonly(FhirString),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
    status: t.readonly(FhirCodeableConcept),
  })
)

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface FhirSubstanceSpecification_Official {
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  authority?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  status?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface FhirSubstanceSpecification_OfficialOutput {
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  authority?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
  status?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
