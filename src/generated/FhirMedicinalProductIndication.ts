import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirMedicinalProductIndication_OtherTherapy } from './FhirMedicinalProductIndication_OtherTherapy'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPopulation } from './FhirPopulation'
import { FhirQuantity } from './FhirQuantity'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** Indication for the Medicinal Product. */
export const FhirMedicinalProductIndication: t.Type<
  FhirMedicinalProductIndication,
  FhirMedicinalProductIndicationOutput
> = t.recursion('FhirMedicinalProductIndication', () =>
  t.intersection([
    t.type({
      /** Indication for the Medicinal Product. */
      resourceType: t.readonly(t.literal('MedicinalProductIndication')),
    }),
    t.partial({
      /** Indication for the Medicinal Product. */
      _implicitRules: t.readonly(FhirElement),
      /** Indication for the Medicinal Product. */
      _language: t.readonly(FhirElement),
      /** Indication for the Medicinal Product. */
      comorbidity: t.readonlyArray(FhirCodeableConcept),
      /** Indication for the Medicinal Product. */
      contained: t.readonlyArray(FhirResourceList),
      /** Indication for the Medicinal Product. */
      diseaseStatus: t.readonly(FhirCodeableConcept),
      /** Indication for the Medicinal Product. */
      diseaseSymptomProcedure: t.readonly(FhirCodeableConcept),
      /** Indication for the Medicinal Product. */
      duration: t.readonly(FhirQuantity),
      /** Indication for the Medicinal Product. */
      extension: t.readonlyArray(FhirExtension),
      /** Indication for the Medicinal Product. */
      id: t.readonly(FhirId),
      /** Indication for the Medicinal Product. */
      implicitRules: t.readonly(FhirUri),
      /** Indication for the Medicinal Product. */
      intendedEffect: t.readonly(FhirCodeableConcept),
      /** Indication for the Medicinal Product. */
      language: t.readonly(FhirCode),
      /** Indication for the Medicinal Product. */
      meta: t.readonly(FhirMeta),
      /** Indication for the Medicinal Product. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Indication for the Medicinal Product. */
      otherTherapy: t.readonlyArray(FhirMedicinalProductIndication_OtherTherapy),
      /** Indication for the Medicinal Product. */
      population: t.readonlyArray(FhirPopulation),
      /** Indication for the Medicinal Product. */
      subject: t.readonlyArray(FhirReference),
      /** Indication for the Medicinal Product. */
      text: t.readonly(FhirNarrative),
      /** Indication for the Medicinal Product. */
      undesirableEffect: t.readonlyArray(FhirReference),
    }),
  ])
)

/** Indication for the Medicinal Product. */
export interface FhirMedicinalProductIndication {
  /** Indication for the Medicinal Product. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Indication for the Medicinal Product. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Indication for the Medicinal Product. */
  comorbidity?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Indication for the Medicinal Product. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Indication for the Medicinal Product. */
  diseaseStatus?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Indication for the Medicinal Product. */
  diseaseSymptomProcedure?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Indication for the Medicinal Product. */
  duration?: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** Indication for the Medicinal Product. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Indication for the Medicinal Product. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Indication for the Medicinal Product. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Indication for the Medicinal Product. */
  intendedEffect?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Indication for the Medicinal Product. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Indication for the Medicinal Product. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Indication for the Medicinal Product. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Indication for the Medicinal Product. */
  otherTherapy?: ReadonlyArray<t.TypeOf<typeof FhirMedicinalProductIndication_OtherTherapy>>
  /** Indication for the Medicinal Product. */
  population?: ReadonlyArray<t.TypeOf<typeof FhirPopulation>>
  /** Indication for the Medicinal Product. */
  resourceType: Readonly<'MedicinalProductIndication'>
  /** Indication for the Medicinal Product. */
  subject?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Indication for the Medicinal Product. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** Indication for the Medicinal Product. */
  undesirableEffect?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
}
/** Indication for the Medicinal Product. */
export interface FhirMedicinalProductIndicationOutput {
  /** Indication for the Medicinal Product. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Indication for the Medicinal Product. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Indication for the Medicinal Product. */
  comorbidity?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Indication for the Medicinal Product. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Indication for the Medicinal Product. */
  diseaseStatus?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Indication for the Medicinal Product. */
  diseaseSymptomProcedure?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Indication for the Medicinal Product. */
  duration?: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** Indication for the Medicinal Product. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Indication for the Medicinal Product. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Indication for the Medicinal Product. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Indication for the Medicinal Product. */
  intendedEffect?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Indication for the Medicinal Product. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Indication for the Medicinal Product. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Indication for the Medicinal Product. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Indication for the Medicinal Product. */
  otherTherapy?: ReadonlyArray<t.OutputOf<typeof FhirMedicinalProductIndication_OtherTherapy>>
  /** Indication for the Medicinal Product. */
  population?: ReadonlyArray<t.OutputOf<typeof FhirPopulation>>
  /** Indication for the Medicinal Product. */
  resourceType: Readonly<'MedicinalProductIndication'>
  /** Indication for the Medicinal Product. */
  subject?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Indication for the Medicinal Product. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** Indication for the Medicinal Product. */
  undesirableEffect?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
}
