import * as t from 'io-ts'
import { FhirAge } from './FhirAge'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCanonical } from './FhirCanonical'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirProcedure_FocalDevice } from './FhirProcedure_FocalDevice'
import { FhirProcedure_Performer } from './FhirProcedure_Performer'
import { FhirRange } from './FhirRange'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
export const FhirProcedure: t.Type<FhirProcedure, FhirProcedureOutput> = t.recursion('FhirProcedure', () =>
  t.intersection([
    t.type({
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      resourceType: t.readonly(t.literal('Procedure')),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      subject: t.readonly(FhirReference),
    }),
    t.partial({
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      _implicitRules: t.readonly(FhirElement),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      _instantiatesUri: t.readonlyArray(FhirElement),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      _language: t.readonly(FhirElement),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      _performedDateTime: t.readonly(FhirElement),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      _performedString: t.readonly(FhirElement),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      _status: t.readonly(FhirElement),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      asserter: t.readonly(FhirReference),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      basedOn: t.readonlyArray(FhirReference),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      bodySite: t.readonlyArray(FhirCodeableConcept),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      category: t.readonly(FhirCodeableConcept),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      code: t.readonly(FhirCodeableConcept),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      complication: t.readonlyArray(FhirCodeableConcept),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      complicationDetail: t.readonlyArray(FhirReference),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      contained: t.readonlyArray(FhirResourceList),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      encounter: t.readonly(FhirReference),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      extension: t.readonlyArray(FhirExtension),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      focalDevice: t.readonlyArray(FhirProcedure_FocalDevice),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      followUp: t.readonlyArray(FhirCodeableConcept),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      id: t.readonly(FhirId),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      implicitRules: t.readonly(FhirUri),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      instantiatesCanonical: t.readonlyArray(FhirCanonical),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      instantiatesUri: t.readonlyArray(FhirUri),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      language: t.readonly(FhirCode),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      location: t.readonly(FhirReference),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      meta: t.readonly(FhirMeta),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      note: t.readonlyArray(FhirAnnotation),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      outcome: t.readonly(FhirCodeableConcept),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      partOf: t.readonlyArray(FhirReference),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      performedAge: t.readonly(FhirAge),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      performedDateTime: t.readonly(t.string),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      performedPeriod: t.readonly(FhirPeriod),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      performedRange: t.readonly(FhirRange),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      performedString: t.readonly(t.string),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      performer: t.readonlyArray(FhirProcedure_Performer),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      reasonCode: t.readonlyArray(FhirCodeableConcept),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      reasonReference: t.readonlyArray(FhirReference),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      recorder: t.readonly(FhirReference),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      report: t.readonlyArray(FhirReference),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      status: t.readonly(FhirCode),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      statusReason: t.readonly(FhirCodeableConcept),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      text: t.readonly(FhirNarrative),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      usedCode: t.readonlyArray(FhirCodeableConcept),
      /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
      usedReference: t.readonlyArray(FhirReference),
    }),
  ])
)

/** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
export interface FhirProcedure {
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  _instantiatesUri?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  _performedDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  _performedString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  asserter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  basedOn?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  bodySite?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  category?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  code?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  complication?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  complicationDetail?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  encounter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  focalDevice?: ReadonlyArray<t.TypeOf<typeof FhirProcedure_FocalDevice>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  followUp?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  instantiatesCanonical?: ReadonlyArray<t.TypeOf<typeof FhirCanonical>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  instantiatesUri?: ReadonlyArray<t.TypeOf<typeof FhirUri>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  location?: Readonly<t.TypeOf<typeof FhirReference>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  outcome?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  partOf?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  performedAge?: Readonly<t.TypeOf<typeof FhirAge>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  performedDateTime?: Readonly<string>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  performedPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  performedRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  performedString?: Readonly<string>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  performer?: ReadonlyArray<t.TypeOf<typeof FhirProcedure_Performer>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  reasonCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  reasonReference?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  recorder?: Readonly<t.TypeOf<typeof FhirReference>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  report?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  resourceType: Readonly<'Procedure'>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  status?: Readonly<t.TypeOf<typeof FhirCode>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  statusReason?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  subject: Readonly<t.TypeOf<typeof FhirReference>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  usedCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  usedReference?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
}
/** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
export interface FhirProcedureOutput {
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  _instantiatesUri?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  _performedDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  _performedString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  asserter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  basedOn?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  bodySite?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  category?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  code?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  complication?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  complicationDetail?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  encounter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  focalDevice?: ReadonlyArray<t.OutputOf<typeof FhirProcedure_FocalDevice>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  followUp?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  instantiatesCanonical?: ReadonlyArray<t.OutputOf<typeof FhirCanonical>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  instantiatesUri?: ReadonlyArray<t.OutputOf<typeof FhirUri>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  location?: Readonly<t.OutputOf<typeof FhirReference>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  outcome?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  partOf?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  performedAge?: Readonly<t.OutputOf<typeof FhirAge>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  performedDateTime?: Readonly<string>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  performedPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  performedRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  performedString?: Readonly<string>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  performer?: ReadonlyArray<t.OutputOf<typeof FhirProcedure_Performer>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  reasonCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  reasonReference?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  recorder?: Readonly<t.OutputOf<typeof FhirReference>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  report?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  resourceType: Readonly<'Procedure'>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  status?: Readonly<t.OutputOf<typeof FhirCode>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  statusReason?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  subject: Readonly<t.OutputOf<typeof FhirReference>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  usedCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
  usedReference?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
}
