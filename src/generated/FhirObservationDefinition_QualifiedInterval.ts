import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirRange } from './FhirRange'
import { FhirString } from './FhirString'

/** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
export const FhirObservationDefinition_QualifiedInterval: t.Type<
  FhirObservationDefinition_QualifiedInterval,
  FhirObservationDefinition_QualifiedIntervalOutput
> = t.recursion('FhirObservationDefinition_QualifiedInterval', () =>
  t.partial({
    /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
    _category: t.readonly(FhirElement),
    /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
    _condition: t.readonly(FhirElement),
    /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
    _gender: t.readonly(FhirElement),
    /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
    age: t.readonly(FhirRange),
    /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
    appliesTo: t.readonlyArray(FhirCodeableConcept),
    /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
    category: t.readonly(
      t.keyof({
        reference: null,
        critical: null,
        absolute: null,
      })
    ),
    /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
    condition: t.readonly(FhirString),
    /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
    context: t.readonly(FhirCodeableConcept),
    /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
    extension: t.readonlyArray(FhirExtension),
    /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
    gender: t.readonly(
      t.keyof({
        male: null,
        female: null,
        other: null,
        unknown: null,
      })
    ),
    /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
    gestationalAge: t.readonly(FhirRange),
    /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
    id: t.readonly(FhirString),
    /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
    range: t.readonly(FhirRange),
  })
)

/** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
export interface FhirObservationDefinition_QualifiedInterval {
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  _category?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  _condition?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  _gender?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  age?: Readonly<t.TypeOf<typeof FhirRange>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  appliesTo?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  category?: Readonly<'reference' | 'critical' | 'absolute'>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  condition?: Readonly<t.TypeOf<typeof FhirString>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  context?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  gender?: Readonly<'male' | 'female' | 'other' | 'unknown'>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  gestationalAge?: Readonly<t.TypeOf<typeof FhirRange>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  range?: Readonly<t.TypeOf<typeof FhirRange>>
}
/** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
export interface FhirObservationDefinition_QualifiedIntervalOutput {
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  _category?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  _condition?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  _gender?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  age?: Readonly<t.OutputOf<typeof FhirRange>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  appliesTo?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  category?: Readonly<'reference' | 'critical' | 'absolute'>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  condition?: Readonly<t.OutputOf<typeof FhirString>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  context?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  gender?: Readonly<'male' | 'female' | 'other' | 'unknown'>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  gestationalAge?: Readonly<t.OutputOf<typeof FhirRange>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
  range?: Readonly<t.OutputOf<typeof FhirRange>>
}
