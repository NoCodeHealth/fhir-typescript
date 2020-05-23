import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMedicinalProductPharmaceutical_Characteristics } from './FhirMedicinalProductPharmaceutical_Characteristics'
import { FhirMedicinalProductPharmaceutical_RouteOfAdministration } from './FhirMedicinalProductPharmaceutical_RouteOfAdministration'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** A pharmaceutical product described in terms of its composition and dose form. */
export const FhirMedicinalProductPharmaceutical: t.Type<
  FhirMedicinalProductPharmaceutical,
  FhirMedicinalProductPharmaceuticalOutput
> = t.recursion('FhirMedicinalProductPharmaceutical', () =>
  t.intersection([
    t.type({
      /** A pharmaceutical product described in terms of its composition and dose form. */
      administrableDoseForm: t.readonly(FhirCodeableConcept),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      resourceType: t.readonly(t.literal('MedicinalProductPharmaceutical')),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      routeOfAdministration: t.readonlyArray(FhirMedicinalProductPharmaceutical_RouteOfAdministration),
    }),
    t.partial({
      /** A pharmaceutical product described in terms of its composition and dose form. */
      _implicitRules: t.readonly(FhirElement),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      _language: t.readonly(FhirElement),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      characteristics: t.readonlyArray(FhirMedicinalProductPharmaceutical_Characteristics),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      contained: t.readonlyArray(FhirResourceList),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      device: t.readonlyArray(FhirReference),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      extension: t.readonlyArray(FhirExtension),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      id: t.readonly(FhirId),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      implicitRules: t.readonly(FhirUri),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      ingredient: t.readonlyArray(FhirReference),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      language: t.readonly(FhirCode),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      meta: t.readonly(FhirMeta),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      text: t.readonly(FhirNarrative),
      /** A pharmaceutical product described in terms of its composition and dose form. */
      unitOfPresentation: t.readonly(FhirCodeableConcept),
    }),
  ])
)

/** A pharmaceutical product described in terms of its composition and dose form. */
export interface FhirMedicinalProductPharmaceutical {
  /** A pharmaceutical product described in terms of its composition and dose form. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  administrableDoseForm: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  characteristics?: ReadonlyArray<t.TypeOf<typeof FhirMedicinalProductPharmaceutical_Characteristics>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  device?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  ingredient?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  resourceType: Readonly<'MedicinalProductPharmaceutical'>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  routeOfAdministration: ReadonlyArray<t.TypeOf<typeof FhirMedicinalProductPharmaceutical_RouteOfAdministration>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  unitOfPresentation?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** A pharmaceutical product described in terms of its composition and dose form. */
export interface FhirMedicinalProductPharmaceuticalOutput {
  /** A pharmaceutical product described in terms of its composition and dose form. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  administrableDoseForm: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  characteristics?: ReadonlyArray<t.OutputOf<typeof FhirMedicinalProductPharmaceutical_Characteristics>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  device?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  ingredient?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  resourceType: Readonly<'MedicinalProductPharmaceutical'>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  routeOfAdministration: ReadonlyArray<t.OutputOf<typeof FhirMedicinalProductPharmaceutical_RouteOfAdministration>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** A pharmaceutical product described in terms of its composition and dose form. */
  unitOfPresentation?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
