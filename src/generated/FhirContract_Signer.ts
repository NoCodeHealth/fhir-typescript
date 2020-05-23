import * as t from 'io-ts'
import { FhirCoding } from './FhirCoding'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirSignature } from './FhirSignature'
import { FhirString } from './FhirString'

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export const FhirContract_Signer: t.Type<FhirContract_Signer, FhirContract_SignerOutput> = t.recursion(
  'FhirContract_Signer',
  () =>
    t.intersection([
      t.type({
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        party: t.readonly(FhirReference),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        signature: t.readonlyArray(FhirSignature),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        type: t.readonly(FhirCoding),
      }),
      t.partial({
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        extension: t.readonlyArray(FhirExtension),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        id: t.readonly(FhirString),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        modifierExtension: t.readonlyArray(FhirExtension),
      }),
    ])
)

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface FhirContract_Signer {
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  party: Readonly<t.TypeOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  signature: ReadonlyArray<t.TypeOf<typeof FhirSignature>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  type: Readonly<t.TypeOf<typeof FhirCoding>>
}
/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface FhirContract_SignerOutput {
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  party: Readonly<t.OutputOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  signature: ReadonlyArray<t.OutputOf<typeof FhirSignature>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  type: Readonly<t.OutputOf<typeof FhirCoding>>
}
