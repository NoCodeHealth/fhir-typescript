import * as t from 'io-ts'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
export const FhirMedication_Batch: t.Type<FhirMedication_Batch, FhirMedication_BatchOutput> = t.recursion(
  'FhirMedication_Batch',
  () =>
    t.partial({
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      _expirationDate: t.readonly(FhirElement),
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      _lotNumber: t.readonly(FhirElement),
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      expirationDate: t.readonly(FhirDateTime),
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      extension: t.readonlyArray(FhirExtension),
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      id: t.readonly(FhirString),
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      lotNumber: t.readonly(FhirString),
      /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
      modifierExtension: t.readonlyArray(FhirExtension),
    })
)

/** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
export interface FhirMedication_Batch {
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  _expirationDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  _lotNumber?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  expirationDate?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  lotNumber?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
export interface FhirMedication_BatchOutput {
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  _expirationDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  _lotNumber?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  expirationDate?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  lotNumber?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
