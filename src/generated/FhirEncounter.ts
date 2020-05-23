import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirCoding } from './FhirCoding'
import { FhirDuration } from './FhirDuration'
import { FhirElement } from './FhirElement'
import { FhirEncounter_ClassHistory } from './FhirEncounter_ClassHistory'
import { FhirEncounter_Diagnosis } from './FhirEncounter_Diagnosis'
import { FhirEncounter_Hospitalization } from './FhirEncounter_Hospitalization'
import { FhirEncounter_Location } from './FhirEncounter_Location'
import { FhirEncounter_Participant } from './FhirEncounter_Participant'
import { FhirEncounter_StatusHistory } from './FhirEncounter_StatusHistory'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
export const FhirEncounter: t.Type<FhirEncounter, FhirEncounterOutput> = t.recursion('FhirEncounter', () =>
  t.intersection([
    t.type({
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      class: t.readonly(FhirCoding),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      resourceType: t.readonly(t.literal('Encounter')),
    }),
    t.partial({
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      _implicitRules: t.readonly(FhirElement),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      _language: t.readonly(FhirElement),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      _status: t.readonly(FhirElement),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      account: t.readonlyArray(FhirReference),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      appointment: t.readonlyArray(FhirReference),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      basedOn: t.readonlyArray(FhirReference),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      classHistory: t.readonlyArray(FhirEncounter_ClassHistory),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      contained: t.readonlyArray(FhirResourceList),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      diagnosis: t.readonlyArray(FhirEncounter_Diagnosis),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      episodeOfCare: t.readonlyArray(FhirReference),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      extension: t.readonlyArray(FhirExtension),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      hospitalization: t.readonly(FhirEncounter_Hospitalization),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      id: t.readonly(FhirId),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      implicitRules: t.readonly(FhirUri),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      language: t.readonly(FhirCode),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      length: t.readonly(FhirDuration),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      location: t.readonlyArray(FhirEncounter_Location),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      meta: t.readonly(FhirMeta),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      partOf: t.readonly(FhirReference),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      participant: t.readonlyArray(FhirEncounter_Participant),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      period: t.readonly(FhirPeriod),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      priority: t.readonly(FhirCodeableConcept),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      reasonCode: t.readonlyArray(FhirCodeableConcept),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      reasonReference: t.readonlyArray(FhirReference),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      serviceProvider: t.readonly(FhirReference),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      serviceType: t.readonly(FhirCodeableConcept),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      status: t.readonly(
        t.keyof({
          planned: null,
          arrived: null,
          triaged: null,
          'in-progress': null,
          onleave: null,
          finished: null,
          cancelled: null,
          'entered-in-error': null,
          unknown: null,
        })
      ),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      statusHistory: t.readonlyArray(FhirEncounter_StatusHistory),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      subject: t.readonly(FhirReference),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      text: t.readonly(FhirNarrative),
      /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
      type: t.readonlyArray(FhirCodeableConcept),
    }),
  ])
)

/** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
export interface FhirEncounter {
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  account?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  appointment?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  basedOn?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  class: Readonly<t.TypeOf<typeof FhirCoding>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  classHistory?: ReadonlyArray<t.TypeOf<typeof FhirEncounter_ClassHistory>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  diagnosis?: ReadonlyArray<t.TypeOf<typeof FhirEncounter_Diagnosis>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  episodeOfCare?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  hospitalization?: Readonly<t.TypeOf<typeof FhirEncounter_Hospitalization>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  length?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  location?: ReadonlyArray<t.TypeOf<typeof FhirEncounter_Location>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  partOf?: Readonly<t.TypeOf<typeof FhirReference>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  participant?: ReadonlyArray<t.TypeOf<typeof FhirEncounter_Participant>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  period?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  priority?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  reasonCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  reasonReference?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  resourceType: Readonly<'Encounter'>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  serviceProvider?: Readonly<t.TypeOf<typeof FhirReference>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  serviceType?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  status?: Readonly<
    | 'planned'
    | 'arrived'
    | 'triaged'
    | 'in-progress'
    | 'onleave'
    | 'finished'
    | 'cancelled'
    | 'entered-in-error'
    | 'unknown'
  >
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  statusHistory?: ReadonlyArray<t.TypeOf<typeof FhirEncounter_StatusHistory>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  subject?: Readonly<t.TypeOf<typeof FhirReference>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  type?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
}
/** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
export interface FhirEncounterOutput {
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  account?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  appointment?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  basedOn?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  class: Readonly<t.OutputOf<typeof FhirCoding>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  classHistory?: ReadonlyArray<t.OutputOf<typeof FhirEncounter_ClassHistory>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  diagnosis?: ReadonlyArray<t.OutputOf<typeof FhirEncounter_Diagnosis>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  episodeOfCare?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  hospitalization?: Readonly<t.OutputOf<typeof FhirEncounter_Hospitalization>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  length?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  location?: ReadonlyArray<t.OutputOf<typeof FhirEncounter_Location>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  partOf?: Readonly<t.OutputOf<typeof FhirReference>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  participant?: ReadonlyArray<t.OutputOf<typeof FhirEncounter_Participant>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  period?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  priority?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  reasonCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  reasonReference?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  resourceType: Readonly<'Encounter'>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  serviceProvider?: Readonly<t.OutputOf<typeof FhirReference>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  serviceType?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  status?: Readonly<
    | 'planned'
    | 'arrived'
    | 'triaged'
    | 'in-progress'
    | 'onleave'
    | 'finished'
    | 'cancelled'
    | 'entered-in-error'
    | 'unknown'
  >
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  statusHistory?: ReadonlyArray<t.OutputOf<typeof FhirEncounter_StatusHistory>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  subject?: Readonly<t.OutputOf<typeof FhirReference>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
  type?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
}
