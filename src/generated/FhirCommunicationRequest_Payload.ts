import * as t from 'io-ts'
import { FhirAttachment } from './FhirAttachment'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
export const FhirCommunicationRequest_Payload: t.Type<
  FhirCommunicationRequest_Payload,
  FhirCommunicationRequest_PayloadOutput
> = t.recursion('FhirCommunicationRequest_Payload', () =>
  t.partial({
    /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
    _contentString: t.readonly(FhirElement),
    /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
    contentAttachment: t.readonly(FhirAttachment),
    /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
    contentReference: t.readonly(FhirReference),
    /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
    contentString: t.readonly(t.string),
    /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
    extension: t.readonlyArray(FhirExtension),
    /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
    id: t.readonly(FhirString),
    /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
    modifierExtension: t.readonlyArray(FhirExtension),
  })
)

/** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
export interface FhirCommunicationRequest_Payload {
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  _contentString?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  contentAttachment?: Readonly<t.TypeOf<typeof FhirAttachment>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  contentReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  contentString?: Readonly<string>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
export interface FhirCommunicationRequest_PayloadOutput {
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  _contentString?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  contentAttachment?: Readonly<t.OutputOf<typeof FhirAttachment>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  contentReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  contentString?: Readonly<string>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
