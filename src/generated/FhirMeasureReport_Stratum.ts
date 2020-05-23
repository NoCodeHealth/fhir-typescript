import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirMeasureReport_Component } from './FhirMeasureReport_Component'
import { FhirMeasureReport_Population1 } from './FhirMeasureReport_Population1'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export const FhirMeasureReport_Stratum: t.Type<
  FhirMeasureReport_Stratum,
  FhirMeasureReport_StratumOutput
> = t.recursion('FhirMeasureReport_Stratum', () =>
  t.partial({
    /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
    component: t.readonlyArray(FhirMeasureReport_Component),
    /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
    extension: t.readonlyArray(FhirExtension),
    /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
    id: t.readonly(FhirString),
    /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
    measureScore: t.readonly(FhirQuantity),
    /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
    population: t.readonlyArray(FhirMeasureReport_Population1),
    /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
    value: t.readonly(FhirCodeableConcept),
  })
)

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export interface FhirMeasureReport_Stratum {
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  component?: ReadonlyArray<t.TypeOf<typeof FhirMeasureReport_Component>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  measureScore?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  population?: ReadonlyArray<t.TypeOf<typeof FhirMeasureReport_Population1>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  value?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export interface FhirMeasureReport_StratumOutput {
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  component?: ReadonlyArray<t.OutputOf<typeof FhirMeasureReport_Component>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  measureScore?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  population?: ReadonlyArray<t.OutputOf<typeof FhirMeasureReport_Population1>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  value?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
