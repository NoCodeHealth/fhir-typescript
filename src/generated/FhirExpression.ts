import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
export const FhirExpression: t.Type<FhirExpression, FhirExpressionOutput> = t.recursion('FhirExpression', () =>
  t.partial({
    /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
    _description: t.readonly(FhirElement),
    /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
    _expression: t.readonly(FhirElement),
    /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
    _language: t.readonly(FhirElement),
    /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
    _name: t.readonly(FhirElement),
    /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
    _reference: t.readonly(FhirElement),
    /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
    description: t.readonly(FhirString),
    /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
    expression: t.readonly(FhirString),
    /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
    extension: t.readonlyArray(FhirExtension),
    /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
    id: t.readonly(FhirString),
    /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
    language: t.readonly(
      t.keyof({
        'text/cql': null,
        'text/fhirpath': null,
        'application/x-fhir-query': null,
      })
    ),
    /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
    name: t.readonly(FhirId),
    /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
    reference: t.readonly(FhirUri),
  })
)

/** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
export interface FhirExpression {
  /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
  _expression?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
  _reference?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
  expression?: Readonly<t.TypeOf<typeof FhirString>>
  /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
  language?: Readonly<'text/cql' | 'text/fhirpath' | 'application/x-fhir-query'>
  /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
  name?: Readonly<t.TypeOf<typeof FhirId>>
  /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
  reference?: Readonly<t.TypeOf<typeof FhirUri>>
}
/** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
export interface FhirExpressionOutput {
  /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
  _expression?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
  _reference?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
  expression?: Readonly<t.OutputOf<typeof FhirString>>
  /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
  language?: Readonly<'text/cql' | 'text/fhirpath' | 'application/x-fhir-query'>
  /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
  name?: Readonly<t.OutputOf<typeof FhirId>>
  /** A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
  reference?: Readonly<t.OutputOf<typeof FhirUri>>
}
