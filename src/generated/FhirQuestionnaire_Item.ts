import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCanonical } from './FhirCanonical'
import { FhirCoding } from './FhirCoding'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirInteger } from './FhirInteger'
import { FhirQuestionnaire_AnswerOption } from './FhirQuestionnaire_AnswerOption'
import { FhirQuestionnaire_EnableWhen } from './FhirQuestionnaire_EnableWhen'
import { FhirQuestionnaire_Initial } from './FhirQuestionnaire_Initial'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
export const FhirQuestionnaire_Item: t.Type<FhirQuestionnaire_Item, FhirQuestionnaire_ItemOutput> = t.recursion(
  'FhirQuestionnaire_Item',
  () =>
    t.partial({
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      _definition: t.readonly(FhirElement),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      _enableBehavior: t.readonly(FhirElement),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      _linkId: t.readonly(FhirElement),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      _maxLength: t.readonly(FhirElement),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      _prefix: t.readonly(FhirElement),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      _readOnly: t.readonly(FhirElement),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      _repeats: t.readonly(FhirElement),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      _required: t.readonly(FhirElement),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      _text: t.readonly(FhirElement),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      _type: t.readonly(FhirElement),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      answerOption: t.readonlyArray(FhirQuestionnaire_AnswerOption),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      answerValueSet: t.readonly(FhirCanonical),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      code: t.readonlyArray(FhirCoding),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      definition: t.readonly(FhirUri),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      enableBehavior: t.readonly(
        t.keyof({
          all: null,
          any: null,
        })
      ),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      enableWhen: t.readonlyArray(FhirQuestionnaire_EnableWhen),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      extension: t.readonlyArray(FhirExtension),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      id: t.readonly(FhirString),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      initial: t.readonlyArray(FhirQuestionnaire_Initial),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      item: t.readonlyArray(FhirQuestionnaire_Item),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      linkId: t.readonly(FhirString),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      maxLength: t.readonly(FhirInteger),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      prefix: t.readonly(FhirString),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      readOnly: t.readonly(FhirBoolean),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      repeats: t.readonly(FhirBoolean),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      required: t.readonly(FhirBoolean),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      text: t.readonly(FhirString),
      /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
      type: t.readonly(
        t.keyof({
          group: null,
          display: null,
          boolean: null,
          decimal: null,
          integer: null,
          date: null,
          dateTime: null,
          time: null,
          string: null,
          text: null,
          url: null,
          choice: null,
          'open-choice': null,
          attachment: null,
          reference: null,
          quantity: null,
        })
      ),
    })
)

/** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
export interface FhirQuestionnaire_Item {
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _definition?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _enableBehavior?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _linkId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _maxLength?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _prefix?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _readOnly?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _repeats?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _required?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _text?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  answerOption?: ReadonlyArray<t.TypeOf<typeof FhirQuestionnaire_AnswerOption>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  answerValueSet?: Readonly<t.TypeOf<typeof FhirCanonical>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  code?: ReadonlyArray<t.TypeOf<typeof FhirCoding>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  definition?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  enableBehavior?: Readonly<'all' | 'any'>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  enableWhen?: ReadonlyArray<t.TypeOf<typeof FhirQuestionnaire_EnableWhen>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  initial?: ReadonlyArray<t.TypeOf<typeof FhirQuestionnaire_Initial>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  item?: ReadonlyArray<FhirQuestionnaire_Item>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  linkId?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  maxLength?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  prefix?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  readOnly?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  repeats?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  required?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  text?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  type?: Readonly<
    | 'group'
    | 'display'
    | 'boolean'
    | 'decimal'
    | 'integer'
    | 'date'
    | 'dateTime'
    | 'time'
    | 'string'
    | 'text'
    | 'url'
    | 'choice'
    | 'open-choice'
    | 'attachment'
    | 'reference'
    | 'quantity'
  >
}
/** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
export interface FhirQuestionnaire_ItemOutput {
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _definition?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _enableBehavior?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _linkId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _maxLength?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _prefix?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _readOnly?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _repeats?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _required?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _text?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  answerOption?: ReadonlyArray<t.OutputOf<typeof FhirQuestionnaire_AnswerOption>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  answerValueSet?: Readonly<t.OutputOf<typeof FhirCanonical>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  code?: ReadonlyArray<t.OutputOf<typeof FhirCoding>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  definition?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  enableBehavior?: Readonly<'all' | 'any'>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  enableWhen?: ReadonlyArray<t.OutputOf<typeof FhirQuestionnaire_EnableWhen>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  initial?: ReadonlyArray<t.OutputOf<typeof FhirQuestionnaire_Initial>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  item?: ReadonlyArray<FhirQuestionnaire_ItemOutput>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  linkId?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  maxLength?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  prefix?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  readOnly?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  repeats?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  required?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  text?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  type?: Readonly<
    | 'group'
    | 'display'
    | 'boolean'
    | 'decimal'
    | 'integer'
    | 'date'
    | 'dateTime'
    | 'time'
    | 'string'
    | 'text'
    | 'url'
    | 'choice'
    | 'open-choice'
    | 'attachment'
    | 'reference'
    | 'quantity'
  >
}
