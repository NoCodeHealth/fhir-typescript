import * as t from 'io-ts'
import { FhirAttachment } from './FhirAttachment'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export const FhirContract_Friendly: t.Type<FhirContract_Friendly, FhirContract_FriendlyOutput> = t.recursion(
  'FhirContract_Friendly',
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
export interface FhirContract_Friendly {
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
export interface FhirContract_FriendlyOutput {
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
