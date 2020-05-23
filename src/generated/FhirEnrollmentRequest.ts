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
import { FhirUri } from './FhirUri'

/** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
export const FhirEnrollmentRequest: t.Type<FhirEnrollmentRequest, FhirEnrollmentRequestOutput> = t.recursion(
  'FhirEnrollmentRequest',
  () =>
    t.intersection([
      t.type({
        /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
        resourceType: t.readonly(t.literal('EnrollmentRequest')),
      }),
      t.partial({
        /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
        _created: t.readonly(FhirElement),
        /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
        _implicitRules: t.readonly(FhirElement),
        /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
        _language: t.readonly(FhirElement),
        /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
        _status: t.readonly(FhirElement),
        /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
        candidate: t.readonly(FhirReference),
        /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
        contained: t.readonlyArray(FhirResourceList),
        /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
        coverage: t.readonly(FhirReference),
        /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
        created: t.readonly(FhirDateTime),
        /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
        extension: t.readonlyArray(FhirExtension),
        /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
        id: t.readonly(FhirId),
        /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
        implicitRules: t.readonly(FhirUri),
        /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
        insurer: t.readonly(FhirReference),
        /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
        language: t.readonly(FhirCode),
        /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
        meta: t.readonly(FhirMeta),
        /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
        provider: t.readonly(FhirReference),
        /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
        status: t.readonly(FhirCode),
        /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
        text: t.readonly(FhirNarrative),
      }),
    ])
)

/** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
export interface FhirEnrollmentRequest {
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  _created?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  candidate?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  coverage?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  created?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  insurer?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  provider?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  resourceType: Readonly<'EnrollmentRequest'>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  status?: Readonly<t.TypeOf<typeof FhirCode>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
export interface FhirEnrollmentRequestOutput {
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  _created?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  candidate?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  coverage?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  created?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  insurer?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  provider?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  resourceType: Readonly<'EnrollmentRequest'>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  status?: Readonly<t.OutputOf<typeof FhirCode>>
  /** This resource provides the insurance enrollment details to the insurer regarding a specified coverage. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
