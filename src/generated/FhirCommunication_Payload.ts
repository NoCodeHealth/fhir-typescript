import * as t from 'io-ts'
import { FhirAttachment } from './FhirAttachment'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
export const FhirCommunication_Payload: t.Type<
  FhirCommunication_Payload,
  FhirCommunication_PayloadOutput
> = t.recursion('FhirCommunication_Payload', () =>
  t.partial({
    /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
    _contentString: t.readonly(FhirElement),
    /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
    contentAttachment: t.readonly(FhirAttachment),
    /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
    contentReference: t.readonly(FhirReference),
    /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
    contentString: t.readonly(t.string),
    /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
    extension: t.readonlyArray(FhirExtension),
    /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
    id: t.readonly(FhirString),
    /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
    modifierExtension: t.readonlyArray(FhirExtension),
  })
)

/** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
export interface FhirCommunication_Payload {
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  _contentString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  contentAttachment?: Readonly<t.TypeOf<typeof FhirAttachment>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  contentReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  contentString?: Readonly<string>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
export interface FhirCommunication_PayloadOutput {
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  _contentString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  contentAttachment?: Readonly<t.OutputOf<typeof FhirAttachment>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  contentReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  contentString?: Readonly<string>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
