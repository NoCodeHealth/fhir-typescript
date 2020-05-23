import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirString } from './FhirString'

/** Captures constraints on each element within the resource, profile, or extension. */
export const FhirElementDefinition_Mapping: t.Type<
  FhirElementDefinition_Mapping,
  FhirElementDefinition_MappingOutput
> = t.recursion('FhirElementDefinition_Mapping', () =>
  t.partial({
    /** Captures constraints on each element within the resource, profile, or extension. */
    _comment: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _identity: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _language: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    _map: t.readonly(FhirElement),
    /** Captures constraints on each element within the resource, profile, or extension. */
    comment: t.readonly(FhirString),
    /** Captures constraints on each element within the resource, profile, or extension. */
    extension: t.readonlyArray(FhirExtension),
    /** Captures constraints on each element within the resource, profile, or extension. */
    id: t.readonly(FhirString),
    /** Captures constraints on each element within the resource, profile, or extension. */
    identity: t.readonly(FhirId),
    /** Captures constraints on each element within the resource, profile, or extension. */
    language: t.readonly(FhirCode),
    /** Captures constraints on each element within the resource, profile, or extension. */
    map: t.readonly(FhirString),
    /** Captures constraints on each element within the resource, profile, or extension. */
    modifierExtension: t.readonlyArray(FhirExtension),
  })
)

/** Captures constraints on each element within the resource, profile, or extension. */
export interface FhirElementDefinition_Mapping {
  /** Captures constraints on each element within the resource, profile, or extension. */
  _comment?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _identity?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _map?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  comment?: Readonly<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  identity?: Readonly<t.TypeOf<typeof FhirId>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  map?: Readonly<t.TypeOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** Captures constraints on each element within the resource, profile, or extension. */
export interface FhirElementDefinition_MappingOutput {
  /** Captures constraints on each element within the resource, profile, or extension. */
  _comment?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _identity?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  _map?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  comment?: Readonly<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  identity?: Readonly<t.OutputOf<typeof FhirId>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  map?: Readonly<t.OutputOf<typeof FhirString>>
  /** Captures constraints on each element within the resource, profile, or extension. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
