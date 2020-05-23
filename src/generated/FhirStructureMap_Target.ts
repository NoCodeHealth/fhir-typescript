import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirString } from './FhirString'
import { FhirStructureMap_Parameter } from './FhirStructureMap_Parameter'

/** A Map of relationships between 2 structures that can be used to transform data. */
export const FhirStructureMap_Target: t.Type<FhirStructureMap_Target, FhirStructureMap_TargetOutput> = t.recursion(
  'FhirStructureMap_Target',
  () =>
    t.partial({
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _context: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _contextType: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _element: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _listMode: t.readonlyArray(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _listRuleId: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _transform: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      _variable: t.readonly(FhirElement),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      context: t.readonly(FhirId),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      contextType: t.readonly(
        t.keyof({
          type: null,
          variable: null,
        })
      ),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      element: t.readonly(FhirString),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      extension: t.readonlyArray(FhirExtension),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      id: t.readonly(FhirString),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      listMode: t.readonlyArray(
        t.keyof({
          first: null,
          share: null,
          last: null,
          collate: null,
        })
      ),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      listRuleId: t.readonly(FhirId),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      parameter: t.readonlyArray(FhirStructureMap_Parameter),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      transform: t.readonly(
        t.keyof({
          create: null,
          copy: null,
          truncate: null,
          escape: null,
          cast: null,
          append: null,
          translate: null,
          reference: null,
          dateOp: null,
          uuid: null,
          pointer: null,
          evaluate: null,
          cc: null,
          c: null,
          qty: null,
          id: null,
          cp: null,
        })
      ),
      /** A Map of relationships between 2 structures that can be used to transform data. */
      variable: t.readonly(FhirId),
    })
)

/** A Map of relationships between 2 structures that can be used to transform data. */
export interface FhirStructureMap_Target {
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _context?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _contextType?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _element?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _listMode?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _listRuleId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _transform?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _variable?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  context?: Readonly<t.TypeOf<typeof FhirId>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  contextType?: Readonly<'type' | 'variable'>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  element?: Readonly<t.TypeOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  listMode?: ReadonlyArray<'first' | 'share' | 'last' | 'collate'>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  listRuleId?: Readonly<t.TypeOf<typeof FhirId>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  parameter?: ReadonlyArray<t.TypeOf<typeof FhirStructureMap_Parameter>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  transform?: Readonly<
    | 'create'
    | 'copy'
    | 'truncate'
    | 'escape'
    | 'cast'
    | 'append'
    | 'translate'
    | 'reference'
    | 'dateOp'
    | 'uuid'
    | 'pointer'
    | 'evaluate'
    | 'cc'
    | 'c'
    | 'qty'
    | 'id'
    | 'cp'
  >
  /** A Map of relationships between 2 structures that can be used to transform data. */
  variable?: Readonly<t.TypeOf<typeof FhirId>>
}
/** A Map of relationships between 2 structures that can be used to transform data. */
export interface FhirStructureMap_TargetOutput {
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _context?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _contextType?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _element?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _listMode?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _listRuleId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _transform?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _variable?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  context?: Readonly<t.OutputOf<typeof FhirId>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  contextType?: Readonly<'type' | 'variable'>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  element?: Readonly<t.OutputOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  listMode?: ReadonlyArray<'first' | 'share' | 'last' | 'collate'>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  listRuleId?: Readonly<t.OutputOf<typeof FhirId>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  parameter?: ReadonlyArray<t.OutputOf<typeof FhirStructureMap_Parameter>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  transform?: Readonly<
    | 'create'
    | 'copy'
    | 'truncate'
    | 'escape'
    | 'cast'
    | 'append'
    | 'translate'
    | 'reference'
    | 'dateOp'
    | 'uuid'
    | 'pointer'
    | 'evaluate'
    | 'cc'
    | 'c'
    | 'qty'
    | 'id'
    | 'cp'
  >
  /** A Map of relationships between 2 structures that can be used to transform data. */
  variable?: Readonly<t.OutputOf<typeof FhirId>>
}
