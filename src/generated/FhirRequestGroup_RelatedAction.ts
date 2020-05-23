import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirDuration } from './FhirDuration'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirRange } from './FhirRange'
import { FhirString } from './FhirString'

/** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
export const FhirRequestGroup_RelatedAction: t.Type<
  FhirRequestGroup_RelatedAction,
  FhirRequestGroup_RelatedActionOutput
> = t.recursion('FhirRequestGroup_RelatedAction', () =>
  t.partial({
    /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
    _actionId: t.readonly(FhirElement),
    /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
    _relationship: t.readonly(FhirElement),
    /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
    actionId: t.readonly(FhirId),
    /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
    extension: t.readonlyArray(FhirExtension),
    /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
    id: t.readonly(FhirString),
    /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
    offsetDuration: t.readonly(FhirDuration),
    /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
    offsetRange: t.readonly(FhirRange),
    /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
    relationship: t.readonly(FhirCode),
  })
)

/** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
export interface FhirRequestGroup_RelatedAction {
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _actionId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _relationship?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  actionId?: Readonly<t.TypeOf<typeof FhirId>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  offsetDuration?: Readonly<t.TypeOf<typeof FhirDuration>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  offsetRange?: Readonly<t.TypeOf<typeof FhirRange>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  relationship?: Readonly<t.TypeOf<typeof FhirCode>>
}
/** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
export interface FhirRequestGroup_RelatedActionOutput {
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _actionId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _relationship?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  actionId?: Readonly<t.OutputOf<typeof FhirId>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  offsetDuration?: Readonly<t.OutputOf<typeof FhirDuration>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  offsetRange?: Readonly<t.OutputOf<typeof FhirRange>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  relationship?: Readonly<t.OutputOf<typeof FhirCode>>
}
