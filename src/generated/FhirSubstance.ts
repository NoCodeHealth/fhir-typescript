import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirSubstance_Ingredient } from './FhirSubstance_Ingredient'
import { FhirSubstance_Instance } from './FhirSubstance_Instance'
import { FhirUri } from './FhirUri'

/** A homogeneous material with a definite composition. */
export const FhirSubstance: t.Type<FhirSubstance, FhirSubstanceOutput> = t.recursion('FhirSubstance', () =>
  t.intersection([
    t.type({
      /** A homogeneous material with a definite composition. */
      code: t.readonly(FhirCodeableConcept),
      /** A homogeneous material with a definite composition. */
      resourceType: t.readonly(t.literal('Substance')),
    }),
    t.partial({
      /** A homogeneous material with a definite composition. */
      _description: t.readonly(FhirElement),
      /** A homogeneous material with a definite composition. */
      _implicitRules: t.readonly(FhirElement),
      /** A homogeneous material with a definite composition. */
      _language: t.readonly(FhirElement),
      /** A homogeneous material with a definite composition. */
      _status: t.readonly(FhirElement),
      /** A homogeneous material with a definite composition. */
      category: t.readonlyArray(FhirCodeableConcept),
      /** A homogeneous material with a definite composition. */
      contained: t.readonlyArray(FhirResourceList),
      /** A homogeneous material with a definite composition. */
      description: t.readonly(FhirString),
      /** A homogeneous material with a definite composition. */
      extension: t.readonlyArray(FhirExtension),
      /** A homogeneous material with a definite composition. */
      id: t.readonly(FhirId),
      /** A homogeneous material with a definite composition. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** A homogeneous material with a definite composition. */
      implicitRules: t.readonly(FhirUri),
      /** A homogeneous material with a definite composition. */
      ingredient: t.readonlyArray(FhirSubstance_Ingredient),
      /** A homogeneous material with a definite composition. */
      instance: t.readonlyArray(FhirSubstance_Instance),
      /** A homogeneous material with a definite composition. */
      language: t.readonly(FhirCode),
      /** A homogeneous material with a definite composition. */
      meta: t.readonly(FhirMeta),
      /** A homogeneous material with a definite composition. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A homogeneous material with a definite composition. */
      status: t.readonly(
        t.keyof({
          active: null,
          inactive: null,
          'entered-in-error': null,
        })
      ),
      /** A homogeneous material with a definite composition. */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** A homogeneous material with a definite composition. */
export interface FhirSubstance {
  /** A homogeneous material with a definite composition. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A homogeneous material with a definite composition. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A homogeneous material with a definite composition. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A homogeneous material with a definite composition. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A homogeneous material with a definite composition. */
  category?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A homogeneous material with a definite composition. */
  code: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A homogeneous material with a definite composition. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A homogeneous material with a definite composition. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** A homogeneous material with a definite composition. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A homogeneous material with a definite composition. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A homogeneous material with a definite composition. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A homogeneous material with a definite composition. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A homogeneous material with a definite composition. */
  ingredient?: ReadonlyArray<t.TypeOf<typeof FhirSubstance_Ingredient>>
  /** A homogeneous material with a definite composition. */
  instance?: ReadonlyArray<t.TypeOf<typeof FhirSubstance_Instance>>
  /** A homogeneous material with a definite composition. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A homogeneous material with a definite composition. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A homogeneous material with a definite composition. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A homogeneous material with a definite composition. */
  resourceType: Readonly<'Substance'>
  /** A homogeneous material with a definite composition. */
  status?: Readonly<'active' | 'inactive' | 'entered-in-error'>
  /** A homogeneous material with a definite composition. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** A homogeneous material with a definite composition. */
export interface FhirSubstanceOutput {
  /** A homogeneous material with a definite composition. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A homogeneous material with a definite composition. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A homogeneous material with a definite composition. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A homogeneous material with a definite composition. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A homogeneous material with a definite composition. */
  category?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A homogeneous material with a definite composition. */
  code: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A homogeneous material with a definite composition. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A homogeneous material with a definite composition. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** A homogeneous material with a definite composition. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A homogeneous material with a definite composition. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A homogeneous material with a definite composition. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A homogeneous material with a definite composition. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A homogeneous material with a definite composition. */
  ingredient?: ReadonlyArray<t.OutputOf<typeof FhirSubstance_Ingredient>>
  /** A homogeneous material with a definite composition. */
  instance?: ReadonlyArray<t.OutputOf<typeof FhirSubstance_Instance>>
  /** A homogeneous material with a definite composition. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A homogeneous material with a definite composition. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A homogeneous material with a definite composition. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A homogeneous material with a definite composition. */
  resourceType: Readonly<'Substance'>
  /** A homogeneous material with a definite composition. */
  status?: Readonly<'active' | 'inactive' | 'entered-in-error'>
  /** A homogeneous material with a definite composition. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
