import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirMedicinalProductContraindication_OtherTherapy } from './FhirMedicinalProductContraindication_OtherTherapy'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPopulation } from './FhirPopulation'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
export const FhirMedicinalProductContraindication: t.Type<
  FhirMedicinalProductContraindication,
  FhirMedicinalProductContraindicationOutput
> = t.recursion('FhirMedicinalProductContraindication', () =>
  t.intersection([
    t.type({
      /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
      resourceType: t.readonly(t.literal('MedicinalProductContraindication')),
    }),
    t.partial({
      /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
      _implicitRules: t.readonly(FhirElement),
      /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
      _language: t.readonly(FhirElement),
      /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
      comorbidity: t.readonlyArray(FhirCodeableConcept),
      /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
      contained: t.readonlyArray(FhirResourceList),
      /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
      disease: t.readonly(FhirCodeableConcept),
      /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
      diseaseStatus: t.readonly(FhirCodeableConcept),
      /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
      extension: t.readonlyArray(FhirExtension),
      /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
      id: t.readonly(FhirId),
      /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
      implicitRules: t.readonly(FhirUri),
      /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
      language: t.readonly(FhirCode),
      /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
      meta: t.readonly(FhirMeta),
      /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
      otherTherapy: t.readonlyArray(FhirMedicinalProductContraindication_OtherTherapy),
      /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
      population: t.readonlyArray(FhirPopulation),
      /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
      subject: t.readonlyArray(FhirReference),
      /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
      text: t.readonly(FhirNarrative),
      /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
      therapeuticIndication: t.readonlyArray(FhirReference),
    }),
  ])
)

/** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
export interface FhirMedicinalProductContraindication {
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  comorbidity?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  disease?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  diseaseStatus?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  otherTherapy?: ReadonlyArray<t.TypeOf<typeof FhirMedicinalProductContraindication_OtherTherapy>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  population?: ReadonlyArray<t.TypeOf<typeof FhirPopulation>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  resourceType: Readonly<'MedicinalProductContraindication'>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  subject?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  therapeuticIndication?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
}
/** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
export interface FhirMedicinalProductContraindicationOutput {
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  comorbidity?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  disease?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  diseaseStatus?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  otherTherapy?: ReadonlyArray<t.OutputOf<typeof FhirMedicinalProductContraindication_OtherTherapy>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  population?: ReadonlyArray<t.OutputOf<typeof FhirPopulation>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  resourceType: Readonly<'MedicinalProductContraindication'>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  subject?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
  therapeuticIndication?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
}
