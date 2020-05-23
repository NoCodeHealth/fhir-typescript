import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirInstant } from './FhirInstant'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A slot of time on a schedule that may be available for booking appointments. */
export const FhirSlot: t.Type<FhirSlot, FhirSlotOutput> = t.recursion('FhirSlot', () =>
  t.intersection([
    t.type({
      /** A slot of time on a schedule that may be available for booking appointments. */
      resourceType: t.readonly(t.literal('Slot')),
      /** A slot of time on a schedule that may be available for booking appointments. */
      schedule: t.readonly(FhirReference),
    }),
    t.partial({
      /** A slot of time on a schedule that may be available for booking appointments. */
      _comment: t.readonly(FhirElement),
      /** A slot of time on a schedule that may be available for booking appointments. */
      _end: t.readonly(FhirElement),
      /** A slot of time on a schedule that may be available for booking appointments. */
      _implicitRules: t.readonly(FhirElement),
      /** A slot of time on a schedule that may be available for booking appointments. */
      _language: t.readonly(FhirElement),
      /** A slot of time on a schedule that may be available for booking appointments. */
      _overbooked: t.readonly(FhirElement),
      /** A slot of time on a schedule that may be available for booking appointments. */
      _start: t.readonly(FhirElement),
      /** A slot of time on a schedule that may be available for booking appointments. */
      _status: t.readonly(FhirElement),
      /** A slot of time on a schedule that may be available for booking appointments. */
      appointmentType: t.readonly(FhirCodeableConcept),
      /** A slot of time on a schedule that may be available for booking appointments. */
      comment: t.readonly(FhirString),
      /** A slot of time on a schedule that may be available for booking appointments. */
      contained: t.readonlyArray(FhirResourceList),
      /** A slot of time on a schedule that may be available for booking appointments. */
      end: t.readonly(FhirInstant),
      /** A slot of time on a schedule that may be available for booking appointments. */
      extension: t.readonlyArray(FhirExtension),
      /** A slot of time on a schedule that may be available for booking appointments. */
      id: t.readonly(FhirId),
      /** A slot of time on a schedule that may be available for booking appointments. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** A slot of time on a schedule that may be available for booking appointments. */
      implicitRules: t.readonly(FhirUri),
      /** A slot of time on a schedule that may be available for booking appointments. */
      language: t.readonly(FhirCode),
      /** A slot of time on a schedule that may be available for booking appointments. */
      meta: t.readonly(FhirMeta),
      /** A slot of time on a schedule that may be available for booking appointments. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A slot of time on a schedule that may be available for booking appointments. */
      overbooked: t.readonly(FhirBoolean),
      /** A slot of time on a schedule that may be available for booking appointments. */
      serviceCategory: t.readonlyArray(FhirCodeableConcept),
      /** A slot of time on a schedule that may be available for booking appointments. */
      serviceType: t.readonlyArray(FhirCodeableConcept),
      /** A slot of time on a schedule that may be available for booking appointments. */
      specialty: t.readonlyArray(FhirCodeableConcept),
      /** A slot of time on a schedule that may be available for booking appointments. */
      start: t.readonly(FhirInstant),
      /** A slot of time on a schedule that may be available for booking appointments. */
      status: t.readonly(
        t.keyof({
          busy: null,
          free: null,
          'busy-unavailable': null,
          'busy-tentative': null,
          'entered-in-error': null,
        })
      ),
      /** A slot of time on a schedule that may be available for booking appointments. */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** A slot of time on a schedule that may be available for booking appointments. */
export interface FhirSlot {
  /** A slot of time on a schedule that may be available for booking appointments. */
  _comment?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  _end?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  _overbooked?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  _start?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  appointmentType?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  comment?: Readonly<t.TypeOf<typeof FhirString>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  end?: Readonly<t.TypeOf<typeof FhirInstant>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  overbooked?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  resourceType: Readonly<'Slot'>
  /** A slot of time on a schedule that may be available for booking appointments. */
  schedule: Readonly<t.TypeOf<typeof FhirReference>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  serviceCategory?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  serviceType?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  specialty?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  start?: Readonly<t.TypeOf<typeof FhirInstant>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  status?: Readonly<'busy' | 'free' | 'busy-unavailable' | 'busy-tentative' | 'entered-in-error'>
  /** A slot of time on a schedule that may be available for booking appointments. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** A slot of time on a schedule that may be available for booking appointments. */
export interface FhirSlotOutput {
  /** A slot of time on a schedule that may be available for booking appointments. */
  _comment?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  _end?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  _overbooked?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  _start?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  appointmentType?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  comment?: Readonly<t.OutputOf<typeof FhirString>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  end?: Readonly<t.OutputOf<typeof FhirInstant>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  overbooked?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  resourceType: Readonly<'Slot'>
  /** A slot of time on a schedule that may be available for booking appointments. */
  schedule: Readonly<t.OutputOf<typeof FhirReference>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  serviceCategory?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  serviceType?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  specialty?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  start?: Readonly<t.OutputOf<typeof FhirInstant>>
  /** A slot of time on a schedule that may be available for booking appointments. */
  status?: Readonly<'busy' | 'free' | 'busy-unavailable' | 'busy-tentative' | 'entered-in-error'>
  /** A slot of time on a schedule that may be available for booking appointments. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
