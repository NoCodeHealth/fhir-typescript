import * as t from 'io-ts'
import { FhirCanonical } from './FhirCanonical'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirMarkdown } from './FhirMarkdown'
import { FhirString } from './FhirString'

/** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
export const FhirMessageDefinition_AllowedResponse: t.Type<
  FhirMessageDefinition_AllowedResponse,
  FhirMessageDefinition_AllowedResponseOutput
> = t.recursion('FhirMessageDefinition_AllowedResponse', () =>
  t.intersection([
    t.type({
      /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
      message: t.readonly(FhirCanonical),
    }),
    t.partial({
      /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
      _situation: t.readonly(FhirElement),
      /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
      extension: t.readonlyArray(FhirExtension),
      /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
      id: t.readonly(FhirString),
      /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
      situation: t.readonly(FhirMarkdown),
    }),
  ])
)

/** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
export interface FhirMessageDefinition_AllowedResponse {
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _situation?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  message: Readonly<t.TypeOf<typeof FhirCanonical>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  situation?: Readonly<t.TypeOf<typeof FhirMarkdown>>
}
/** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
export interface FhirMessageDefinition_AllowedResponseOutput {
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _situation?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  message: Readonly<t.OutputOf<typeof FhirCanonical>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  situation?: Readonly<t.OutputOf<typeof FhirMarkdown>>
}
