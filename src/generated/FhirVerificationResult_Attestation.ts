import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDate } from './FhirDate'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirSignature } from './FhirSignature'
import { FhirString } from './FhirString'

/** Describes validation requirements, source(s), status and dates for one or more elements. */
export const FhirVerificationResult_Attestation: t.Type<
  FhirVerificationResult_Attestation,
  FhirVerificationResult_AttestationOutput
> = t.recursion('FhirVerificationResult_Attestation', () =>
  t.partial({
    /** Describes validation requirements, source(s), status and dates for one or more elements. */
    _date: t.readonly(FhirElement),
    /** Describes validation requirements, source(s), status and dates for one or more elements. */
    _proxyIdentityCertificate: t.readonly(FhirElement),
    /** Describes validation requirements, source(s), status and dates for one or more elements. */
    _sourceIdentityCertificate: t.readonly(FhirElement),
    /** Describes validation requirements, source(s), status and dates for one or more elements. */
    communicationMethod: t.readonly(FhirCodeableConcept),
    /** Describes validation requirements, source(s), status and dates for one or more elements. */
    date: t.readonly(FhirDate),
    /** Describes validation requirements, source(s), status and dates for one or more elements. */
    extension: t.readonlyArray(FhirExtension),
    /** Describes validation requirements, source(s), status and dates for one or more elements. */
    id: t.readonly(FhirString),
    /** Describes validation requirements, source(s), status and dates for one or more elements. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** Describes validation requirements, source(s), status and dates for one or more elements. */
    onBehalfOf: t.readonly(FhirReference),
    /** Describes validation requirements, source(s), status and dates for one or more elements. */
    proxyIdentityCertificate: t.readonly(FhirString),
    /** Describes validation requirements, source(s), status and dates for one or more elements. */
    proxySignature: t.readonly(FhirSignature),
    /** Describes validation requirements, source(s), status and dates for one or more elements. */
    sourceIdentityCertificate: t.readonly(FhirString),
    /** Describes validation requirements, source(s), status and dates for one or more elements. */
    sourceSignature: t.readonly(FhirSignature),
    /** Describes validation requirements, source(s), status and dates for one or more elements. */
    who: t.readonly(FhirReference),
  })
)

/** Describes validation requirements, source(s), status and dates for one or more elements. */
export interface FhirVerificationResult_Attestation {
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  _proxyIdentityCertificate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  _sourceIdentityCertificate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  communicationMethod?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  date?: Readonly<t.TypeOf<typeof FhirDate>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  onBehalfOf?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  proxyIdentityCertificate?: Readonly<t.TypeOf<typeof FhirString>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  proxySignature?: Readonly<t.TypeOf<typeof FhirSignature>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  sourceIdentityCertificate?: Readonly<t.TypeOf<typeof FhirString>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  sourceSignature?: Readonly<t.TypeOf<typeof FhirSignature>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  who?: Readonly<t.TypeOf<typeof FhirReference>>
}
/** Describes validation requirements, source(s), status and dates for one or more elements. */
export interface FhirVerificationResult_AttestationOutput {
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  _proxyIdentityCertificate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  _sourceIdentityCertificate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  communicationMethod?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  date?: Readonly<t.OutputOf<typeof FhirDate>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  onBehalfOf?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  proxyIdentityCertificate?: Readonly<t.OutputOf<typeof FhirString>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  proxySignature?: Readonly<t.OutputOf<typeof FhirSignature>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  sourceIdentityCertificate?: Readonly<t.OutputOf<typeof FhirString>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  sourceSignature?: Readonly<t.OutputOf<typeof FhirSignature>>
  /** Describes validation requirements, source(s), status and dates for one or more elements. */
  who?: Readonly<t.OutputOf<typeof FhirReference>>
}
