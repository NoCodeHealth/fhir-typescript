import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export const FhirTestScript_Fixture: t.Type<FhirTestScript_Fixture, FhirTestScript_FixtureOutput> = t.recursion(
  'FhirTestScript_Fixture',
  () =>
    t.partial({
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _autocreate: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _autodelete: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      autocreate: t.readonly(FhirBoolean),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      autodelete: t.readonly(FhirBoolean),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      extension: t.readonlyArray(FhirExtension),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      id: t.readonly(FhirString),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      resource: t.readonly(FhirReference),
    })
)

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface FhirTestScript_Fixture {
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _autocreate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _autodelete?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  autocreate?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  autodelete?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  resource?: Readonly<t.TypeOf<typeof FhirReference>>
}
/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface FhirTestScript_FixtureOutput {
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _autocreate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _autodelete?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  autocreate?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  autodelete?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  resource?: Readonly<t.OutputOf<typeof FhirReference>>
}
