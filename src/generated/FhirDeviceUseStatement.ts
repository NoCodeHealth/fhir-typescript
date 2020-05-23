import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
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
import { FhirTiming } from './FhirTiming'
import { FhirUri } from './FhirUri'

/** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
export const FhirDeviceUseStatement: t.Type<FhirDeviceUseStatement, FhirDeviceUseStatementOutput> = t.recursion(
  'FhirDeviceUseStatement',
  () =>
    t.intersection([
      t.type({
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        device: t.readonly(FhirReference),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        resourceType: t.readonly(t.literal('DeviceUseStatement')),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        subject: t.readonly(FhirReference),
      }),
      t.partial({
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        _implicitRules: t.readonly(FhirElement),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        _language: t.readonly(FhirElement),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        _recordedOn: t.readonly(FhirElement),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        _status: t.readonly(FhirElement),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        _timingDateTime: t.readonly(FhirElement),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        basedOn: t.readonlyArray(FhirReference),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        bodySite: t.readonly(FhirCodeableConcept),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        contained: t.readonlyArray(FhirResourceList),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        derivedFrom: t.readonlyArray(FhirReference),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        extension: t.readonlyArray(FhirExtension),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        id: t.readonly(FhirId),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        identifier: t.readonlyArray(FhirIdentifier),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        implicitRules: t.readonly(FhirUri),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        language: t.readonly(FhirCode),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        meta: t.readonly(FhirMeta),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        note: t.readonlyArray(FhirAnnotation),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        reasonCode: t.readonlyArray(FhirCodeableConcept),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        reasonReference: t.readonlyArray(FhirReference),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        recordedOn: t.readonly(FhirDateTime),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        source: t.readonly(FhirReference),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        status: t.readonly(
          t.keyof({
            active: null,
            completed: null,
            'entered-in-error': null,
            intended: null,
            stopped: null,
            'on-hold': null,
          })
        ),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        text: t.readonly(FhirNarrative),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        timingDateTime: t.readonly(t.string),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        timingPeriod: t.readonly(FhirPeriod),
        /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
        timingTiming: t.readonly(FhirTiming),
      }),
    ])
)

/** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
export interface FhirDeviceUseStatement {
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  _recordedOn?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  _timingDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  basedOn?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  bodySite?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  derivedFrom?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  device: Readonly<t.TypeOf<typeof FhirReference>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  reasonCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  reasonReference?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  recordedOn?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  resourceType: Readonly<'DeviceUseStatement'>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  source?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  status?: Readonly<'active' | 'completed' | 'entered-in-error' | 'intended' | 'stopped' | 'on-hold'>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  subject: Readonly<t.TypeOf<typeof FhirReference>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  timingDateTime?: Readonly<string>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  timingPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  timingTiming?: Readonly<t.TypeOf<typeof FhirTiming>>
}
/** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
export interface FhirDeviceUseStatementOutput {
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  _recordedOn?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  _timingDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  basedOn?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  bodySite?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  derivedFrom?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  device: Readonly<t.OutputOf<typeof FhirReference>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  reasonCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  reasonReference?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  recordedOn?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  resourceType: Readonly<'DeviceUseStatement'>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  source?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  status?: Readonly<'active' | 'completed' | 'entered-in-error' | 'intended' | 'stopped' | 'on-hold'>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  subject: Readonly<t.OutputOf<typeof FhirReference>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  timingDateTime?: Readonly<string>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  timingPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
  timingTiming?: Readonly<t.OutputOf<typeof FhirTiming>>
}
