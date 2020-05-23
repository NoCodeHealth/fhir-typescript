import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCanonical } from './FhirCanonical'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirQuantity } from './FhirQuantity'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'
import { FhirTiming } from './FhirTiming'
import { FhirUri } from './FhirUri'

/** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
export const FhirCarePlan_Detail: t.Type<FhirCarePlan_Detail, FhirCarePlan_DetailOutput> = t.recursion(
  'FhirCarePlan_Detail',
  () =>
    t.partial({
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      _description: t.readonly(FhirElement),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      _doNotPerform: t.readonly(FhirElement),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      _instantiatesUri: t.readonlyArray(FhirElement),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      _kind: t.readonly(FhirElement),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      _scheduledString: t.readonly(FhirElement),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      _status: t.readonly(FhirElement),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      code: t.readonly(FhirCodeableConcept),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      dailyAmount: t.readonly(FhirQuantity),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      description: t.readonly(FhirString),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      doNotPerform: t.readonly(FhirBoolean),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      extension: t.readonlyArray(FhirExtension),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      goal: t.readonlyArray(FhirReference),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      id: t.readonly(FhirString),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      instantiatesCanonical: t.readonlyArray(FhirCanonical),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      instantiatesUri: t.readonlyArray(FhirUri),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      kind: t.readonly(FhirCode),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      location: t.readonly(FhirReference),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      performer: t.readonlyArray(FhirReference),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      productCodeableConcept: t.readonly(FhirCodeableConcept),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      productReference: t.readonly(FhirReference),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      quantity: t.readonly(FhirQuantity),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      reasonCode: t.readonlyArray(FhirCodeableConcept),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      reasonReference: t.readonlyArray(FhirReference),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      scheduledPeriod: t.readonly(FhirPeriod),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      scheduledString: t.readonly(t.string),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      scheduledTiming: t.readonly(FhirTiming),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      status: t.readonly(
        t.keyof({
          'not-started': null,
          scheduled: null,
          'in-progress': null,
          'on-hold': null,
          completed: null,
          cancelled: null,
          stopped: null,
          unknown: null,
          'entered-in-error': null,
        })
      ),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      statusReason: t.readonly(FhirCodeableConcept),
    })
)

/** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
export interface FhirCarePlan_Detail {
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _doNotPerform?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _instantiatesUri?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _kind?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _scheduledString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  code?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  dailyAmount?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  doNotPerform?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  goal?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  instantiatesCanonical?: ReadonlyArray<t.TypeOf<typeof FhirCanonical>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  instantiatesUri?: ReadonlyArray<t.TypeOf<typeof FhirUri>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  kind?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  location?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  performer?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  productCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  productReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  quantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  reasonCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  reasonReference?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  scheduledPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  scheduledString?: Readonly<string>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  scheduledTiming?: Readonly<t.TypeOf<typeof FhirTiming>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  status?: Readonly<
    | 'not-started'
    | 'scheduled'
    | 'in-progress'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'stopped'
    | 'unknown'
    | 'entered-in-error'
  >
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  statusReason?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
export interface FhirCarePlan_DetailOutput {
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _doNotPerform?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _instantiatesUri?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _kind?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _scheduledString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  code?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  dailyAmount?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  doNotPerform?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  goal?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  instantiatesCanonical?: ReadonlyArray<t.OutputOf<typeof FhirCanonical>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  instantiatesUri?: ReadonlyArray<t.OutputOf<typeof FhirUri>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  kind?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  location?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  performer?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  productCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  productReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  quantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  reasonCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  reasonReference?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  scheduledPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  scheduledString?: Readonly<string>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  scheduledTiming?: Readonly<t.OutputOf<typeof FhirTiming>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  status?: Readonly<
    | 'not-started'
    | 'scheduled'
    | 'in-progress'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'stopped'
    | 'unknown'
    | 'entered-in-error'
  >
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  statusReason?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
