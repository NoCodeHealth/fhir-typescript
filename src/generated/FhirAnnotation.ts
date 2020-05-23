import * as t from 'io-ts'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirMarkdown } from './FhirMarkdown'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A  text note which also  contains information about who made the statement and when. */
export const FhirAnnotation: t.Type<FhirAnnotation, FhirAnnotationOutput> = t.recursion('FhirAnnotation', () =>
  t.partial({
    /** A  text note which also  contains information about who made the statement and when. */
    _authorString: t.readonly(FhirElement),
    /** A  text note which also  contains information about who made the statement and when. */
    _text: t.readonly(FhirElement),
    /** A  text note which also  contains information about who made the statement and when. */
    _time: t.readonly(FhirElement),
    /** A  text note which also  contains information about who made the statement and when. */
    authorReference: t.readonly(FhirReference),
    /** A  text note which also  contains information about who made the statement and when. */
    authorString: t.readonly(t.string),
    /** A  text note which also  contains information about who made the statement and when. */
    extension: t.readonlyArray(FhirExtension),
    /** A  text note which also  contains information about who made the statement and when. */
    id: t.readonly(FhirString),
    /** A  text note which also  contains information about who made the statement and when. */
    text: t.readonly(FhirMarkdown),
    /** A  text note which also  contains information about who made the statement and when. */
    time: t.readonly(FhirDateTime),
  })
)

/** A  text note which also  contains information about who made the statement and when. */
export interface FhirAnnotation {
  /** A  text note which also  contains information about who made the statement and when. */
  _authorString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A  text note which also  contains information about who made the statement and when. */
  _text?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A  text note which also  contains information about who made the statement and when. */
  _time?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A  text note which also  contains information about who made the statement and when. */
  authorReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A  text note which also  contains information about who made the statement and when. */
  authorString?: Readonly<string>
  /** A  text note which also  contains information about who made the statement and when. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A  text note which also  contains information about who made the statement and when. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A  text note which also  contains information about who made the statement and when. */
  text?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A  text note which also  contains information about who made the statement and when. */
  time?: Readonly<t.TypeOf<typeof FhirDateTime>>
}
/** A  text note which also  contains information about who made the statement and when. */
export interface FhirAnnotationOutput {
  /** A  text note which also  contains information about who made the statement and when. */
  _authorString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A  text note which also  contains information about who made the statement and when. */
  _text?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A  text note which also  contains information about who made the statement and when. */
  _time?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A  text note which also  contains information about who made the statement and when. */
  authorReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A  text note which also  contains information about who made the statement and when. */
  authorString?: Readonly<string>
  /** A  text note which also  contains information about who made the statement and when. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A  text note which also  contains information about who made the statement and when. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A  text note which also  contains information about who made the statement and when. */
  text?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A  text note which also  contains information about who made the statement and when. */
  time?: Readonly<t.OutputOf<typeof FhirDateTime>>
}
