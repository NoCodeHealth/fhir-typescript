import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDataRequirement } from './FhirDataRequirement'
import { FhirDuration } from './FhirDuration'
import { FhirElement } from './FhirElement'
import { FhirExpression } from './FhirExpression'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'
import { FhirTiming } from './FhirTiming'
import { FhirTriggerDefinition } from './FhirTriggerDefinition'
import { FhirUsageContext } from './FhirUsageContext'

/** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
export const FhirEvidenceVariable_Characteristic: t.Type<
  FhirEvidenceVariable_Characteristic,
  FhirEvidenceVariable_CharacteristicOutput
> = t.recursion('FhirEvidenceVariable_Characteristic', () =>
  t.partial({
    /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    _definitionCanonical: t.readonly(FhirElement),
    /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    _description: t.readonly(FhirElement),
    /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    _exclude: t.readonly(FhirElement),
    /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    _groupMeasure: t.readonly(FhirElement),
    /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    _participantEffectiveDateTime: t.readonly(FhirElement),
    /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    definitionCanonical: t.readonly(t.string),
    /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    definitionCodeableConcept: t.readonly(FhirCodeableConcept),
    /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    definitionDataRequirement: t.readonly(FhirDataRequirement),
    /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    definitionExpression: t.readonly(FhirExpression),
    /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    definitionReference: t.readonly(FhirReference),
    /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    definitionTriggerDefinition: t.readonly(FhirTriggerDefinition),
    /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    description: t.readonly(FhirString),
    /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    exclude: t.readonly(FhirBoolean),
    /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    extension: t.readonlyArray(FhirExtension),
    /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    groupMeasure: t.readonly(
      t.keyof({
        mean: null,
        median: null,
        'mean-of-mean': null,
        'mean-of-median': null,
        'median-of-mean': null,
        'median-of-median': null,
      })
    ),
    /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    id: t.readonly(FhirString),
    /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    participantEffectiveDateTime: t.readonly(t.string),
    /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    participantEffectiveDuration: t.readonly(FhirDuration),
    /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    participantEffectivePeriod: t.readonly(FhirPeriod),
    /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    participantEffectiveTiming: t.readonly(FhirTiming),
    /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    timeFromStart: t.readonly(FhirDuration),
    /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
    usageContext: t.readonlyArray(FhirUsageContext),
  })
)

/** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
export interface FhirEvidenceVariable_Characteristic {
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _definitionCanonical?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _exclude?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _groupMeasure?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _participantEffectiveDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  definitionCanonical?: Readonly<string>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  definitionCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  definitionDataRequirement?: Readonly<t.TypeOf<typeof FhirDataRequirement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  definitionExpression?: Readonly<t.TypeOf<typeof FhirExpression>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  definitionReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  definitionTriggerDefinition?: Readonly<t.TypeOf<typeof FhirTriggerDefinition>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  exclude?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  groupMeasure?: Readonly<'mean' | 'median' | 'mean-of-mean' | 'mean-of-median' | 'median-of-mean' | 'median-of-median'>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  participantEffectiveDateTime?: Readonly<string>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  participantEffectiveDuration?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  participantEffectivePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  participantEffectiveTiming?: Readonly<t.TypeOf<typeof FhirTiming>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  timeFromStart?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  usageContext?: ReadonlyArray<t.TypeOf<typeof FhirUsageContext>>
}
/** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
export interface FhirEvidenceVariable_CharacteristicOutput {
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _definitionCanonical?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _exclude?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _groupMeasure?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  _participantEffectiveDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  definitionCanonical?: Readonly<string>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  definitionCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  definitionDataRequirement?: Readonly<t.OutputOf<typeof FhirDataRequirement>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  definitionExpression?: Readonly<t.OutputOf<typeof FhirExpression>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  definitionReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  definitionTriggerDefinition?: Readonly<t.OutputOf<typeof FhirTriggerDefinition>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  exclude?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  groupMeasure?: Readonly<'mean' | 'median' | 'mean-of-mean' | 'mean-of-median' | 'median-of-mean' | 'median-of-median'>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  participantEffectiveDateTime?: Readonly<string>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  participantEffectiveDuration?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  participantEffectivePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  participantEffectiveTiming?: Readonly<t.OutputOf<typeof FhirTiming>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  timeFromStart?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
  usageContext?: ReadonlyArray<t.OutputOf<typeof FhirUsageContext>>
}
