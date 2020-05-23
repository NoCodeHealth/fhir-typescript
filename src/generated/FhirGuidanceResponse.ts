import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDataRequirement } from './FhirDataRequirement'
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

/** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
export const FhirGuidanceResponse: t.Type<FhirGuidanceResponse, FhirGuidanceResponseOutput> = t.recursion(
  'FhirGuidanceResponse',
  () =>
    t.intersection([
      t.type({
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        resourceType: t.readonly(t.literal('GuidanceResponse')),
      }),
      t.partial({
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        _implicitRules: t.readonly(FhirElement),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        _language: t.readonly(FhirElement),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        _moduleCanonical: t.readonly(FhirElement),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        _moduleUri: t.readonly(FhirElement),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        _occurrenceDateTime: t.readonly(FhirElement),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        _status: t.readonly(FhirElement),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        contained: t.readonlyArray(FhirResourceList),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        dataRequirement: t.readonlyArray(FhirDataRequirement),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        encounter: t.readonly(FhirReference),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        evaluationMessage: t.readonlyArray(FhirReference),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        extension: t.readonlyArray(FhirExtension),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        id: t.readonly(FhirId),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        implicitRules: t.readonly(FhirUri),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        language: t.readonly(FhirCode),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        meta: t.readonly(FhirMeta),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        moduleCanonical: t.readonly(t.string),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        moduleCodeableConcept: t.readonly(FhirCodeableConcept),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        moduleUri: t.readonly(t.string),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        note: t.readonlyArray(FhirAnnotation),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        occurrenceDateTime: t.readonly(FhirDateTime),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        outputParameters: t.readonly(FhirReference),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        performer: t.readonly(FhirReference),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        reasonCode: t.readonlyArray(FhirCodeableConcept),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        reasonReference: t.readonlyArray(FhirReference),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        requestIdentifier: t.readonly(FhirIdentifier),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        result: t.readonly(FhirReference),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        status: t.readonly(
          t.keyof({
            success: null,
            'data-requested': null,
            'data-required': null,
            'in-progress': null,
            failure: null,
            'entered-in-error': null,
          })
        ),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        subject: t.readonly(FhirReference),
        /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
        text: t.readonly(FhirNarrative),
      }),
    ])
)

/** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
export interface FhirGuidanceResponse {
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  _moduleCanonical?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  _moduleUri?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  _occurrenceDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  dataRequirement?: ReadonlyArray<t.TypeOf<typeof FhirDataRequirement>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  encounter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  evaluationMessage?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  moduleCanonical?: Readonly<string>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  moduleCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  moduleUri?: Readonly<string>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  occurrenceDateTime?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  outputParameters?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  performer?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  reasonCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  reasonReference?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  requestIdentifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  resourceType: Readonly<'GuidanceResponse'>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  result?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  status?: Readonly<'success' | 'data-requested' | 'data-required' | 'in-progress' | 'failure' | 'entered-in-error'>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  subject?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
export interface FhirGuidanceResponseOutput {
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  _moduleCanonical?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  _moduleUri?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  _occurrenceDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  dataRequirement?: ReadonlyArray<t.OutputOf<typeof FhirDataRequirement>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  encounter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  evaluationMessage?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  moduleCanonical?: Readonly<string>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  moduleCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  moduleUri?: Readonly<string>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  occurrenceDateTime?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  outputParameters?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  performer?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  reasonCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  reasonReference?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  requestIdentifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  resourceType: Readonly<'GuidanceResponse'>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  result?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  status?: Readonly<'success' | 'data-requested' | 'data-required' | 'in-progress' | 'failure' | 'entered-in-error'>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  subject?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
