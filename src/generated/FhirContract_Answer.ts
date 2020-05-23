import * as t from 'io-ts'
import { FhirAttachment } from './FhirAttachment'
import { FhirCoding } from './FhirCoding'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirQuantity } from './FhirQuantity'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export const FhirContract_Answer: t.Type<FhirContract_Answer, FhirContract_AnswerOutput> = t.recursion(
  'FhirContract_Answer',
  () =>
    t.partial({
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      _valueBoolean: t.readonly(FhirElement),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      _valueDate: t.readonly(FhirElement),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      _valueDateTime: t.readonly(FhirElement),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      _valueDecimal: t.readonly(FhirElement),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      _valueInteger: t.readonly(FhirElement),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      _valueString: t.readonly(FhirElement),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      _valueTime: t.readonly(FhirElement),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      _valueUri: t.readonly(FhirElement),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      extension: t.readonlyArray(FhirExtension),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      id: t.readonly(FhirString),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      valueAttachment: t.readonly(FhirAttachment),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      valueBoolean: t.readonly(t.boolean),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      valueCoding: t.readonly(FhirCoding),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      valueDate: t.readonly(t.string),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      valueDateTime: t.readonly(t.string),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      valueDecimal: t.readonly(t.number),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      valueInteger: t.readonly(t.number),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      valueQuantity: t.readonly(FhirQuantity),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      valueReference: t.readonly(FhirReference),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      valueString: t.readonly(t.string),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      valueTime: t.readonly(t.string),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      valueUri: t.readonly(t.string),
    })
)

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface FhirContract_Answer {
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _valueBoolean?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _valueDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _valueDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _valueDecimal?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _valueInteger?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _valueString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _valueTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _valueUri?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  valueAttachment?: Readonly<t.TypeOf<typeof FhirAttachment>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  valueBoolean?: Readonly<boolean>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  valueCoding?: Readonly<t.TypeOf<typeof FhirCoding>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  valueDate?: Readonly<string>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  valueDateTime?: Readonly<string>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  valueDecimal?: Readonly<number>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  valueInteger?: Readonly<number>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  valueQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  valueReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  valueString?: Readonly<string>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  valueTime?: Readonly<string>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  valueUri?: Readonly<string>
}
/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface FhirContract_AnswerOutput {
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _valueBoolean?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _valueDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _valueDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _valueDecimal?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _valueInteger?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _valueString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _valueTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _valueUri?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  valueAttachment?: Readonly<t.OutputOf<typeof FhirAttachment>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  valueBoolean?: Readonly<boolean>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  valueCoding?: Readonly<t.OutputOf<typeof FhirCoding>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  valueDate?: Readonly<string>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  valueDateTime?: Readonly<string>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  valueDecimal?: Readonly<number>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  valueInteger?: Readonly<number>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  valueQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  valueReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  valueString?: Readonly<string>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  valueTime?: Readonly<string>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  valueUri?: Readonly<string>
}
