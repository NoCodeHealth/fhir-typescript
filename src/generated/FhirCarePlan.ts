import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCanonical } from './FhirCanonical'
import { FhirCarePlan_Activity } from './FhirCarePlan_Activity'
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
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
export const FhirCarePlan: t.Type<FhirCarePlan, FhirCarePlanOutput> = t.recursion('FhirCarePlan', () =>
  t.intersection([
    t.type({
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      resourceType: t.readonly(t.literal('CarePlan')),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      subject: t.readonly(FhirReference),
    }),
    t.partial({
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      _created: t.readonly(FhirElement),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      _description: t.readonly(FhirElement),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      _implicitRules: t.readonly(FhirElement),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      _instantiatesUri: t.readonlyArray(FhirElement),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      _intent: t.readonly(FhirElement),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      _language: t.readonly(FhirElement),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      _status: t.readonly(FhirElement),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      _title: t.readonly(FhirElement),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      activity: t.readonlyArray(FhirCarePlan_Activity),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      addresses: t.readonlyArray(FhirReference),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      author: t.readonly(FhirReference),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      basedOn: t.readonlyArray(FhirReference),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      careTeam: t.readonlyArray(FhirReference),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      category: t.readonlyArray(FhirCodeableConcept),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      contained: t.readonlyArray(FhirResourceList),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      contributor: t.readonlyArray(FhirReference),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      created: t.readonly(FhirDateTime),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      description: t.readonly(FhirString),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      encounter: t.readonly(FhirReference),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      extension: t.readonlyArray(FhirExtension),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      goal: t.readonlyArray(FhirReference),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      id: t.readonly(FhirId),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      implicitRules: t.readonly(FhirUri),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      instantiatesCanonical: t.readonlyArray(FhirCanonical),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      instantiatesUri: t.readonlyArray(FhirUri),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      intent: t.readonly(FhirCode),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      language: t.readonly(FhirCode),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      meta: t.readonly(FhirMeta),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      note: t.readonlyArray(FhirAnnotation),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      partOf: t.readonlyArray(FhirReference),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      period: t.readonly(FhirPeriod),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      replaces: t.readonlyArray(FhirReference),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      status: t.readonly(FhirCode),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      supportingInfo: t.readonlyArray(FhirReference),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      text: t.readonly(FhirNarrative),
      /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
      title: t.readonly(FhirString),
    }),
  ])
)

/** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
export interface FhirCarePlan {
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _created?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _instantiatesUri?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _intent?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _title?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  activity?: ReadonlyArray<t.TypeOf<typeof FhirCarePlan_Activity>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  addresses?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  author?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  basedOn?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  careTeam?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  category?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  contributor?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  created?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  encounter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  goal?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  instantiatesCanonical?: ReadonlyArray<t.TypeOf<typeof FhirCanonical>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  instantiatesUri?: ReadonlyArray<t.TypeOf<typeof FhirUri>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  intent?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  partOf?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  period?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  replaces?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  resourceType: Readonly<'CarePlan'>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  status?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  subject: Readonly<t.TypeOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  supportingInfo?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  title?: Readonly<t.TypeOf<typeof FhirString>>
}
/** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
export interface FhirCarePlanOutput {
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _created?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _instantiatesUri?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _intent?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  _title?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  activity?: ReadonlyArray<t.OutputOf<typeof FhirCarePlan_Activity>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  addresses?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  author?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  basedOn?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  careTeam?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  category?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  contributor?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  created?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  encounter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  goal?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  instantiatesCanonical?: ReadonlyArray<t.OutputOf<typeof FhirCanonical>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  instantiatesUri?: ReadonlyArray<t.OutputOf<typeof FhirUri>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  intent?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  partOf?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  period?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  replaces?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  resourceType: Readonly<'CarePlan'>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  status?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  subject: Readonly<t.OutputOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  supportingInfo?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
  title?: Readonly<t.OutputOf<typeof FhirString>>
}
