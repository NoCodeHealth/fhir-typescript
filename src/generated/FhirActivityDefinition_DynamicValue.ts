import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExpression } from './FhirExpression'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
export const FhirActivityDefinition_DynamicValue: t.Type<
  FhirActivityDefinition_DynamicValue,
  FhirActivityDefinition_DynamicValueOutput
> = t.recursion('FhirActivityDefinition_DynamicValue', () =>
  t.intersection([
    t.type({
      /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
      expression: t.readonly(FhirExpression),
    }),
    t.partial({
      /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
      _path: t.readonly(FhirElement),
      /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
      extension: t.readonlyArray(FhirExtension),
      /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
      id: t.readonly(FhirString),
      /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
      path: t.readonly(FhirString),
    }),
  ])
)

/** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
export interface FhirActivityDefinition_DynamicValue {
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _path?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  expression: Readonly<t.TypeOf<typeof FhirExpression>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  path?: Readonly<t.TypeOf<typeof FhirString>>
}
/** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
export interface FhirActivityDefinition_DynamicValueOutput {
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  _path?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  expression: Readonly<t.OutputOf<typeof FhirExpression>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
  path?: Readonly<t.OutputOf<typeof FhirString>>
}
