import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirCoding } from './FhirCoding'
import { FhirContract_Answer } from './FhirContract_Answer'
import { FhirContract_Context } from './FhirContract_Context'
import { FhirContract_ValuedItem } from './FhirContract_ValuedItem'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'
import { FhirUnsignedInt } from './FhirUnsignedInt'

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export const FhirContract_Asset: t.Type<FhirContract_Asset, FhirContract_AssetOutput> = t.recursion(
  'FhirContract_Asset',
  () =>
    t.partial({
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      _condition: t.readonly(FhirElement),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      _linkId: t.readonlyArray(FhirElement),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      _securityLabelNumber: t.readonlyArray(FhirElement),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      _text: t.readonly(FhirElement),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      answer: t.readonlyArray(FhirContract_Answer),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      condition: t.readonly(FhirString),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      context: t.readonlyArray(FhirContract_Context),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      extension: t.readonlyArray(FhirExtension),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      id: t.readonly(FhirString),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      linkId: t.readonlyArray(FhirString),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      period: t.readonlyArray(FhirPeriod),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      periodType: t.readonlyArray(FhirCodeableConcept),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      relationship: t.readonly(FhirCoding),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      scope: t.readonly(FhirCodeableConcept),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      securityLabelNumber: t.readonlyArray(FhirUnsignedInt),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      subtype: t.readonlyArray(FhirCodeableConcept),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      text: t.readonly(FhirString),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      type: t.readonlyArray(FhirCodeableConcept),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      typeReference: t.readonlyArray(FhirReference),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      usePeriod: t.readonlyArray(FhirPeriod),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      valuedItem: t.readonlyArray(FhirContract_ValuedItem),
    })
)

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface FhirContract_Asset {
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _condition?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _linkId?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _securityLabelNumber?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _text?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  answer?: ReadonlyArray<t.TypeOf<typeof FhirContract_Answer>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  condition?: Readonly<t.TypeOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  context?: ReadonlyArray<t.TypeOf<typeof FhirContract_Context>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  linkId?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  period?: ReadonlyArray<t.TypeOf<typeof FhirPeriod>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  periodType?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  relationship?: Readonly<t.TypeOf<typeof FhirCoding>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  scope?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  securityLabelNumber?: ReadonlyArray<t.TypeOf<typeof FhirUnsignedInt>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  subtype?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  text?: Readonly<t.TypeOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  type?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  typeReference?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  usePeriod?: ReadonlyArray<t.TypeOf<typeof FhirPeriod>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  valuedItem?: ReadonlyArray<t.TypeOf<typeof FhirContract_ValuedItem>>
}
/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface FhirContract_AssetOutput {
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _condition?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _linkId?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _securityLabelNumber?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _text?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  answer?: ReadonlyArray<t.OutputOf<typeof FhirContract_Answer>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  condition?: Readonly<t.OutputOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  context?: ReadonlyArray<t.OutputOf<typeof FhirContract_Context>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  linkId?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  period?: ReadonlyArray<t.OutputOf<typeof FhirPeriod>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  periodType?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  relationship?: Readonly<t.OutputOf<typeof FhirCoding>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  scope?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  securityLabelNumber?: ReadonlyArray<t.OutputOf<typeof FhirUnsignedInt>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  subtype?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  text?: Readonly<t.OutputOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  type?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  typeReference?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  usePeriod?: ReadonlyArray<t.OutputOf<typeof FhirPeriod>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  valuedItem?: ReadonlyArray<t.OutputOf<typeof FhirContract_ValuedItem>>
}
