import * as t from 'io-ts'
import { FhirAge } from './FhirAge'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDuration } from './FhirDuration'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPeriod } from './FhirPeriod'
import { FhirRange } from './FhirRange'
import { FhirReference } from './FhirReference'
import { FhirRelatedArtifact } from './FhirRelatedArtifact'
import { FhirRequestGroup_Condition } from './FhirRequestGroup_Condition'
import { FhirRequestGroup_RelatedAction } from './FhirRequestGroup_RelatedAction'
import { FhirString } from './FhirString'
import { FhirTiming } from './FhirTiming'

/** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
export const FhirRequestGroup_Action: t.Type<FhirRequestGroup_Action, FhirRequestGroup_ActionOutput> = t.recursion(
  'FhirRequestGroup_Action',
  () =>
    t.partial({
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      _cardinalityBehavior: t.readonly(FhirElement),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      _description: t.readonly(FhirElement),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      _groupingBehavior: t.readonly(FhirElement),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      _precheckBehavior: t.readonly(FhirElement),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      _prefix: t.readonly(FhirElement),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      _priority: t.readonly(FhirElement),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      _requiredBehavior: t.readonly(FhirElement),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      _selectionBehavior: t.readonly(FhirElement),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      _textEquivalent: t.readonly(FhirElement),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      _timingDateTime: t.readonly(FhirElement),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      _title: t.readonly(FhirElement),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      action: t.readonlyArray(FhirRequestGroup_Action),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      cardinalityBehavior: t.readonly(FhirCode),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      code: t.readonlyArray(FhirCodeableConcept),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      condition: t.readonlyArray(FhirRequestGroup_Condition),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      description: t.readonly(FhirString),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      documentation: t.readonlyArray(FhirRelatedArtifact),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      extension: t.readonlyArray(FhirExtension),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      groupingBehavior: t.readonly(FhirCode),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      id: t.readonly(FhirString),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      participant: t.readonlyArray(FhirReference),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      precheckBehavior: t.readonly(FhirCode),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      prefix: t.readonly(FhirString),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      priority: t.readonly(FhirCode),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      relatedAction: t.readonlyArray(FhirRequestGroup_RelatedAction),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      requiredBehavior: t.readonly(FhirCode),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      resource: t.readonly(FhirReference),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      selectionBehavior: t.readonly(FhirCode),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      textEquivalent: t.readonly(FhirString),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      timingAge: t.readonly(FhirAge),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      timingDateTime: t.readonly(t.string),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      timingDuration: t.readonly(FhirDuration),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      timingPeriod: t.readonly(FhirPeriod),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      timingRange: t.readonly(FhirRange),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      timingTiming: t.readonly(FhirTiming),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      title: t.readonly(FhirString),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      type: t.readonly(FhirCodeableConcept),
    })
)

/** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
export interface FhirRequestGroup_Action {
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _cardinalityBehavior?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _groupingBehavior?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _precheckBehavior?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _prefix?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _priority?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _requiredBehavior?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _selectionBehavior?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _textEquivalent?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _timingDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _title?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  action?: ReadonlyArray<FhirRequestGroup_Action>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  cardinalityBehavior?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  code?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  condition?: ReadonlyArray<t.TypeOf<typeof FhirRequestGroup_Condition>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  documentation?: ReadonlyArray<t.TypeOf<typeof FhirRelatedArtifact>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  groupingBehavior?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  participant?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  precheckBehavior?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  prefix?: Readonly<t.TypeOf<typeof FhirString>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  priority?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  relatedAction?: ReadonlyArray<t.TypeOf<typeof FhirRequestGroup_RelatedAction>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  requiredBehavior?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  resource?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  selectionBehavior?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  textEquivalent?: Readonly<t.TypeOf<typeof FhirString>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  timingAge?: Readonly<t.TypeOf<typeof FhirAge>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  timingDateTime?: Readonly<string>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  timingDuration?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  timingPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  timingRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  timingTiming?: Readonly<t.TypeOf<typeof FhirTiming>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  title?: Readonly<t.TypeOf<typeof FhirString>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
export interface FhirRequestGroup_ActionOutput {
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _cardinalityBehavior?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _groupingBehavior?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _precheckBehavior?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _prefix?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _priority?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _requiredBehavior?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _selectionBehavior?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _textEquivalent?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _timingDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _title?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  action?: ReadonlyArray<FhirRequestGroup_ActionOutput>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  cardinalityBehavior?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  code?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  condition?: ReadonlyArray<t.OutputOf<typeof FhirRequestGroup_Condition>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  documentation?: ReadonlyArray<t.OutputOf<typeof FhirRelatedArtifact>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  groupingBehavior?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  participant?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  precheckBehavior?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  prefix?: Readonly<t.OutputOf<typeof FhirString>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  priority?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  relatedAction?: ReadonlyArray<t.OutputOf<typeof FhirRequestGroup_RelatedAction>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  requiredBehavior?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  resource?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  selectionBehavior?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  textEquivalent?: Readonly<t.OutputOf<typeof FhirString>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  timingAge?: Readonly<t.OutputOf<typeof FhirAge>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  timingDateTime?: Readonly<string>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  timingDuration?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  timingPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  timingRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  timingTiming?: Readonly<t.OutputOf<typeof FhirTiming>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  title?: Readonly<t.OutputOf<typeof FhirString>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
