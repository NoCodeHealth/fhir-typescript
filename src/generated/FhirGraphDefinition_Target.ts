import * as t from 'io-ts'
import { FhirCanonical } from './FhirCanonical'
import { FhirCode } from './FhirCode'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirGraphDefinition_Compartment } from './FhirGraphDefinition_Compartment'
import { FhirGraphDefinition_Link } from './FhirGraphDefinition_Link'
import { FhirString } from './FhirString'

/** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
export const FhirGraphDefinition_Target: t.Type<
  FhirGraphDefinition_Target,
  FhirGraphDefinition_TargetOutput
> = t.recursion('FhirGraphDefinition_Target', () =>
  t.partial({
    /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
    _params: t.readonly(FhirElement),
    /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
    _type: t.readonly(FhirElement),
    /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
    compartment: t.readonlyArray(FhirGraphDefinition_Compartment),
    /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
    extension: t.readonlyArray(FhirExtension),
    /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
    id: t.readonly(FhirString),
    /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
    link: t.readonlyArray(FhirGraphDefinition_Link),
    /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
    modifierExtension: t.readonlyArray(FhirExtension),
    /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
    params: t.readonly(FhirString),
    /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
    profile: t.readonly(FhirCanonical),
    /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
    type: t.readonly(FhirCode),
  })
)

/** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
export interface FhirGraphDefinition_Target {
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _params?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  compartment?: ReadonlyArray<t.TypeOf<typeof FhirGraphDefinition_Compartment>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  link?: ReadonlyArray<t.TypeOf<typeof FhirGraphDefinition_Link>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  params?: Readonly<t.TypeOf<typeof FhirString>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  profile?: Readonly<t.TypeOf<typeof FhirCanonical>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  type?: Readonly<t.TypeOf<typeof FhirCode>>
}
/** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
export interface FhirGraphDefinition_TargetOutput {
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _params?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  compartment?: ReadonlyArray<t.OutputOf<typeof FhirGraphDefinition_Compartment>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  link?: ReadonlyArray<t.OutputOf<typeof FhirGraphDefinition_Link>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  params?: Readonly<t.OutputOf<typeof FhirString>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  profile?: Readonly<t.OutputOf<typeof FhirCanonical>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  type?: Readonly<t.OutputOf<typeof FhirCode>>
}
