import * as t from 'io-ts'
import { FhirDecimal } from './FhirDecimal'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
export const FhirLocation_Position: t.Type<FhirLocation_Position, FhirLocation_PositionOutput> = t.recursion(
  'FhirLocation_Position',
  () =>
    t.partial({
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      _altitude: t.readonly(FhirElement),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      _latitude: t.readonly(FhirElement),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      _longitude: t.readonly(FhirElement),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      altitude: t.readonly(FhirDecimal),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      extension: t.readonlyArray(FhirExtension),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      id: t.readonly(FhirString),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      latitude: t.readonly(FhirDecimal),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      longitude: t.readonly(FhirDecimal),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      modifierExtension: t.readonlyArray(FhirExtension),
    })
)

/** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
export interface FhirLocation_Position {
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _altitude?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _latitude?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _longitude?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  altitude?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  latitude?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  longitude?: Readonly<t.TypeOf<typeof FhirDecimal>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
export interface FhirLocation_PositionOutput {
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _altitude?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _latitude?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _longitude?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  altitude?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  latitude?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  longitude?: Readonly<t.OutputOf<typeof FhirDecimal>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
