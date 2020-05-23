import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
export const FhirCodeSystem_Filter: t.Type<FhirCodeSystem_Filter, FhirCodeSystem_FilterOutput> = t.recursion(
  'FhirCodeSystem_Filter',
  () =>
    t.partial({
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _code: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _description: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _operator: t.readonlyArray(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _value: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      code: t.readonly(FhirCode),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      description: t.readonly(FhirString),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      extension: t.readonlyArray(FhirExtension),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      id: t.readonly(FhirString),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      operator: t.readonlyArray(FhirCode),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      value: t.readonly(FhirString),
    })
)

/** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
export interface FhirCodeSystem_Filter {
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _code?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _operator?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _value?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  code?: Readonly<t.TypeOf<typeof FhirCode>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  operator?: ReadonlyArray<t.TypeOf<typeof FhirCode>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  value?: Readonly<t.TypeOf<typeof FhirString>>
}
/** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
export interface FhirCodeSystem_FilterOutput {
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _code?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _operator?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _value?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  code?: Readonly<t.OutputOf<typeof FhirCode>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  operator?: ReadonlyArray<t.OutputOf<typeof FhirCode>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  value?: Readonly<t.OutputOf<typeof FhirString>>
}
