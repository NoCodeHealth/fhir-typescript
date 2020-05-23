import * as t from 'io-ts'
import { FhirCoding } from './FhirCoding'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text. */
export const FhirCodeableConcept: t.Type<FhirCodeableConcept, FhirCodeableConceptOutput> = t.recursion(
  'FhirCodeableConcept',
  () =>
    t.partial({
      /** A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text. */
      _text: t.readonly(FhirElement),
      /** A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text. */
      coding: t.readonlyArray(FhirCoding),
      /** A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text. */
      extension: t.readonlyArray(FhirExtension),
      /** A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text. */
      id: t.readonly(FhirString),
      /** A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text. */
      text: t.readonly(FhirString),
    })
)

/** A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text. */
export interface FhirCodeableConcept {
  /** A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text. */
  _text?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text. */
  coding?: ReadonlyArray<t.TypeOf<typeof FhirCoding>>
  /** A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text. */
  text?: Readonly<t.TypeOf<typeof FhirString>>
}
/** A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text. */
export interface FhirCodeableConceptOutput {
  /** A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text. */
  _text?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text. */
  coding?: ReadonlyArray<t.OutputOf<typeof FhirCoding>>
  /** A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text. */
  text?: Readonly<t.OutputOf<typeof FhirString>>
}
