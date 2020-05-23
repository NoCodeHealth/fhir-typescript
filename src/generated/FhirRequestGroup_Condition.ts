import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirElement } from './FhirElement'
import { FhirExpression } from './FhirExpression'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
export const FhirRequestGroup_Condition: t.Type<
  FhirRequestGroup_Condition,
  FhirRequestGroup_ConditionOutput
> = t.recursion('FhirRequestGroup_Condition', () =>
  t.partial({
    /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
    _kind: t.readonly(FhirElement),
    /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
    expression: t.readonly(FhirExpression),
    /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
    extension: t.readonlyArray(FhirExtension),
    /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
    id: t.readonly(FhirString),
    /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
    kind: t.readonly(FhirCode),
    /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
    modifierExtension: t.readonlyArray(FhirExtension),
  })
)

/** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
export interface FhirRequestGroup_Condition {
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _kind?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  expression?: Readonly<t.TypeOf<typeof FhirExpression>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  kind?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
export interface FhirRequestGroup_ConditionOutput {
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  _kind?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  expression?: Readonly<t.OutputOf<typeof FhirExpression>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  kind?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
