import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
export const FhirCodeSystem_Property: t.Type<FhirCodeSystem_Property, FhirCodeSystem_PropertyOutput> = t.recursion(
  'FhirCodeSystem_Property',
  () =>
    t.partial({
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _code: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _description: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _type: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _uri: t.readonly(FhirElement),
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
      type: t.readonly(
        t.keyof({
          code: null,
          Coding: null,
          string: null,
          integer: null,
          boolean: null,
          dateTime: null,
          decimal: null,
        })
      ),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      uri: t.readonly(FhirUri),
    })
)

/** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
export interface FhirCodeSystem_Property {
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _code?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _uri?: Readonly<t.TypeOf<typeof FhirElement>>
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
  type?: Readonly<'code' | 'Coding' | 'string' | 'integer' | 'boolean' | 'dateTime' | 'decimal'>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  uri?: Readonly<t.TypeOf<typeof FhirUri>>
}
/** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
export interface FhirCodeSystem_PropertyOutput {
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _code?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _uri?: Readonly<t.OutputOf<typeof FhirElement>>
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
  type?: Readonly<'code' | 'Coding' | 'string' | 'integer' | 'boolean' | 'dateTime' | 'decimal'>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  uri?: Readonly<t.OutputOf<typeof FhirUri>>
}
