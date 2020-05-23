import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirMarkdown } from './FhirMarkdown'
import { FhirString } from './FhirString'

/** A summary of information based on the results of executing a TestScript. */
export const FhirTestReport_Assert: t.Type<FhirTestReport_Assert, FhirTestReport_AssertOutput> = t.recursion(
  'FhirTestReport_Assert',
  () =>
    t.partial({
      /** A summary of information based on the results of executing a TestScript. */
      _detail: t.readonly(FhirElement),
      /** A summary of information based on the results of executing a TestScript. */
      _message: t.readonly(FhirElement),
      /** A summary of information based on the results of executing a TestScript. */
      _result: t.readonly(FhirElement),
      /** A summary of information based on the results of executing a TestScript. */
      detail: t.readonly(FhirString),
      /** A summary of information based on the results of executing a TestScript. */
      extension: t.readonlyArray(FhirExtension),
      /** A summary of information based on the results of executing a TestScript. */
      id: t.readonly(FhirString),
      /** A summary of information based on the results of executing a TestScript. */
      message: t.readonly(FhirMarkdown),
      /** A summary of information based on the results of executing a TestScript. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A summary of information based on the results of executing a TestScript. */
      result: t.readonly(
        t.keyof({
          pass: null,
          skip: null,
          fail: null,
          warning: null,
          error: null,
        })
      ),
    })
)

/** A summary of information based on the results of executing a TestScript. */
export interface FhirTestReport_Assert {
  /** A summary of information based on the results of executing a TestScript. */
  _detail?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  _message?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  _result?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  detail?: Readonly<t.TypeOf<typeof FhirString>>
  /** A summary of information based on the results of executing a TestScript. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A summary of information based on the results of executing a TestScript. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A summary of information based on the results of executing a TestScript. */
  message?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A summary of information based on the results of executing a TestScript. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A summary of information based on the results of executing a TestScript. */
  result?: Readonly<'pass' | 'skip' | 'fail' | 'warning' | 'error'>
}
/** A summary of information based on the results of executing a TestScript. */
export interface FhirTestReport_AssertOutput {
  /** A summary of information based on the results of executing a TestScript. */
  _detail?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  _message?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  _result?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  detail?: Readonly<t.OutputOf<typeof FhirString>>
  /** A summary of information based on the results of executing a TestScript. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A summary of information based on the results of executing a TestScript. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A summary of information based on the results of executing a TestScript. */
  message?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A summary of information based on the results of executing a TestScript. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A summary of information based on the results of executing a TestScript. */
  result?: Readonly<'pass' | 'skip' | 'fail' | 'warning' | 'error'>
}
