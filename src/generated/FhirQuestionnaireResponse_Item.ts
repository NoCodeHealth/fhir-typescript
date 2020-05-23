import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirQuestionnaireResponse_Answer } from './FhirQuestionnaireResponse_Answer'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
export const FhirQuestionnaireResponse_Item: t.Type<
  FhirQuestionnaireResponse_Item,
  FhirQuestionnaireResponse_ItemOutput
> = t.recursion('FhirQuestionnaireResponse_Item', () =>
  t.partial({
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    _definition: t.readonly(FhirElement),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    _linkId: t.readonly(FhirElement),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    _text: t.readonly(FhirElement),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    answer: t.readonlyArray(FhirQuestionnaireResponse_Answer),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    definition: t.readonly(FhirUri),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    extension: t.readonlyArray(FhirExtension),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    id: t.readonly(FhirString),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    item: t.readonlyArray(FhirQuestionnaireResponse_Item),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    linkId: t.readonly(FhirString),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
    text: t.readonly(FhirString),
  })
)

/** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
export interface FhirQuestionnaireResponse_Item {
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _definition?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _linkId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _text?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  answer?: ReadonlyArray<t.TypeOf<typeof FhirQuestionnaireResponse_Answer>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  definition?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  item?: ReadonlyArray<FhirQuestionnaireResponse_Item>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  linkId?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  text?: Readonly<t.TypeOf<typeof FhirString>>
}
/** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
export interface FhirQuestionnaireResponse_ItemOutput {
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _definition?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _linkId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _text?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  answer?: ReadonlyArray<t.OutputOf<typeof FhirQuestionnaireResponse_Answer>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  definition?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  item?: ReadonlyArray<FhirQuestionnaireResponse_ItemOutput>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  linkId?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  text?: Readonly<t.OutputOf<typeof FhirString>>
}
