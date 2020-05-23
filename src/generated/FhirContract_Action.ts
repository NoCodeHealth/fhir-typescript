import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirBoolean } from './FhirBoolean'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirContract_Subject } from './FhirContract_Subject'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'
import { FhirTiming } from './FhirTiming'
import { FhirUnsignedInt } from './FhirUnsignedInt'

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export const FhirContract_Action: t.Type<FhirContract_Action, FhirContract_ActionOutput> = t.recursion(
  'FhirContract_Action',
  () =>
    t.intersection([
      t.type({
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        intent: t.readonly(FhirCodeableConcept),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        status: t.readonly(FhirCodeableConcept),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        type: t.readonly(FhirCodeableConcept),
      }),
      t.partial({
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        _contextLinkId: t.readonlyArray(FhirElement),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        _doNotPerform: t.readonly(FhirElement),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        _linkId: t.readonlyArray(FhirElement),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        _occurrenceDateTime: t.readonly(FhirElement),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        _performerLinkId: t.readonlyArray(FhirElement),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        _reason: t.readonlyArray(FhirElement),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        _reasonLinkId: t.readonlyArray(FhirElement),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        _requesterLinkId: t.readonlyArray(FhirElement),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        _securityLabelNumber: t.readonlyArray(FhirElement),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        context: t.readonly(FhirReference),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        contextLinkId: t.readonlyArray(FhirString),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        doNotPerform: t.readonly(FhirBoolean),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        extension: t.readonlyArray(FhirExtension),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        id: t.readonly(FhirString),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        linkId: t.readonlyArray(FhirString),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        note: t.readonlyArray(FhirAnnotation),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        occurrenceDateTime: t.readonly(t.string),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        occurrencePeriod: t.readonly(FhirPeriod),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        occurrenceTiming: t.readonly(FhirTiming),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        performer: t.readonly(FhirReference),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        performerLinkId: t.readonlyArray(FhirString),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        performerRole: t.readonly(FhirCodeableConcept),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        performerType: t.readonlyArray(FhirCodeableConcept),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        reason: t.readonlyArray(FhirString),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        reasonCode: t.readonlyArray(FhirCodeableConcept),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        reasonLinkId: t.readonlyArray(FhirString),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        reasonReference: t.readonlyArray(FhirReference),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        requester: t.readonlyArray(FhirReference),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        requesterLinkId: t.readonlyArray(FhirString),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        securityLabelNumber: t.readonlyArray(FhirUnsignedInt),
        /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
        subject: t.readonlyArray(FhirContract_Subject),
      }),
    ])
)

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface FhirContract_Action {
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _contextLinkId?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _doNotPerform?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _linkId?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _occurrenceDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _performerLinkId?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _reason?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _reasonLinkId?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _requesterLinkId?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _securityLabelNumber?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  context?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  contextLinkId?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  doNotPerform?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  intent: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  linkId?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  occurrenceDateTime?: Readonly<string>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  occurrencePeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  occurrenceTiming?: Readonly<t.TypeOf<typeof FhirTiming>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  performer?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  performerLinkId?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  performerRole?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  performerType?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  reason?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  reasonCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  reasonLinkId?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  reasonReference?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  requester?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  requesterLinkId?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  securityLabelNumber?: ReadonlyArray<t.TypeOf<typeof FhirUnsignedInt>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  status: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  subject?: ReadonlyArray<t.TypeOf<typeof FhirContract_Subject>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  type: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface FhirContract_ActionOutput {
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _contextLinkId?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _doNotPerform?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _linkId?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _occurrenceDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _performerLinkId?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _reason?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _reasonLinkId?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _requesterLinkId?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  _securityLabelNumber?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  context?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  contextLinkId?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  doNotPerform?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  intent: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  linkId?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  occurrenceDateTime?: Readonly<string>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  occurrencePeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  occurrenceTiming?: Readonly<t.OutputOf<typeof FhirTiming>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  performer?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  performerLinkId?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  performerRole?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  performerType?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  reason?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  reasonCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  reasonLinkId?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  reasonReference?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  requester?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  requesterLinkId?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  securityLabelNumber?: ReadonlyArray<t.OutputOf<typeof FhirUnsignedInt>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  status: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  subject?: ReadonlyArray<t.OutputOf<typeof FhirContract_Subject>>
  /** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
  type: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
