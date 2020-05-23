import * as t from 'io-ts'
import { FhirCapabilityStatement_Endpoint } from './FhirCapabilityStatement_Endpoint'
import { FhirCapabilityStatement_SupportedMessage } from './FhirCapabilityStatement_SupportedMessage'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirMarkdown } from './FhirMarkdown'
import { FhirString } from './FhirString'
import { FhirUnsignedInt } from './FhirUnsignedInt'

/** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export const FhirCapabilityStatement_Messaging: t.Type<
  FhirCapabilityStatement_Messaging,
  FhirCapabilityStatement_MessagingOutput
> = t.recursion('FhirCapabilityStatement_Messaging', () =>
  t.partial({
    /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    _documentation: t.readonly(FhirElement),
    /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    _reliableCache: t.readonly(FhirElement),
    /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    documentation: t.readonly(FhirMarkdown),
    /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    endpoint: t.readonlyArray(FhirCapabilityStatement_Endpoint),
    /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    extension: t.readonlyArray(FhirExtension),
    /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    id: t.readonly(FhirString),
    /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    reliableCache: t.readonly(FhirUnsignedInt),
    /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    supportedMessage: t.readonlyArray(FhirCapabilityStatement_SupportedMessage),
  })
)

/** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export interface FhirCapabilityStatement_Messaging {
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _documentation?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _reliableCache?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  documentation?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  endpoint?: ReadonlyArray<t.TypeOf<typeof FhirCapabilityStatement_Endpoint>>
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  reliableCache?: Readonly<t.TypeOf<typeof FhirUnsignedInt>>
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  supportedMessage?: ReadonlyArray<t.TypeOf<typeof FhirCapabilityStatement_SupportedMessage>>
}
/** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export interface FhirCapabilityStatement_MessagingOutput {
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _documentation?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _reliableCache?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  documentation?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  endpoint?: ReadonlyArray<t.OutputOf<typeof FhirCapabilityStatement_Endpoint>>
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  reliableCache?: Readonly<t.OutputOf<typeof FhirUnsignedInt>>
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  supportedMessage?: ReadonlyArray<t.OutputOf<typeof FhirCapabilityStatement_SupportedMessage>>
}
