import * as t from 'io-ts'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirTestScript_Capability } from './FhirTestScript_Capability'
import { FhirTestScript_Link } from './FhirTestScript_Link'

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export const FhirTestScript_Metadata: t.Type<FhirTestScript_Metadata, FhirTestScript_MetadataOutput> = t.recursion(
  'FhirTestScript_Metadata',
  () =>
    t.intersection([
      t.type({
        /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
        capability: t.readonlyArray(FhirTestScript_Capability),
      }),
      t.partial({
        /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
        extension: t.readonlyArray(FhirExtension),
        /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
        id: t.readonly(FhirString),
        /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
        link: t.readonlyArray(FhirTestScript_Link),
        /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
        modifierExtension: t.readonlyArray(FhirExtension),
      }),
    ])
)

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface FhirTestScript_Metadata {
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  capability: ReadonlyArray<t.TypeOf<typeof FhirTestScript_Capability>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  link?: ReadonlyArray<t.TypeOf<typeof FhirTestScript_Link>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface FhirTestScript_MetadataOutput {
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  capability: ReadonlyArray<t.OutputOf<typeof FhirTestScript_Capability>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  link?: ReadonlyArray<t.OutputOf<typeof FhirTestScript_Link>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
