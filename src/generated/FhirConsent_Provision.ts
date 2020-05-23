import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirCoding } from './FhirCoding'
import { FhirConsent_Actor } from './FhirConsent_Actor'
import { FhirConsent_Data } from './FhirConsent_Data'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirString } from './FhirString'

/** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
export const FhirConsent_Provision: t.Type<FhirConsent_Provision, FhirConsent_ProvisionOutput> = t.recursion(
  'FhirConsent_Provision',
  () =>
    t.partial({
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      _type: t.readonly(FhirElement),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      action: t.readonlyArray(FhirCodeableConcept),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      actor: t.readonlyArray(FhirConsent_Actor),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      class: t.readonlyArray(FhirCoding),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      code: t.readonlyArray(FhirCodeableConcept),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      data: t.readonlyArray(FhirConsent_Data),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      dataPeriod: t.readonly(FhirPeriod),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      extension: t.readonlyArray(FhirExtension),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      id: t.readonly(FhirString),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      period: t.readonly(FhirPeriod),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      provision: t.readonlyArray(FhirConsent_Provision),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      purpose: t.readonlyArray(FhirCoding),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      securityLabel: t.readonlyArray(FhirCoding),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      type: t.readonly(
        t.keyof({
          deny: null,
          permit: null,
        })
      ),
    })
)

/** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
export interface FhirConsent_Provision {
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  action?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  actor?: ReadonlyArray<t.TypeOf<typeof FhirConsent_Actor>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  class?: ReadonlyArray<t.TypeOf<typeof FhirCoding>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  code?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  data?: ReadonlyArray<t.TypeOf<typeof FhirConsent_Data>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  dataPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  period?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  provision?: ReadonlyArray<FhirConsent_Provision>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  purpose?: ReadonlyArray<t.TypeOf<typeof FhirCoding>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  securityLabel?: ReadonlyArray<t.TypeOf<typeof FhirCoding>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  type?: Readonly<'deny' | 'permit'>
}
/** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
export interface FhirConsent_ProvisionOutput {
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  action?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  actor?: ReadonlyArray<t.OutputOf<typeof FhirConsent_Actor>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  class?: ReadonlyArray<t.OutputOf<typeof FhirCoding>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  code?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  data?: ReadonlyArray<t.OutputOf<typeof FhirConsent_Data>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  dataPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  period?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  provision?: ReadonlyArray<FhirConsent_ProvisionOutput>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  purpose?: ReadonlyArray<t.OutputOf<typeof FhirCoding>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  securityLabel?: ReadonlyArray<t.OutputOf<typeof FhirCoding>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  type?: Readonly<'deny' | 'permit'>
}
