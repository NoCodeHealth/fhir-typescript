import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirInteger } from './FhirInteger'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export const FhirMeasureReport_Population: t.Type<
  FhirMeasureReport_Population,
  FhirMeasureReport_PopulationOutput
> = t.recursion('FhirMeasureReport_Population', () =>
  t.partial({
    /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
    _count: t.readonly(FhirElement),
    /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
    code: t.readonly(FhirCodeableConcept),
    /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
    count: t.readonly(FhirInteger),
    /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
    extension: t.readonlyArray(FhirExtension),
    /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
    id: t.readonly(FhirString),
    /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
    subjectResults: t.readonly(FhirReference),
  })
)

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export interface FhirMeasureReport_Population {
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  _count?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  code?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  count?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  subjectResults?: Readonly<t.TypeOf<typeof FhirReference>>
}
/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export interface FhirMeasureReport_PopulationOutput {
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  _count?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  code?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  count?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
  subjectResults?: Readonly<t.OutputOf<typeof FhirReference>>
}
