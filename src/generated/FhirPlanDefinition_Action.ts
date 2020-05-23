import * as t from 'io-ts'
import { FhirAge } from './FhirAge'
import { FhirCanonical } from './FhirCanonical'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDataRequirement } from './FhirDataRequirement'
import { FhirDuration } from './FhirDuration'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirPeriod } from './FhirPeriod'
import { FhirPlanDefinition_Condition } from './FhirPlanDefinition_Condition'
import { FhirPlanDefinition_DynamicValue } from './FhirPlanDefinition_DynamicValue'
import { FhirPlanDefinition_Participant } from './FhirPlanDefinition_Participant'
import { FhirPlanDefinition_RelatedAction } from './FhirPlanDefinition_RelatedAction'
import { FhirRange } from './FhirRange'
import { FhirReference } from './FhirReference'
import { FhirRelatedArtifact } from './FhirRelatedArtifact'
import { FhirString } from './FhirString'
import { FhirTiming } from './FhirTiming'
import { FhirTriggerDefinition } from './FhirTriggerDefinition'

/** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
export const FhirPlanDefinition_Action: t.Type<
  FhirPlanDefinition_Action,
  FhirPlanDefinition_ActionOutput
> = t.recursion('FhirPlanDefinition_Action', () =>
  t.partial({
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    _cardinalityBehavior: t.readonly(FhirElement),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    _definitionCanonical: t.readonly(FhirElement),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    _definitionUri: t.readonly(FhirElement),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    _description: t.readonly(FhirElement),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    _goalId: t.readonlyArray(FhirElement),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    _groupingBehavior: t.readonly(FhirElement),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    _precheckBehavior: t.readonly(FhirElement),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    _prefix: t.readonly(FhirElement),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    _priority: t.readonly(FhirElement),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    _requiredBehavior: t.readonly(FhirElement),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    _selectionBehavior: t.readonly(FhirElement),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    _textEquivalent: t.readonly(FhirElement),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    _timingDateTime: t.readonly(FhirElement),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    _title: t.readonly(FhirElement),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    action: t.readonlyArray(FhirPlanDefinition_Action),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    cardinalityBehavior: t.readonly(
      t.keyof({
        single: null,
        multiple: null,
      })
    ),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    code: t.readonlyArray(FhirCodeableConcept),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    condition: t.readonlyArray(FhirPlanDefinition_Condition),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    definitionCanonical: t.readonly(t.string),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    definitionUri: t.readonly(t.string),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    description: t.readonly(FhirString),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    documentation: t.readonlyArray(FhirRelatedArtifact),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    dynamicValue: t.readonlyArray(FhirPlanDefinition_DynamicValue),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    extension: t.readonlyArray(FhirExtension),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    goalId: t.readonlyArray(FhirId),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    groupingBehavior: t.readonly(
      t.keyof({
        'visual-group': null,
        'logical-group': null,
        'sentence-group': null,
      })
    ),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    id: t.readonly(FhirString),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    input: t.readonlyArray(FhirDataRequirement),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    output: t.readonlyArray(FhirDataRequirement),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    participant: t.readonlyArray(FhirPlanDefinition_Participant),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    precheckBehavior: t.readonly(
      t.keyof({
        yes: null,
        no: null,
      })
    ),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    prefix: t.readonly(FhirString),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    priority: t.readonly(FhirCode),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    reason: t.readonlyArray(FhirCodeableConcept),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    relatedAction: t.readonlyArray(FhirPlanDefinition_RelatedAction),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    requiredBehavior: t.readonly(
      t.keyof({
        must: null,
        could: null,
        'must-unless-documented': null,
      })
    ),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    selectionBehavior: t.readonly(
      t.keyof({
        any: null,
        all: null,
        'all-or-none': null,
        'exactly-one': null,
        'at-most-one': null,
        'one-or-more': null,
      })
    ),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    subjectCodeableConcept: t.readonly(FhirCodeableConcept),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    subjectReference: t.readonly(FhirReference),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    textEquivalent: t.readonly(FhirString),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    timingAge: t.readonly(FhirAge),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    timingDateTime: t.readonly(t.string),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    timingDuration: t.readonly(FhirDuration),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    timingPeriod: t.readonly(FhirPeriod),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    timingRange: t.readonly(FhirRange),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    timingTiming: t.readonly(FhirTiming),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    title: t.readonly(FhirString),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    transform: t.readonly(FhirCanonical),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    trigger: t.readonlyArray(FhirTriggerDefinition),
    /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
    type: t.readonly(FhirCodeableConcept),
  })
)

/** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
export interface FhirPlanDefinition_Action {
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _cardinalityBehavior?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _definitionCanonical?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _definitionUri?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _goalId?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _groupingBehavior?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _precheckBehavior?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _prefix?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _priority?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _requiredBehavior?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _selectionBehavior?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _textEquivalent?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _timingDateTime?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _title?: Readonly<t.TypeOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  action?: ReadonlyArray<FhirPlanDefinition_Action>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  cardinalityBehavior?: Readonly<'single' | 'multiple'>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  code?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  condition?: ReadonlyArray<t.TypeOf<typeof FhirPlanDefinition_Condition>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  definitionCanonical?: Readonly<string>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  definitionUri?: Readonly<string>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  documentation?: ReadonlyArray<t.TypeOf<typeof FhirRelatedArtifact>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  dynamicValue?: ReadonlyArray<t.TypeOf<typeof FhirPlanDefinition_DynamicValue>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  goalId?: ReadonlyArray<t.TypeOf<typeof FhirId>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  groupingBehavior?: Readonly<'visual-group' | 'logical-group' | 'sentence-group'>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  input?: ReadonlyArray<t.TypeOf<typeof FhirDataRequirement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  output?: ReadonlyArray<t.TypeOf<typeof FhirDataRequirement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  participant?: ReadonlyArray<t.TypeOf<typeof FhirPlanDefinition_Participant>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  precheckBehavior?: Readonly<'yes' | 'no'>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  prefix?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  priority?: Readonly<t.TypeOf<typeof FhirCode>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  reason?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  relatedAction?: ReadonlyArray<t.TypeOf<typeof FhirPlanDefinition_RelatedAction>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  requiredBehavior?: Readonly<'must' | 'could' | 'must-unless-documented'>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  selectionBehavior?: Readonly<'any' | 'all' | 'all-or-none' | 'exactly-one' | 'at-most-one' | 'one-or-more'>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  subjectCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  subjectReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  textEquivalent?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  timingAge?: Readonly<t.TypeOf<typeof FhirAge>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  timingDateTime?: Readonly<string>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  timingDuration?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  timingPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  timingRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  timingTiming?: Readonly<t.TypeOf<typeof FhirTiming>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  title?: Readonly<t.TypeOf<typeof FhirString>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  transform?: Readonly<t.TypeOf<typeof FhirCanonical>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  trigger?: ReadonlyArray<t.TypeOf<typeof FhirTriggerDefinition>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  type?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
}
/** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
export interface FhirPlanDefinition_ActionOutput {
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _cardinalityBehavior?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _definitionCanonical?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _definitionUri?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _goalId?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _groupingBehavior?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _precheckBehavior?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _prefix?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _priority?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _requiredBehavior?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _selectionBehavior?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _textEquivalent?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _timingDateTime?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  _title?: Readonly<t.OutputOf<typeof FhirElement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  action?: ReadonlyArray<FhirPlanDefinition_ActionOutput>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  cardinalityBehavior?: Readonly<'single' | 'multiple'>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  code?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  condition?: ReadonlyArray<t.OutputOf<typeof FhirPlanDefinition_Condition>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  definitionCanonical?: Readonly<string>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  definitionUri?: Readonly<string>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  documentation?: ReadonlyArray<t.OutputOf<typeof FhirRelatedArtifact>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  dynamicValue?: ReadonlyArray<t.OutputOf<typeof FhirPlanDefinition_DynamicValue>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  goalId?: ReadonlyArray<t.OutputOf<typeof FhirId>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  groupingBehavior?: Readonly<'visual-group' | 'logical-group' | 'sentence-group'>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  input?: ReadonlyArray<t.OutputOf<typeof FhirDataRequirement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  output?: ReadonlyArray<t.OutputOf<typeof FhirDataRequirement>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  participant?: ReadonlyArray<t.OutputOf<typeof FhirPlanDefinition_Participant>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  precheckBehavior?: Readonly<'yes' | 'no'>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  prefix?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  priority?: Readonly<t.OutputOf<typeof FhirCode>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  reason?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  relatedAction?: ReadonlyArray<t.OutputOf<typeof FhirPlanDefinition_RelatedAction>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  requiredBehavior?: Readonly<'must' | 'could' | 'must-unless-documented'>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  selectionBehavior?: Readonly<'any' | 'all' | 'all-or-none' | 'exactly-one' | 'at-most-one' | 'one-or-more'>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  subjectCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  subjectReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  textEquivalent?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  timingAge?: Readonly<t.OutputOf<typeof FhirAge>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  timingDateTime?: Readonly<string>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  timingDuration?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  timingPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  timingRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  timingTiming?: Readonly<t.OutputOf<typeof FhirTiming>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  title?: Readonly<t.OutputOf<typeof FhirString>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  transform?: Readonly<t.OutputOf<typeof FhirCanonical>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  trigger?: ReadonlyArray<t.OutputOf<typeof FhirTriggerDefinition>>
  /** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
  type?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
}
