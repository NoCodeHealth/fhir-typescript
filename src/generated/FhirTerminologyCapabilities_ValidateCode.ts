import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export const FhirTerminologyCapabilities_ValidateCode: t.Type<
  FhirTerminologyCapabilities_ValidateCode,
  FhirTerminologyCapabilities_ValidateCodeOutput
> = t.recursion('FhirTerminologyCapabilities_ValidateCode', () =>
  t.partial({
    /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    _translations: t.readonly(FhirElement),
    /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    extension: t.readonlyArray(FhirExtension),
    /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    id: t.readonly(FhirString),
    /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    translations: t.readonly(FhirBoolean),
  })
)

/** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export interface FhirTerminologyCapabilities_ValidateCode {
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _translations?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  translations?: Readonly<t.TypeOf<typeof FhirBoolean>>
}
/** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export interface FhirTerminologyCapabilities_ValidateCodeOutput {
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _translations?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  translations?: Readonly<t.OutputOf<typeof FhirBoolean>>
}
