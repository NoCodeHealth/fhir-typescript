import * as t from 'io-ts'
import { FhirAttachment } from './FhirAttachment'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export const FhirContract_Legal: t.Type<FhirContract_Legal, FhirContract_LegalOutput> = t.recursion(
  'FhirContract_Legal',
  () =>
    t.partial({
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      contentAttachment: t.readonly(FhirAttachment),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      contentReference: t.readonly(FhirReference),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      extension: t.readonlyArray(FhirExtension),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      id: t.readonly(FhirString),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      modifierExtension: t.readonlyArray(FhirExtension),
    })
)

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface FhirContract_Legal {
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  contentAttachment?: Readonly<t.TypeOf<typeof FhirAttachment>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  contentReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface FhirContract_LegalOutput {
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  contentAttachment?: Readonly<t.OutputOf<typeof FhirAttachment>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  contentReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
