import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export const FhirTerminologyCapabilities_Parameter: t.Type<
  FhirTerminologyCapabilities_Parameter,
  FhirTerminologyCapabilities_ParameterOutput
> = t.recursion('FhirTerminologyCapabilities_Parameter', () =>
  t.partial({
    /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    _documentation: t.readonly(FhirElement),
    /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    _name: t.readonly(FhirElement),
    /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    documentation: t.readonly(FhirString),
    /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    extension: t.readonlyArray(FhirExtension),
    /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    id: t.readonly(FhirString),
    /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    name: t.readonly(FhirCode),
  })
)

/** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export interface FhirTerminologyCapabilities_Parameter {
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _documentation?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  documentation?: Readonly<t.TypeOf<typeof FhirString>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  name?: Readonly<t.TypeOf<typeof FhirCode>>
}
/** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export interface FhirTerminologyCapabilities_ParameterOutput {
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _documentation?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  documentation?: Readonly<t.OutputOf<typeof FhirString>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  name?: Readonly<t.OutputOf<typeof FhirCode>>
}
