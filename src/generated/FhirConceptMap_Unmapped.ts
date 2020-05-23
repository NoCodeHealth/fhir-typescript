import * as t from 'io-ts'
import { FhirCanonical } from './FhirCanonical'
import { FhirCode } from './FhirCode'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export const FhirConceptMap_Unmapped: t.Type<FhirConceptMap_Unmapped, FhirConceptMap_UnmappedOutput> = t.recursion(
  'FhirConceptMap_Unmapped',
  () =>
    t.partial({
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _code: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _display: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      _mode: t.readonly(FhirElement),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      code: t.readonly(FhirCode),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      display: t.readonly(FhirString),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      extension: t.readonlyArray(FhirExtension),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      id: t.readonly(FhirString),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      mode: t.readonly(
        t.keyof({
          provided: null,
          fixed: null,
          'other-map': null,
        })
      ),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
      url: t.readonly(FhirCanonical),
    })
)

/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export interface FhirConceptMap_Unmapped {
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _code?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _display?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _mode?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  code?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  display?: Readonly<t.TypeOf<typeof FhirString>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  mode?: Readonly<'provided' | 'fixed' | 'other-map'>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  url?: Readonly<t.TypeOf<typeof FhirCanonical>>
}
/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export interface FhirConceptMap_UnmappedOutput {
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _code?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _display?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  _mode?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  code?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  display?: Readonly<t.OutputOf<typeof FhirString>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  mode?: Readonly<'provided' | 'fixed' | 'other-map'>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
  url?: Readonly<t.OutputOf<typeof FhirCanonical>>
}
