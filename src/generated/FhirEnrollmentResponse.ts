import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
export const FhirEnrollmentResponse: t.Type<FhirEnrollmentResponse, FhirEnrollmentResponseOutput> = t.recursion(
  'FhirEnrollmentResponse',
  () =>
    t.intersection([
      t.type({
        /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
        resourceType: t.readonly(t.literal('EnrollmentResponse')),
      }),
      t.partial({
        /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
        _created: t.readonly(FhirElement),
        /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
        _disposition: t.readonly(FhirElement),
        /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
        _implicitRules: t.readonly(FhirElement),
        /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
        _language: t.readonly(FhirElement),
        /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
        _outcome: t.readonly(FhirElement),
        /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
        _status: t.readonly(FhirElement),
        /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
        contained: t.readonlyArray(FhirResourceList),
        /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
        created: t.readonly(FhirDateTime),
        /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
        disposition: t.readonly(FhirString),
        /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
        extension: t.readonlyArray(FhirExtension),
        /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
        id: t.readonly(FhirId),
        /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
        implicitRules: t.readonly(FhirUri),
        /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
        language: t.readonly(FhirCode),
        /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
        meta: t.readonly(FhirMeta),
        /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
        organization: t.readonly(FhirReference),
        /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
        outcome: t.readonly(
          t.keyof({
            queued: null,
            complete: null,
            error: null,
            partial: null,
          })
        ),
        /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
        request: t.readonly(FhirReference),
        /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
        requestProvider: t.readonly(FhirReference),
        /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
        status: t.readonly(FhirCode),
        /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
        text: t.readonly(FhirNarrative),
      }),
    ])
)

/** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
export interface FhirEnrollmentResponse {
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  _created?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  _disposition?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  _outcome?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  created?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  disposition?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  organization?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  outcome?: Readonly<'queued' | 'complete' | 'error' | 'partial'>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  request?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  requestProvider?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  resourceType: Readonly<'EnrollmentResponse'>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  status?: Readonly<t.TypeOf<typeof FhirCode>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
export interface FhirEnrollmentResponseOutput {
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  _created?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  _disposition?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  _outcome?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  created?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  disposition?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  organization?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  outcome?: Readonly<'queued' | 'complete' | 'error' | 'partial'>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  request?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  requestProvider?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  resourceType: Readonly<'EnrollmentResponse'>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  status?: Readonly<t.OutputOf<typeof FhirCode>>
  /** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
