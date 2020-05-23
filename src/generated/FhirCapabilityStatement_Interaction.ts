import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirMarkdown } from './FhirMarkdown'
import { FhirString } from './FhirString'

/** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export const FhirCapabilityStatement_Interaction: t.Type<
  FhirCapabilityStatement_Interaction,
  FhirCapabilityStatement_InteractionOutput
> = t.recursion('FhirCapabilityStatement_Interaction', () =>
  t.partial({
    /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    _code: t.readonly(FhirElement),
    /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    _documentation: t.readonly(FhirElement),
    /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    code: t.readonly(
      t.keyof({
        read: null,
        vread: null,
        update: null,
        patch: null,
        delete: null,
        'history-instance': null,
        'history-type': null,
        create: null,
        'search-type': null,
      })
    ),
    /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    documentation: t.readonly(FhirMarkdown),
    /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    extension: t.readonlyArray(FhirExtension),
    /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    id: t.readonly(FhirString),
    /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
    modifierExtension: t.readonlyArray(FhirExtension),
  })
)

/** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export interface FhirCapabilityStatement_Interaction {
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _code?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _documentation?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  code?: Readonly<
    'read' | 'vread' | 'update' | 'patch' | 'delete' | 'history-instance' | 'history-type' | 'create' | 'search-type'
  >
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  documentation?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export interface FhirCapabilityStatement_InteractionOutput {
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _code?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  _documentation?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  code?: Readonly<
    'read' | 'vread' | 'update' | 'patch' | 'delete' | 'history-instance' | 'history-type' | 'create' | 'search-type'
  >
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  documentation?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
