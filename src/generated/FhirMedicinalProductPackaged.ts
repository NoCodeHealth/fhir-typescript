import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMarketingStatus } from './FhirMarketingStatus'
import { FhirMedicinalProductPackaged_BatchIdentifier } from './FhirMedicinalProductPackaged_BatchIdentifier'
import { FhirMedicinalProductPackaged_PackageItem } from './FhirMedicinalProductPackaged_PackageItem'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A medicinal product in a container or package. */
export const FhirMedicinalProductPackaged: t.Type<
  FhirMedicinalProductPackaged,
  FhirMedicinalProductPackagedOutput
> = t.recursion('FhirMedicinalProductPackaged', () =>
  t.intersection([
    t.type({
      /** A medicinal product in a container or package. */
      packageItem: t.readonlyArray(FhirMedicinalProductPackaged_PackageItem),
      /** A medicinal product in a container or package. */
      resourceType: t.readonly(t.literal('MedicinalProductPackaged')),
    }),
    t.partial({
      /** A medicinal product in a container or package. */
      _description: t.readonly(FhirElement),
      /** A medicinal product in a container or package. */
      _implicitRules: t.readonly(FhirElement),
      /** A medicinal product in a container or package. */
      _language: t.readonly(FhirElement),
      /** A medicinal product in a container or package. */
      batchIdentifier: t.readonlyArray(FhirMedicinalProductPackaged_BatchIdentifier),
      /** A medicinal product in a container or package. */
      contained: t.readonlyArray(FhirResourceList),
      /** A medicinal product in a container or package. */
      description: t.readonly(FhirString),
      /** A medicinal product in a container or package. */
      extension: t.readonlyArray(FhirExtension),
      /** A medicinal product in a container or package. */
      id: t.readonly(FhirId),
      /** A medicinal product in a container or package. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** A medicinal product in a container or package. */
      implicitRules: t.readonly(FhirUri),
      /** A medicinal product in a container or package. */
      language: t.readonly(FhirCode),
      /** A medicinal product in a container or package. */
      legalStatusOfSupply: t.readonly(FhirCodeableConcept),
      /** A medicinal product in a container or package. */
      manufacturer: t.readonlyArray(FhirReference),
      /** A medicinal product in a container or package. */
      marketingAuthorization: t.readonly(FhirReference),
      /** A medicinal product in a container or package. */
      marketingStatus: t.readonlyArray(FhirMarketingStatus),
      /** A medicinal product in a container or package. */
      meta: t.readonly(FhirMeta),
      /** A medicinal product in a container or package. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A medicinal product in a container or package. */
      subject: t.readonlyArray(FhirReference),
      /** A medicinal product in a container or package. */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** A medicinal product in a container or package. */
export interface FhirMedicinalProductPackaged {
  /** A medicinal product in a container or package. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A medicinal product in a container or package. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A medicinal product in a container or package. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A medicinal product in a container or package. */
  batchIdentifier?: ReadonlyArray<t.TypeOf<typeof FhirMedicinalProductPackaged_BatchIdentifier>>
  /** A medicinal product in a container or package. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A medicinal product in a container or package. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** A medicinal product in a container or package. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A medicinal product in a container or package. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A medicinal product in a container or package. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A medicinal product in a container or package. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A medicinal product in a container or package. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A medicinal product in a container or package. */
  legalStatusOfSupply?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A medicinal product in a container or package. */
  manufacturer?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A medicinal product in a container or package. */
  marketingAuthorization?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A medicinal product in a container or package. */
  marketingStatus?: ReadonlyArray<t.TypeOf<typeof FhirMarketingStatus>>
  /** A medicinal product in a container or package. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A medicinal product in a container or package. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A medicinal product in a container or package. */
  packageItem: ReadonlyArray<t.TypeOf<typeof FhirMedicinalProductPackaged_PackageItem>>
  /** A medicinal product in a container or package. */
  resourceType: Readonly<'MedicinalProductPackaged'>
  /** A medicinal product in a container or package. */
  subject?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A medicinal product in a container or package. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** A medicinal product in a container or package. */
export interface FhirMedicinalProductPackagedOutput {
  /** A medicinal product in a container or package. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A medicinal product in a container or package. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A medicinal product in a container or package. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A medicinal product in a container or package. */
  batchIdentifier?: ReadonlyArray<t.OutputOf<typeof FhirMedicinalProductPackaged_BatchIdentifier>>
  /** A medicinal product in a container or package. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A medicinal product in a container or package. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** A medicinal product in a container or package. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A medicinal product in a container or package. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A medicinal product in a container or package. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A medicinal product in a container or package. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A medicinal product in a container or package. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A medicinal product in a container or package. */
  legalStatusOfSupply?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A medicinal product in a container or package. */
  manufacturer?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A medicinal product in a container or package. */
  marketingAuthorization?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A medicinal product in a container or package. */
  marketingStatus?: ReadonlyArray<t.OutputOf<typeof FhirMarketingStatus>>
  /** A medicinal product in a container or package. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A medicinal product in a container or package. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A medicinal product in a container or package. */
  packageItem: ReadonlyArray<t.OutputOf<typeof FhirMedicinalProductPackaged_PackageItem>>
  /** A medicinal product in a container or package. */
  resourceType: Readonly<'MedicinalProductPackaged'>
  /** A medicinal product in a container or package. */
  subject?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A medicinal product in a container or package. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
