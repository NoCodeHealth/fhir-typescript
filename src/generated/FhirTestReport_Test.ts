import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirTestReport_Action1 } from './FhirTestReport_Action1'

/** A summary of information based on the results of executing a TestScript. */
export const FhirTestReport_Test: t.Type<FhirTestReport_Test, FhirTestReport_TestOutput> = t.recursion(
  'FhirTestReport_Test',
  () =>
    t.intersection([
      t.type({
        /** A summary of information based on the results of executing a TestScript. */
        action: t.readonlyArray(FhirTestReport_Action1),
      }),
      t.partial({
        /** A summary of information based on the results of executing a TestScript. */
        _description: t.readonly(FhirElement),
        /** A summary of information based on the results of executing a TestScript. */
        _name: t.readonly(FhirElement),
        /** A summary of information based on the results of executing a TestScript. */
        description: t.readonly(FhirString),
        /** A summary of information based on the results of executing a TestScript. */
        extension: t.readonlyArray(FhirExtension),
        /** A summary of information based on the results of executing a TestScript. */
        id: t.readonly(FhirString),
        /** A summary of information based on the results of executing a TestScript. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A summary of information based on the results of executing a TestScript. */
        name: t.readonly(FhirString),
      }),
    ])
)

/** A summary of information based on the results of executing a TestScript. */
export interface FhirTestReport_Test {
  /** A summary of information based on the results of executing a TestScript. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  action: ReadonlyArray<t.TypeOf<typeof FhirTestReport_Action1>>
  /** A summary of information based on the results of executing a TestScript. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** A summary of information based on the results of executing a TestScript. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A summary of information based on the results of executing a TestScript. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A summary of information based on the results of executing a TestScript. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A summary of information based on the results of executing a TestScript. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
}
/** A summary of information based on the results of executing a TestScript. */
export interface FhirTestReport_TestOutput {
  /** A summary of information based on the results of executing a TestScript. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  action: ReadonlyArray<t.OutputOf<typeof FhirTestReport_Action1>>
  /** A summary of information based on the results of executing a TestScript. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** A summary of information based on the results of executing a TestScript. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A summary of information based on the results of executing a TestScript. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A summary of information based on the results of executing a TestScript. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A summary of information based on the results of executing a TestScript. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
}
