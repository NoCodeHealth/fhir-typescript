import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirDecimal } from './FhirDecimal'
import { FhirDuration } from './FhirDuration'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirRange } from './FhirRange'
import { FhirString } from './FhirString'
import { FhirTime } from './FhirTime'
import { FhirUnsignedInt } from './FhirUnsignedInt'

/** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
export const FhirTiming_Repeat: t.Type<FhirTiming_Repeat, FhirTiming_RepeatOutput> = t.recursion(
  'FhirTiming_Repeat',
  () =>
    t.partial({
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      _count: t.readonly(FhirElement),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      _countMax: t.readonly(FhirElement),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      _dayOfWeek: t.readonlyArray(FhirElement),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      _duration: t.readonly(FhirElement),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      _durationMax: t.readonly(FhirElement),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      _durationUnit: t.readonly(FhirElement),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      _frequency: t.readonly(FhirElement),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      _frequencyMax: t.readonly(FhirElement),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      _offset: t.readonly(FhirElement),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      _period: t.readonly(FhirElement),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      _periodMax: t.readonly(FhirElement),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      _periodUnit: t.readonly(FhirElement),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      _timeOfDay: t.readonlyArray(FhirElement),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      _when: t.readonlyArray(FhirElement),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      boundsDuration: t.readonly(FhirDuration),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      boundsPeriod: t.readonly(FhirPeriod),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      boundsRange: t.readonly(FhirRange),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      count: t.readonly(FhirPositiveInt),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      countMax: t.readonly(FhirPositiveInt),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      dayOfWeek: t.readonlyArray(FhirCode),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      duration: t.readonly(FhirDecimal),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      durationMax: t.readonly(FhirDecimal),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      durationUnit: t.readonly(
        t.keyof({
          s: null,
          min: null,
          h: null,
          d: null,
          wk: null,
          mo: null,
          a: null,
        })
      ),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      extension: t.readonlyArray(FhirExtension),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      frequency: t.readonly(FhirPositiveInt),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      frequencyMax: t.readonly(FhirPositiveInt),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      id: t.readonly(FhirString),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      offset: t.readonly(FhirUnsignedInt),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      period: t.readonly(FhirDecimal),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      periodMax: t.readonly(FhirDecimal),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      periodUnit: t.readonly(
        t.keyof({
          s: null,
          min: null,
          h: null,
          d: null,
          wk: null,
          mo: null,
          a: null,
        })
      ),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      timeOfDay: t.readonlyArray(FhirTime),
      /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
      when: t.readonlyArray(
        t.keyof({
          MORN: null,
          'MORN.early': null,
          'MORN.late': null,
          NOON: null,
          AFT: null,
          'AFT.early': null,
          'AFT.late': null,
          EVE: null,
          'EVE.early': null,
          'EVE.late': null,
          NIGHT: null,
          PHS: null,
          HS: null,
          WAKE: null,
          C: null,
          CM: null,
          CD: null,
          CV: null,
          AC: null,
          ACM: null,
          ACD: null,
          ACV: null,
          PC: null,
          PCM: null,
          PCD: null,
          PCV: null,
        })
      ),
    })
)

/** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
export interface FhirTiming_Repeat {
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _count?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _countMax?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _dayOfWeek?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _duration?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _durationMax?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _durationUnit?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _frequency?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _frequencyMax?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _offset?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _period?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _periodMax?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _periodUnit?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _timeOfDay?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _when?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  boundsDuration?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  boundsPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  boundsRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  count?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  countMax?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  dayOfWeek?: ReadonlyArray<t.TypeOf<typeof FhirCode>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  duration?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  durationMax?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  durationUnit?: Readonly<'s' | 'min' | 'h' | 'd' | 'wk' | 'mo' | 'a'>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  frequency?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  frequencyMax?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  offset?: Readonly<t.TypeOf<typeof FhirUnsignedInt>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  period?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  periodMax?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  periodUnit?: Readonly<'s' | 'min' | 'h' | 'd' | 'wk' | 'mo' | 'a'>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  timeOfDay?: ReadonlyArray<t.TypeOf<typeof FhirTime>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  when?: ReadonlyArray<
    | 'MORN'
    | 'MORN.early'
    | 'MORN.late'
    | 'NOON'
    | 'AFT'
    | 'AFT.early'
    | 'AFT.late'
    | 'EVE'
    | 'EVE.early'
    | 'EVE.late'
    | 'NIGHT'
    | 'PHS'
    | 'HS'
    | 'WAKE'
    | 'C'
    | 'CM'
    | 'CD'
    | 'CV'
    | 'AC'
    | 'ACM'
    | 'ACD'
    | 'ACV'
    | 'PC'
    | 'PCM'
    | 'PCD'
    | 'PCV'
  >
}
/** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
export interface FhirTiming_RepeatOutput {
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _count?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _countMax?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _dayOfWeek?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _duration?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _durationMax?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _durationUnit?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _frequency?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _frequencyMax?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _offset?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _period?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _periodMax?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _periodUnit?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _timeOfDay?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  _when?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  boundsDuration?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  boundsPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  boundsRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  count?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  countMax?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  dayOfWeek?: ReadonlyArray<t.OutputOf<typeof FhirCode>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  duration?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  durationMax?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  durationUnit?: Readonly<'s' | 'min' | 'h' | 'd' | 'wk' | 'mo' | 'a'>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  frequency?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  frequencyMax?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  offset?: Readonly<t.OutputOf<typeof FhirUnsignedInt>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  period?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  periodMax?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  periodUnit?: Readonly<'s' | 'min' | 'h' | 'd' | 'wk' | 'mo' | 'a'>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  timeOfDay?: ReadonlyArray<t.OutputOf<typeof FhirTime>>
  /** Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
  when?: ReadonlyArray<
    | 'MORN'
    | 'MORN.early'
    | 'MORN.late'
    | 'NOON'
    | 'AFT'
    | 'AFT.early'
    | 'AFT.late'
    | 'EVE'
    | 'EVE.early'
    | 'EVE.late'
    | 'NIGHT'
    | 'PHS'
    | 'HS'
    | 'WAKE'
    | 'C'
    | 'CM'
    | 'CD'
    | 'CV'
    | 'AC'
    | 'ACM'
    | 'ACD'
    | 'ACV'
    | 'PC'
    | 'PCM'
    | 'PCD'
    | 'PCV'
  >
}
