import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDuration } from './FhirDuration'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirQuantity } from './FhirQuantity'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A sample to be used for analysis. */
export const FhirSpecimen_Collection: t.Type<FhirSpecimen_Collection, FhirSpecimen_CollectionOutput> = t.recursion(
  'FhirSpecimen_Collection',
  () =>
    t.partial({
      /** A sample to be used for analysis. */
      _collectedDateTime: t.readonly(FhirElement),
      /** A sample to be used for analysis. */
      bodySite: t.readonly(FhirCodeableConcept),
      /** A sample to be used for analysis. */
      collectedDateTime: t.readonly(t.string),
      /** A sample to be used for analysis. */
      collectedPeriod: t.readonly(FhirPeriod),
      /** A sample to be used for analysis. */
      collector: t.readonly(FhirReference),
      /** A sample to be used for analysis. */
      duration: t.readonly(FhirDuration),
      /** A sample to be used for analysis. */
      extension: t.readonlyArray(FhirExtension),
      /** A sample to be used for analysis. */
      fastingStatusCodeableConcept: t.readonly(FhirCodeableConcept),
      /** A sample to be used for analysis. */
      fastingStatusDuration: t.readonly(FhirDuration),
      /** A sample to be used for analysis. */
      id: t.readonly(FhirString),
      /** A sample to be used for analysis. */
      method: t.readonly(FhirCodeableConcept),
      /** A sample to be used for analysis. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A sample to be used for analysis. */
      quantity: t.readonly(FhirQuantity),
    })
)

/** A sample to be used for analysis. */
export interface FhirSpecimen_Collection {
  /** A sample to be used for analysis. */
  _collectedDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A sample to be used for analysis. */
  bodySite?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A sample to be used for analysis. */
  collectedDateTime?: Readonly<string>
  /** A sample to be used for analysis. */
  collectedPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A sample to be used for analysis. */
  collector?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A sample to be used for analysis. */
  duration?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** A sample to be used for analysis. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A sample to be used for analysis. */
  fastingStatusCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A sample to be used for analysis. */
  fastingStatusDuration?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** A sample to be used for analysis. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A sample to be used for analysis. */
  method?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A sample to be used for analysis. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A sample to be used for analysis. */
  quantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
}
/** A sample to be used for analysis. */
export interface FhirSpecimen_CollectionOutput {
  /** A sample to be used for analysis. */
  _collectedDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A sample to be used for analysis. */
  bodySite?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A sample to be used for analysis. */
  collectedDateTime?: Readonly<string>
  /** A sample to be used for analysis. */
  collectedPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A sample to be used for analysis. */
  collector?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A sample to be used for analysis. */
  duration?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** A sample to be used for analysis. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A sample to be used for analysis. */
  fastingStatusCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A sample to be used for analysis. */
  fastingStatusDuration?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** A sample to be used for analysis. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A sample to be used for analysis. */
  method?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A sample to be used for analysis. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A sample to be used for analysis. */
  quantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
}
