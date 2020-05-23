import * as t from 'io-ts'
import { FhirCanonical } from './FhirCanonical'
import { FhirCode } from './FhirCode'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirQuestionnaireResponse_Item } from './FhirQuestionnaireResponse_Item'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
export const FhirQuestionnaireResponse: t.Type<
  FhirQuestionnaireResponse,
  FhirQuestionnaireResponseOutput
> = t.recursion('FhirQuestionnaireResponse', () =>
  t.intersection([
    t.type({
      /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
      resourceType: t.readonly(t.literal('QuestionnaireResponse')),
    }),
    t.partial({
      /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
      _authored: t.readonly(FhirElement),
      /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
      _implicitRules: t.readonly(FhirElement),
      /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
      _language: t.readonly(FhirElement),
      /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
      _status: t.readonly(FhirElement),
      /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
      author: t.readonly(FhirReference),
      /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
      authored: t.readonly(FhirDateTime),
      /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
      basedOn: t.readonlyArray(FhirReference),
      /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
      contained: t.readonlyArray(FhirResourceList),
      /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
      encounter: t.readonly(FhirReference),
      /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
      extension: t.readonlyArray(FhirExtension),
      /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
      id: t.readonly(FhirId),
      /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
      identifier: t.readonly(FhirIdentifier),
      /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
      implicitRules: t.readonly(FhirUri),
      /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
      item: t.readonlyArray(FhirQuestionnaireResponse_Item),
      /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
      language: t.readonly(FhirCode),
      /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
      meta: t.readonly(FhirMeta),
      /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
      partOf: t.readonlyArray(FhirReference),
      /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
      questionnaire: t.readonly(FhirCanonical),
      /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
      source: t.readonly(FhirReference),
      /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
      status: t.readonly(
        t.keyof({
          'in-progress': null,
          completed: null,
          amended: null,
          'entered-in-error': null,
          stopped: null,
        })
      ),
      /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
      subject: t.readonly(FhirReference),
      /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
export interface FhirQuestionnaireResponse {
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _authored?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  author?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  authored?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  basedOn?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  encounter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  identifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  item?: ReadonlyArray<t.TypeOf<typeof FhirQuestionnaireResponse_Item>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  partOf?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  questionnaire?: Readonly<t.TypeOf<typeof FhirCanonical>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  resourceType: Readonly<'QuestionnaireResponse'>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  source?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  status?: Readonly<'in-progress' | 'completed' | 'amended' | 'entered-in-error' | 'stopped'>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  subject?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
export interface FhirQuestionnaireResponseOutput {
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _authored?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  author?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  authored?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  basedOn?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  encounter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  identifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  item?: ReadonlyArray<t.OutputOf<typeof FhirQuestionnaireResponse_Item>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  partOf?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  questionnaire?: Readonly<t.OutputOf<typeof FhirCanonical>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  resourceType: Readonly<'QuestionnaireResponse'>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  source?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  status?: Readonly<'in-progress' | 'completed' | 'amended' | 'entered-in-error' | 'stopped'>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  subject?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
