import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** A compartment definition that defines how resources are accessed on a server. */
export const FhirCompartmentDefinition_Resource: t.Type<
  FhirCompartmentDefinition_Resource,
  FhirCompartmentDefinition_ResourceOutput
> = t.recursion('FhirCompartmentDefinition_Resource', () =>
  t.partial({
    /** A compartment definition that defines how resources are accessed on a server. */
    _code: t.readonly(FhirElement),
    /** A compartment definition that defines how resources are accessed on a server. */
    _documentation: t.readonly(FhirElement),
    /** A compartment definition that defines how resources are accessed on a server. */
    _param: t.readonlyArray(FhirElement),
    /** A compartment definition that defines how resources are accessed on a server. */
    code: t.readonly(FhirCode),
    /** A compartment definition that defines how resources are accessed on a server. */
    documentation: t.readonly(FhirString),
    /** A compartment definition that defines how resources are accessed on a server. */
    extension: t.readonlyArray(FhirExtension),
    /** A compartment definition that defines how resources are accessed on a server. */
    id: t.readonly(FhirString),
    /** A compartment definition that defines how resources are accessed on a server. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A compartment definition that defines how resources are accessed on a server. */
    param: t.readonlyArray(FhirString),
  })
)

/** A compartment definition that defines how resources are accessed on a server. */
export interface FhirCompartmentDefinition_Resource {
  /** A compartment definition that defines how resources are accessed on a server. */
  _code?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _documentation?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _param?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  code?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A compartment definition that defines how resources are accessed on a server. */
  documentation?: Readonly<t.TypeOf<typeof FhirString>>
  /** A compartment definition that defines how resources are accessed on a server. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A compartment definition that defines how resources are accessed on a server. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A compartment definition that defines how resources are accessed on a server. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A compartment definition that defines how resources are accessed on a server. */
  param?: ReadonlyArray<t.TypeOf<typeof FhirString>>
}
/** A compartment definition that defines how resources are accessed on a server. */
export interface FhirCompartmentDefinition_ResourceOutput {
  /** A compartment definition that defines how resources are accessed on a server. */
  _code?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _documentation?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  _param?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A compartment definition that defines how resources are accessed on a server. */
  code?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A compartment definition that defines how resources are accessed on a server. */
  documentation?: Readonly<t.OutputOf<typeof FhirString>>
  /** A compartment definition that defines how resources are accessed on a server. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A compartment definition that defines how resources are accessed on a server. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A compartment definition that defines how resources are accessed on a server. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A compartment definition that defines how resources are accessed on a server. */
  param?: ReadonlyArray<t.OutputOf<typeof FhirString>>
}
