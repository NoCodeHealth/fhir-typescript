import * as t from 'io-ts'
import { FhirAccount_Coverage } from './FhirAccount_Coverage'
import { FhirAccount_Guarantor } from './FhirAccount_Guarantor'
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
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
export const FhirAccount: t.Type<FhirAccount, FhirAccountOutput> = t.recursion('FhirAccount', () =>
  t.intersection([
    t.type({
      /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
      resourceType: t.readonly(t.literal('Account')),
    }),
    t.partial({
      /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
      _description: t.readonly(FhirElement),
      /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
      _implicitRules: t.readonly(FhirElement),
      /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
      _language: t.readonly(FhirElement),
      /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
      _name: t.readonly(FhirElement),
      /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
      _status: t.readonly(FhirElement),
      /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
      contained: t.readonlyArray(FhirResourceList),
      /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
      coverage: t.readonlyArray(FhirAccount_Coverage),
      /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
      description: t.readonly(FhirString),
      /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
      extension: t.readonlyArray(FhirExtension),
      /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
      guarantor: t.readonlyArray(FhirAccount_Guarantor),
      /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
      id: t.readonly(FhirId),
      /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
      implicitRules: t.readonly(FhirUri),
      /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
      language: t.readonly(FhirCode),
      /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
      meta: t.readonly(FhirMeta),
      /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
      name: t.readonly(FhirString),
      /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
      owner: t.readonly(FhirReference),
      /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
      partOf: t.readonly(FhirReference),
      /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
      servicePeriod: t.readonly(FhirPeriod),
      /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
      status: t.readonly(
        t.keyof({
          active: null,
          inactive: null,
          'entered-in-error': null,
          'on-hold': null,
          unknown: null,
        })
      ),
      /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
      subject: t.readonlyArray(FhirReference),
      /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
      text: t.readonly(FhirNarrative),
      /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
      type: t.readonly(FhirCodeableConcept),
    }),
  ])
)

/** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
export interface FhirAccount {
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  coverage?: ReadonlyArray<t.TypeOf<typeof FhirAccount_Coverage>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  guarantor?: ReadonlyArray<t.TypeOf<typeof FhirAccount_Guarantor>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  owner?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  partOf?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  resourceType: Readonly<'Account'>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  servicePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  status?: Readonly<'active' | 'inactive' | 'entered-in-error' | 'on-hold' | 'unknown'>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  subject?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
export interface FhirAccountOutput {
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  coverage?: ReadonlyArray<t.OutputOf<typeof FhirAccount_Coverage>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  guarantor?: ReadonlyArray<t.OutputOf<typeof FhirAccount_Guarantor>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  owner?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  partOf?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  resourceType: Readonly<'Account'>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  servicePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  status?: Readonly<'active' | 'inactive' | 'entered-in-error' | 'on-hold' | 'unknown'>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  subject?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
