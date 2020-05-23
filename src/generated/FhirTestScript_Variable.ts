import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirString } from './FhirString'

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export const FhirTestScript_Variable: t.Type<FhirTestScript_Variable, FhirTestScript_VariableOutput> = t.recursion(
  'FhirTestScript_Variable',
  () =>
    t.partial({
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _defaultValue: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _description: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _expression: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _headerField: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _hint: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _name: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _path: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      _sourceId: t.readonly(FhirElement),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      defaultValue: t.readonly(FhirString),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      description: t.readonly(FhirString),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      expression: t.readonly(FhirString),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      extension: t.readonlyArray(FhirExtension),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      headerField: t.readonly(FhirString),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      hint: t.readonly(FhirString),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      id: t.readonly(FhirString),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      name: t.readonly(FhirString),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      path: t.readonly(FhirString),
      /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
      sourceId: t.readonly(FhirId),
    })
)

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface FhirTestScript_Variable {
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _defaultValue?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _expression?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _headerField?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _hint?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _path?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _sourceId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  defaultValue?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  expression?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  headerField?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  hint?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  path?: Readonly<t.TypeOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  sourceId?: Readonly<t.TypeOf<typeof FhirId>>
}
/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface FhirTestScript_VariableOutput {
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _defaultValue?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _expression?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _headerField?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _hint?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _path?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  _sourceId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  defaultValue?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  expression?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  headerField?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  hint?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  path?: Readonly<t.OutputOf<typeof FhirString>>
  /** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
  sourceId?: Readonly<t.OutputOf<typeof FhirId>>
}
