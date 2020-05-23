import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirMeasureReport_Stratum } from './FhirMeasureReport_Stratum'
import { FhirString } from './FhirString'

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export const FhirMeasureReport_Stratifier: t.Type<
  FhirMeasureReport_Stratifier,
  FhirMeasureReport_StratifierOutput
> = t.recursion('FhirMeasureReport_Stratifier', () =>
  t.partial({
    /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
    code: t.readonlyArray(FhirCodeableConcept),
    /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
    extension: t.readonlyArray(FhirExtension),
    /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
    id: t.readonly(FhirString),
    /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
    stratum: t.readonlyArray(FhirMeasureReport_Stratum),
  })
)

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export interface FhirMeasureReport_Stratifier {
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  code?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  stratum?: ReadonlyArray<t.TypeOf<typeof FhirMeasureReport_Stratum>>
}
/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export interface FhirMeasureReport_StratifierOutput {
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  code?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  stratum?: ReadonlyArray<t.OutputOf<typeof FhirMeasureReport_Stratum>>
}
