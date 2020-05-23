import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export const FhirMeasureReport_Component: t.Type<
  FhirMeasureReport_Component,
  FhirMeasureReport_ComponentOutput
> = t.recursion('FhirMeasureReport_Component', () =>
  t.intersection([
    t.type({
      /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
      code: t.readonly(FhirCodeableConcept),
      /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
      value: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
      extension: t.readonlyArray(FhirExtension),
      /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
      id: t.readonly(FhirString),
      /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
      modifierExtension: t.readonlyArray(FhirExtension),
    }),
  ])
)

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export interface FhirMeasureReport_Component {
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  code: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  value: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export interface FhirMeasureReport_ComponentOutput {
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  code: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  value: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
