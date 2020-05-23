import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCareTeam_Participant } from './FhirCareTeam_Participant'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirContactPoint } from './FhirContactPoint'
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

/** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
export const FhirCareTeam: t.Type<FhirCareTeam, FhirCareTeamOutput> = t.recursion('FhirCareTeam', () =>
  t.intersection([
    t.type({
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      resourceType: t.readonly(t.literal('CareTeam')),
    }),
    t.partial({
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      _implicitRules: t.readonly(FhirElement),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      _language: t.readonly(FhirElement),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      _name: t.readonly(FhirElement),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      _status: t.readonly(FhirElement),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      category: t.readonlyArray(FhirCodeableConcept),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      contained: t.readonlyArray(FhirResourceList),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      encounter: t.readonly(FhirReference),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      extension: t.readonlyArray(FhirExtension),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      id: t.readonly(FhirId),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      implicitRules: t.readonly(FhirUri),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      language: t.readonly(FhirCode),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      managingOrganization: t.readonlyArray(FhirReference),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      meta: t.readonly(FhirMeta),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      name: t.readonly(FhirString),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      note: t.readonlyArray(FhirAnnotation),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      participant: t.readonlyArray(FhirCareTeam_Participant),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      period: t.readonly(FhirPeriod),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      reasonCode: t.readonlyArray(FhirCodeableConcept),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      reasonReference: t.readonlyArray(FhirReference),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      status: t.readonly(
        t.keyof({
          proposed: null,
          active: null,
          suspended: null,
          inactive: null,
          'entered-in-error': null,
        })
      ),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      subject: t.readonly(FhirReference),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      telecom: t.readonlyArray(FhirContactPoint),
      /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
export interface FhirCareTeam {
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  category?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  encounter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  managingOrganization?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  participant?: ReadonlyArray<t.TypeOf<typeof FhirCareTeam_Participant>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  period?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  reasonCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  reasonReference?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  resourceType: Readonly<'CareTeam'>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  status?: Readonly<'proposed' | 'active' | 'suspended' | 'inactive' | 'entered-in-error'>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  subject?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  telecom?: ReadonlyArray<t.TypeOf<typeof FhirContactPoint>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
export interface FhirCareTeamOutput {
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  category?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  encounter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  managingOrganization?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  participant?: ReadonlyArray<t.OutputOf<typeof FhirCareTeam_Participant>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  period?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  reasonCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  reasonReference?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  resourceType: Readonly<'CareTeam'>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  status?: Readonly<'proposed' | 'active' | 'suspended' | 'inactive' | 'entered-in-error'>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  subject?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  telecom?: ReadonlyArray<t.OutputOf<typeof FhirContactPoint>>
  /** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
