import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirConceptMap_DependsOn } from './FhirConceptMap_DependsOn'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export const FhirConceptMap_Target: t.Type<FhirConceptMap_Target, FhirConceptMap_TargetOutput> = t.recursion(
  'FhirConceptMap_Target',
  () =>
    t.partial({
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _code: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _comment: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _display: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _equivalence: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      code: t.readonly(FhirCode),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      comment: t.readonly(FhirString),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      dependsOn: t.readonlyArray(FhirConceptMap_DependsOn),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      display: t.readonly(FhirString),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      equivalence: t.readonly(
        t.keyof({
          relatedto: null,
          equivalent: null,
          equal: null,
          wider: null,
          subsumes: null,
          narrower: null,
          specializes: null,
          inexact: null,
          unmatched: null,
          disjoint: null,
        })
      ),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      extension: t.readonlyArray(FhirExtension),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      id: t.readonly(FhirString),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      product: t.readonlyArray(FhirConceptMap_DependsOn),
    })
)

/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export interface FhirConceptMap_Target {
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _code?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _comment?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _display?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _equivalence?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  code?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  comment?: Readonly<t.TypeOf<typeof FhirString>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  dependsOn?: ReadonlyArray<t.TypeOf<typeof FhirConceptMap_DependsOn>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  display?: Readonly<t.TypeOf<typeof FhirString>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  equivalence?: Readonly<
    | 'relatedto'
    | 'equivalent'
    | 'equal'
    | 'wider'
    | 'subsumes'
    | 'narrower'
    | 'specializes'
    | 'inexact'
    | 'unmatched'
    | 'disjoint'
  >
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  product?: ReadonlyArray<t.TypeOf<typeof FhirConceptMap_DependsOn>>
}
/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export interface FhirConceptMap_TargetOutput {
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _code?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _comment?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _display?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _equivalence?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  code?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  comment?: Readonly<t.OutputOf<typeof FhirString>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  dependsOn?: ReadonlyArray<t.OutputOf<typeof FhirConceptMap_DependsOn>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  display?: Readonly<t.OutputOf<typeof FhirString>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  equivalence?: Readonly<
    | 'relatedto'
    | 'equivalent'
    | 'equal'
    | 'wider'
    | 'subsumes'
    | 'narrower'
    | 'specializes'
    | 'inexact'
    | 'unmatched'
    | 'disjoint'
  >
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  product?: ReadonlyArray<t.OutputOf<typeof FhirConceptMap_DependsOn>>
}
