import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** Prospective warnings of potential issues when providing care to the patient. */
export const FhirFlag: t.Type<FhirFlag, FhirFlagOutput> = t.recursion('FhirFlag', () =>
  t.intersection([
    t.type({
      /** Prospective warnings of potential issues when providing care to the patient. */
      code: t.readonly(FhirCodeableConcept),
      /** Prospective warnings of potential issues when providing care to the patient. */
      resourceType: t.readonly(t.literal('Flag')),
      /** Prospective warnings of potential issues when providing care to the patient. */
      subject: t.readonly(FhirReference),
    }),
    t.partial({
      /** Prospective warnings of potential issues when providing care to the patient. */
      _implicitRules: t.readonly(FhirElement),
      /** Prospective warnings of potential issues when providing care to the patient. */
      _language: t.readonly(FhirElement),
      /** Prospective warnings of potential issues when providing care to the patient. */
      _status: t.readonly(FhirElement),
      /** Prospective warnings of potential issues when providing care to the patient. */
      author: t.readonly(FhirReference),
      /** Prospective warnings of potential issues when providing care to the patient. */
      category: t.readonlyArray(FhirCodeableConcept),
      /** Prospective warnings of potential issues when providing care to the patient. */
      contained: t.readonlyArray(FhirResourceList),
      /** Prospective warnings of potential issues when providing care to the patient. */
      encounter: t.readonly(FhirReference),
      /** Prospective warnings of potential issues when providing care to the patient. */
      extension: t.readonlyArray(FhirExtension),
      /** Prospective warnings of potential issues when providing care to the patient. */
      id: t.readonly(FhirId),
      /** Prospective warnings of potential issues when providing care to the patient. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** Prospective warnings of potential issues when providing care to the patient. */
      implicitRules: t.readonly(FhirUri),
      /** Prospective warnings of potential issues when providing care to the patient. */
      language: t.readonly(FhirCode),
      /** Prospective warnings of potential issues when providing care to the patient. */
      meta: t.readonly(FhirMeta),
      /** Prospective warnings of potential issues when providing care to the patient. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Prospective warnings of potential issues when providing care to the patient. */
      period: t.readonly(FhirPeriod),
      /** Prospective warnings of potential issues when providing care to the patient. */
      status: t.readonly(
        t.keyof({
          active: null,
          inactive: null,
          'entered-in-error': null,
        })
      ),
      /** Prospective warnings of potential issues when providing care to the patient. */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** Prospective warnings of potential issues when providing care to the patient. */
export interface FhirFlag {
  /** Prospective warnings of potential issues when providing care to the patient. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  author?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  category?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  code: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  encounter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  period?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  resourceType: Readonly<'Flag'>
  /** Prospective warnings of potential issues when providing care to the patient. */
  status?: Readonly<'active' | 'inactive' | 'entered-in-error'>
  /** Prospective warnings of potential issues when providing care to the patient. */
  subject: Readonly<t.TypeOf<typeof FhirReference>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** Prospective warnings of potential issues when providing care to the patient. */
export interface FhirFlagOutput {
  /** Prospective warnings of potential issues when providing care to the patient. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  author?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  category?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  code: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  encounter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  period?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  resourceType: Readonly<'Flag'>
  /** Prospective warnings of potential issues when providing care to the patient. */
  status?: Readonly<'active' | 'inactive' | 'entered-in-error'>
  /** Prospective warnings of potential issues when providing care to the patient. */
  subject: Readonly<t.OutputOf<typeof FhirReference>>
  /** Prospective warnings of potential issues when providing care to the patient. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
