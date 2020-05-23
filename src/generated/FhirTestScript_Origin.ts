import * as t from 'io-ts'
import { FhirCoding } from './FhirCoding'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirInteger } from './FhirInteger'
import { FhirString } from './FhirString'

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export const FhirTestScript_Origin: t.Type<FhirTestScript_Origin, FhirTestScript_OriginOutput> = t.recursion(
  'FhirTestScript_Origin',
  () =>
    t.intersection([
      t.type({
        /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
        profile: t.readonly(FhirCoding),
      }),
      t.partial({
        /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
        _index: t.readonly(FhirElement),
        /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
        extension: t.readonlyArray(FhirExtension),
        /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
        id: t.readonly(FhirString),
        /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
        index: t.readonly(FhirInteger),
        /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
        modifierExtension: t.readonlyArray(FhirExtension),
      }),
    ])
)

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface FhirTestScript_Origin {
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _index?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  index?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  profile: Readonly<t.TypeOf<typeof FhirCoding>>
}
/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface FhirTestScript_OriginOutput {
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _index?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  index?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  profile: Readonly<t.OutputOf<typeof FhirCoding>>
}
