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
import { FhirSpecimenDefinition_TypeTested } from './FhirSpecimenDefinition_TypeTested'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A kind of specimen with associated set of requirements. */
export const FhirSpecimenDefinition: t.Type<FhirSpecimenDefinition, FhirSpecimenDefinitionOutput> = t.recursion(
  'FhirSpecimenDefinition',
  () =>
    t.intersection([
      t.type({
        /** A kind of specimen with associated set of requirements. */
        resourceType: t.readonly(t.literal('SpecimenDefinition')),
      }),
      t.partial({
        /** A kind of specimen with associated set of requirements. */
        _implicitRules: t.readonly(FhirElement),
        /** A kind of specimen with associated set of requirements. */
        _language: t.readonly(FhirElement),
        /** A kind of specimen with associated set of requirements. */
        _timeAspect: t.readonly(FhirElement),
        /** A kind of specimen with associated set of requirements. */
        collection: t.readonlyArray(FhirCodeableConcept),
        /** A kind of specimen with associated set of requirements. */
        contained: t.readonlyArray(FhirResourceList),
        /** A kind of specimen with associated set of requirements. */
        extension: t.readonlyArray(FhirExtension),
        /** A kind of specimen with associated set of requirements. */
        id: t.readonly(FhirId),
        /** A kind of specimen with associated set of requirements. */
        identifier: t.readonly(FhirIdentifier),
        /** A kind of specimen with associated set of requirements. */
        implicitRules: t.readonly(FhirUri),
        /** A kind of specimen with associated set of requirements. */
        language: t.readonly(FhirCode),
        /** A kind of specimen with associated set of requirements. */
        meta: t.readonly(FhirMeta),
        /** A kind of specimen with associated set of requirements. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A kind of specimen with associated set of requirements. */
        patientPreparation: t.readonlyArray(FhirCodeableConcept),
        /** A kind of specimen with associated set of requirements. */
        text: t.readonly(FhirNarrative),
        /** A kind of specimen with associated set of requirements. */
        timeAspect: t.readonly(FhirString),
        /** A kind of specimen with associated set of requirements. */
        typeCollected: t.readonly(FhirCodeableConcept),
        /** A kind of specimen with associated set of requirements. */
        typeTested: t.readonlyArray(FhirSpecimenDefinition_TypeTested),
      }),
    ])
)

/** A kind of specimen with associated set of requirements. */
export interface FhirSpecimenDefinition {
  /** A kind of specimen with associated set of requirements. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A kind of specimen with associated set of requirements. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A kind of specimen with associated set of requirements. */
  _timeAspect?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A kind of specimen with associated set of requirements. */
  collection?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A kind of specimen with associated set of requirements. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A kind of specimen with associated set of requirements. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A kind of specimen with associated set of requirements. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A kind of specimen with associated set of requirements. */
  identifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** A kind of specimen with associated set of requirements. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A kind of specimen with associated set of requirements. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A kind of specimen with associated set of requirements. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A kind of specimen with associated set of requirements. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A kind of specimen with associated set of requirements. */
  patientPreparation?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A kind of specimen with associated set of requirements. */
  resourceType: Readonly<'SpecimenDefinition'>
  /** A kind of specimen with associated set of requirements. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** A kind of specimen with associated set of requirements. */
  timeAspect?: Readonly<t.TypeOf<typeof FhirString>>
  /** A kind of specimen with associated set of requirements. */
  typeCollected?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A kind of specimen with associated set of requirements. */
  typeTested?: ReadonlyArray<t.TypeOf<typeof FhirSpecimenDefinition_TypeTested>>
}
/** A kind of specimen with associated set of requirements. */
export interface FhirSpecimenDefinitionOutput {
  /** A kind of specimen with associated set of requirements. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A kind of specimen with associated set of requirements. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A kind of specimen with associated set of requirements. */
  _timeAspect?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A kind of specimen with associated set of requirements. */
  collection?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A kind of specimen with associated set of requirements. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A kind of specimen with associated set of requirements. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A kind of specimen with associated set of requirements. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A kind of specimen with associated set of requirements. */
  identifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** A kind of specimen with associated set of requirements. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A kind of specimen with associated set of requirements. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A kind of specimen with associated set of requirements. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A kind of specimen with associated set of requirements. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A kind of specimen with associated set of requirements. */
  patientPreparation?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A kind of specimen with associated set of requirements. */
  resourceType: Readonly<'SpecimenDefinition'>
  /** A kind of specimen with associated set of requirements. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** A kind of specimen with associated set of requirements. */
  timeAspect?: Readonly<t.OutputOf<typeof FhirString>>
  /** A kind of specimen with associated set of requirements. */
  typeCollected?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A kind of specimen with associated set of requirements. */
  typeTested?: ReadonlyArray<t.OutputOf<typeof FhirSpecimenDefinition_TypeTested>>
}
