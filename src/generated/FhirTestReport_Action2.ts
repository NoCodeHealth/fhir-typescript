import * as t from 'io-ts'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirTestReport_Operation } from './FhirTestReport_Operation'

/** A summary of information based on the results of executing a TestScript. */
export const FhirTestReport_Action2: t.Type<FhirTestReport_Action2, FhirTestReport_Action2Output> = t.recursion(
  'FhirTestReport_Action2',
  () =>
    t.intersection([
      t.type({
        /** A summary of information based on the results of executing a TestScript. */
        operation: t.readonly(FhirTestReport_Operation),
      }),
      t.partial({
        /** A summary of information based on the results of executing a TestScript. */
        extension: t.readonlyArray(FhirExtension),
        /** A summary of information based on the results of executing a TestScript. */
        id: t.readonly(FhirString),
        /** A summary of information based on the results of executing a TestScript. */
        modifierExtension: t.readonlyArray(FhirExtension),
      }),
    ])
)

/** A summary of information based on the results of executing a TestScript. */
export interface FhirTestReport_Action2 {
  /** A summary of information based on the results of executing a TestScript. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A summary of information based on the results of executing a TestScript. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A summary of information based on the results of executing a TestScript. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A summary of information based on the results of executing a TestScript. */
  operation: Readonly<t.TypeOf<typeof FhirTestReport_Operation>>
}
/** A summary of information based on the results of executing a TestScript. */
export interface FhirTestReport_Action2Output {
  /** A summary of information based on the results of executing a TestScript. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A summary of information based on the results of executing a TestScript. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A summary of information based on the results of executing a TestScript. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A summary of information based on the results of executing a TestScript. */
  operation: Readonly<t.OutputOf<typeof FhirTestReport_Operation>>
}
