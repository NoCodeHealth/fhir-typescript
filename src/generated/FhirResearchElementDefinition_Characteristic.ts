import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDataRequirement } from './FhirDataRequirement'
import { FhirDuration } from './FhirDuration'
import { FhirElement } from './FhirElement'
import { FhirExpression } from './FhirExpression'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirString } from './FhirString'
import { FhirTiming } from './FhirTiming'
import { FhirUsageContext } from './FhirUsageContext'

/** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
export const FhirResearchElementDefinition_Characteristic: t.Type<
  FhirResearchElementDefinition_Characteristic,
  FhirResearchElementDefinition_CharacteristicOutput
> = t.recursion('FhirResearchElementDefinition_Characteristic', () =>
  t.partial({
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    _definitionCanonical: t.readonly(FhirElement),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    _exclude: t.readonly(FhirElement),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    _participantEffectiveDateTime: t.readonly(FhirElement),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    _participantEffectiveDescription: t.readonly(FhirElement),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    _participantEffectiveGroupMeasure: t.readonly(FhirElement),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    _studyEffectiveDateTime: t.readonly(FhirElement),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    _studyEffectiveDescription: t.readonly(FhirElement),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    _studyEffectiveGroupMeasure: t.readonly(FhirElement),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    definitionCanonical: t.readonly(t.string),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    definitionCodeableConcept: t.readonly(FhirCodeableConcept),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    definitionDataRequirement: t.readonly(FhirDataRequirement),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    definitionExpression: t.readonly(FhirExpression),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    exclude: t.readonly(FhirBoolean),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    extension: t.readonlyArray(FhirExtension),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    id: t.readonly(FhirString),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    participantEffectiveDateTime: t.readonly(t.string),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    participantEffectiveDescription: t.readonly(FhirString),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    participantEffectiveDuration: t.readonly(FhirDuration),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    participantEffectiveGroupMeasure: t.readonly(
      t.keyof({
        mean: null,
        median: null,
        'mean-of-mean': null,
        'mean-of-median': null,
        'median-of-mean': null,
        'median-of-median': null,
      })
    ),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    participantEffectivePeriod: t.readonly(FhirPeriod),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    participantEffectiveTimeFromStart: t.readonly(FhirDuration),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    participantEffectiveTiming: t.readonly(FhirTiming),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    studyEffectiveDateTime: t.readonly(t.string),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    studyEffectiveDescription: t.readonly(FhirString),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    studyEffectiveDuration: t.readonly(FhirDuration),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    studyEffectiveGroupMeasure: t.readonly(
      t.keyof({
        mean: null,
        median: null,
        'mean-of-mean': null,
        'mean-of-median': null,
        'median-of-mean': null,
        'median-of-median': null,
      })
    ),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    studyEffectivePeriod: t.readonly(FhirPeriod),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    studyEffectiveTimeFromStart: t.readonly(FhirDuration),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    studyEffectiveTiming: t.readonly(FhirTiming),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    unitOfMeasure: t.readonly(FhirCodeableConcept),
    /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    usageContext: t.readonlyArray(FhirUsageContext),
  })
)

/** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
export interface FhirResearchElementDefinition_Characteristic {
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _definitionCanonical?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _exclude?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _participantEffectiveDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _participantEffectiveDescription?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _participantEffectiveGroupMeasure?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _studyEffectiveDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _studyEffectiveDescription?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _studyEffectiveGroupMeasure?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  definitionCanonical?: Readonly<string>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  definitionCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  definitionDataRequirement?: Readonly<t.TypeOf<typeof FhirDataRequirement>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  definitionExpression?: Readonly<t.TypeOf<typeof FhirExpression>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  exclude?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  participantEffectiveDateTime?: Readonly<string>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  participantEffectiveDescription?: Readonly<t.TypeOf<typeof FhirString>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  participantEffectiveDuration?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  participantEffectiveGroupMeasure?: Readonly<
    'mean' | 'median' | 'mean-of-mean' | 'mean-of-median' | 'median-of-mean' | 'median-of-median'
  >
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  participantEffectivePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  participantEffectiveTimeFromStart?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  participantEffectiveTiming?: Readonly<t.TypeOf<typeof FhirTiming>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  studyEffectiveDateTime?: Readonly<string>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  studyEffectiveDescription?: Readonly<t.TypeOf<typeof FhirString>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  studyEffectiveDuration?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  studyEffectiveGroupMeasure?: Readonly<
    'mean' | 'median' | 'mean-of-mean' | 'mean-of-median' | 'median-of-mean' | 'median-of-median'
  >
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  studyEffectivePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  studyEffectiveTimeFromStart?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  studyEffectiveTiming?: Readonly<t.TypeOf<typeof FhirTiming>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  unitOfMeasure?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  usageContext?: ReadonlyArray<t.TypeOf<typeof FhirUsageContext>>
}
/** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
export interface FhirResearchElementDefinition_CharacteristicOutput {
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _definitionCanonical?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _exclude?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _participantEffectiveDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _participantEffectiveDescription?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _participantEffectiveGroupMeasure?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _studyEffectiveDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _studyEffectiveDescription?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _studyEffectiveGroupMeasure?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  definitionCanonical?: Readonly<string>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  definitionCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  definitionDataRequirement?: Readonly<t.OutputOf<typeof FhirDataRequirement>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  definitionExpression?: Readonly<t.OutputOf<typeof FhirExpression>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  exclude?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  participantEffectiveDateTime?: Readonly<string>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  participantEffectiveDescription?: Readonly<t.OutputOf<typeof FhirString>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  participantEffectiveDuration?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  participantEffectiveGroupMeasure?: Readonly<
    'mean' | 'median' | 'mean-of-mean' | 'mean-of-median' | 'median-of-mean' | 'median-of-median'
  >
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  participantEffectivePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  participantEffectiveTimeFromStart?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  participantEffectiveTiming?: Readonly<t.OutputOf<typeof FhirTiming>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  studyEffectiveDateTime?: Readonly<string>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  studyEffectiveDescription?: Readonly<t.OutputOf<typeof FhirString>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  studyEffectiveDuration?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  studyEffectiveGroupMeasure?: Readonly<
    'mean' | 'median' | 'mean-of-mean' | 'mean-of-median' | 'median-of-mean' | 'median-of-median'
  >
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  studyEffectivePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  studyEffectiveTimeFromStart?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  studyEffectiveTiming?: Readonly<t.OutputOf<typeof FhirTiming>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  unitOfMeasure?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  usageContext?: ReadonlyArray<t.OutputOf<typeof FhirUsageContext>>
}
