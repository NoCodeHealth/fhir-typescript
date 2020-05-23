import * as t from 'io-ts'
import { FhirBiologicallyDerivedProduct_Collection } from './FhirBiologicallyDerivedProduct_Collection'
import { FhirBiologicallyDerivedProduct_Manipulation } from './FhirBiologicallyDerivedProduct_Manipulation'
import { FhirBiologicallyDerivedProduct_Processing } from './FhirBiologicallyDerivedProduct_Processing'
import { FhirBiologicallyDerivedProduct_Storage } from './FhirBiologicallyDerivedProduct_Storage'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirInteger } from './FhirInteger'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
export const FhirBiologicallyDerivedProduct: t.Type<
  FhirBiologicallyDerivedProduct,
  FhirBiologicallyDerivedProductOutput
> = t.recursion('FhirBiologicallyDerivedProduct', () =>
  t.intersection([
    t.type({
      /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
      resourceType: t.readonly(t.literal('BiologicallyDerivedProduct')),
    }),
    t.partial({
      /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
      _implicitRules: t.readonly(FhirElement),
      /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
      _language: t.readonly(FhirElement),
      /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
      _productCategory: t.readonly(FhirElement),
      /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
      _quantity: t.readonly(FhirElement),
      /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
      _status: t.readonly(FhirElement),
      /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
      collection: t.readonly(FhirBiologicallyDerivedProduct_Collection),
      /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
      contained: t.readonlyArray(FhirResourceList),
      /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
      extension: t.readonlyArray(FhirExtension),
      /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
      id: t.readonly(FhirId),
      /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
      implicitRules: t.readonly(FhirUri),
      /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
      language: t.readonly(FhirCode),
      /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
      manipulation: t.readonly(FhirBiologicallyDerivedProduct_Manipulation),
      /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
      meta: t.readonly(FhirMeta),
      /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
      parent: t.readonlyArray(FhirReference),
      /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
      processing: t.readonlyArray(FhirBiologicallyDerivedProduct_Processing),
      /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
      productCategory: t.readonly(
        t.keyof({
          organ: null,
          tissue: null,
          fluid: null,
          cells: null,
          biologicalAgent: null,
        })
      ),
      /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
      productCode: t.readonly(FhirCodeableConcept),
      /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
      quantity: t.readonly(FhirInteger),
      /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
      request: t.readonlyArray(FhirReference),
      /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
      status: t.readonly(
        t.keyof({
          available: null,
          unavailable: null,
        })
      ),
      /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
      storage: t.readonlyArray(FhirBiologicallyDerivedProduct_Storage),
      /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
export interface FhirBiologicallyDerivedProduct {
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  _productCategory?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  _quantity?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  collection?: Readonly<t.TypeOf<typeof FhirBiologicallyDerivedProduct_Collection>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  manipulation?: Readonly<t.TypeOf<typeof FhirBiologicallyDerivedProduct_Manipulation>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  parent?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  processing?: ReadonlyArray<t.TypeOf<typeof FhirBiologicallyDerivedProduct_Processing>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  productCategory?: Readonly<'organ' | 'tissue' | 'fluid' | 'cells' | 'biologicalAgent'>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  productCode?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  quantity?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  request?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  resourceType: Readonly<'BiologicallyDerivedProduct'>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  status?: Readonly<'available' | 'unavailable'>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  storage?: ReadonlyArray<t.TypeOf<typeof FhirBiologicallyDerivedProduct_Storage>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
export interface FhirBiologicallyDerivedProductOutput {
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  _productCategory?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  _quantity?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  collection?: Readonly<t.OutputOf<typeof FhirBiologicallyDerivedProduct_Collection>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  manipulation?: Readonly<t.OutputOf<typeof FhirBiologicallyDerivedProduct_Manipulation>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  parent?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  processing?: ReadonlyArray<t.OutputOf<typeof FhirBiologicallyDerivedProduct_Processing>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  productCategory?: Readonly<'organ' | 'tissue' | 'fluid' | 'cells' | 'biologicalAgent'>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  productCode?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  quantity?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  request?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  resourceType: Readonly<'BiologicallyDerivedProduct'>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  status?: Readonly<'available' | 'unavailable'>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  storage?: ReadonlyArray<t.OutputOf<typeof FhirBiologicallyDerivedProduct_Storage>>
  /** A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
