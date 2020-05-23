import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
export const FhirAllergyIntolerance_Reaction: t.Type<
  FhirAllergyIntolerance_Reaction,
  FhirAllergyIntolerance_ReactionOutput
> = t.recursion('FhirAllergyIntolerance_Reaction', () =>
  t.intersection([
    t.type({
      /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
      manifestation: t.readonlyArray(FhirCodeableConcept),
    }),
    t.partial({
      /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
      _description: t.readonly(FhirElement),
      /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
      _onset: t.readonly(FhirElement),
      /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
      _severity: t.readonly(FhirElement),
      /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
      description: t.readonly(FhirString),
      /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
      exposureRoute: t.readonly(FhirCodeableConcept),
      /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
      extension: t.readonlyArray(FhirExtension),
      /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
      id: t.readonly(FhirString),
      /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
      note: t.readonlyArray(FhirAnnotation),
      /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
      onset: t.readonly(FhirDateTime),
      /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
      severity: t.readonly(
        t.keyof({
          mild: null,
          moderate: null,
          severe: null,
        })
      ),
      /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
      substance: t.readonly(FhirCodeableConcept),
    }),
  ])
)

/** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
export interface FhirAllergyIntolerance_Reaction {
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  _onset?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  _severity?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  exposureRoute?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  manifestation: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  onset?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  severity?: Readonly<'mild' | 'moderate' | 'severe'>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  substance?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
export interface FhirAllergyIntolerance_ReactionOutput {
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  _onset?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  _severity?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  exposureRoute?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  manifestation: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  onset?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  severity?: Readonly<'mild' | 'moderate' | 'severe'>
  /** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
  substance?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
