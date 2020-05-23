import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirSubstanceReferenceInformation_Classification } from './FhirSubstanceReferenceInformation_Classification'
import { FhirSubstanceReferenceInformation_Gene } from './FhirSubstanceReferenceInformation_Gene'
import { FhirSubstanceReferenceInformation_GeneElement } from './FhirSubstanceReferenceInformation_GeneElement'
import { FhirSubstanceReferenceInformation_Target } from './FhirSubstanceReferenceInformation_Target'
import { FhirUri } from './FhirUri'

/** Todo. */
export const FhirSubstanceReferenceInformation: t.Type<
  FhirSubstanceReferenceInformation,
  FhirSubstanceReferenceInformationOutput
> = t.recursion('FhirSubstanceReferenceInformation', () =>
  t.intersection([
    t.type({
      /** Todo. */
      resourceType: t.readonly(t.literal('SubstanceReferenceInformation')),
    }),
    t.partial({
      /** Todo. */
      _comment: t.readonly(FhirElement),
      /** Todo. */
      _implicitRules: t.readonly(FhirElement),
      /** Todo. */
      _language: t.readonly(FhirElement),
      /** Todo. */
      classification: t.readonlyArray(FhirSubstanceReferenceInformation_Classification),
      /** Todo. */
      comment: t.readonly(FhirString),
      /** Todo. */
      contained: t.readonlyArray(FhirResourceList),
      /** Todo. */
      extension: t.readonlyArray(FhirExtension),
      /** Todo. */
      gene: t.readonlyArray(FhirSubstanceReferenceInformation_Gene),
      /** Todo. */
      geneElement: t.readonlyArray(FhirSubstanceReferenceInformation_GeneElement),
      /** Todo. */
      id: t.readonly(FhirId),
      /** Todo. */
      implicitRules: t.readonly(FhirUri),
      /** Todo. */
      language: t.readonly(FhirCode),
      /** Todo. */
      meta: t.readonly(FhirMeta),
      /** Todo. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Todo. */
      target: t.readonlyArray(FhirSubstanceReferenceInformation_Target),
      /** Todo. */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** Todo. */
export interface FhirSubstanceReferenceInformation {
  /** Todo. */
  _comment?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Todo. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Todo. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Todo. */
  classification?: ReadonlyArray<t.TypeOf<typeof FhirSubstanceReferenceInformation_Classification>>
  /** Todo. */
  comment?: Readonly<t.TypeOf<typeof FhirString>>
  /** Todo. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Todo. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Todo. */
  gene?: ReadonlyArray<t.TypeOf<typeof FhirSubstanceReferenceInformation_Gene>>
  /** Todo. */
  geneElement?: ReadonlyArray<t.TypeOf<typeof FhirSubstanceReferenceInformation_GeneElement>>
  /** Todo. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Todo. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Todo. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Todo. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Todo. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Todo. */
  resourceType: Readonly<'SubstanceReferenceInformation'>
  /** Todo. */
  target?: ReadonlyArray<t.TypeOf<typeof FhirSubstanceReferenceInformation_Target>>
  /** Todo. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** Todo. */
export interface FhirSubstanceReferenceInformationOutput {
  /** Todo. */
  _comment?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Todo. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Todo. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Todo. */
  classification?: ReadonlyArray<t.OutputOf<typeof FhirSubstanceReferenceInformation_Classification>>
  /** Todo. */
  comment?: Readonly<t.OutputOf<typeof FhirString>>
  /** Todo. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Todo. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Todo. */
  gene?: ReadonlyArray<t.OutputOf<typeof FhirSubstanceReferenceInformation_Gene>>
  /** Todo. */
  geneElement?: ReadonlyArray<t.OutputOf<typeof FhirSubstanceReferenceInformation_GeneElement>>
  /** Todo. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Todo. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Todo. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Todo. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Todo. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Todo. */
  resourceType: Readonly<'SubstanceReferenceInformation'>
  /** Todo. */
  target?: ReadonlyArray<t.OutputOf<typeof FhirSubstanceReferenceInformation_Target>>
  /** Todo. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
