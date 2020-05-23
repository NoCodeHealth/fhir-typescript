import * as t from 'io-ts'
import { FhirCoding } from './FhirCoding'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirUnsignedInt } from './FhirUnsignedInt'

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export const FhirContract_SecurityLabel: t.Type<
  FhirContract_SecurityLabel,
  FhirContract_SecurityLabelOutput
> = t.recursion('FhirContract_SecurityLabel', () =>
  t.intersection([
    t.type({
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      classification: t.readonly(FhirCoding),
    }),
    t.partial({
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      _number: t.readonlyArray(FhirElement),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      category: t.readonlyArray(FhirCoding),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      control: t.readonlyArray(FhirCoding),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      extension: t.readonlyArray(FhirExtension),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      id: t.readonly(FhirString),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      number: t.readonlyArray(FhirUnsignedInt),
    }),
  ])
)

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface FhirContract_SecurityLabel {
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _number?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  category?: ReadonlyArray<t.TypeOf<typeof FhirCoding>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  classification: Readonly<t.TypeOf<typeof FhirCoding>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  control?: ReadonlyArray<t.TypeOf<typeof FhirCoding>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  number?: ReadonlyArray<t.TypeOf<typeof FhirUnsignedInt>>
}
/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface FhirContract_SecurityLabelOutput {
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _number?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  category?: ReadonlyArray<t.OutputOf<typeof FhirCoding>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  classification: Readonly<t.OutputOf<typeof FhirCoding>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  control?: ReadonlyArray<t.OutputOf<typeof FhirCoding>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  number?: ReadonlyArray<t.OutputOf<typeof FhirUnsignedInt>>
}
