import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirTime } from './FhirTime'

/** The details of a healthcare service available at a location. */
export const FhirHealthcareService_AvailableTime: t.Type<
  FhirHealthcareService_AvailableTime,
  FhirHealthcareService_AvailableTimeOutput
> = t.recursion('FhirHealthcareService_AvailableTime', () =>
  t.partial({
    /** The details of a healthcare service available at a location. */
    _allDay: t.readonly(FhirElement),
    /** The details of a healthcare service available at a location. */
    _availableEndTime: t.readonly(FhirElement),
    /** The details of a healthcare service available at a location. */
    _availableStartTime: t.readonly(FhirElement),
    /** The details of a healthcare service available at a location. */
    _daysOfWeek: t.readonlyArray(FhirElement),
    /** The details of a healthcare service available at a location. */
    allDay: t.readonly(FhirBoolean),
    /** The details of a healthcare service available at a location. */
    availableEndTime: t.readonly(FhirTime),
    /** The details of a healthcare service available at a location. */
    availableStartTime: t.readonly(FhirTime),
    /** The details of a healthcare service available at a location. */
    daysOfWeek: t.readonlyArray(
      t.keyof({
        mon: null,
        tue: null,
        wed: null,
        thu: null,
        fri: null,
        sat: null,
        sun: null,
      })
    ),
    /** The details of a healthcare service available at a location. */
    extension: t.readonlyArray(FhirExtension),
    /** The details of a healthcare service available at a location. */
    id: t.readonly(FhirString),
    /** The details of a healthcare service available at a location. */
    modifierExtension: t.readonlyArray(FhirExtension),
  })
)

/** The details of a healthcare service available at a location. */
export interface FhirHealthcareService_AvailableTime {
  /** The details of a healthcare service available at a location. */
  _allDay?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  _availableEndTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  _availableStartTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  _daysOfWeek?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  allDay?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** The details of a healthcare service available at a location. */
  availableEndTime?: Readonly<t.TypeOf<typeof FhirTime>>
  /** The details of a healthcare service available at a location. */
  availableStartTime?: Readonly<t.TypeOf<typeof FhirTime>>
  /** The details of a healthcare service available at a location. */
  daysOfWeek?: ReadonlyArray<'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'>
  /** The details of a healthcare service available at a location. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The details of a healthcare service available at a location. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The details of a healthcare service available at a location. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** The details of a healthcare service available at a location. */
export interface FhirHealthcareService_AvailableTimeOutput {
  /** The details of a healthcare service available at a location. */
  _allDay?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  _availableEndTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  _availableStartTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  _daysOfWeek?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** The details of a healthcare service available at a location. */
  allDay?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** The details of a healthcare service available at a location. */
  availableEndTime?: Readonly<t.OutputOf<typeof FhirTime>>
  /** The details of a healthcare service available at a location. */
  availableStartTime?: Readonly<t.OutputOf<typeof FhirTime>>
  /** The details of a healthcare service available at a location. */
  daysOfWeek?: ReadonlyArray<'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'>
  /** The details of a healthcare service available at a location. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The details of a healthcare service available at a location. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The details of a healthcare service available at a location. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
