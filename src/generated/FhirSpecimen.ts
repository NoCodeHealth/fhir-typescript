import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirSpecimen_Collection } from './FhirSpecimen_Collection'
import { FhirSpecimen_Container } from './FhirSpecimen_Container'
import { FhirSpecimen_Processing } from './FhirSpecimen_Processing'
import { FhirUri } from './FhirUri'

/** A sample to be used for analysis. */
export const FhirSpecimen: t.Type<FhirSpecimen, FhirSpecimenOutput> = t.recursion('FhirSpecimen', () =>
  t.intersection([
    t.type({
      /** A sample to be used for analysis. */
      resourceType: t.readonly(t.literal('Specimen')),
    }),
    t.partial({
      /** A sample to be used for analysis. */
      _implicitRules: t.readonly(FhirElement),
      /** A sample to be used for analysis. */
      _language: t.readonly(FhirElement),
      /** A sample to be used for analysis. */
      _receivedTime: t.readonly(FhirElement),
      /** A sample to be used for analysis. */
      _status: t.readonly(FhirElement),
      /** A sample to be used for analysis. */
      accessionIdentifier: t.readonly(FhirIdentifier),
      /** A sample to be used for analysis. */
      collection: t.readonly(FhirSpecimen_Collection),
      /** A sample to be used for analysis. */
      condition: t.readonlyArray(FhirCodeableConcept),
      /** A sample to be used for analysis. */
      contained: t.readonlyArray(FhirResourceList),
      /** A sample to be used for analysis. */
      container: t.readonlyArray(FhirSpecimen_Container),
      /** A sample to be used for analysis. */
      extension: t.readonlyArray(FhirExtension),
      /** A sample to be used for analysis. */
      id: t.readonly(FhirId),
      /** A sample to be used for analysis. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** A sample to be used for analysis. */
      implicitRules: t.readonly(FhirUri),
      /** A sample to be used for analysis. */
      language: t.readonly(FhirCode),
      /** A sample to be used for analysis. */
      meta: t.readonly(FhirMeta),
      /** A sample to be used for analysis. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A sample to be used for analysis. */
      note: t.readonlyArray(FhirAnnotation),
      /** A sample to be used for analysis. */
      parent: t.readonlyArray(FhirReference),
      /** A sample to be used for analysis. */
      processing: t.readonlyArray(FhirSpecimen_Processing),
      /** A sample to be used for analysis. */
      receivedTime: t.readonly(FhirDateTime),
      /** A sample to be used for analysis. */
      request: t.readonlyArray(FhirReference),
      /** A sample to be used for analysis. */
      status: t.readonly(
        t.keyof({
          available: null,
          unavailable: null,
          unsatisfactory: null,
          'entered-in-error': null,
        })
      ),
      /** A sample to be used for analysis. */
      subject: t.readonly(FhirReference),
      /** A sample to be used for analysis. */
      text: t.readonly(FhirNarrative),
      /** A sample to be used for analysis. */
      type: t.readonly(FhirCodeableConcept),
    }),
  ])
)

/** A sample to be used for analysis. */
export interface FhirSpecimen {
  /** A sample to be used for analysis. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A sample to be used for analysis. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A sample to be used for analysis. */
  _receivedTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A sample to be used for analysis. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A sample to be used for analysis. */
  accessionIdentifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** A sample to be used for analysis. */
  collection?: Readonly<t.TypeOf<typeof FhirSpecimen_Collection>>
  /** A sample to be used for analysis. */
  condition?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A sample to be used for analysis. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A sample to be used for analysis. */
  container?: ReadonlyArray<t.TypeOf<typeof FhirSpecimen_Container>>
  /** A sample to be used for analysis. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A sample to be used for analysis. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A sample to be used for analysis. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A sample to be used for analysis. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A sample to be used for analysis. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A sample to be used for analysis. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A sample to be used for analysis. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A sample to be used for analysis. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** A sample to be used for analysis. */
  parent?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A sample to be used for analysis. */
  processing?: ReadonlyArray<t.TypeOf<typeof FhirSpecimen_Processing>>
  /** A sample to be used for analysis. */
  receivedTime?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A sample to be used for analysis. */
  request?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A sample to be used for analysis. */
  resourceType: Readonly<'Specimen'>
  /** A sample to be used for analysis. */
  status?: Readonly<'available' | 'unavailable' | 'unsatisfactory' | 'entered-in-error'>
  /** A sample to be used for analysis. */
  subject?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A sample to be used for analysis. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** A sample to be used for analysis. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** A sample to be used for analysis. */
export interface FhirSpecimenOutput {
  /** A sample to be used for analysis. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A sample to be used for analysis. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A sample to be used for analysis. */
  _receivedTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A sample to be used for analysis. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A sample to be used for analysis. */
  accessionIdentifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** A sample to be used for analysis. */
  collection?: Readonly<t.OutputOf<typeof FhirSpecimen_Collection>>
  /** A sample to be used for analysis. */
  condition?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A sample to be used for analysis. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A sample to be used for analysis. */
  container?: ReadonlyArray<t.OutputOf<typeof FhirSpecimen_Container>>
  /** A sample to be used for analysis. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A sample to be used for analysis. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A sample to be used for analysis. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A sample to be used for analysis. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A sample to be used for analysis. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A sample to be used for analysis. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A sample to be used for analysis. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A sample to be used for analysis. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** A sample to be used for analysis. */
  parent?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A sample to be used for analysis. */
  processing?: ReadonlyArray<t.OutputOf<typeof FhirSpecimen_Processing>>
  /** A sample to be used for analysis. */
  receivedTime?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A sample to be used for analysis. */
  request?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A sample to be used for analysis. */
  resourceType: Readonly<'Specimen'>
  /** A sample to be used for analysis. */
  status?: Readonly<'available' | 'unavailable' | 'unsatisfactory' | 'entered-in-error'>
  /** A sample to be used for analysis. */
  subject?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A sample to be used for analysis. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** A sample to be used for analysis. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
