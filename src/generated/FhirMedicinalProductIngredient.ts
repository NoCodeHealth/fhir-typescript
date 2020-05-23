import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMedicinalProductIngredient_SpecifiedSubstance } from './FhirMedicinalProductIngredient_SpecifiedSubstance'
import { FhirMedicinalProductIngredient_Substance } from './FhirMedicinalProductIngredient_Substance'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** An ingredient of a manufactured item or pharmaceutical product. */
export const FhirMedicinalProductIngredient: t.Type<
  FhirMedicinalProductIngredient,
  FhirMedicinalProductIngredientOutput
> = t.recursion('FhirMedicinalProductIngredient', () =>
  t.intersection([
    t.type({
      /** An ingredient of a manufactured item or pharmaceutical product. */
      resourceType: t.readonly(t.literal('MedicinalProductIngredient')),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      role: t.readonly(FhirCodeableConcept),
    }),
    t.partial({
      /** An ingredient of a manufactured item or pharmaceutical product. */
      _allergenicIndicator: t.readonly(FhirElement),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      _implicitRules: t.readonly(FhirElement),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      _language: t.readonly(FhirElement),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      allergenicIndicator: t.readonly(FhirBoolean),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      contained: t.readonlyArray(FhirResourceList),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      extension: t.readonlyArray(FhirExtension),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      id: t.readonly(FhirId),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      identifier: t.readonly(FhirIdentifier),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      implicitRules: t.readonly(FhirUri),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      language: t.readonly(FhirCode),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      manufacturer: t.readonlyArray(FhirReference),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      meta: t.readonly(FhirMeta),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      specifiedSubstance: t.readonlyArray(FhirMedicinalProductIngredient_SpecifiedSubstance),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      substance: t.readonly(FhirMedicinalProductIngredient_Substance),
      /** An ingredient of a manufactured item or pharmaceutical product. */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** An ingredient of a manufactured item or pharmaceutical product. */
export interface FhirMedicinalProductIngredient {
  /** An ingredient of a manufactured item or pharmaceutical product. */
  _allergenicIndicator?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  allergenicIndicator?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  identifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  manufacturer?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  resourceType: Readonly<'MedicinalProductIngredient'>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  role: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  specifiedSubstance?: ReadonlyArray<t.TypeOf<typeof FhirMedicinalProductIngredient_SpecifiedSubstance>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  substance?: Readonly<t.TypeOf<typeof FhirMedicinalProductIngredient_Substance>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** An ingredient of a manufactured item or pharmaceutical product. */
export interface FhirMedicinalProductIngredientOutput {
  /** An ingredient of a manufactured item or pharmaceutical product. */
  _allergenicIndicator?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  allergenicIndicator?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  identifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  manufacturer?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  resourceType: Readonly<'MedicinalProductIngredient'>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  role: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  specifiedSubstance?: ReadonlyArray<t.OutputOf<typeof FhirMedicinalProductIngredient_SpecifiedSubstance>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  substance?: Readonly<t.OutputOf<typeof FhirMedicinalProductIngredient_Substance>>
  /** An ingredient of a manufactured item or pharmaceutical product. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
