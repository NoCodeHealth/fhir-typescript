import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPopulation } from './FhirPopulation'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** Describe the undesirable effects of the medicinal product. */
export const FhirMedicinalProductUndesirableEffect: t.Type<
  FhirMedicinalProductUndesirableEffect,
  FhirMedicinalProductUndesirableEffectOutput
> = t.recursion('FhirMedicinalProductUndesirableEffect', () =>
  t.intersection([
    t.type({
      /** Describe the undesirable effects of the medicinal product. */
      resourceType: t.readonly(t.literal('MedicinalProductUndesirableEffect')),
    }),
    t.partial({
      /** Describe the undesirable effects of the medicinal product. */
      _implicitRules: t.readonly(FhirElement),
      /** Describe the undesirable effects of the medicinal product. */
      _language: t.readonly(FhirElement),
      /** Describe the undesirable effects of the medicinal product. */
      classification: t.readonly(FhirCodeableConcept),
      /** Describe the undesirable effects of the medicinal product. */
      contained: t.readonlyArray(FhirResourceList),
      /** Describe the undesirable effects of the medicinal product. */
      extension: t.readonlyArray(FhirExtension),
      /** Describe the undesirable effects of the medicinal product. */
      frequencyOfOccurrence: t.readonly(FhirCodeableConcept),
      /** Describe the undesirable effects of the medicinal product. */
      id: t.readonly(FhirId),
      /** Describe the undesirable effects of the medicinal product. */
      implicitRules: t.readonly(FhirUri),
      /** Describe the undesirable effects of the medicinal product. */
      language: t.readonly(FhirCode),
      /** Describe the undesirable effects of the medicinal product. */
      meta: t.readonly(FhirMeta),
      /** Describe the undesirable effects of the medicinal product. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Describe the undesirable effects of the medicinal product. */
      population: t.readonlyArray(FhirPopulation),
      /** Describe the undesirable effects of the medicinal product. */
      subject: t.readonlyArray(FhirReference),
      /** Describe the undesirable effects of the medicinal product. */
      symptomConditionEffect: t.readonly(FhirCodeableConcept),
      /** Describe the undesirable effects of the medicinal product. */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** Describe the undesirable effects of the medicinal product. */
export interface FhirMedicinalProductUndesirableEffect {
  /** Describe the undesirable effects of the medicinal product. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describe the undesirable effects of the medicinal product. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describe the undesirable effects of the medicinal product. */
  classification?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describe the undesirable effects of the medicinal product. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Describe the undesirable effects of the medicinal product. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describe the undesirable effects of the medicinal product. */
  frequencyOfOccurrence?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describe the undesirable effects of the medicinal product. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Describe the undesirable effects of the medicinal product. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Describe the undesirable effects of the medicinal product. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Describe the undesirable effects of the medicinal product. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Describe the undesirable effects of the medicinal product. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describe the undesirable effects of the medicinal product. */
  population?: ReadonlyArray<t.TypeOf<typeof FhirPopulation>>
  /** Describe the undesirable effects of the medicinal product. */
  resourceType: Readonly<'MedicinalProductUndesirableEffect'>
  /** Describe the undesirable effects of the medicinal product. */
  subject?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Describe the undesirable effects of the medicinal product. */
  symptomConditionEffect?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describe the undesirable effects of the medicinal product. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** Describe the undesirable effects of the medicinal product. */
export interface FhirMedicinalProductUndesirableEffectOutput {
  /** Describe the undesirable effects of the medicinal product. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describe the undesirable effects of the medicinal product. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describe the undesirable effects of the medicinal product. */
  classification?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describe the undesirable effects of the medicinal product. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Describe the undesirable effects of the medicinal product. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describe the undesirable effects of the medicinal product. */
  frequencyOfOccurrence?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describe the undesirable effects of the medicinal product. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Describe the undesirable effects of the medicinal product. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Describe the undesirable effects of the medicinal product. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Describe the undesirable effects of the medicinal product. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Describe the undesirable effects of the medicinal product. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describe the undesirable effects of the medicinal product. */
  population?: ReadonlyArray<t.OutputOf<typeof FhirPopulation>>
  /** Describe the undesirable effects of the medicinal product. */
  resourceType: Readonly<'MedicinalProductUndesirableEffect'>
  /** Describe the undesirable effects of the medicinal product. */
  subject?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Describe the undesirable effects of the medicinal product. */
  symptomConditionEffect?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describe the undesirable effects of the medicinal product. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
