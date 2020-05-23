import * as t from 'io-ts'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirTestReport_Action2 } from './FhirTestReport_Action2'

/** A summary of information based on the results of executing a TestScript. */
export const FhirTestReport_Teardown: t.Type<FhirTestReport_Teardown, FhirTestReport_TeardownOutput> = t.recursion(
  'FhirTestReport_Teardown',
  () =>
    t.intersection([
      t.type({
        /** A summary of information based on the results of executing a TestScript. */
        action: t.readonlyArray(FhirTestReport_Action2),
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
export interface FhirTestReport_Teardown {
  /** A summary of information based on the results of executing a TestScript. */
  action: ReadonlyArray<t.TypeOf<typeof FhirTestReport_Action2>>
  /** A summary of information based on the results of executing a TestScript. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A summary of information based on the results of executing a TestScript. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A summary of information based on the results of executing a TestScript. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** A summary of information based on the results of executing a TestScript. */
export interface FhirTestReport_TeardownOutput {
  /** A summary of information based on the results of executing a TestScript. */
  action: ReadonlyArray<t.OutputOf<typeof FhirTestReport_Action2>>
  /** A summary of information based on the results of executing a TestScript. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A summary of information based on the results of executing a TestScript. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A summary of information based on the results of executing a TestScript. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
