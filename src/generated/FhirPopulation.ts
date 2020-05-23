import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirRange } from './FhirRange'
import { FhirString } from './FhirString'

/** A populatioof people with some set of grouping criteria. */
export const FhirPopulation: t.Type<FhirPopulation, FhirPopulationOutput> = t.recursion('FhirPopulation', () =>
  t.partial({
    /** A populatioof people with some set of grouping criteria. */
    ageCodeableConcept: t.readonly(FhirCodeableConcept),
    /** A populatioof people with some set of grouping criteria. */
    ageRange: t.readonly(FhirRange),
    /** A populatioof people with some set of grouping criteria. */
    extension: t.readonlyArray(FhirExtension),
    /** A populatioof people with some set of grouping criteria. */
    gender: t.readonly(FhirCodeableConcept),
    /** A populatioof people with some set of grouping criteria. */
    id: t.readonly(FhirString),
    /** A populatioof people with some set of grouping criteria. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A populatioof people with some set of grouping criteria. */
    physiologicalCondition: t.readonly(FhirCodeableConcept),
    /** A populatioof people with some set of grouping criteria. */
    race: t.readonly(FhirCodeableConcept),
  })
)

/** A populatioof people with some set of grouping criteria. */
export interface FhirPopulation {
  /** A populatioof people with some set of grouping criteria. */
  ageCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A populatioof people with some set of grouping criteria. */
  ageRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** A populatioof people with some set of grouping criteria. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A populatioof people with some set of grouping criteria. */
  gender?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A populatioof people with some set of grouping criteria. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A populatioof people with some set of grouping criteria. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A populatioof people with some set of grouping criteria. */
  physiologicalCondition?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A populatioof people with some set of grouping criteria. */
  race?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** A populatioof people with some set of grouping criteria. */
export interface FhirPopulationOutput {
  /** A populatioof people with some set of grouping criteria. */
  ageCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A populatioof people with some set of grouping criteria. */
  ageRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** A populatioof people with some set of grouping criteria. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A populatioof people with some set of grouping criteria. */
  gender?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A populatioof people with some set of grouping criteria. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A populatioof people with some set of grouping criteria. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A populatioof people with some set of grouping criteria. */
  physiologicalCondition?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A populatioof people with some set of grouping criteria. */
  race?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
