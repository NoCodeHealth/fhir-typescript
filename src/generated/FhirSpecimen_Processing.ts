import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A sample to be used for analysis. */
export const FhirSpecimen_Processing: t.Type<FhirSpecimen_Processing, FhirSpecimen_ProcessingOutput> = t.recursion(
  'FhirSpecimen_Processing',
  () =>
    t.partial({
      /** A sample to be used for analysis. */
      _description: t.readonly(FhirElement),
      /** A sample to be used for analysis. */
      _timeDateTime: t.readonly(FhirElement),
      /** A sample to be used for analysis. */
      additive: t.readonlyArray(FhirReference),
      /** A sample to be used for analysis. */
      description: t.readonly(FhirString),
      /** A sample to be used for analysis. */
      extension: t.readonlyArray(FhirExtension),
      /** A sample to be used for analysis. */
      id: t.readonly(FhirString),
      /** A sample to be used for analysis. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A sample to be used for analysis. */
      procedure: t.readonly(FhirCodeableConcept),
      /** A sample to be used for analysis. */
      timeDateTime: t.readonly(t.string),
      /** A sample to be used for analysis. */
      timePeriod: t.readonly(FhirPeriod),
    })
)

/** A sample to be used for analysis. */
export interface FhirSpecimen_Processing {
  /** A sample to be used for analysis. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A sample to be used for analysis. */
  _timeDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A sample to be used for analysis. */
  additive?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A sample to be used for analysis. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** A sample to be used for analysis. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A sample to be used for analysis. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A sample to be used for analysis. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A sample to be used for analysis. */
  procedure?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A sample to be used for analysis. */
  timeDateTime?: Readonly<string>
  /** A sample to be used for analysis. */
  timePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
}
/** A sample to be used for analysis. */
export interface FhirSpecimen_ProcessingOutput {
  /** A sample to be used for analysis. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A sample to be used for analysis. */
  _timeDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A sample to be used for analysis. */
  additive?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A sample to be used for analysis. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** A sample to be used for analysis. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A sample to be used for analysis. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A sample to be used for analysis. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A sample to be used for analysis. */
  procedure?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A sample to be used for analysis. */
  timeDateTime?: Readonly<string>
  /** A sample to be used for analysis. */
  timePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
}
