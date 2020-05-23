import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
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
import { FhirUri } from './FhirUri'

/** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
export const FhirOrganizationAffiliation: t.Type<
  FhirOrganizationAffiliation,
  FhirOrganizationAffiliationOutput
> = t.recursion('FhirOrganizationAffiliation', () =>
  t.intersection([
    t.type({
      /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
      resourceType: t.readonly(t.literal('OrganizationAffiliation')),
    }),
    t.partial({
      /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
      _active: t.readonly(FhirElement),
      /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
      _implicitRules: t.readonly(FhirElement),
      /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
      _language: t.readonly(FhirElement),
      /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
      active: t.readonly(FhirBoolean),
      /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
      code: t.readonlyArray(FhirCodeableConcept),
      /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
      contained: t.readonlyArray(FhirResourceList),
      /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
      endpoint: t.readonlyArray(FhirReference),
      /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
      extension: t.readonlyArray(FhirExtension),
      /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
      healthcareService: t.readonlyArray(FhirReference),
      /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
      id: t.readonly(FhirId),
      /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
      implicitRules: t.readonly(FhirUri),
      /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
      language: t.readonly(FhirCode),
      /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
      location: t.readonlyArray(FhirReference),
      /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
      meta: t.readonly(FhirMeta),
      /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
      network: t.readonlyArray(FhirReference),
      /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
      organization: t.readonly(FhirReference),
      /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
      participatingOrganization: t.readonly(FhirReference),
      /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
      period: t.readonly(FhirPeriod),
      /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
      specialty: t.readonlyArray(FhirCodeableConcept),
      /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
      telecom: t.readonlyArray(FhirContactPoint),
      /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
export interface FhirOrganizationAffiliation {
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  _active?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  active?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  code?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  endpoint?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  healthcareService?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  location?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  network?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  organization?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  participatingOrganization?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  period?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  resourceType: Readonly<'OrganizationAffiliation'>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  specialty?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  telecom?: ReadonlyArray<t.TypeOf<typeof FhirContactPoint>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
export interface FhirOrganizationAffiliationOutput {
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  _active?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  active?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  code?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  endpoint?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  healthcareService?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  location?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  network?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  organization?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  participatingOrganization?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  period?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  resourceType: Readonly<'OrganizationAffiliation'>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  specialty?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  telecom?: ReadonlyArray<t.OutputOf<typeof FhirContactPoint>>
  /** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
