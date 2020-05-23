import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDuration } from './FhirDuration'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirRange } from './FhirRange'
import { FhirString } from './FhirString'

/** A kind of specimen with associated set of requirements. */
export const FhirSpecimenDefinition_Handling: t.Type<
  FhirSpecimenDefinition_Handling,
  FhirSpecimenDefinition_HandlingOutput
> = t.recursion('FhirSpecimenDefinition_Handling', () =>
  t.partial({
    /** A kind of specimen with associated set of requirements. */
    _instruction: t.readonly(FhirElement),
    /** A kind of specimen with associated set of requirements. */
    extension: t.readonlyArray(FhirExtension),
    /** A kind of specimen with associated set of requirements. */
    id: t.readonly(FhirString),
    /** A kind of specimen with associated set of requirements. */
    instruction: t.readonly(FhirString),
    /** A kind of specimen with associated set of requirements. */
    maxDuration: t.readonly(FhirDuration),
    /** A kind of specimen with associated set of requirements. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A kind of specimen with associated set of requirements. */
    temperatureQualifier: t.readonly(FhirCodeableConcept),
    /** A kind of specimen with associated set of requirements. */
    temperatureRange: t.readonly(FhirRange),
  })
)

/** A kind of specimen with associated set of requirements. */
export interface FhirSpecimenDefinition_Handling {
  /** A kind of specimen with associated set of requirements. */
  _instruction?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A kind of specimen with associated set of requirements. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A kind of specimen with associated set of requirements. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A kind of specimen with associated set of requirements. */
  instruction?: Readonly<t.TypeOf<typeof FhirString>>
  /** A kind of specimen with associated set of requirements. */
  maxDuration?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** A kind of specimen with associated set of requirements. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A kind of specimen with associated set of requirements. */
  temperatureQualifier?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A kind of specimen with associated set of requirements. */
  temperatureRange?: Readonly<t.TypeOf<typeof FhirRange>>
}
/** A kind of specimen with associated set of requirements. */
export interface FhirSpecimenDefinition_HandlingOutput {
  /** A kind of specimen with associated set of requirements. */
  _instruction?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A kind of specimen with associated set of requirements. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A kind of specimen with associated set of requirements. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A kind of specimen with associated set of requirements. */
  instruction?: Readonly<t.OutputOf<typeof FhirString>>
  /** A kind of specimen with associated set of requirements. */
  maxDuration?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** A kind of specimen with associated set of requirements. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A kind of specimen with associated set of requirements. */
  temperatureQualifier?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A kind of specimen with associated set of requirements. */
  temperatureRange?: Readonly<t.OutputOf<typeof FhirRange>>
}
