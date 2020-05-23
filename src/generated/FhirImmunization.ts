import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirBoolean } from './FhirBoolean'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDate } from './FhirDate'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirImmunization_Education } from './FhirImmunization_Education'
import { FhirImmunization_Performer } from './FhirImmunization_Performer'
import { FhirImmunization_ProtocolApplied } from './FhirImmunization_ProtocolApplied'
import { FhirImmunization_Reaction } from './FhirImmunization_Reaction'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirQuantity } from './FhirQuantity'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
export const FhirImmunization: t.Type<FhirImmunization, FhirImmunizationOutput> = t.recursion('FhirImmunization', () =>
  t.intersection([
    t.type({
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      patient: t.readonly(FhirReference),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      resourceType: t.readonly(t.literal('Immunization')),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      vaccineCode: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      _expirationDate: t.readonly(FhirElement),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      _implicitRules: t.readonly(FhirElement),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      _isSubpotent: t.readonly(FhirElement),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      _language: t.readonly(FhirElement),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      _lotNumber: t.readonly(FhirElement),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      _occurrenceDateTime: t.readonly(FhirElement),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      _occurrenceString: t.readonly(FhirElement),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      _primarySource: t.readonly(FhirElement),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      _recorded: t.readonly(FhirElement),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      _status: t.readonly(FhirElement),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      contained: t.readonlyArray(FhirResourceList),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      doseQuantity: t.readonly(FhirQuantity),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      education: t.readonlyArray(FhirImmunization_Education),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      encounter: t.readonly(FhirReference),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      expirationDate: t.readonly(FhirDate),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      extension: t.readonlyArray(FhirExtension),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      fundingSource: t.readonly(FhirCodeableConcept),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      id: t.readonly(FhirId),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      implicitRules: t.readonly(FhirUri),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      isSubpotent: t.readonly(FhirBoolean),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      language: t.readonly(FhirCode),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      location: t.readonly(FhirReference),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      lotNumber: t.readonly(FhirString),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      manufacturer: t.readonly(FhirReference),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      meta: t.readonly(FhirMeta),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      note: t.readonlyArray(FhirAnnotation),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      occurrenceDateTime: t.readonly(t.string),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      occurrenceString: t.readonly(t.string),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      performer: t.readonlyArray(FhirImmunization_Performer),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      primarySource: t.readonly(FhirBoolean),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      programEligibility: t.readonlyArray(FhirCodeableConcept),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      protocolApplied: t.readonlyArray(FhirImmunization_ProtocolApplied),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      reaction: t.readonlyArray(FhirImmunization_Reaction),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      reasonCode: t.readonlyArray(FhirCodeableConcept),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      reasonReference: t.readonlyArray(FhirReference),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      recorded: t.readonly(FhirDateTime),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      reportOrigin: t.readonly(FhirCodeableConcept),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      route: t.readonly(FhirCodeableConcept),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      site: t.readonly(FhirCodeableConcept),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      status: t.readonly(FhirCode),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      statusReason: t.readonly(FhirCodeableConcept),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      subpotentReason: t.readonlyArray(FhirCodeableConcept),
      /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
export interface FhirImmunization {
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _expirationDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _isSubpotent?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _lotNumber?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _occurrenceDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _occurrenceString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _primarySource?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _recorded?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  doseQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  education?: ReadonlyArray<t.TypeOf<typeof FhirImmunization_Education>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  encounter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  expirationDate?: Readonly<t.TypeOf<typeof FhirDate>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  fundingSource?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  isSubpotent?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  location?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  lotNumber?: Readonly<t.TypeOf<typeof FhirString>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  manufacturer?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  occurrenceDateTime?: Readonly<string>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  occurrenceString?: Readonly<string>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  patient: Readonly<t.TypeOf<typeof FhirReference>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  performer?: ReadonlyArray<t.TypeOf<typeof FhirImmunization_Performer>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  primarySource?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  programEligibility?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  protocolApplied?: ReadonlyArray<t.TypeOf<typeof FhirImmunization_ProtocolApplied>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  reaction?: ReadonlyArray<t.TypeOf<typeof FhirImmunization_Reaction>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  reasonCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  reasonReference?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  recorded?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  reportOrigin?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  resourceType: Readonly<'Immunization'>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  route?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  site?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  status?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  statusReason?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  subpotentReason?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  vaccineCode: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
export interface FhirImmunizationOutput {
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _expirationDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _isSubpotent?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _lotNumber?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _occurrenceDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _occurrenceString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _primarySource?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _recorded?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  doseQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  education?: ReadonlyArray<t.OutputOf<typeof FhirImmunization_Education>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  encounter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  expirationDate?: Readonly<t.OutputOf<typeof FhirDate>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  fundingSource?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  isSubpotent?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  location?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  lotNumber?: Readonly<t.OutputOf<typeof FhirString>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  manufacturer?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  occurrenceDateTime?: Readonly<string>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  occurrenceString?: Readonly<string>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  patient: Readonly<t.OutputOf<typeof FhirReference>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  performer?: ReadonlyArray<t.OutputOf<typeof FhirImmunization_Performer>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  primarySource?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  programEligibility?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  protocolApplied?: ReadonlyArray<t.OutputOf<typeof FhirImmunization_ProtocolApplied>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  reaction?: ReadonlyArray<t.OutputOf<typeof FhirImmunization_Reaction>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  reasonCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  reasonReference?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  recorded?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  reportOrigin?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  resourceType: Readonly<'Immunization'>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  route?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  site?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  status?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  statusReason?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  subpotentReason?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
  vaccineCode: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
