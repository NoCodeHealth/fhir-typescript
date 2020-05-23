import * as t from 'io-ts'
import { FhirAddress } from './FhirAddress'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirCoding } from './FhirCoding'
import { FhirContactPoint } from './FhirContactPoint'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirLocation_HoursOfOperation } from './FhirLocation_HoursOfOperation'
import { FhirLocation_Position } from './FhirLocation_Position'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
export const FhirLocation: t.Type<FhirLocation, FhirLocationOutput> = t.recursion('FhirLocation', () =>
  t.intersection([
    t.type({
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      resourceType: t.readonly(t.literal('Location')),
    }),
    t.partial({
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      _alias: t.readonlyArray(FhirElement),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      _availabilityExceptions: t.readonly(FhirElement),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      _description: t.readonly(FhirElement),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      _implicitRules: t.readonly(FhirElement),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      _language: t.readonly(FhirElement),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      _mode: t.readonly(FhirElement),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      _name: t.readonly(FhirElement),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      _status: t.readonly(FhirElement),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      address: t.readonly(FhirAddress),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      alias: t.readonlyArray(FhirString),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      availabilityExceptions: t.readonly(FhirString),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      contained: t.readonlyArray(FhirResourceList),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      description: t.readonly(FhirString),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      endpoint: t.readonlyArray(FhirReference),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      extension: t.readonlyArray(FhirExtension),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      hoursOfOperation: t.readonlyArray(FhirLocation_HoursOfOperation),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      id: t.readonly(FhirId),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      implicitRules: t.readonly(FhirUri),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      language: t.readonly(FhirCode),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      managingOrganization: t.readonly(FhirReference),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      meta: t.readonly(FhirMeta),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      mode: t.readonly(
        t.keyof({
          instance: null,
          kind: null,
        })
      ),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      name: t.readonly(FhirString),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      operationalStatus: t.readonly(FhirCoding),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      partOf: t.readonly(FhirReference),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      physicalType: t.readonly(FhirCodeableConcept),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      position: t.readonly(FhirLocation_Position),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      status: t.readonly(
        t.keyof({
          active: null,
          suspended: null,
          inactive: null,
        })
      ),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      telecom: t.readonlyArray(FhirContactPoint),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      text: t.readonly(FhirNarrative),
      /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
      type: t.readonlyArray(FhirCodeableConcept),
    }),
  ])
)

/** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
export interface FhirLocation {
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _alias?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _availabilityExceptions?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _mode?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  address?: Readonly<t.TypeOf<typeof FhirAddress>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  alias?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  availabilityExceptions?: Readonly<t.TypeOf<typeof FhirString>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  endpoint?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  hoursOfOperation?: ReadonlyArray<t.TypeOf<typeof FhirLocation_HoursOfOperation>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  managingOrganization?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  mode?: Readonly<'instance' | 'kind'>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  operationalStatus?: Readonly<t.TypeOf<typeof FhirCoding>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  partOf?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  physicalType?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  position?: Readonly<t.TypeOf<typeof FhirLocation_Position>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  resourceType: Readonly<'Location'>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  status?: Readonly<'active' | 'suspended' | 'inactive'>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  telecom?: ReadonlyArray<t.TypeOf<typeof FhirContactPoint>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  type?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
export interface FhirLocationOutput {
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _alias?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _availabilityExceptions?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _mode?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  address?: Readonly<t.OutputOf<typeof FhirAddress>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  alias?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  availabilityExceptions?: Readonly<t.OutputOf<typeof FhirString>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  endpoint?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  hoursOfOperation?: ReadonlyArray<t.OutputOf<typeof FhirLocation_HoursOfOperation>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  managingOrganization?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  mode?: Readonly<'instance' | 'kind'>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  operationalStatus?: Readonly<t.OutputOf<typeof FhirCoding>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  partOf?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  physicalType?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  position?: Readonly<t.OutputOf<typeof FhirLocation_Position>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  resourceType: Readonly<'Location'>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  status?: Readonly<'active' | 'suspended' | 'inactive'>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  telecom?: ReadonlyArray<t.OutputOf<typeof FhirContactPoint>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
  type?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
}
