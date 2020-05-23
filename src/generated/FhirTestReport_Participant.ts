import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** A summary of information based on the results of executing a TestScript. */
export const FhirTestReport_Participant: t.Type<
  FhirTestReport_Participant,
  FhirTestReport_ParticipantOutput
> = t.recursion('FhirTestReport_Participant', () =>
  t.partial({
    /** A summary of information based on the results of executing a TestScript. */
    _display: t.readonly(FhirElement),
    /** A summary of information based on the results of executing a TestScript. */
    _type: t.readonly(FhirElement),
    /** A summary of information based on the results of executing a TestScript. */
    _uri: t.readonly(FhirElement),
    /** A summary of information based on the results of executing a TestScript. */
    display: t.readonly(FhirString),
    /** A summary of information based on the results of executing a TestScript. */
    extension: t.readonlyArray(FhirExtension),
    /** A summary of information based on the results of executing a TestScript. */
    id: t.readonly(FhirString),
    /** A summary of information based on the results of executing a TestScript. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A summary of information based on the results of executing a TestScript. */
    type: t.readonly(
      t.keyof({
        'test-engine': null,
        client: null,
        server: null,
      })
    ),
    /** A summary of information based on the results of executing a TestScript. */
    uri: t.readonly(FhirUri),
  })
)

/** A summary of information based on the results of executing a TestScript. */
export interface FhirTestReport_Participant {
  /** A summary of information based on the results of executing a TestScript. */
  _display?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  _uri?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  display?: Readonly<t.TypeOf<typeof FhirString>>
  /** A summary of information based on the results of executing a TestScript. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A summary of information based on the results of executing a TestScript. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A summary of information based on the results of executing a TestScript. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A summary of information based on the results of executing a TestScript. */
  type?: Readonly<'test-engine' | 'client' | 'server'>
  /** A summary of information based on the results of executing a TestScript. */
  uri?: Readonly<t.TypeOf<typeof FhirUri>>
}
/** A summary of information based on the results of executing a TestScript. */
export interface FhirTestReport_ParticipantOutput {
  /** A summary of information based on the results of executing a TestScript. */
  _display?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  _uri?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A summary of information based on the results of executing a TestScript. */
  display?: Readonly<t.OutputOf<typeof FhirString>>
  /** A summary of information based on the results of executing a TestScript. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A summary of information based on the results of executing a TestScript. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A summary of information based on the results of executing a TestScript. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A summary of information based on the results of executing a TestScript. */
  type?: Readonly<'test-engine' | 'client' | 'server'>
  /** A summary of information based on the results of executing a TestScript. */
  uri?: Readonly<t.OutputOf<typeof FhirUri>>
}
