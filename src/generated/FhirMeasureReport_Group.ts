import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirMeasureReport_Population } from './FhirMeasureReport_Population'
import { FhirMeasureReport_Stratifier } from './FhirMeasureReport_Stratifier'
import { FhirQuantity } from './FhirQuantity'
import { FhirString } from './FhirString'

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export const FhirMeasureReport_Group: t.Type<FhirMeasureReport_Group, FhirMeasureReport_GroupOutput> = t.recursion(
  'FhirMeasureReport_Group',
  () =>
    t.partial({
      /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
      code: t.readonly(FhirCodeableConcept),
      /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
      extension: t.readonlyArray(FhirExtension),
      /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
      id: t.readonly(FhirString),
      /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
      measureScore: t.readonly(FhirQuantity),
      /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
      population: t.readonlyArray(FhirMeasureReport_Population),
      /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
      stratifier: t.readonlyArray(FhirMeasureReport_Stratifier),
    })
)

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export interface FhirMeasureReport_Group {
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  code?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  measureScore?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  population?: ReadonlyArray<t.TypeOf<typeof FhirMeasureReport_Population>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  stratifier?: ReadonlyArray<t.TypeOf<typeof FhirMeasureReport_Stratifier>>
}
/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export interface FhirMeasureReport_GroupOutput {
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  code?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  measureScore?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  population?: ReadonlyArray<t.OutputOf<typeof FhirMeasureReport_Population>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  stratifier?: ReadonlyArray<t.OutputOf<typeof FhirMeasureReport_Stratifier>>
}
