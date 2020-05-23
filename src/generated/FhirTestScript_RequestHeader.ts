import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export const FhirTestScript_RequestHeader: t.Type<
  FhirTestScript_RequestHeader,
  FhirTestScript_RequestHeaderOutput
> = t.recursion('FhirTestScript_RequestHeader', () =>
  t.partial({
    /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
    _field: t.readonly(FhirElement),
    /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
    _value: t.readonly(FhirElement),
    /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
    extension: t.readonlyArray(FhirExtension),
    /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
    field: t.readonly(FhirString),
    /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
    id: t.readonly(FhirString),
    /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
    value: t.readonly(FhirString),
  })
)

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface FhirTestScript_RequestHeader {
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _field?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _value?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  field?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  value?: Readonly<t.TypeOf<typeof FhirString>>
}
/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface FhirTestScript_RequestHeaderOutput {
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _field?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _value?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  field?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  value?: Readonly<t.OutputOf<typeof FhirString>>
}
