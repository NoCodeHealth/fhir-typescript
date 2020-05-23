import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirSubstancePolymer_MonomerSet } from './FhirSubstancePolymer_MonomerSet'
import { FhirSubstancePolymer_Repeat } from './FhirSubstancePolymer_Repeat'
import { FhirUri } from './FhirUri'

/** Todo. */
export const FhirSubstancePolymer: t.Type<FhirSubstancePolymer, FhirSubstancePolymerOutput> = t.recursion(
  'FhirSubstancePolymer',
  () =>
    t.intersection([
      t.type({
        /** Todo. */
        resourceType: t.readonly(t.literal('SubstancePolymer')),
      }),
      t.partial({
        /** Todo. */
        _implicitRules: t.readonly(FhirElement),
        /** Todo. */
        _language: t.readonly(FhirElement),
        /** Todo. */
        _modification: t.readonlyArray(FhirElement),
        /** Todo. */
        class: t.readonly(FhirCodeableConcept),
        /** Todo. */
        contained: t.readonlyArray(FhirResourceList),
        /** Todo. */
        copolymerConnectivity: t.readonlyArray(FhirCodeableConcept),
        /** Todo. */
        extension: t.readonlyArray(FhirExtension),
        /** Todo. */
        geometry: t.readonly(FhirCodeableConcept),
        /** Todo. */
        id: t.readonly(FhirId),
        /** Todo. */
        implicitRules: t.readonly(FhirUri),
        /** Todo. */
        language: t.readonly(FhirCode),
        /** Todo. */
        meta: t.readonly(FhirMeta),
        /** Todo. */
        modification: t.readonlyArray(FhirString),
        /** Todo. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** Todo. */
        monomerSet: t.readonlyArray(FhirSubstancePolymer_MonomerSet),
        /** Todo. */
        repeat: t.readonlyArray(FhirSubstancePolymer_Repeat),
        /** Todo. */
        text: t.readonly(FhirNarrative),
      }),
    ])
)

/** Todo. */
export interface FhirSubstancePolymer {
  /** Todo. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Todo. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Todo. */
  _modification?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Todo. */
  class?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Todo. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** Todo. */
  copolymerConnectivity?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** Todo. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Todo. */
  geometry?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Todo. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** Todo. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** Todo. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** Todo. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** Todo. */
  modification?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** Todo. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Todo. */
  monomerSet?: ReadonlyArray<t.TypeOf<typeof FhirSubstancePolymer_MonomerSet>>
  /** Todo. */
  repeat?: ReadonlyArray<t.TypeOf<typeof FhirSubstancePolymer_Repeat>>
  /** Todo. */
  resourceType: Readonly<'SubstancePolymer'>
  /** Todo. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
}
/** Todo. */
export interface FhirSubstancePolymerOutput {
  /** Todo. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Todo. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Todo. */
  _modification?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Todo. */
  class?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Todo. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** Todo. */
  copolymerConnectivity?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** Todo. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Todo. */
  geometry?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Todo. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** Todo. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** Todo. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** Todo. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** Todo. */
  modification?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** Todo. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Todo. */
  monomerSet?: ReadonlyArray<t.OutputOf<typeof FhirSubstancePolymer_MonomerSet>>
  /** Todo. */
  repeat?: ReadonlyArray<t.OutputOf<typeof FhirSubstancePolymer_Repeat>>
  /** Todo. */
  resourceType: Readonly<'SubstancePolymer'>
  /** Todo. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
}
