import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirMeasure_Population } from './FhirMeasure_Population'
import { FhirMeasure_Stratifier } from './FhirMeasure_Stratifier'
import { FhirString } from './FhirString'

/** The Measure resource provides the definition of a quality measure. */
export const FhirMeasure_Group: t.Type<FhirMeasure_Group, FhirMeasure_GroupOutput> = t.recursion(
  'FhirMeasure_Group',
  () =>
    t.partial({
      /** The Measure resource provides the definition of a quality measure. */
      _description: t.readonly(FhirElement),
      /** The Measure resource provides the definition of a quality measure. */
      code: t.readonly(FhirCodeableConcept),
      /** The Measure resource provides the definition of a quality measure. */
      description: t.readonly(FhirString),
      /** The Measure resource provides the definition of a quality measure. */
      extension: t.readonlyArray(FhirExtension),
      /** The Measure resource provides the definition of a quality measure. */
      id: t.readonly(FhirString),
      /** The Measure resource provides the definition of a quality measure. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** The Measure resource provides the definition of a quality measure. */
      population: t.readonlyArray(FhirMeasure_Population),
      /** The Measure resource provides the definition of a quality measure. */
      stratifier: t.readonlyArray(FhirMeasure_Stratifier),
    })
)

/** The Measure resource provides the definition of a quality measure. */
export interface FhirMeasure_Group {
  /** The Measure resource provides the definition of a quality measure. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  code?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The Measure resource provides the definition of a quality measure. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** The Measure resource provides the definition of a quality measure. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The Measure resource provides the definition of a quality measure. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The Measure resource provides the definition of a quality measure. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The Measure resource provides the definition of a quality measure. */
  population?: ReadonlyArray<t.TypeOf<typeof FhirMeasure_Population>>
  /** The Measure resource provides the definition of a quality measure. */
  stratifier?: ReadonlyArray<t.TypeOf<typeof FhirMeasure_Stratifier>>
}
/** The Measure resource provides the definition of a quality measure. */
export interface FhirMeasure_GroupOutput {
  /** The Measure resource provides the definition of a quality measure. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  code?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The Measure resource provides the definition of a quality measure. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** The Measure resource provides the definition of a quality measure. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The Measure resource provides the definition of a quality measure. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The Measure resource provides the definition of a quality measure. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The Measure resource provides the definition of a quality measure. */
  population?: ReadonlyArray<t.OutputOf<typeof FhirMeasure_Population>>
  /** The Measure resource provides the definition of a quality measure. */
  stratifier?: ReadonlyArray<t.OutputOf<typeof FhirMeasure_Stratifier>>
}
