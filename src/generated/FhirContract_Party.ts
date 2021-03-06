import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export const FhirContract_Party: t.Type<FhirContract_Party, FhirContract_PartyOutput> = t.recursion(
  'FhirContract_Party',
  () =>
    t.intersection([
      t.type({
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        reference: t.readonlyArray(FhirReference),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        role: t.readonly(FhirCodeableConcept),
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
export interface FhirContract_Party {
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  reference: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  role: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface FhirContract_PartyOutput {
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  reference: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  role: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
