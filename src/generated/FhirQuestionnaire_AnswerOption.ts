import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCoding } from './FhirCoding'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
export const FhirQuestionnaire_AnswerOption: t.Type<
  FhirQuestionnaire_AnswerOption,
  FhirQuestionnaire_AnswerOptionOutput
> = t.recursion('FhirQuestionnaire_AnswerOption', () =>
  t.partial({
    /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
    _initialSelected: t.readonly(FhirElement),
    /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
    _valueDate: t.readonly(FhirElement),
    /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
    _valueInteger: t.readonly(FhirElement),
    /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
    _valueString: t.readonly(FhirElement),
    /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
    _valueTime: t.readonly(FhirElement),
    /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
    extension: t.readonlyArray(FhirExtension),
    /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
    id: t.readonly(FhirString),
    /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
    initialSelected: t.readonly(FhirBoolean),
    /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
    valueCoding: t.readonly(FhirCoding),
    /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
    valueDate: t.readonly(t.string),
    /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
    valueInteger: t.readonly(t.number),
    /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
    valueReference: t.readonly(FhirReference),
    /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
    valueString: t.readonly(t.string),
    /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
    valueTime: t.readonly(t.string),
  })
)

/** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
export interface FhirQuestionnaire_AnswerOption {
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _initialSelected?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _valueDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _valueInteger?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _valueString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _valueTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  initialSelected?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  valueCoding?: Readonly<t.TypeOf<typeof FhirCoding>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  valueDate?: Readonly<string>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  valueInteger?: Readonly<number>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  valueReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  valueString?: Readonly<string>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  valueTime?: Readonly<string>
}
/** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
export interface FhirQuestionnaire_AnswerOptionOutput {
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _initialSelected?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _valueDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _valueInteger?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _valueString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  _valueTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  initialSelected?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  valueCoding?: Readonly<t.OutputOf<typeof FhirCoding>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  valueDate?: Readonly<string>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  valueInteger?: Readonly<number>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  valueReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  valueString?: Readonly<string>
  /** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
  valueTime?: Readonly<string>
}
