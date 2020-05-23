import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirCoverageEligibilityResponse_Error } from './FhirCoverageEligibilityResponse_Error'
import { FhirCoverageEligibilityResponse_Insurance } from './FhirCoverageEligibilityResponse_Insurance'
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

/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
export const FhirCoverageEligibilityResponse: t.Type<
  FhirCoverageEligibilityResponse,
  FhirCoverageEligibilityResponseOutput
> = t.recursion('FhirCoverageEligibilityResponse', () =>
  t.intersection([
    t.type({
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      insurer: t.readonly(FhirReference),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      patient: t.readonly(FhirReference),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      request: t.readonly(FhirReference),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      resourceType: t.readonly(t.literal('CoverageEligibilityResponse')),
    }),
    t.partial({
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      _created: t.readonly(FhirElement),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      _disposition: t.readonly(FhirElement),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      _implicitRules: t.readonly(FhirElement),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      _language: t.readonly(FhirElement),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      _outcome: t.readonly(FhirElement),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      _preAuthRef: t.readonly(FhirElement),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      _purpose: t.readonlyArray(FhirElement),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      _servicedDate: t.readonly(FhirElement),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      _status: t.readonly(FhirElement),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      contained: t.readonlyArray(FhirResourceList),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      created: t.readonly(FhirDateTime),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      disposition: t.readonly(FhirString),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      error: t.readonlyArray(FhirCoverageEligibilityResponse_Error),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      extension: t.readonlyArray(FhirExtension),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      form: t.readonly(FhirCodeableConcept),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      id: t.readonly(FhirId),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      implicitRules: t.readonly(FhirUri),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      insurance: t.readonlyArray(FhirCoverageEligibilityResponse_Insurance),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      language: t.readonly(FhirCode),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      meta: t.readonly(FhirMeta),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      outcome: t.readonly(
        t.keyof({
          queued: null,
          complete: null,
          error: null,
          partial: null,
        })
      ),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      preAuthRef: t.readonly(FhirString),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      purpose: t.readonlyArray(
        t.keyof({
          'auth-requirements': null,
          benefits: null,
          discovery: null,
          validation: null,
        })
      ),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      requestor: t.readonly(FhirReference),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      servicedDate: t.readonly(t.string),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      servicedPeriod: t.readonly(FhirPeriod),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      status: t.readonly(FhirCode),
      /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
export interface FhirCoverageEligibilityResponse {
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _created?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _disposition?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _outcome?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _preAuthRef?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _purpose?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _servicedDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  created?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  disposition?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  error?: ReadonlyArray<t.TypeOf<typeof FhirCoverageEligibilityResponse_Error>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  form?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  insurance?: ReadonlyArray<t.TypeOf<typeof FhirCoverageEligibilityResponse_Insurance>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  insurer: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  outcome?: Readonly<'queued' | 'complete' | 'error' | 'partial'>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  patient: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  preAuthRef?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  purpose?: ReadonlyArray<'auth-requirements' | 'benefits' | 'discovery' | 'validation'>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  request: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  requestor?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  resourceType: Readonly<'CoverageEligibilityResponse'>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  servicedDate?: Readonly<string>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  servicedPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  status?: Readonly<t.TypeOf<typeof FhirCode>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
export interface FhirCoverageEligibilityResponseOutput {
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _created?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _disposition?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _outcome?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _preAuthRef?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _purpose?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _servicedDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  created?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  disposition?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  error?: ReadonlyArray<t.OutputOf<typeof FhirCoverageEligibilityResponse_Error>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  form?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  insurance?: ReadonlyArray<t.OutputOf<typeof FhirCoverageEligibilityResponse_Insurance>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  insurer: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  outcome?: Readonly<'queued' | 'complete' | 'error' | 'partial'>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  patient: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  preAuthRef?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  purpose?: ReadonlyArray<'auth-requirements' | 'benefits' | 'discovery' | 'validation'>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  request: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  requestor?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  resourceType: Readonly<'CoverageEligibilityResponse'>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  servicedDate?: Readonly<string>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  servicedPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  status?: Readonly<t.OutputOf<typeof FhirCode>>
  /** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
