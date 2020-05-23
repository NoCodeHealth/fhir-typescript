import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirProdCharacteristic } from './FhirProdCharacteristic'
import { FhirQuantity } from './FhirQuantity'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** The manufactured item as contained in the packaged medicinal product. */
export const FhirMedicinalProductManufactured: t.Type<
  FhirMedicinalProductManufactured,
  FhirMedicinalProductManufacturedOutput
> = t.recursion('FhirMedicinalProductManufactured', () =>
  t.intersection([
    t.type({
      /** The manufactured item as contained in the packaged medicinal product. */
      manufacturedDoseForm: t.readonly(FhirCodeableConcept),
      /** The manufactured item as contained in the packaged medicinal product. */
      quantity: t.readonly(FhirQuantity),
      /** The manufactured item as contained in the packaged medicinal product. */
      resourceType: t.readonly(t.literal('MedicinalProductManufactured')),
    }),
    t.partial({
      /** The manufactured item as contained in the packaged medicinal product. */
      _implicitRules: t.readonly(FhirElement),
      /** The manufactured item as contained in the packaged medicinal product. */
      _language: t.readonly(FhirElement),
      /** The manufactured item as contained in the packaged medicinal product. */
      contained: t.readonlyArray(FhirResourceList),
      /** The manufactured item as contained in the packaged medicinal product. */
      extension: t.readonlyArray(FhirExtension),
      /** The manufactured item as contained in the packaged medicinal product. */
      id: t.readonly(FhirId),
      /** The manufactured item as contained in the packaged medicinal product. */
      implicitRules: t.readonly(FhirUri),
      /** The manufactured item as contained in the packaged medicinal product. */
      ingredient: t.readonlyArray(FhirReference),
      /** The manufactured item as contained in the packaged medicinal product. */
      language: t.readonly(FhirCode),
      /** The manufactured item as contained in the packaged medicinal product. */
      manufacturer: t.readonlyArray(FhirReference),
      /** The manufactured item as contained in the packaged medicinal product. */
      meta: t.readonly(FhirMeta),
      /** The manufactured item as contained in the packaged medicinal product. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** The manufactured item as contained in the packaged medicinal product. */
      otherCharacteristics: t.readonlyArray(FhirCodeableConcept),
      /** The manufactured item as contained in the packaged medicinal product. */
      physicalCharacteristics: t.readonly(FhirProdCharacteristic),
      /** The manufactured item as contained in the packaged medicinal product. */
      text: t.readonly(FhirNarrative),
      /** The manufactured item as contained in the packaged medicinal product. */
      unitOfPresentation: t.readonly(FhirCodeableConcept),
    }),
  ])
)

/** The manufactured item as contained in the packaged medicinal product. */
export interface FhirMedicinalProductManufactured {
  /** The manufactured item as contained in the packaged medicinal product. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The manufactured item as contained in the packaged medicinal product. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The manufactured item as contained in the packaged medicinal product. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** The manufactured item as contained in the packaged medicinal product. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The manufactured item as contained in the packaged medicinal product. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** The manufactured item as contained in the packaged medicinal product. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The manufactured item as contained in the packaged medicinal product. */
  ingredient?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** The manufactured item as contained in the packaged medicinal product. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** The manufactured item as contained in the packaged medicinal product. */
  manufacturedDoseForm: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The manufactured item as contained in the packaged medicinal product. */
  manufacturer?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** The manufactured item as contained in the packaged medicinal product. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** The manufactured item as contained in the packaged medicinal product. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The manufactured item as contained in the packaged medicinal product. */
  otherCharacteristics?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The manufactured item as contained in the packaged medicinal product. */
  physicalCharacteristics?: Readonly<t.TypeOf<typeof FhirProdCharacteristic>>
  /** The manufactured item as contained in the packaged medicinal product. */
  quantity: Readonly<t.TypeOf<typeof FhirQuantity>>
  /** The manufactured item as contained in the packaged medicinal product. */
  resourceType: Readonly<'MedicinalProductManufactured'>
  /** The manufactured item as contained in the packaged medicinal product. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** The manufactured item as contained in the packaged medicinal product. */
  unitOfPresentation?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** The manufactured item as contained in the packaged medicinal product. */
export interface FhirMedicinalProductManufacturedOutput {
  /** The manufactured item as contained in the packaged medicinal product. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The manufactured item as contained in the packaged medicinal product. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The manufactured item as contained in the packaged medicinal product. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** The manufactured item as contained in the packaged medicinal product. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The manufactured item as contained in the packaged medicinal product. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** The manufactured item as contained in the packaged medicinal product. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The manufactured item as contained in the packaged medicinal product. */
  ingredient?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** The manufactured item as contained in the packaged medicinal product. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** The manufactured item as contained in the packaged medicinal product. */
  manufacturedDoseForm: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The manufactured item as contained in the packaged medicinal product. */
  manufacturer?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** The manufactured item as contained in the packaged medicinal product. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** The manufactured item as contained in the packaged medicinal product. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The manufactured item as contained in the packaged medicinal product. */
  otherCharacteristics?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The manufactured item as contained in the packaged medicinal product. */
  physicalCharacteristics?: Readonly<t.OutputOf<typeof FhirProdCharacteristic>>
  /** The manufactured item as contained in the packaged medicinal product. */
  quantity: Readonly<t.OutputOf<typeof FhirQuantity>>
  /** The manufactured item as contained in the packaged medicinal product. */
  resourceType: Readonly<'MedicinalProductManufactured'>
  /** The manufactured item as contained in the packaged medicinal product. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** The manufactured item as contained in the packaged medicinal product. */
  unitOfPresentation?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
