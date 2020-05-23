import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirMedicinalProductInteraction_Interactant } from './FhirMedicinalProductInteraction_Interactant'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
export const FhirMedicinalProductInteraction: t.Type<
  FhirMedicinalProductInteraction,
  FhirMedicinalProductInteractionOutput
> = t.recursion('FhirMedicinalProductInteraction', () =>
  t.intersection([
    t.type({
      /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
      resourceType: t.readonly(t.literal('MedicinalProductInteraction')),
    }),
    t.partial({
      /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
      _description: t.readonly(FhirElement),
      /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
      _implicitRules: t.readonly(FhirElement),
      /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
      _language: t.readonly(FhirElement),
      /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
      contained: t.readonlyArray(FhirResourceList),
      /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
      description: t.readonly(FhirString),
      /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
      effect: t.readonly(FhirCodeableConcept),
      /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
      extension: t.readonlyArray(FhirExtension),
      /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
      id: t.readonly(FhirId),
      /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
      implicitRules: t.readonly(FhirUri),
      /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
      incidence: t.readonly(FhirCodeableConcept),
      /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
      interactant: t.readonlyArray(FhirMedicinalProductInteraction_Interactant),
      /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
      language: t.readonly(FhirCode),
      /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
      management: t.readonly(FhirCodeableConcept),
      /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
      meta: t.readonly(FhirMeta),
      /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
      subject: t.readonlyArray(FhirReference),
      /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
      text: t.readonly(FhirNarrative),
      /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
      type: t.readonly(FhirCodeableConcept),
    }),
  ])
)

/** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
export interface FhirMedicinalProductInteraction {
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  effect?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  incidence?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  interactant?: ReadonlyArray<t.TypeOf<typeof FhirMedicinalProductInteraction_Interactant>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  management?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  resourceType: Readonly<'MedicinalProductInteraction'>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  subject?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
export interface FhirMedicinalProductInteractionOutput {
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  effect?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  incidence?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  interactant?: ReadonlyArray<t.OutputOf<typeof FhirMedicinalProductInteraction_Interactant>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  management?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  resourceType: Readonly<'MedicinalProductInteraction'>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  subject?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** The interactions of the medicinal product with other medicinal products, or other forms of interactions. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
