import * as t from 'io-ts'
import { FhirCanonical } from './FhirCanonical'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export const FhirConceptMap_DependsOn: t.Type<FhirConceptMap_DependsOn, FhirConceptMap_DependsOnOutput> = t.recursion(
  'FhirConceptMap_DependsOn',
  () =>
    t.partial({
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _display: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _property: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _value: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      display: t.readonly(FhirString),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      extension: t.readonlyArray(FhirExtension),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      id: t.readonly(FhirString),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      property: t.readonly(FhirUri),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      system: t.readonly(FhirCanonical),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      value: t.readonly(FhirString),
    })
)

/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export interface FhirConceptMap_DependsOn {
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _display?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _property?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _value?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  display?: Readonly<t.TypeOf<typeof FhirString>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  property?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  system?: Readonly<t.TypeOf<typeof FhirCanonical>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  value?: Readonly<t.TypeOf<typeof FhirString>>
}
/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export interface FhirConceptMap_DependsOnOutput {
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _display?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _property?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _value?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  display?: Readonly<t.OutputOf<typeof FhirString>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  property?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  system?: Readonly<t.OutputOf<typeof FhirCanonical>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  value?: Readonly<t.OutputOf<typeof FhirString>>
}
