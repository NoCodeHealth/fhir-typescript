import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** A collection of error, warning, or information messages that result from a system action. */
export const FhirOperationOutcome_Issue: t.Type<
  FhirOperationOutcome_Issue,
  FhirOperationOutcome_IssueOutput
> = t.recursion('FhirOperationOutcome_Issue', () =>
  t.partial({
    /** A collection of error, warning, or information messages that result from a system action. */
    _code: t.readonly(FhirElement),
    /** A collection of error, warning, or information messages that result from a system action. */
    _diagnostics: t.readonly(FhirElement),
    /** A collection of error, warning, or information messages that result from a system action. */
    _expression: t.readonlyArray(FhirElement),
    /** A collection of error, warning, or information messages that result from a system action. */
    _location: t.readonlyArray(FhirElement),
    /** A collection of error, warning, or information messages that result from a system action. */
    _severity: t.readonly(FhirElement),
    /** A collection of error, warning, or information messages that result from a system action. */
    code: t.readonly(
      t.keyof({
        invalid: null,
        structure: null,
        required: null,
        value: null,
        invariant: null,
        security: null,
        login: null,
        unknown: null,
        expired: null,
        forbidden: null,
        suppressed: null,
        processing: null,
        'not-supported': null,
        duplicate: null,
        'multiple-matches': null,
        'not-found': null,
        deleted: null,
        'too-long': null,
        'code-invalid': null,
        extension: null,
        'too-costly': null,
        'business-rule': null,
        conflict: null,
        transient: null,
        'lock-error': null,
        'no-store': null,
        exception: null,
        timeout: null,
        incomplete: null,
        throttled: null,
        informational: null,
      })
    ),
    /** A collection of error, warning, or information messages that result from a system action. */
    details: t.readonly(FhirCodeableConcept),
    /** A collection of error, warning, or information messages that result from a system action. */
    diagnostics: t.readonly(FhirString),
    /** A collection of error, warning, or information messages that result from a system action. */
    expression: t.readonlyArray(FhirString),
    /** A collection of error, warning, or information messages that result from a system action. */
    extension: t.readonlyArray(FhirExtension),
    /** A collection of error, warning, or information messages that result from a system action. */
    id: t.readonly(FhirString),
    /** A collection of error, warning, or information messages that result from a system action. */
    location: t.readonlyArray(FhirString),
    /** A collection of error, warning, or information messages that result from a system action. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A collection of error, warning, or information messages that result from a system action. */
    severity: t.readonly(
      t.keyof({
        fatal: null,
        error: null,
        warning: null,
        information: null,
      })
    ),
  })
)

/** A collection of error, warning, or information messages that result from a system action. */
export interface FhirOperationOutcome_Issue {
  /** A collection of error, warning, or information messages that result from a system action. */
  _code?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A collection of error, warning, or information messages that result from a system action. */
  _diagnostics?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A collection of error, warning, or information messages that result from a system action. */
  _expression?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A collection of error, warning, or information messages that result from a system action. */
  _location?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A collection of error, warning, or information messages that result from a system action. */
  _severity?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A collection of error, warning, or information messages that result from a system action. */
  code?: Readonly<
    | 'invalid'
    | 'structure'
    | 'required'
    | 'value'
    | 'invariant'
    | 'security'
    | 'login'
    | 'unknown'
    | 'expired'
    | 'forbidden'
    | 'suppressed'
    | 'processing'
    | 'not-supported'
    | 'duplicate'
    | 'multiple-matches'
    | 'not-found'
    | 'deleted'
    | 'too-long'
    | 'code-invalid'
    | 'extension'
    | 'too-costly'
    | 'business-rule'
    | 'conflict'
    | 'transient'
    | 'lock-error'
    | 'no-store'
    | 'exception'
    | 'timeout'
    | 'incomplete'
    | 'throttled'
    | 'informational'
  >
  /** A collection of error, warning, or information messages that result from a system action. */
  details?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A collection of error, warning, or information messages that result from a system action. */
  diagnostics?: Readonly<t.TypeOf<typeof FhirString>>
  /** A collection of error, warning, or information messages that result from a system action. */
  expression?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** A collection of error, warning, or information messages that result from a system action. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A collection of error, warning, or information messages that result from a system action. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A collection of error, warning, or information messages that result from a system action. */
  location?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** A collection of error, warning, or information messages that result from a system action. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A collection of error, warning, or information messages that result from a system action. */
  severity?: Readonly<'fatal' | 'error' | 'warning' | 'information'>
}
/** A collection of error, warning, or information messages that result from a system action. */
export interface FhirOperationOutcome_IssueOutput {
  /** A collection of error, warning, or information messages that result from a system action. */
  _code?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A collection of error, warning, or information messages that result from a system action. */
  _diagnostics?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A collection of error, warning, or information messages that result from a system action. */
  _expression?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A collection of error, warning, or information messages that result from a system action. */
  _location?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A collection of error, warning, or information messages that result from a system action. */
  _severity?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A collection of error, warning, or information messages that result from a system action. */
  code?: Readonly<
    | 'invalid'
    | 'structure'
    | 'required'
    | 'value'
    | 'invariant'
    | 'security'
    | 'login'
    | 'unknown'
    | 'expired'
    | 'forbidden'
    | 'suppressed'
    | 'processing'
    | 'not-supported'
    | 'duplicate'
    | 'multiple-matches'
    | 'not-found'
    | 'deleted'
    | 'too-long'
    | 'code-invalid'
    | 'extension'
    | 'too-costly'
    | 'business-rule'
    | 'conflict'
    | 'transient'
    | 'lock-error'
    | 'no-store'
    | 'exception'
    | 'timeout'
    | 'incomplete'
    | 'throttled'
    | 'informational'
  >
  /** A collection of error, warning, or information messages that result from a system action. */
  details?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A collection of error, warning, or information messages that result from a system action. */
  diagnostics?: Readonly<t.OutputOf<typeof FhirString>>
  /** A collection of error, warning, or information messages that result from a system action. */
  expression?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** A collection of error, warning, or information messages that result from a system action. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A collection of error, warning, or information messages that result from a system action. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A collection of error, warning, or information messages that result from a system action. */
  location?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** A collection of error, warning, or information messages that result from a system action. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A collection of error, warning, or information messages that result from a system action. */
  severity?: Readonly<'fatal' | 'error' | 'warning' | 'information'>
}
