import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCanonical } from './FhirCanonical'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirInteger } from './FhirInteger'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export const FhirTestScript_Capability: t.Type<
  FhirTestScript_Capability,
  FhirTestScript_CapabilityOutput
> = t.recursion('FhirTestScript_Capability', () =>
  t.intersection([
    t.type({
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      capabilities: t.readonly(FhirCanonical),
    }),
    t.partial({
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _description: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _destination: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _link: t.readonlyArray(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _origin: t.readonlyArray(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _required: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _validated: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      description: t.readonly(FhirString),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      destination: t.readonly(FhirInteger),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      extension: t.readonlyArray(FhirExtension),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      id: t.readonly(FhirString),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      link: t.readonlyArray(FhirUri),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      origin: t.readonlyArray(FhirInteger),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      required: t.readonly(FhirBoolean),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      validated: t.readonly(FhirBoolean),
    }),
  ])
)

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface FhirTestScript_Capability {
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _destination?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _link?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _origin?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _required?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _validated?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  capabilities: Readonly<t.TypeOf<typeof FhirCanonical>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  destination?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  link?: ReadonlyArray<t.TypeOf<typeof FhirUri>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  origin?: ReadonlyArray<t.TypeOf<typeof FhirInteger>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  required?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  validated?: Readonly<t.TypeOf<typeof FhirBoolean>>
}
/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface FhirTestScript_CapabilityOutput {
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _destination?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _link?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _origin?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _required?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _validated?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  capabilities: Readonly<t.OutputOf<typeof FhirCanonical>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  destination?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  link?: ReadonlyArray<t.OutputOf<typeof FhirUri>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  origin?: ReadonlyArray<t.OutputOf<typeof FhirInteger>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  required?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  validated?: Readonly<t.OutputOf<typeof FhirBoolean>>
}
