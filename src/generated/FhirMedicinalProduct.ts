import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirCoding } from './FhirCoding'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMarketingStatus } from './FhirMarketingStatus'
import { FhirMedicinalProduct_ManufacturingBusinessOperation } from './FhirMedicinalProduct_ManufacturingBusinessOperation'
import { FhirMedicinalProduct_Name } from './FhirMedicinalProduct_Name'
import { FhirMedicinalProduct_SpecialDesignation } from './FhirMedicinalProduct_SpecialDesignation'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
export const FhirMedicinalProduct: t.Type<FhirMedicinalProduct, FhirMedicinalProductOutput> = t.recursion(
  'FhirMedicinalProduct',
  () =>
    t.intersection([
      t.type({
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        name: t.readonlyArray(FhirMedicinalProduct_Name),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        resourceType: t.readonly(t.literal('MedicinalProduct')),
      }),
      t.partial({
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        _implicitRules: t.readonly(FhirElement),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        _language: t.readonly(FhirElement),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        _specialMeasures: t.readonlyArray(FhirElement),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        additionalMonitoringIndicator: t.readonly(FhirCodeableConcept),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        attachedDocument: t.readonlyArray(FhirReference),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        clinicalTrial: t.readonlyArray(FhirReference),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        combinedPharmaceuticalDoseForm: t.readonly(FhirCodeableConcept),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        contact: t.readonlyArray(FhirReference),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        contained: t.readonlyArray(FhirResourceList),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        crossReference: t.readonlyArray(FhirIdentifier),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        domain: t.readonly(FhirCoding),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        extension: t.readonlyArray(FhirExtension),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        id: t.readonly(FhirId),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        identifier: t.readonlyArray(FhirIdentifier),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        implicitRules: t.readonly(FhirUri),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        language: t.readonly(FhirCode),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        legalStatusOfSupply: t.readonly(FhirCodeableConcept),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        manufacturingBusinessOperation: t.readonlyArray(FhirMedicinalProduct_ManufacturingBusinessOperation),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        marketingStatus: t.readonlyArray(FhirMarketingStatus),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        masterFile: t.readonlyArray(FhirReference),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        meta: t.readonly(FhirMeta),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        packagedMedicinalProduct: t.readonlyArray(FhirReference),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        paediatricUseIndicator: t.readonly(FhirCodeableConcept),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        pharmaceuticalProduct: t.readonlyArray(FhirReference),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        productClassification: t.readonlyArray(FhirCodeableConcept),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        specialDesignation: t.readonlyArray(FhirMedicinalProduct_SpecialDesignation),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        specialMeasures: t.readonlyArray(FhirString),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        text: t.readonly(FhirNarrative),
        /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
        type: t.readonly(FhirCodeableConcept),
      }),
    ])
)

/** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
export interface FhirMedicinalProduct {
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  _specialMeasures?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  additionalMonitoringIndicator?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  attachedDocument?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  clinicalTrial?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  combinedPharmaceuticalDoseForm?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  crossReference?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  domain?: Readonly<t.TypeOf<typeof FhirCoding>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  legalStatusOfSupply?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  manufacturingBusinessOperation?: ReadonlyArray<t.TypeOf<typeof FhirMedicinalProduct_ManufacturingBusinessOperation>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  marketingStatus?: ReadonlyArray<t.TypeOf<typeof FhirMarketingStatus>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  masterFile?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  name: ReadonlyArray<t.TypeOf<typeof FhirMedicinalProduct_Name>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  packagedMedicinalProduct?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  paediatricUseIndicator?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  pharmaceuticalProduct?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  productClassification?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  resourceType: Readonly<'MedicinalProduct'>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  specialDesignation?: ReadonlyArray<t.TypeOf<typeof FhirMedicinalProduct_SpecialDesignation>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  specialMeasures?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
export interface FhirMedicinalProductOutput {
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  _specialMeasures?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  additionalMonitoringIndicator?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  attachedDocument?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  clinicalTrial?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  combinedPharmaceuticalDoseForm?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  crossReference?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  domain?: Readonly<t.OutputOf<typeof FhirCoding>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  legalStatusOfSupply?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  manufacturingBusinessOperation?: ReadonlyArray<t.OutputOf<typeof FhirMedicinalProduct_ManufacturingBusinessOperation>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  marketingStatus?: ReadonlyArray<t.OutputOf<typeof FhirMarketingStatus>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  masterFile?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  name: ReadonlyArray<t.OutputOf<typeof FhirMedicinalProduct_Name>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  packagedMedicinalProduct?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  paediatricUseIndicator?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  pharmaceuticalProduct?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  productClassification?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  resourceType: Readonly<'MedicinalProduct'>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  specialDesignation?: ReadonlyArray<t.OutputOf<typeof FhirMedicinalProduct_SpecialDesignation>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  specialMeasures?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
