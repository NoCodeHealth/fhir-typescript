import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMedication_Batch } from './FhirMedication_Batch'
import { FhirMedication_Ingredient } from './FhirMedication_Ingredient'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirRatio } from './FhirRatio'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
export const FhirMedication: t.Type<FhirMedication, FhirMedicationOutput> = t.recursion('FhirMedication', () =>
  t.intersection([
    t.type({
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      resourceType: t.readonly(t.literal('Medication')),
    }),
    t.partial({
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      _implicitRules: t.readonly(FhirElement),
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      _language: t.readonly(FhirElement),
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      _status: t.readonly(FhirElement),
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      amount: t.readonly(FhirRatio),
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      batch: t.readonly(FhirMedication_Batch),
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      code: t.readonly(FhirCodeableConcept),
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      contained: t.readonlyArray(FhirResourceList),
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      extension: t.readonlyArray(FhirExtension),
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      form: t.readonly(FhirCodeableConcept),
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      id: t.readonly(FhirId),
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      implicitRules: t.readonly(FhirUri),
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      ingredient: t.readonlyArray(FhirMedication_Ingredient),
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      language: t.readonly(FhirCode),
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      manufacturer: t.readonly(FhirReference),
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      meta: t.readonly(FhirMeta),
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      status: t.readonly(FhirCode),
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
export interface FhirMedication {
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  amount?: Readonly<t.TypeOf<typeof FhirRatio>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  batch?: Readonly<t.TypeOf<typeof FhirMedication_Batch>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  code?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  form?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  ingredient?: ReadonlyArray<t.TypeOf<typeof FhirMedication_Ingredient>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  manufacturer?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  resourceType: Readonly<'Medication'>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  status?: Readonly<t.TypeOf<typeof FhirCode>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
export interface FhirMedicationOutput {
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  amount?: Readonly<t.OutputOf<typeof FhirRatio>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  batch?: Readonly<t.OutputOf<typeof FhirMedication_Batch>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  code?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  form?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  ingredient?: ReadonlyArray<t.OutputOf<typeof FhirMedication_Ingredient>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  manufacturer?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  resourceType: Readonly<'Medication'>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  status?: Readonly<t.OutputOf<typeof FhirCode>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
