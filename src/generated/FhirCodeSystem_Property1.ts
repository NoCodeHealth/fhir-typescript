import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCoding } from './FhirCoding'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
export const FhirCodeSystem_Property1: t.Type<FhirCodeSystem_Property1, FhirCodeSystem_Property1Output> = t.recursion(
  'FhirCodeSystem_Property1',
  () =>
    t.partial({
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _code: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _valueBoolean: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _valueCode: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _valueDateTime: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _valueDecimal: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _valueInteger: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      _valueString: t.readonly(FhirElement),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      code: t.readonly(FhirCode),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      extension: t.readonlyArray(FhirExtension),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      id: t.readonly(FhirString),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      valueBoolean: t.readonly(t.boolean),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      valueCode: t.readonly(t.string),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      valueCoding: t.readonly(FhirCoding),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      valueDateTime: t.readonly(t.string),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      valueDecimal: t.readonly(t.number),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      valueInteger: t.readonly(t.number),
      /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
      valueString: t.readonly(t.string),
    })
)

/** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
export interface FhirCodeSystem_Property1 {
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _code?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _valueBoolean?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _valueCode?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _valueDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _valueDecimal?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _valueInteger?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _valueString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  code?: Readonly<t.TypeOf<typeof FhirCode>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  valueBoolean?: Readonly<boolean>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  valueCode?: Readonly<string>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  valueCoding?: Readonly<t.TypeOf<typeof FhirCoding>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  valueDateTime?: Readonly<string>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  valueDecimal?: Readonly<number>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  valueInteger?: Readonly<number>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  valueString?: Readonly<string>
}
/** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
export interface FhirCodeSystem_Property1Output {
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _code?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _valueBoolean?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _valueCode?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _valueDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _valueDecimal?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _valueInteger?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  _valueString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  code?: Readonly<t.OutputOf<typeof FhirCode>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  valueBoolean?: Readonly<boolean>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  valueCode?: Readonly<string>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  valueCoding?: Readonly<t.OutputOf<typeof FhirCoding>>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  valueDateTime?: Readonly<string>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  valueDecimal?: Readonly<number>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  valueInteger?: Readonly<number>
  /** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
  valueString?: Readonly<string>
}
