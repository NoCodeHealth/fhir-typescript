import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export const FhirTestScript_Link: t.Type<FhirTestScript_Link, FhirTestScript_LinkOutput> = t.recursion(
  'FhirTestScript_Link',
  () =>
    t.partial({
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _description: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _url: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      description: t.readonly(FhirString),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      extension: t.readonlyArray(FhirExtension),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      id: t.readonly(FhirString),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      url: t.readonly(FhirUri),
    })
)

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface FhirTestScript_Link {
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
}
/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface FhirTestScript_LinkOutput {
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
}
