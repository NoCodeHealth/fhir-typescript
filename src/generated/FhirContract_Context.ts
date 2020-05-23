import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export const FhirContract_Context: t.Type<FhirContract_Context, FhirContract_ContextOutput> = t.recursion(
  'FhirContract_Context',
  () =>
    t.partial({
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      _text: t.readonly(FhirElement),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      code: t.readonlyArray(FhirCodeableConcept),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      extension: t.readonlyArray(FhirExtension),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      id: t.readonly(FhirString),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      reference: t.readonly(FhirReference),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      text: t.readonly(FhirString),
    })
)

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface FhirContract_Context {
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _text?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  code?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  reference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  text?: Readonly<t.TypeOf<typeof FhirString>>
}
/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface FhirContract_ContextOutput {
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _text?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  code?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  reference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  text?: Readonly<t.OutputOf<typeof FhirString>>
}
