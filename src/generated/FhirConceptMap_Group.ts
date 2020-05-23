import * as t from 'io-ts'
import { FhirConceptMap_Element } from './FhirConceptMap_Element'
import { FhirConceptMap_Unmapped } from './FhirConceptMap_Unmapped'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export const FhirConceptMap_Group: t.Type<FhirConceptMap_Group, FhirConceptMap_GroupOutput> = t.recursion(
  'FhirConceptMap_Group',
  () =>
    t.intersection([
      t.type({
        /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
        element: t.readonlyArray(FhirConceptMap_Element),
      }),
      t.partial({
        /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
        _source: t.readonly(FhirElement),
        /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
        _sourceVersion: t.readonly(FhirElement),
        /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
        _target: t.readonly(FhirElement),
        /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
        _targetVersion: t.readonly(FhirElement),
        /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
        extension: t.readonlyArray(FhirExtension),
        /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
        id: t.readonly(FhirString),
        /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
        source: t.readonly(FhirUri),
        /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
        sourceVersion: t.readonly(FhirString),
        /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
        target: t.readonly(FhirUri),
        /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
        targetVersion: t.readonly(FhirString),
        /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
        unmapped: t.readonly(FhirConceptMap_Unmapped),
      }),
    ])
)

/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export interface FhirConceptMap_Group {
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _source?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _sourceVersion?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _target?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _targetVersion?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  element: ReadonlyArray<t.TypeOf<typeof FhirConceptMap_Element>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  source?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  sourceVersion?: Readonly<t.TypeOf<typeof FhirString>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  target?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  targetVersion?: Readonly<t.TypeOf<typeof FhirString>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  unmapped?: Readonly<t.TypeOf<typeof FhirConceptMap_Unmapped>>
}
/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export interface FhirConceptMap_GroupOutput {
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _source?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _sourceVersion?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _target?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _targetVersion?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  element: ReadonlyArray<t.OutputOf<typeof FhirConceptMap_Element>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  source?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  sourceVersion?: Readonly<t.OutputOf<typeof FhirString>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  target?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  targetVersion?: Readonly<t.OutputOf<typeof FhirString>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  unmapped?: Readonly<t.OutputOf<typeof FhirConceptMap_Unmapped>>
}
