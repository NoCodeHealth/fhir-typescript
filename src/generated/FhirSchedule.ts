import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
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
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A container for slots of time that may be available for booking appointments. */
export const FhirSchedule: t.Type<FhirSchedule, FhirScheduleOutput> = t.recursion('FhirSchedule', () =>
  t.intersection([
    t.type({
      /** A container for slots of time that may be available for booking appointments. */
      actor: t.readonlyArray(FhirReference),
      /** A container for slots of time that may be available for booking appointments. */
      resourceType: t.readonly(t.literal('Schedule')),
    }),
    t.partial({
      /** A container for slots of time that may be available for booking appointments. */
      _active: t.readonly(FhirElement),
      /** A container for slots of time that may be available for booking appointments. */
      _comment: t.readonly(FhirElement),
      /** A container for slots of time that may be available for booking appointments. */
      _implicitRules: t.readonly(FhirElement),
      /** A container for slots of time that may be available for booking appointments. */
      _language: t.readonly(FhirElement),
      /** A container for slots of time that may be available for booking appointments. */
      active: t.readonly(FhirBoolean),
      /** A container for slots of time that may be available for booking appointments. */
      comment: t.readonly(FhirString),
      /** A container for slots of time that may be available for booking appointments. */
      contained: t.readonlyArray(FhirResourceList),
      /** A container for slots of time that may be available for booking appointments. */
      extension: t.readonlyArray(FhirExtension),
      /** A container for slots of time that may be available for booking appointments. */
      id: t.readonly(FhirId),
      /** A container for slots of time that may be available for booking appointments. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** A container for slots of time that may be available for booking appointments. */
      implicitRules: t.readonly(FhirUri),
      /** A container for slots of time that may be available for booking appointments. */
      language: t.readonly(FhirCode),
      /** A container for slots of time that may be available for booking appointments. */
      meta: t.readonly(FhirMeta),
      /** A container for slots of time that may be available for booking appointments. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A container for slots of time that may be available for booking appointments. */
      planningHorizon: t.readonly(FhirPeriod),
      /** A container for slots of time that may be available for booking appointments. */
      serviceCategory: t.readonlyArray(FhirCodeableConcept),
      /** A container for slots of time that may be available for booking appointments. */
      serviceType: t.readonlyArray(FhirCodeableConcept),
      /** A container for slots of time that may be available for booking appointments. */
      specialty: t.readonlyArray(FhirCodeableConcept),
      /** A container for slots of time that may be available for booking appointments. */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** A container for slots of time that may be available for booking appointments. */
export interface FhirSchedule {
  /** A container for slots of time that may be available for booking appointments. */
  _active?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A container for slots of time that may be available for booking appointments. */
  _comment?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A container for slots of time that may be available for booking appointments. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A container for slots of time that may be available for booking appointments. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A container for slots of time that may be available for booking appointments. */
  active?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A container for slots of time that may be available for booking appointments. */
  actor: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A container for slots of time that may be available for booking appointments. */
  comment?: Readonly<t.TypeOf<typeof FhirString>>
  /** A container for slots of time that may be available for booking appointments. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A container for slots of time that may be available for booking appointments. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A container for slots of time that may be available for booking appointments. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A container for slots of time that may be available for booking appointments. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A container for slots of time that may be available for booking appointments. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A container for slots of time that may be available for booking appointments. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A container for slots of time that may be available for booking appointments. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A container for slots of time that may be available for booking appointments. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A container for slots of time that may be available for booking appointments. */
  planningHorizon?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A container for slots of time that may be available for booking appointments. */
  resourceType: Readonly<'Schedule'>
  /** A container for slots of time that may be available for booking appointments. */
  serviceCategory?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A container for slots of time that may be available for booking appointments. */
  serviceType?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A container for slots of time that may be available for booking appointments. */
  specialty?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A container for slots of time that may be available for booking appointments. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** A container for slots of time that may be available for booking appointments. */
export interface FhirScheduleOutput {
  /** A container for slots of time that may be available for booking appointments. */
  _active?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A container for slots of time that may be available for booking appointments. */
  _comment?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A container for slots of time that may be available for booking appointments. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A container for slots of time that may be available for booking appointments. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A container for slots of time that may be available for booking appointments. */
  active?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A container for slots of time that may be available for booking appointments. */
  actor: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A container for slots of time that may be available for booking appointments. */
  comment?: Readonly<t.OutputOf<typeof FhirString>>
  /** A container for slots of time that may be available for booking appointments. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A container for slots of time that may be available for booking appointments. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A container for slots of time that may be available for booking appointments. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A container for slots of time that may be available for booking appointments. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A container for slots of time that may be available for booking appointments. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A container for slots of time that may be available for booking appointments. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A container for slots of time that may be available for booking appointments. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A container for slots of time that may be available for booking appointments. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A container for slots of time that may be available for booking appointments. */
  planningHorizon?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A container for slots of time that may be available for booking appointments. */
  resourceType: Readonly<'Schedule'>
  /** A container for slots of time that may be available for booking appointments. */
  serviceCategory?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A container for slots of time that may be available for booking appointments. */
  serviceType?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A container for slots of time that may be available for booking appointments. */
  specialty?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A container for slots of time that may be available for booking appointments. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
