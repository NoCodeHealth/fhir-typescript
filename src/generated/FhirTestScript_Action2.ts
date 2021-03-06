import * as t from 'io-ts'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirTestScript_Operation } from './FhirTestScript_Operation'

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export const FhirTestScript_Action2: t.Type<FhirTestScript_Action2, FhirTestScript_Action2Output> = t.recursion(
  'FhirTestScript_Action2',
  () =>
    t.intersection([
      t.type({
        /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
        operation: t.readonly(FhirTestScript_Operation),
      }),
      t.partial({
        /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
        extension: t.readonlyArray(FhirExtension),
        /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
        id: t.readonly(FhirString),
        /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
        modifierExtension: t.readonlyArray(FhirExtension),
      }),
    ])
)

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface FhirTestScript_Action2 {
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  operation: Readonly<t.TypeOf<typeof FhirTestScript_Operation>>
}
/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface FhirTestScript_Action2Output {
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  operation: Readonly<t.OutputOf<typeof FhirTestScript_Operation>>
}
