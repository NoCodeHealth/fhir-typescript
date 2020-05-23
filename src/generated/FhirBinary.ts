import * as t from 'io-ts'
import { FhirBase64Binary } from './FhirBase64Binary'
import { FhirCode } from './FhirCode'
import { FhirElement } from './FhirElement'
import { FhirId } from './FhirId'
import { FhirMeta } from './FhirMeta'
import { FhirReference } from './FhirReference'
import { FhirUri } from './FhirUri'

/** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
export const FhirBinary: t.Type<FhirBinary, FhirBinaryOutput> = t.recursion('FhirBinary', () =>
  t.intersection([
    t.type({
      /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
      resourceType: t.readonly(t.literal('Binary')),
    }),
    t.partial({
      /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
      _contentType: t.readonly(FhirElement),
      /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
      _data: t.readonly(FhirElement),
      /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
      _implicitRules: t.readonly(FhirElement),
      /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
      _language: t.readonly(FhirElement),
      /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
      contentType: t.readonly(FhirCode),
      /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
      data: t.readonly(FhirBase64Binary),
      /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
      id: t.readonly(FhirId),
      /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
      implicitRules: t.readonly(FhirUri),
      /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
      language: t.readonly(FhirCode),
      /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
      meta: t.readonly(FhirMeta),
      /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
      securityContext: t.readonly(FhirReference),
    }),
  ])
)

/** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
export interface FhirBinary {
  /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
  _contentType?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
  _data?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
  contentType?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
  data?: Readonly<t.TypeOf<typeof FhirBase64Binary>>
  /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
  resourceType: Readonly<'Binary'>
  /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
  securityContext?: Readonly<t.TypeOf<typeof FhirReference>>
}
/** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
export interface FhirBinaryOutput {
  /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
  _contentType?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
  _data?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
  contentType?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
  data?: Readonly<t.OutputOf<typeof FhirBase64Binary>>
  /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
  resourceType: Readonly<'Binary'>
  /** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
  securityContext?: Readonly<t.OutputOf<typeof FhirReference>>
}
