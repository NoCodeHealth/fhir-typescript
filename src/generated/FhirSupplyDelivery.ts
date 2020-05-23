import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirSupplyDelivery_SuppliedItem } from './FhirSupplyDelivery_SuppliedItem'
import { FhirTiming } from './FhirTiming'
import { FhirUri } from './FhirUri'

/** Record of delivery of what is supplied. */
export const FhirSupplyDelivery: t.Type<FhirSupplyDelivery, FhirSupplyDeliveryOutput> = t.recursion(
  'FhirSupplyDelivery',
  () =>
    t.intersection([
      t.type({
        /** Record of delivery of what is supplied. */
        resourceType: t.readonly(t.literal('SupplyDelivery')),
      }),
      t.partial({
        /** Record of delivery of what is supplied. */
        _implicitRules: t.readonly(FhirElement),
        /** Record of delivery of what is supplied. */
        _language: t.readonly(FhirElement),
        /** Record of delivery of what is supplied. */
        _occurrenceDateTime: t.readonly(FhirElement),
        /** Record of delivery of what is supplied. */
        _status: t.readonly(FhirElement),
        /** Record of delivery of what is supplied. */
        basedOn: t.readonlyArray(FhirReference),
        /** Record of delivery of what is supplied. */
        contained: t.readonlyArray(FhirResourceList),
        /** Record of delivery of what is supplied. */
        destination: t.readonly(FhirReference),
        /** Record of delivery of what is supplied. */
        extension: t.readonlyArray(FhirExtension),
        /** Record of delivery of what is supplied. */
        id: t.readonly(FhirId),
        /** Record of delivery of what is supplied. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** Record of delivery of what is supplied. */
        implicitRules: t.readonly(FhirUri),
        /** Record of delivery of what is supplied. */
        language: t.readonly(FhirCode),
        /** Record of delivery of what is supplied. */
        meta: t.readonly(FhirMeta),
        /** Record of delivery of what is supplied. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** Record of delivery of what is supplied. */
        occurrenceDateTime: t.readonly(t.string),
        /** Record of delivery of what is supplied. */
        occurrencePeriod: t.readonly(FhirPeriod),
        /** Record of delivery of what is supplied. */
        occurrenceTiming: t.readonly(FhirTiming),
        /** Record of delivery of what is supplied. */
        partOf: t.readonlyArray(FhirReference),
        /** Record of delivery of what is supplied. */
        patient: t.readonly(FhirReference),
        /** Record of delivery of what is supplied. */
        receiver: t.readonlyArray(FhirReference),
        /** Record of delivery of what is supplied. */
        status: t.readonly(
          t.keyof({
            'in-progress': null,
            completed: null,
            abandoned: null,
            'entered-in-error': null,
          })
        ),
        /** Record of delivery of what is supplied. */
        suppliedItem: t.readonly(FhirSupplyDelivery_SuppliedItem),
        /** Record of delivery of what is supplied. */
        supplier: t.readonly(FhirReference),
        /** Record of delivery of what is supplied. */
        text: t.readonly(FhirNarrative),
        /** Record of delivery of what is supplied. */
        type: t.readonly(FhirCodeableConcept),
      }),
    ])
)

/** Record of delivery of what is supplied. */
export interface FhirSupplyDelivery {
  /** Record of delivery of what is supplied. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Record of delivery of what is supplied. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Record of delivery of what is supplied. */
  _occurrenceDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Record of delivery of what is supplied. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Record of delivery of what is supplied. */
  basedOn?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Record of delivery of what is supplied. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Record of delivery of what is supplied. */
  destination?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Record of delivery of what is supplied. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Record of delivery of what is supplied. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Record of delivery of what is supplied. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Record of delivery of what is supplied. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Record of delivery of what is supplied. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Record of delivery of what is supplied. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Record of delivery of what is supplied. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Record of delivery of what is supplied. */
  occurrenceDateTime?: Readonly<string>
  /** Record of delivery of what is supplied. */
  occurrencePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Record of delivery of what is supplied. */
  occurrenceTiming?: Readonly<t.TypeOf<typeof FhirTiming>>
  /** Record of delivery of what is supplied. */
  partOf?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Record of delivery of what is supplied. */
  patient?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Record of delivery of what is supplied. */
  receiver?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Record of delivery of what is supplied. */
  resourceType: Readonly<'SupplyDelivery'>
  /** Record of delivery of what is supplied. */
  status?: Readonly<'in-progress' | 'completed' | 'abandoned' | 'entered-in-error'>
  /** Record of delivery of what is supplied. */
  suppliedItem?: Readonly<t.TypeOf<typeof FhirSupplyDelivery_SuppliedItem>>
  /** Record of delivery of what is supplied. */
  supplier?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Record of delivery of what is supplied. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** Record of delivery of what is supplied. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Record of delivery of what is supplied. */
export interface FhirSupplyDeliveryOutput {
  /** Record of delivery of what is supplied. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Record of delivery of what is supplied. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Record of delivery of what is supplied. */
  _occurrenceDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Record of delivery of what is supplied. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Record of delivery of what is supplied. */
  basedOn?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Record of delivery of what is supplied. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Record of delivery of what is supplied. */
  destination?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Record of delivery of what is supplied. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Record of delivery of what is supplied. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Record of delivery of what is supplied. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Record of delivery of what is supplied. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Record of delivery of what is supplied. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Record of delivery of what is supplied. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Record of delivery of what is supplied. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Record of delivery of what is supplied. */
  occurrenceDateTime?: Readonly<string>
  /** Record of delivery of what is supplied. */
  occurrencePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Record of delivery of what is supplied. */
  occurrenceTiming?: Readonly<t.OutputOf<typeof FhirTiming>>
  /** Record of delivery of what is supplied. */
  partOf?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Record of delivery of what is supplied. */
  patient?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Record of delivery of what is supplied. */
  receiver?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Record of delivery of what is supplied. */
  resourceType: Readonly<'SupplyDelivery'>
  /** Record of delivery of what is supplied. */
  status?: Readonly<'in-progress' | 'completed' | 'abandoned' | 'entered-in-error'>
  /** Record of delivery of what is supplied. */
  suppliedItem?: Readonly<t.OutputOf<typeof FhirSupplyDelivery_SuppliedItem>>
  /** Record of delivery of what is supplied. */
  supplier?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Record of delivery of what is supplied. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** Record of delivery of what is supplied. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
