import * as t from 'io-ts'
import { FhirAttachment } from './FhirAttachment'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirContract_ContentDefinition } from './FhirContract_ContentDefinition'
import { FhirContract_Friendly } from './FhirContract_Friendly'
import { FhirContract_Legal } from './FhirContract_Legal'
import { FhirContract_Rule } from './FhirContract_Rule'
import { FhirContract_Signer } from './FhirContract_Signer'
import { FhirContract_Term } from './FhirContract_Term'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export const FhirContract: t.Type<FhirContract, FhirContractOutput> = t.recursion('FhirContract', () =>
  t.intersection([
    t.type({
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      resourceType: t.readonly(t.literal('Contract')),
    }),
    t.partial({
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      _alias: t.readonlyArray(FhirElement),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      _implicitRules: t.readonly(FhirElement),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      _instantiatesUri: t.readonly(FhirElement),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      _issued: t.readonly(FhirElement),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      _language: t.readonly(FhirElement),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      _name: t.readonly(FhirElement),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      _status: t.readonly(FhirElement),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      _subtitle: t.readonly(FhirElement),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      _title: t.readonly(FhirElement),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      _url: t.readonly(FhirElement),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      _version: t.readonly(FhirElement),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      alias: t.readonlyArray(FhirString),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      applies: t.readonly(FhirPeriod),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      author: t.readonly(FhirReference),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      authority: t.readonlyArray(FhirReference),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      contained: t.readonlyArray(FhirResourceList),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      contentDefinition: t.readonly(FhirContract_ContentDefinition),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      contentDerivative: t.readonly(FhirCodeableConcept),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      domain: t.readonlyArray(FhirReference),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      expirationType: t.readonly(FhirCodeableConcept),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      extension: t.readonlyArray(FhirExtension),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      friendly: t.readonlyArray(FhirContract_Friendly),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      id: t.readonly(FhirId),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      implicitRules: t.readonly(FhirUri),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      instantiatesCanonical: t.readonly(FhirReference),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      instantiatesUri: t.readonly(FhirUri),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      issued: t.readonly(FhirDateTime),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      language: t.readonly(FhirCode),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      legal: t.readonlyArray(FhirContract_Legal),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      legalState: t.readonly(FhirCodeableConcept),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      legallyBindingAttachment: t.readonly(FhirAttachment),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      legallyBindingReference: t.readonly(FhirReference),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      meta: t.readonly(FhirMeta),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      name: t.readonly(FhirString),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      relevantHistory: t.readonlyArray(FhirReference),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      rule: t.readonlyArray(FhirContract_Rule),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      scope: t.readonly(FhirCodeableConcept),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      signer: t.readonlyArray(FhirContract_Signer),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      site: t.readonlyArray(FhirReference),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      status: t.readonly(FhirCode),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      subType: t.readonlyArray(FhirCodeableConcept),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      subject: t.readonlyArray(FhirReference),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      subtitle: t.readonly(FhirString),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      supportingInfo: t.readonlyArray(FhirReference),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      term: t.readonlyArray(FhirContract_Term),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      text: t.readonly(FhirNarrative),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      title: t.readonly(FhirString),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      topicCodeableConcept: t.readonly(FhirCodeableConcept),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      topicReference: t.readonly(FhirReference),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      type: t.readonly(FhirCodeableConcept),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      url: t.readonly(FhirUri),
      /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
      version: t.readonly(FhirString),
    }),
  ])
)

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface FhirContract {
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _alias?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _instantiatesUri?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _issued?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _subtitle?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _title?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _version?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  alias?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  applies?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  author?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  authority?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  contentDefinition?: Readonly<t.TypeOf<typeof FhirContract_ContentDefinition>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  contentDerivative?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  domain?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  expirationType?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  friendly?: ReadonlyArray<t.TypeOf<typeof FhirContract_Friendly>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  instantiatesCanonical?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  instantiatesUri?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  issued?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  legal?: ReadonlyArray<t.TypeOf<typeof FhirContract_Legal>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  legalState?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  legallyBindingAttachment?: Readonly<t.TypeOf<typeof FhirAttachment>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  legallyBindingReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  relevantHistory?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  resourceType: Readonly<'Contract'>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  rule?: ReadonlyArray<t.TypeOf<typeof FhirContract_Rule>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  scope?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  signer?: ReadonlyArray<t.TypeOf<typeof FhirContract_Signer>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  site?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  status?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  subType?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  subject?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  subtitle?: Readonly<t.TypeOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  supportingInfo?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  term?: ReadonlyArray<t.TypeOf<typeof FhirContract_Term>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  title?: Readonly<t.TypeOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  topicCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  topicReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  version?: Readonly<t.TypeOf<typeof FhirString>>
}
/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface FhirContractOutput {
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _alias?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _instantiatesUri?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _issued?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _subtitle?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _title?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _version?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  alias?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  applies?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  author?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  authority?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  contentDefinition?: Readonly<t.OutputOf<typeof FhirContract_ContentDefinition>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  contentDerivative?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  domain?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  expirationType?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  friendly?: ReadonlyArray<t.OutputOf<typeof FhirContract_Friendly>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  instantiatesCanonical?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  instantiatesUri?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  issued?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  legal?: ReadonlyArray<t.OutputOf<typeof FhirContract_Legal>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  legalState?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  legallyBindingAttachment?: Readonly<t.OutputOf<typeof FhirAttachment>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  legallyBindingReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  relevantHistory?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  resourceType: Readonly<'Contract'>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  rule?: ReadonlyArray<t.OutputOf<typeof FhirContract_Rule>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  scope?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  signer?: ReadonlyArray<t.OutputOf<typeof FhirContract_Signer>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  site?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  status?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  subType?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  subject?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  subtitle?: Readonly<t.OutputOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  supportingInfo?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  term?: ReadonlyArray<t.OutputOf<typeof FhirContract_Term>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  title?: Readonly<t.OutputOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  topicCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  topicReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  version?: Readonly<t.OutputOf<typeof FhirString>>
}
