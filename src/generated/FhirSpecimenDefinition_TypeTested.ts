import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDuration } from './FhirDuration'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirSpecimenDefinition_Container } from './FhirSpecimenDefinition_Container'
import { FhirSpecimenDefinition_Handling } from './FhirSpecimenDefinition_Handling'
import { FhirString } from './FhirString'

/** A kind of specimen with associated set of requirements. */
export const FhirSpecimenDefinition_TypeTested: t.Type<
  FhirSpecimenDefinition_TypeTested,
  FhirSpecimenDefinition_TypeTestedOutput
> = t.recursion('FhirSpecimenDefinition_TypeTested', () =>
  t.partial({
    /** A kind of specimen with associated set of requirements. */
    _isDerived: t.readonly(FhirElement),
    /** A kind of specimen with associated set of requirements. */
    _preference: t.readonly(FhirElement),
    /** A kind of specimen with associated set of requirements. */
    _requirement: t.readonly(FhirElement),
    /** A kind of specimen with associated set of requirements. */
    container: t.readonly(FhirSpecimenDefinition_Container),
    /** A kind of specimen with associated set of requirements. */
    extension: t.readonlyArray(FhirExtension),
    /** A kind of specimen with associated set of requirements. */
    handling: t.readonlyArray(FhirSpecimenDefinition_Handling),
    /** A kind of specimen with associated set of requirements. */
    id: t.readonly(FhirString),
    /** A kind of specimen with associated set of requirements. */
    isDerived: t.readonly(FhirBoolean),
    /** A kind of specimen with associated set of requirements. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A kind of specimen with associated set of requirements. */
    preference: t.readonly(
      t.keyof({
        preferred: null,
        alternate: null,
      })
    ),
    /** A kind of specimen with associated set of requirements. */
    rejectionCriterion: t.readonlyArray(FhirCodeableConcept),
    /** A kind of specimen with associated set of requirements. */
    requirement: t.readonly(FhirString),
    /** A kind of specimen with associated set of requirements. */
    retentionTime: t.readonly(FhirDuration),
    /** A kind of specimen with associated set of requirements. */
    type: t.readonly(FhirCodeableConcept),
  })
)

/** A kind of specimen with associated set of requirements. */
export interface FhirSpecimenDefinition_TypeTested {
  /** A kind of specimen with associated set of requirements. */
  _isDerived?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A kind of specimen with associated set of requirements. */
  _preference?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A kind of specimen with associated set of requirements. */
  _requirement?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A kind of specimen with associated set of requirements. */
  container?: Readonly<t.TypeOf<typeof FhirSpecimenDefinition_Container>>
  /** A kind of specimen with associated set of requirements. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A kind of specimen with associated set of requirements. */
  handling?: ReadonlyArray<t.TypeOf<typeof FhirSpecimenDefinition_Handling>>
  /** A kind of specimen with associated set of requirements. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A kind of specimen with associated set of requirements. */
  isDerived?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A kind of specimen with associated set of requirements. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A kind of specimen with associated set of requirements. */
  preference?: Readonly<'preferred' | 'alternate'>
  /** A kind of specimen with associated set of requirements. */
  rejectionCriterion?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A kind of specimen with associated set of requirements. */
  requirement?: Readonly<t.TypeOf<typeof FhirString>>
  /** A kind of specimen with associated set of requirements. */
  retentionTime?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** A kind of specimen with associated set of requirements. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** A kind of specimen with associated set of requirements. */
export interface FhirSpecimenDefinition_TypeTestedOutput {
  /** A kind of specimen with associated set of requirements. */
  _isDerived?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A kind of specimen with associated set of requirements. */
  _preference?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A kind of specimen with associated set of requirements. */
  _requirement?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A kind of specimen with associated set of requirements. */
  container?: Readonly<t.OutputOf<typeof FhirSpecimenDefinition_Container>>
  /** A kind of specimen with associated set of requirements. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A kind of specimen with associated set of requirements. */
  handling?: ReadonlyArray<t.OutputOf<typeof FhirSpecimenDefinition_Handling>>
  /** A kind of specimen with associated set of requirements. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A kind of specimen with associated set of requirements. */
  isDerived?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A kind of specimen with associated set of requirements. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A kind of specimen with associated set of requirements. */
  preference?: Readonly<'preferred' | 'alternate'>
  /** A kind of specimen with associated set of requirements. */
  rejectionCriterion?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A kind of specimen with associated set of requirements. */
  requirement?: Readonly<t.OutputOf<typeof FhirString>>
  /** A kind of specimen with associated set of requirements. */
  retentionTime?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** A kind of specimen with associated set of requirements. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
