import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeSystem_Designation } from './FhirCodeSystem_Designation'
import { FhirCodeSystem_Property1 } from './FhirCodeSystem_Property1'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
export const FhirCodeSystem_Concept: t.Type<FhirCodeSystem_Concept, FhirCodeSystem_ConceptOutput> = t.recursion(
  'FhirCodeSystem_Concept',
  () =>
    t.partial({
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _code: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _definition: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _display: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      code: t.readonly(FhirCode),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      concept: t.readonlyArray(FhirCodeSystem_Concept),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      definition: t.readonly(FhirString),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      designation: t.readonlyArray(FhirCodeSystem_Designation),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      display: t.readonly(FhirString),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      extension: t.readonlyArray(FhirExtension),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      id: t.readonly(FhirString),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      property: t.readonlyArray(FhirCodeSystem_Property1),
    })
)

/** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
export interface FhirCodeSystem_Concept {
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _code?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _definition?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _display?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  code?: Readonly<t.TypeOf<typeof FhirCode>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  concept?: ReadonlyArray<FhirCodeSystem_Concept>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  definition?: Readonly<t.TypeOf<typeof FhirString>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  designation?: ReadonlyArray<t.TypeOf<typeof FhirCodeSystem_Designation>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  display?: Readonly<t.TypeOf<typeof FhirString>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  property?: ReadonlyArray<t.TypeOf<typeof FhirCodeSystem_Property1>>
}
/** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
export interface FhirCodeSystem_ConceptOutput {
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _code?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _definition?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _display?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  code?: Readonly<t.OutputOf<typeof FhirCode>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  concept?: ReadonlyArray<FhirCodeSystem_ConceptOutput>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  definition?: Readonly<t.OutputOf<typeof FhirString>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  designation?: ReadonlyArray<t.OutputOf<typeof FhirCodeSystem_Designation>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  display?: Readonly<t.OutputOf<typeof FhirString>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  property?: ReadonlyArray<t.OutputOf<typeof FhirCodeSystem_Property1>>
}
