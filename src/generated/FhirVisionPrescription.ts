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
import { FhirVisionPrescription_LensSpecification } from './FhirVisionPrescription_LensSpecification'

/** An authorization for the provision of glasses and/or contact lenses to a patient. */
export const FhirVisionPrescription: t.Type<FhirVisionPrescription, FhirVisionPrescriptionOutput> = t.recursion(
  'FhirVisionPrescription',
  () =>
    t.intersection([
      t.type({
        /** An authorization for the provision of glasses and/or contact lenses to a patient. */
        lensSpecification: t.readonlyArray(FhirVisionPrescription_LensSpecification),
        /** An authorization for the provision of glasses and/or contact lenses to a patient. */
        patient: t.readonly(FhirReference),
        /** An authorization for the provision of glasses and/or contact lenses to a patient. */
        prescriber: t.readonly(FhirReference),
        /** An authorization for the provision of glasses and/or contact lenses to a patient. */
        resourceType: t.readonly(t.literal('VisionPrescription')),
      }),
      t.partial({
        /** An authorization for the provision of glasses and/or contact lenses to a patient. */
        _created: t.readonly(FhirElement),
        /** An authorization for the provision of glasses and/or contact lenses to a patient. */
        _dateWritten: t.readonly(FhirElement),
        /** An authorization for the provision of glasses and/or contact lenses to a patient. */
        _implicitRules: t.readonly(FhirElement),
        /** An authorization for the provision of glasses and/or contact lenses to a patient. */
        _language: t.readonly(FhirElement),
        /** An authorization for the provision of glasses and/or contact lenses to a patient. */
        _status: t.readonly(FhirElement),
        /** An authorization for the provision of glasses and/or contact lenses to a patient. */
        contained: t.readonlyArray(FhirResourceList),
        /** An authorization for the provision of glasses and/or contact lenses to a patient. */
        created: t.readonly(FhirDateTime),
        /** An authorization for the provision of glasses and/or contact lenses to a patient. */
        dateWritten: t.readonly(FhirDateTime),
        /** An authorization for the provision of glasses and/or contact lenses to a patient. */
        encounter: t.readonly(FhirReference),
        /** An authorization for the provision of glasses and/or contact lenses to a patient. */
        extension: t.readonlyArray(FhirExtension),
        /** An authorization for the provision of glasses and/or contact lenses to a patient. */
        id: t.readonly(FhirId),
        /** An authorization for the provision of glasses and/or contact lenses to a patient. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** An authorization for the provision of glasses and/or contact lenses to a patient. */
        implicitRules: t.readonly(FhirUri),
        /** An authorization for the provision of glasses and/or contact lenses to a patient. */
        language: t.readonly(FhirCode),
        /** An authorization for the provision of glasses and/or contact lenses to a patient. */
        meta: t.readonly(FhirMeta),
        /** An authorization for the provision of glasses and/or contact lenses to a patient. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** An authorization for the provision of glasses and/or contact lenses to a patient. */
        status: t.readonly(FhirCode),
        /** An authorization for the provision of glasses and/or contact lenses to a patient. */
        text: t.readonly(FhirNarrative),
      }),
    ])
)

/** An authorization for the provision of glasses and/or contact lenses to a patient. */
export interface FhirVisionPrescription {
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _created?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _dateWritten?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  created?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  dateWritten?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  encounter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  lensSpecification: ReadonlyArray<t.TypeOf<typeof FhirVisionPrescription_LensSpecification>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  patient: Readonly<t.TypeOf<typeof FhirReference>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  prescriber: Readonly<t.TypeOf<typeof FhirReference>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  resourceType: Readonly<'VisionPrescription'>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  status?: Readonly<t.TypeOf<typeof FhirCode>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** An authorization for the provision of glasses and/or contact lenses to a patient. */
export interface FhirVisionPrescriptionOutput {
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _created?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _dateWritten?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  created?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  dateWritten?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  encounter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  lensSpecification: ReadonlyArray<t.OutputOf<typeof FhirVisionPrescription_LensSpecification>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  patient: Readonly<t.OutputOf<typeof FhirReference>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  prescriber: Readonly<t.OutputOf<typeof FhirReference>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  resourceType: Readonly<'VisionPrescription'>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  status?: Readonly<t.OutputOf<typeof FhirCode>>
  /** An authorization for the provision of glasses and/or contact lenses to a patient. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
