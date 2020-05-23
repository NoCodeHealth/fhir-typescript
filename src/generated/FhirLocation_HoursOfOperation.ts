import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCode } from './FhirCode'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirTime } from './FhirTime'

/** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
export const FhirLocation_HoursOfOperation: t.Type<
  FhirLocation_HoursOfOperation,
  FhirLocation_HoursOfOperationOutput
> = t.recursion('FhirLocation_HoursOfOperation', () =>
  t.partial({
    /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
    _allDay: t.readonly(FhirElement),
    /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
    _closingTime: t.readonly(FhirElement),
    /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
    _daysOfWeek: t.readonlyArray(FhirElement),
    /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
    _openingTime: t.readonly(FhirElement),
    /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
    allDay: t.readonly(FhirBoolean),
    /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
    closingTime: t.readonly(FhirTime),
    /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
    daysOfWeek: t.readonlyArray(FhirCode),
    /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
    extension: t.readonlyArray(FhirExtension),
    /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
    id: t.readonly(FhirString),
    /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
    openingTime: t.readonly(FhirTime),
  })
)

/** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
export interface FhirLocation_HoursOfOperation {
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _allDay?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _closingTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _daysOfWeek?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _openingTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  allDay?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  closingTime?: Readonly<t.TypeOf<typeof FhirTime>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  daysOfWeek?: ReadonlyArray<t.TypeOf<typeof FhirCode>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  openingTime?: Readonly<t.TypeOf<typeof FhirTime>>
}
/** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
export interface FhirLocation_HoursOfOperationOutput {
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _allDay?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _closingTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _daysOfWeek?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _openingTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  allDay?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  closingTime?: Readonly<t.OutputOf<typeof FhirTime>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  daysOfWeek?: ReadonlyArray<t.OutputOf<typeof FhirCode>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  openingTime?: Readonly<t.OutputOf<typeof FhirTime>>
}
