import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirString } from './FhirString'

/** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
export const FhirMarketingStatus: t.Type<FhirMarketingStatus, FhirMarketingStatusOutput> = t.recursion(
  'FhirMarketingStatus',
  () =>
    t.intersection([
      t.type({
        /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
        country: t.readonly(FhirCodeableConcept),
        /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
        dateRange: t.readonly(FhirPeriod),
        /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
        status: t.readonly(FhirCodeableConcept),
      }),
      t.partial({
        /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
        _restoreDate: t.readonly(FhirElement),
        /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
        extension: t.readonlyArray(FhirExtension),
        /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
        id: t.readonly(FhirString),
        /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
        jurisdiction: t.readonly(FhirCodeableConcept),
        /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
        restoreDate: t.readonly(FhirDateTime),
      }),
    ])
)

/** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
export interface FhirMarketingStatus {
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  _restoreDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  country: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  dateRange: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  jurisdiction?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  restoreDate?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  status: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
export interface FhirMarketingStatusOutput {
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  _restoreDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  country: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  dateRange: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  jurisdiction?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  restoreDate?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
  status: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
