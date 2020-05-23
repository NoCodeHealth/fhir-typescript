import * as t from 'io-ts'
import { FhirBase64Binary } from './FhirBase64Binary'
import { FhirCode } from './FhirCode'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirUnsignedInt } from './FhirUnsignedInt'
import { FhirUrl } from './FhirUrl'

/** For referring to data content defined in other formats. */
export const FhirAttachment: t.Type<FhirAttachment, FhirAttachmentOutput> = t.recursion('FhirAttachment', () =>
  t.partial({
    /** For referring to data content defined in other formats. */
    _contentType: t.readonly(FhirElement),
    /** For referring to data content defined in other formats. */
    _creation: t.readonly(FhirElement),
    /** For referring to data content defined in other formats. */
    _data: t.readonly(FhirElement),
    /** For referring to data content defined in other formats. */
    _hash: t.readonly(FhirElement),
    /** For referring to data content defined in other formats. */
    _language: t.readonly(FhirElement),
    /** For referring to data content defined in other formats. */
    _size: t.readonly(FhirElement),
    /** For referring to data content defined in other formats. */
    _title: t.readonly(FhirElement),
    /** For referring to data content defined in other formats. */
    _url: t.readonly(FhirElement),
    /** For referring to data content defined in other formats. */
    contentType: t.readonly(FhirCode),
    /** For referring to data content defined in other formats. */
    creation: t.readonly(FhirDateTime),
    /** For referring to data content defined in other formats. */
    data: t.readonly(FhirBase64Binary),
    /** For referring to data content defined in other formats. */
    extension: t.readonlyArray(FhirExtension),
    /** For referring to data content defined in other formats. */
    hash: t.readonly(FhirBase64Binary),
    /** For referring to data content defined in other formats. */
    id: t.readonly(FhirString),
    /** For referring to data content defined in other formats. */
    language: t.readonly(FhirCode),
    /** For referring to data content defined in other formats. */
    size: t.readonly(FhirUnsignedInt),
    /** For referring to data content defined in other formats. */
    title: t.readonly(FhirString),
    /** For referring to data content defined in other formats. */
    url: t.readonly(FhirUrl),
  })
)

/** For referring to data content defined in other formats. */
export interface FhirAttachment {
  /** For referring to data content defined in other formats. */
  _contentType?: Readonly<t.TypeOf<typeof FhirElement>>
  /** For referring to data content defined in other formats. */
  _creation?: Readonly<t.TypeOf<typeof FhirElement>>
  /** For referring to data content defined in other formats. */
  _data?: Readonly<t.TypeOf<typeof FhirElement>>
  /** For referring to data content defined in other formats. */
  _hash?: Readonly<t.TypeOf<typeof FhirElement>>
  /** For referring to data content defined in other formats. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** For referring to data content defined in other formats. */
  _size?: Readonly<t.TypeOf<typeof FhirElement>>
  /** For referring to data content defined in other formats. */
  _title?: Readonly<t.TypeOf<typeof FhirElement>>
  /** For referring to data content defined in other formats. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** For referring to data content defined in other formats. */
  contentType?: Readonly<t.TypeOf<typeof FhirCode>>
  /** For referring to data content defined in other formats. */
  creation?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** For referring to data content defined in other formats. */
  data?: Readonly<t.TypeOf<typeof FhirBase64Binary>>
  /** For referring to data content defined in other formats. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** For referring to data content defined in other formats. */
  hash?: Readonly<t.TypeOf<typeof FhirBase64Binary>>
  /** For referring to data content defined in other formats. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** For referring to data content defined in other formats. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** For referring to data content defined in other formats. */
  size?: Readonly<t.TypeOf<typeof FhirUnsignedInt>>
  /** For referring to data content defined in other formats. */
  title?: Readonly<t.TypeOf<typeof FhirString>>
  /** For referring to data content defined in other formats. */
  url?: Readonly<t.TypeOf<typeof FhirUrl>>
}
/** For referring to data content defined in other formats. */
export interface FhirAttachmentOutput {
  /** For referring to data content defined in other formats. */
  _contentType?: Readonly<t.OutputOf<typeof FhirElement>>
  /** For referring to data content defined in other formats. */
  _creation?: Readonly<t.OutputOf<typeof FhirElement>>
  /** For referring to data content defined in other formats. */
  _data?: Readonly<t.OutputOf<typeof FhirElement>>
  /** For referring to data content defined in other formats. */
  _hash?: Readonly<t.OutputOf<typeof FhirElement>>
  /** For referring to data content defined in other formats. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** For referring to data content defined in other formats. */
  _size?: Readonly<t.OutputOf<typeof FhirElement>>
  /** For referring to data content defined in other formats. */
  _title?: Readonly<t.OutputOf<typeof FhirElement>>
  /** For referring to data content defined in other formats. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** For referring to data content defined in other formats. */
  contentType?: Readonly<t.OutputOf<typeof FhirCode>>
  /** For referring to data content defined in other formats. */
  creation?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** For referring to data content defined in other formats. */
  data?: Readonly<t.OutputOf<typeof FhirBase64Binary>>
  /** For referring to data content defined in other formats. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** For referring to data content defined in other formats. */
  hash?: Readonly<t.OutputOf<typeof FhirBase64Binary>>
  /** For referring to data content defined in other formats. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** For referring to data content defined in other formats. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** For referring to data content defined in other formats. */
  size?: Readonly<t.OutputOf<typeof FhirUnsignedInt>>
  /** For referring to data content defined in other formats. */
  title?: Readonly<t.OutputOf<typeof FhirString>>
  /** For referring to data content defined in other formats. */
  url?: Readonly<t.OutputOf<typeof FhirUrl>>
}
