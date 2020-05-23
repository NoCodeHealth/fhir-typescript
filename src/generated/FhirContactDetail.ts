import * as t from 'io-ts'
import { FhirContactPoint } from './FhirContactPoint'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** Specifies contact information for a person or organization. */
export const FhirContactDetail: t.Type<FhirContactDetail, FhirContactDetailOutput> = t.recursion(
  'FhirContactDetail',
  () =>
    t.partial({
      /** Specifies contact information for a person or organization. */
      _name: t.readonly(FhirElement),
      /** Specifies contact information for a person or organization. */
      extension: t.readonlyArray(FhirExtension),
      /** Specifies contact information for a person or organization. */
      id: t.readonly(FhirString),
      /** Specifies contact information for a person or organization. */
      name: t.readonly(FhirString),
      /** Specifies contact information for a person or organization. */
      telecom: t.readonlyArray(FhirContactPoint),
    })
)

/** Specifies contact information for a person or organization. */
export interface FhirContactDetail {
  /** Specifies contact information for a person or organization. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Specifies contact information for a person or organization. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Specifies contact information for a person or organization. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Specifies contact information for a person or organization. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** Specifies contact information for a person or organization. */
  telecom?: ReadonlyArray<t.TypeOf<typeof FhirContactPoint>>
}
/** Specifies contact information for a person or organization. */
export interface FhirContactDetailOutput {
  /** Specifies contact information for a person or organization. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Specifies contact information for a person or organization. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Specifies contact information for a person or organization. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Specifies contact information for a person or organization. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** Specifies contact information for a person or organization. */
  telecom?: ReadonlyArray<t.OutputOf<typeof FhirContactPoint>>
}
