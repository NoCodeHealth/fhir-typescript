import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirGraphDefinition_Target } from './FhirGraphDefinition_Target'
import { FhirInteger } from './FhirInteger'
import { FhirString } from './FhirString'

/** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
export const FhirGraphDefinition_Link: t.Type<FhirGraphDefinition_Link, FhirGraphDefinition_LinkOutput> = t.recursion(
  'FhirGraphDefinition_Link',
  () =>
    t.partial({
      /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
      _description: t.readonly(FhirElement),
      /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
      _max: t.readonly(FhirElement),
      /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
      _min: t.readonly(FhirElement),
      /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
      _path: t.readonly(FhirElement),
      /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
      _sliceName: t.readonly(FhirElement),
      /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
      description: t.readonly(FhirString),
      /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
      extension: t.readonlyArray(FhirExtension),
      /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
      id: t.readonly(FhirString),
      /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
      max: t.readonly(FhirString),
      /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
      min: t.readonly(FhirInteger),
      /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
      path: t.readonly(FhirString),
      /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
      sliceName: t.readonly(FhirString),
      /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
      target: t.readonlyArray(FhirGraphDefinition_Target),
    })
)

/** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
export interface FhirGraphDefinition_Link {
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _max?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _min?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _path?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _sliceName?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  max?: Readonly<t.TypeOf<typeof FhirString>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  min?: Readonly<t.TypeOf<typeof FhirInteger>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  path?: Readonly<t.TypeOf<typeof FhirString>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  sliceName?: Readonly<t.TypeOf<typeof FhirString>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  target?: ReadonlyArray<t.TypeOf<typeof FhirGraphDefinition_Target>>
}
/** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
export interface FhirGraphDefinition_LinkOutput {
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _max?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _min?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _path?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  _sliceName?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  max?: Readonly<t.OutputOf<typeof FhirString>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  min?: Readonly<t.OutputOf<typeof FhirInteger>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  path?: Readonly<t.OutputOf<typeof FhirString>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  sliceName?: Readonly<t.OutputOf<typeof FhirString>>
  /** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
  target?: ReadonlyArray<t.OutputOf<typeof FhirGraphDefinition_Target>>
}
