import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirTestScript_Action1 } from './FhirTestScript_Action1'

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export const FhirTestScript_Test: t.Type<FhirTestScript_Test, FhirTestScript_TestOutput> = t.recursion(
  'FhirTestScript_Test',
  () =>
    t.intersection([
      t.type({
        /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
        action: t.readonlyArray(FhirTestScript_Action1),
      }),
      t.partial({
        /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
        _description: t.readonly(FhirElement),
        /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
        _name: t.readonly(FhirElement),
        /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
        description: t.readonly(FhirString),
        /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
        extension: t.readonlyArray(FhirExtension),
        /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
        id: t.readonly(FhirString),
        /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
        name: t.readonly(FhirString),
      }),
    ])
)

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface FhirTestScript_Test {
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  action: ReadonlyArray<t.TypeOf<typeof FhirTestScript_Action1>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
}
/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface FhirTestScript_TestOutput {
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  action: ReadonlyArray<t.OutputOf<typeof FhirTestScript_Action1>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
}
