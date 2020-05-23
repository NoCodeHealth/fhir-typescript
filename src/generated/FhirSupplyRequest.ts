import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirQuantity } from './FhirQuantity'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirSupplyRequest_Parameter } from './FhirSupplyRequest_Parameter'
import { FhirTiming } from './FhirTiming'
import { FhirUri } from './FhirUri'

/** A record of a request for a medication, substance or device used in the healthcare setting. */
export const FhirSupplyRequest: t.Type<FhirSupplyRequest, FhirSupplyRequestOutput> = t.recursion(
  'FhirSupplyRequest',
  () =>
    t.intersection([
      t.type({
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        quantity: t.readonly(FhirQuantity),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        resourceType: t.readonly(t.literal('SupplyRequest')),
      }),
      t.partial({
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        _authoredOn: t.readonly(FhirElement),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        _implicitRules: t.readonly(FhirElement),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        _language: t.readonly(FhirElement),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        _occurrenceDateTime: t.readonly(FhirElement),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        _priority: t.readonly(FhirElement),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        _status: t.readonly(FhirElement),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        authoredOn: t.readonly(FhirDateTime),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        category: t.readonly(FhirCodeableConcept),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        contained: t.readonlyArray(FhirResourceList),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        deliverFrom: t.readonly(FhirReference),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        deliverTo: t.readonly(FhirReference),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        extension: t.readonlyArray(FhirExtension),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        id: t.readonly(FhirId),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        implicitRules: t.readonly(FhirUri),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        itemCodeableConcept: t.readonly(FhirCodeableConcept),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        itemReference: t.readonly(FhirReference),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        language: t.readonly(FhirCode),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        meta: t.readonly(FhirMeta),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        occurrenceDateTime: t.readonly(t.string),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        occurrencePeriod: t.readonly(FhirPeriod),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        occurrenceTiming: t.readonly(FhirTiming),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        parameter: t.readonlyArray(FhirSupplyRequest_Parameter),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        priority: t.readonly(FhirCode),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        reasonCode: t.readonlyArray(FhirCodeableConcept),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        reasonReference: t.readonlyArray(FhirReference),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        requester: t.readonly(FhirReference),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        status: t.readonly(
          t.keyof({
            draft: null,
            active: null,
            suspended: null,
            cancelled: null,
            completed: null,
            'entered-in-error': null,
            unknown: null,
          })
        ),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        supplier: t.readonlyArray(FhirReference),
        /** A record of a request for a medication, substance or device used in the healthcare setting. */
        text: t.readonly(FhirNarrative),
      }),
    ])
)

/** A record of a request for a medication, substance or device used in the healthcare setting. */
export interface FhirSupplyRequest {
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  _authoredOn?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  _occurrenceDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  _priority?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  authoredOn?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  category?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  deliverFrom?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  deliverTo?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  itemCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  itemReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  occurrenceDateTime?: Readonly<string>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  occurrencePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  occurrenceTiming?: Readonly<t.TypeOf<typeof FhirTiming>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  parameter?: ReadonlyArray<t.TypeOf<typeof FhirSupplyRequest_Parameter>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  priority?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  quantity: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  reasonCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  reasonReference?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  requester?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  resourceType: Readonly<'SupplyRequest'>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  status?: Readonly<'draft' | 'active' | 'suspended' | 'cancelled' | 'completed' | 'entered-in-error' | 'unknown'>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  supplier?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** A record of a request for a medication, substance or device used in the healthcare setting. */
export interface FhirSupplyRequestOutput {
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  _authoredOn?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  _occurrenceDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  _priority?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  authoredOn?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  category?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  deliverFrom?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  deliverTo?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  itemCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  itemReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  occurrenceDateTime?: Readonly<string>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  occurrencePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  occurrenceTiming?: Readonly<t.OutputOf<typeof FhirTiming>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  parameter?: ReadonlyArray<t.OutputOf<typeof FhirSupplyRequest_Parameter>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  priority?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  quantity: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  reasonCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  reasonReference?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  requester?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  resourceType: Readonly<'SupplyRequest'>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  status?: Readonly<'draft' | 'active' | 'suspended' | 'cancelled' | 'completed' | 'entered-in-error' | 'unknown'>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  supplier?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A record of a request for a medication, substance or device used in the healthcare setting. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
