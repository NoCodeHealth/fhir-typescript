import * as t from 'io-ts'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirTestScript_Action } from './FhirTestScript_Action'

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export const FhirTestScript_Setup: t.Type<FhirTestScript_Setup, FhirTestScript_SetupOutput> = t.recursion(
  'FhirTestScript_Setup',
  () =>
    t.intersection([
      t.type({
        /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
        action: t.readonlyArray(FhirTestScript_Action),
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
export interface FhirTestScript_Setup {
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  action: ReadonlyArray<t.TypeOf<typeof FhirTestScript_Action>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface FhirTestScript_SetupOutput {
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  action: ReadonlyArray<t.OutputOf<typeof FhirTestScript_Action>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
