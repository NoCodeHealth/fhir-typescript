import * as t from 'io-ts'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirTestReport_Action } from './FhirTestReport_Action'

/** A summary of information based on the results of executing a TestScript. */
export const FhirTestReport_Setup: t.Type<FhirTestReport_Setup, FhirTestReport_SetupOutput> = t.recursion(
  'FhirTestReport_Setup',
  () =>
    t.intersection([
      t.type({
        /** A summary of information based on the results of executing a TestScript. */
        action: t.readonlyArray(FhirTestReport_Action),
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
export interface FhirTestReport_Setup {
  /** A summary of information based on the results of executing a TestScript. */
  action: ReadonlyArray<t.TypeOf<typeof FhirTestReport_Action>>
  /** A summary of information based on the results of executing a TestScript. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A summary of information based on the results of executing a TestScript. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A summary of information based on the results of executing a TestScript. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** A summary of information based on the results of executing a TestScript. */
export interface FhirTestReport_SetupOutput {
  /** A summary of information based on the results of executing a TestScript. */
  action: ReadonlyArray<t.OutputOf<typeof FhirTestReport_Action>>
  /** A summary of information based on the results of executing a TestScript. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A summary of information based on the results of executing a TestScript. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A summary of information based on the results of executing a TestScript. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
