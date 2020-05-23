import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirContract_Action } from './FhirContract_Action'
import { FhirContract_Asset } from './FhirContract_Asset'
import { FhirContract_Offer } from './FhirContract_Offer'
import { FhirContract_SecurityLabel } from './FhirContract_SecurityLabel'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export const FhirContract_Term: t.Type<FhirContract_Term, FhirContract_TermOutput> = t.recursion(
  'FhirContract_Term',
  () =>
    t.intersection([
      t.type({
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        offer: t.readonly(FhirContract_Offer),
      }),
      t.partial({
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        _issued: t.readonly(FhirElement),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        _text: t.readonly(FhirElement),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        action: t.readonlyArray(FhirContract_Action),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        applies: t.readonly(FhirPeriod),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        asset: t.readonlyArray(FhirContract_Asset),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        extension: t.readonlyArray(FhirExtension),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        group: t.readonlyArray(FhirContract_Term),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        id: t.readonly(FhirString),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        identifier: t.readonly(FhirIdentifier),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        issued: t.readonly(FhirDateTime),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        securityLabel: t.readonlyArray(FhirContract_SecurityLabel),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        subType: t.readonly(FhirCodeableConcept),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        text: t.readonly(FhirString),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        topicCodeableConcept: t.readonly(FhirCodeableConcept),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        topicReference: t.readonly(FhirReference),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        type: t.readonly(FhirCodeableConcept),
      }),
    ])
)

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface FhirContract_Term {
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _issued?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _text?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  action?: ReadonlyArray<t.TypeOf<typeof FhirContract_Action>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  applies?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  asset?: ReadonlyArray<t.TypeOf<typeof FhirContract_Asset>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  group?: ReadonlyArray<FhirContract_Term>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  identifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  issued?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  offer: Readonly<t.TypeOf<typeof FhirContract_Offer>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  securityLabel?: ReadonlyArray<t.TypeOf<typeof FhirContract_SecurityLabel>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  subType?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  text?: Readonly<t.TypeOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  topicCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  topicReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface FhirContract_TermOutput {
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _issued?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _text?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  action?: ReadonlyArray<t.OutputOf<typeof FhirContract_Action>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  applies?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  asset?: ReadonlyArray<t.OutputOf<typeof FhirContract_Asset>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  group?: ReadonlyArray<FhirContract_TermOutput>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  identifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  issued?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  offer: Readonly<t.OutputOf<typeof FhirContract_Offer>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  securityLabel?: ReadonlyArray<t.OutputOf<typeof FhirContract_SecurityLabel>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  subType?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  text?: Readonly<t.OutputOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  topicCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  topicReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
