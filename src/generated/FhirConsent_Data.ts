import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
export const FhirConsent_Data: t.Type<FhirConsent_Data, FhirConsent_DataOutput> = t.recursion('FhirConsent_Data', () =>
  t.intersection([
    t.type({
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      reference: t.readonly(FhirReference),
    }),
    t.partial({
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      _meaning: t.readonly(FhirElement),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      extension: t.readonlyArray(FhirExtension),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      id: t.readonly(FhirString),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      meaning: t.readonly(
        t.keyof({
          instance: null,
          related: null,
          dependents: null,
          authoredby: null,
        })
      ),
      /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
      modifierExtension: t.readonlyArray(FhirExtension),
    }),
  ])
)

/** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
export interface FhirConsent_Data {
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  _meaning?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  meaning?: Readonly<'instance' | 'related' | 'dependents' | 'authoredby'>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  reference: Readonly<t.TypeOf<typeof FhirReference>>
}
/** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
export interface FhirConsent_DataOutput {
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  _meaning?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  meaning?: Readonly<'instance' | 'related' | 'dependents' | 'authoredby'>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
  reference: Readonly<t.OutputOf<typeof FhirReference>>
}
