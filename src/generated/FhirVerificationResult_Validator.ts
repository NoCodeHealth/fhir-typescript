import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirSignature } from './FhirSignature'
import { FhirString } from './FhirString'

/** Describes validation requirements, source(s), status and dates for one or more elements. */
export const FhirVerificationResult_Validator: t.Type<
  FhirVerificationResult_Validator,
  FhirVerificationResult_ValidatorOutput
> = t.recursion('FhirVerificationResult_Validator', () =>
  t.intersection([
    t.type({
      /** Describes validation requirements, source(s), status and dates for one or more elements. */
      organization: t.readonly(FhirReference),
    }),
    t.partial({
      /** Describes validation requirements, source(s), status and dates for one or more elements. */
      _identityCertificate: t.readonly(FhirElement),
      /** Describes validation requirements, source(s), status and dates for one or more elements. */
      attestationSignature: t.readonly(FhirSignature),
      /** Describes validation requirements, source(s), status and dates for one or more elements. */
      extension: t.readonlyArray(FhirExtension),
      /** Describes validation requirements, source(s), status and dates for one or more elements. */
      id: t.readonly(FhirString),
      /** Describes validation requirements, source(s), status and dates for one or more elements. */
      identityCertificate: t.readonly(FhirString),
      /** Describes validation requirements, source(s), status and dates for one or more elements. */
      modifierExtension: t.readonlyArray(FhirExtension),
    }),
  ])
)

/** Describes validation requirements, source(s), status and dates for one or more elements. */
export interface FhirVerificationResult_Validator {
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  _identityCertificate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  attestationSignature?: Readonly<t.TypeOf<typeof FhirSignature>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  identityCertificate?: Readonly<t.TypeOf<typeof FhirString>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  organization: Readonly<t.TypeOf<typeof FhirReference>>
}
/** Describes validation requirements, source(s), status and dates for one or more elements. */
export interface FhirVerificationResult_ValidatorOutput {
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  _identityCertificate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  attestationSignature?: Readonly<t.OutputOf<typeof FhirSignature>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  identityCertificate?: Readonly<t.OutputOf<typeof FhirString>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  organization: Readonly<t.OutputOf<typeof FhirReference>>
}
