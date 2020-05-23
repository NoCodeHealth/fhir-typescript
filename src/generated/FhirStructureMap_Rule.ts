import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirString } from './FhirString'
import { FhirStructureMap_Dependent } from './FhirStructureMap_Dependent'
import { FhirStructureMap_Source } from './FhirStructureMap_Source'
import { FhirStructureMap_Target } from './FhirStructureMap_Target'

/** A Map of relationships between 2 structures that can be used to transform data. */
export const FhirStructureMap_Rule: t.Type<FhirStructureMap_Rule, FhirStructureMap_RuleOutput> = t.recursion(
  'FhirStructureMap_Rule',
  () =>
    t.intersection([
      t.type({
        /** A Map of relationships between 2 structures that can be used to transform data. */
        source: t.readonlyArray(FhirStructureMap_Source),
      }),
      t.partial({
        /** A Map of relationships between 2 structures that can be used to transform data. */
        _documentation: t.readonly(FhirElement),
        /** A Map of relationships between 2 structures that can be used to transform data. */
        _name: t.readonly(FhirElement),
        /** A Map of relationships between 2 structures that can be used to transform data. */
        dependent: t.readonlyArray(FhirStructureMap_Dependent),
        /** A Map of relationships between 2 structures that can be used to transform data. */
        documentation: t.readonly(FhirString),
        /** A Map of relationships between 2 structures that can be used to transform data. */
        extension: t.readonlyArray(FhirExtension),
        /** A Map of relationships between 2 structures that can be used to transform data. */
        id: t.readonly(FhirString),
        /** A Map of relationships between 2 structures that can be used to transform data. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A Map of relationships between 2 structures that can be used to transform data. */
        name: t.readonly(FhirId),
        /** A Map of relationships between 2 structures that can be used to transform data. */
        rule: t.readonlyArray(FhirStructureMap_Rule),
        /** A Map of relationships between 2 structures that can be used to transform data. */
        target: t.readonlyArray(FhirStructureMap_Target),
      }),
    ])
)

/** A Map of relationships between 2 structures that can be used to transform data. */
export interface FhirStructureMap_Rule {
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _documentation?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  dependent?: ReadonlyArray<t.TypeOf<typeof FhirStructureMap_Dependent>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  documentation?: Readonly<t.TypeOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  name?: Readonly<t.TypeOf<typeof FhirId>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  rule?: ReadonlyArray<FhirStructureMap_Rule>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  source: ReadonlyArray<t.TypeOf<typeof FhirStructureMap_Source>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  target?: ReadonlyArray<t.TypeOf<typeof FhirStructureMap_Target>>
}
/** A Map of relationships between 2 structures that can be used to transform data. */
export interface FhirStructureMap_RuleOutput {
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _documentation?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  dependent?: ReadonlyArray<t.OutputOf<typeof FhirStructureMap_Dependent>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  documentation?: Readonly<t.OutputOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  name?: Readonly<t.OutputOf<typeof FhirId>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  rule?: ReadonlyArray<FhirStructureMap_RuleOutput>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  source: ReadonlyArray<t.OutputOf<typeof FhirStructureMap_Source>>
  /** A Map of relationships between 2 structures that can be used to transform data. */
  target?: ReadonlyArray<t.OutputOf<typeof FhirStructureMap_Target>>
}
