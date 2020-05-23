import * as t from 'io-ts'
import { FhirCanonical } from './FhirCanonical'
import { FhirCode } from './FhirCode'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirUnsignedInt } from './FhirUnsignedInt'

/** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
export const FhirMessageDefinition_Focus: t.Type<
  FhirMessageDefinition_Focus,
  FhirMessageDefinition_FocusOutput
> = t.recursion('FhirMessageDefinition_Focus', () =>
  t.partial({
    /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
    _code: t.readonly(FhirElement),
    /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
    _max: t.readonly(FhirElement),
    /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
    _min: t.readonly(FhirElement),
    /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
    code: t.readonly(FhirCode),
    /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
    extension: t.readonlyArray(FhirExtension),
    /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
    id: t.readonly(FhirString),
    /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
    max: t.readonly(FhirString),
    /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
    min: t.readonly(FhirUnsignedInt),
    /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
    profile: t.readonly(FhirCanonical),
  })
)

/** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
export interface FhirMessageDefinition_Focus {
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _code?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _max?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _min?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  code?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  max?: Readonly<t.TypeOf<typeof FhirString>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  min?: Readonly<t.TypeOf<typeof FhirUnsignedInt>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  profile?: Readonly<t.TypeOf<typeof FhirCanonical>>
}
/** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
export interface FhirMessageDefinition_FocusOutput {
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _code?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _max?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  _min?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  code?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  max?: Readonly<t.OutputOf<typeof FhirString>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  min?: Readonly<t.OutputOf<typeof FhirUnsignedInt>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
  profile?: Readonly<t.OutputOf<typeof FhirCanonical>>
}
