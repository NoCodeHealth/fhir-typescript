import * as t from 'io-ts'
import { FhirAttachment } from './FhirAttachment'
import { FhirCoding } from './FhirCoding'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirQuantity } from './FhirQuantity'
import { FhirQuestionnaireResponse_Item } from './FhirQuestionnaireResponse_Item'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
export const FhirQuestionnaireResponse_Answer: t.Type<
  FhirQuestionnaireResponse_Answer,
  FhirQuestionnaireResponse_AnswerOutput
> = t.recursion('FhirQuestionnaireResponse_Answer', () =>
  t.partial({
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    _valueBoolean: t.readonly(FhirElement),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    _valueDate: t.readonly(FhirElement),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    _valueDateTime: t.readonly(FhirElement),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    _valueDecimal: t.readonly(FhirElement),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    _valueInteger: t.readonly(FhirElement),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    _valueString: t.readonly(FhirElement),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    _valueTime: t.readonly(FhirElement),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    _valueUri: t.readonly(FhirElement),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    extension: t.readonlyArray(FhirExtension),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    id: t.readonly(FhirString),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    item: t.readonlyArray(FhirQuestionnaireResponse_Item),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    valueAttachment: t.readonly(FhirAttachment),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    valueBoolean: t.readonly(t.boolean),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    valueCoding: t.readonly(FhirCoding),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    valueDate: t.readonly(t.string),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    valueDateTime: t.readonly(t.string),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    valueDecimal: t.readonly(t.number),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    valueInteger: t.readonly(t.number),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    valueQuantity: t.readonly(FhirQuantity),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    valueReference: t.readonly(FhirReference),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    valueString: t.readonly(t.string),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    valueTime: t.readonly(t.string),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    valueUri: t.readonly(t.string),
  })
)

/** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
export interface FhirQuestionnaireResponse_Answer {
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _valueBoolean?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _valueDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _valueDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _valueDecimal?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _valueInteger?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _valueString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _valueTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _valueUri?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  item?: ReadonlyArray<t.TypeOf<typeof FhirQuestionnaireResponse_Item>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  valueAttachment?: Readonly<t.TypeOf<typeof FhirAttachment>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  valueBoolean?: Readonly<boolean>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  valueCoding?: Readonly<t.TypeOf<typeof FhirCoding>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  valueDate?: Readonly<string>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  valueDateTime?: Readonly<string>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  valueDecimal?: Readonly<number>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  valueInteger?: Readonly<number>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  valueQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  valueReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  valueString?: Readonly<string>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  valueTime?: Readonly<string>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  valueUri?: Readonly<string>
}
/** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
export interface FhirQuestionnaireResponse_AnswerOutput {
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _valueBoolean?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _valueDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _valueDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _valueDecimal?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _valueInteger?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _valueString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _valueTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _valueUri?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  item?: ReadonlyArray<t.OutputOf<typeof FhirQuestionnaireResponse_Item>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  valueAttachment?: Readonly<t.OutputOf<typeof FhirAttachment>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  valueBoolean?: Readonly<boolean>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  valueCoding?: Readonly<t.OutputOf<typeof FhirCoding>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  valueDate?: Readonly<string>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  valueDateTime?: Readonly<string>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  valueDecimal?: Readonly<number>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  valueInteger?: Readonly<number>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  valueQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  valueReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  valueString?: Readonly<string>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  valueTime?: Readonly<string>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  valueUri?: Readonly<string>
}
