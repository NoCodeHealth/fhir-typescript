import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirInstant } from './FhirInstant'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirObservation_Component } from './FhirObservation_Component'
import { FhirObservation_ReferenceRange } from './FhirObservation_ReferenceRange'
import { FhirPeriod } from './FhirPeriod'
import { FhirQuantity } from './FhirQuantity'
import { FhirRange } from './FhirRange'
import { FhirRatio } from './FhirRatio'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirSampledData } from './FhirSampledData'
import { FhirTiming } from './FhirTiming'
import { FhirUri } from './FhirUri'

/** Measurements and simple assertions made about a patient, device or other subject. */
export const FhirObservation: t.Type<FhirObservation, FhirObservationOutput> = t.recursion('FhirObservation', () =>
  t.intersection([
    t.type({
      /** Measurements and simple assertions made about a patient, device or other subject. */
      code: t.readonly(FhirCodeableConcept),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      resourceType: t.readonly(t.literal('Observation')),
    }),
    t.partial({
      /** Measurements and simple assertions made about a patient, device or other subject. */
      _effectiveDateTime: t.readonly(FhirElement),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      _effectiveInstant: t.readonly(FhirElement),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      _implicitRules: t.readonly(FhirElement),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      _issued: t.readonly(FhirElement),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      _language: t.readonly(FhirElement),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      _status: t.readonly(FhirElement),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      _valueBoolean: t.readonly(FhirElement),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      _valueDateTime: t.readonly(FhirElement),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      _valueInteger: t.readonly(FhirElement),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      _valueString: t.readonly(FhirElement),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      _valueTime: t.readonly(FhirElement),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      basedOn: t.readonlyArray(FhirReference),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      bodySite: t.readonly(FhirCodeableConcept),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      category: t.readonlyArray(FhirCodeableConcept),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      component: t.readonlyArray(FhirObservation_Component),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      contained: t.readonlyArray(FhirResourceList),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      dataAbsentReason: t.readonly(FhirCodeableConcept),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      derivedFrom: t.readonlyArray(FhirReference),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      device: t.readonly(FhirReference),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      effectiveDateTime: t.readonly(t.string),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      effectiveInstant: t.readonly(t.string),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      effectivePeriod: t.readonly(FhirPeriod),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      effectiveTiming: t.readonly(FhirTiming),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      encounter: t.readonly(FhirReference),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      extension: t.readonlyArray(FhirExtension),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      focus: t.readonlyArray(FhirReference),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      hasMember: t.readonlyArray(FhirReference),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      id: t.readonly(FhirId),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      implicitRules: t.readonly(FhirUri),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      interpretation: t.readonlyArray(FhirCodeableConcept),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      issued: t.readonly(FhirInstant),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      language: t.readonly(FhirCode),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      meta: t.readonly(FhirMeta),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      method: t.readonly(FhirCodeableConcept),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      note: t.readonlyArray(FhirAnnotation),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      partOf: t.readonlyArray(FhirReference),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      performer: t.readonlyArray(FhirReference),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      referenceRange: t.readonlyArray(FhirObservation_ReferenceRange),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      specimen: t.readonly(FhirReference),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      status: t.readonly(
        t.keyof({
          registered: null,
          preliminary: null,
          final: null,
          amended: null,
          corrected: null,
          cancelled: null,
          'entered-in-error': null,
          unknown: null,
        })
      ),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      subject: t.readonly(FhirReference),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      text: t.readonly(FhirNarrative),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      valueBoolean: t.readonly(t.boolean),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      valueCodeableConcept: t.readonly(FhirCodeableConcept),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      valueDateTime: t.readonly(t.string),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      valueInteger: t.readonly(t.number),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      valuePeriod: t.readonly(FhirPeriod),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      valueQuantity: t.readonly(FhirQuantity),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      valueRange: t.readonly(FhirRange),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      valueRatio: t.readonly(FhirRatio),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      valueSampledData: t.readonly(FhirSampledData),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      valueString: t.readonly(t.string),
      /** Measurements and simple assertions made about a patient, device or other subject. */
      valueTime: t.readonly(t.string),
    }),
  ])
)

/** Measurements and simple assertions made about a patient, device or other subject. */
export interface FhirObservation {
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _effectiveDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _effectiveInstant?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _issued?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _valueBoolean?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _valueDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _valueInteger?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _valueString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _valueTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  basedOn?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  bodySite?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  category?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  code: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  component?: ReadonlyArray<t.TypeOf<typeof FhirObservation_Component>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  dataAbsentReason?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  derivedFrom?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  device?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  effectiveDateTime?: Readonly<string>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  effectiveInstant?: Readonly<string>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  effectivePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  effectiveTiming?: Readonly<t.TypeOf<typeof FhirTiming>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  encounter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  focus?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  hasMember?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  interpretation?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  issued?: Readonly<t.TypeOf<typeof FhirInstant>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  method?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  partOf?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  performer?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  referenceRange?: ReadonlyArray<t.TypeOf<typeof FhirObservation_ReferenceRange>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  resourceType: Readonly<'Observation'>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  specimen?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  status?: Readonly<
    'registered' | 'preliminary' | 'final' | 'amended' | 'corrected' | 'cancelled' | 'entered-in-error' | 'unknown'
  >
  /** Measurements and simple assertions made about a patient, device or other subject. */
  subject?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueBoolean?: Readonly<boolean>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueDateTime?: Readonly<string>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueInteger?: Readonly<number>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valuePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueQuantity?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueRatio?: Readonly<t.TypeOf<typeof FhirRatio>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueSampledData?: Readonly<t.TypeOf<typeof FhirSampledData>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueString?: Readonly<string>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueTime?: Readonly<string>
}
/** Measurements and simple assertions made about a patient, device or other subject. */
export interface FhirObservationOutput {
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _effectiveDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _effectiveInstant?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _issued?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _valueBoolean?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _valueDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _valueInteger?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _valueString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  _valueTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  basedOn?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  bodySite?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  category?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  code: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  component?: ReadonlyArray<t.OutputOf<typeof FhirObservation_Component>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  dataAbsentReason?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  derivedFrom?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  device?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  effectiveDateTime?: Readonly<string>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  effectiveInstant?: Readonly<string>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  effectivePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  effectiveTiming?: Readonly<t.OutputOf<typeof FhirTiming>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  encounter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  focus?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  hasMember?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  interpretation?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  issued?: Readonly<t.OutputOf<typeof FhirInstant>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  method?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  partOf?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  performer?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  referenceRange?: ReadonlyArray<t.OutputOf<typeof FhirObservation_ReferenceRange>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  resourceType: Readonly<'Observation'>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  specimen?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  status?: Readonly<
    'registered' | 'preliminary' | 'final' | 'amended' | 'corrected' | 'cancelled' | 'entered-in-error' | 'unknown'
  >
  /** Measurements and simple assertions made about a patient, device or other subject. */
  subject?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueBoolean?: Readonly<boolean>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueDateTime?: Readonly<string>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueInteger?: Readonly<number>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valuePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueQuantity?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueRatio?: Readonly<t.OutputOf<typeof FhirRatio>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueSampledData?: Readonly<t.OutputOf<typeof FhirSampledData>>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueString?: Readonly<string>
  /** Measurements and simple assertions made about a patient, device or other subject. */
  valueTime?: Readonly<string>
}
