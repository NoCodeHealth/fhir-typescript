import * as t from 'io-ts'
import { FhirAnnotation } from './FhirAnnotation'
import { FhirCanonical } from './FhirCanonical'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirReference } from './FhirReference'
import { FhirRequestGroup_Action } from './FhirRequestGroup_Action'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
export const FhirRequestGroup: t.Type<FhirRequestGroup, FhirRequestGroupOutput> = t.recursion('FhirRequestGroup', () =>
  t.intersection([
    t.type({
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      resourceType: t.readonly(t.literal('RequestGroup')),
    }),
    t.partial({
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      _authoredOn: t.readonly(FhirElement),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      _implicitRules: t.readonly(FhirElement),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      _instantiatesCanonical: t.readonlyArray(FhirElement),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      _instantiatesUri: t.readonlyArray(FhirElement),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      _intent: t.readonly(FhirElement),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      _language: t.readonly(FhirElement),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      _priority: t.readonly(FhirElement),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      _status: t.readonly(FhirElement),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      action: t.readonlyArray(FhirRequestGroup_Action),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      author: t.readonly(FhirReference),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      authoredOn: t.readonly(FhirDateTime),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      basedOn: t.readonlyArray(FhirReference),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      code: t.readonly(FhirCodeableConcept),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      contained: t.readonlyArray(FhirResourceList),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      encounter: t.readonly(FhirReference),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      extension: t.readonlyArray(FhirExtension),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      groupIdentifier: t.readonly(FhirIdentifier),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      id: t.readonly(FhirId),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      identifier: t.readonlyArray(FhirIdentifier),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      implicitRules: t.readonly(FhirUri),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      instantiatesCanonical: t.readonlyArray(FhirCanonical),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      instantiatesUri: t.readonlyArray(FhirUri),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      intent: t.readonly(FhirCode),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      language: t.readonly(FhirCode),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      meta: t.readonly(FhirMeta),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      note: t.readonlyArray(FhirAnnotation),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      priority: t.readonly(FhirCode),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      reasonCode: t.readonlyArray(FhirCodeableConcept),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      reasonReference: t.readonlyArray(FhirReference),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      replaces: t.readonlyArray(FhirReference),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      status: t.readonly(FhirCode),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      subject: t.readonly(FhirReference),
      /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
      text: t.readonly(FhirNarrative),
    }),
  ])
)

/** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
export interface FhirRequestGroup {
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _authoredOn?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _instantiatesCanonical?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _instantiatesUri?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _intent?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _priority?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  action?: ReadonlyArray<t.TypeOf<typeof FhirRequestGroup_Action>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  author?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  authoredOn?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  basedOn?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  code?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  encounter?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  groupIdentifier?: Readonly<t.TypeOf<typeof FhirIdentifier>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  instantiatesCanonical?: ReadonlyArray<t.TypeOf<typeof FhirCanonical>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  instantiatesUri?: ReadonlyArray<t.TypeOf<typeof FhirUri>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  intent?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  note?: ReadonlyArray<t.TypeOf<typeof FhirAnnotation>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  priority?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  reasonCode?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  reasonReference?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  replaces?: ReadonlyArray<t.TypeOf<typeof FhirReference>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  resourceType: Readonly<'RequestGroup'>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  status?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  subject?: Readonly<t.TypeOf<typeof FhirReference>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
export interface FhirRequestGroupOutput {
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _authoredOn?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _instantiatesCanonical?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _instantiatesUri?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _intent?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _priority?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  action?: ReadonlyArray<t.OutputOf<typeof FhirRequestGroup_Action>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  author?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  authoredOn?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  basedOn?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  code?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  encounter?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  groupIdentifier?: Readonly<t.OutputOf<typeof FhirIdentifier>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  instantiatesCanonical?: ReadonlyArray<t.OutputOf<typeof FhirCanonical>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  instantiatesUri?: ReadonlyArray<t.OutputOf<typeof FhirUri>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  intent?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  note?: ReadonlyArray<t.OutputOf<typeof FhirAnnotation>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  priority?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  reasonCode?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  reasonReference?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  replaces?: ReadonlyArray<t.OutputOf<typeof FhirReference>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  resourceType: Readonly<'RequestGroup'>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  status?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  subject?: Readonly<t.OutputOf<typeof FhirReference>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
