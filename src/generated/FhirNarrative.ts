import * as t from 'io-ts'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'
import { FhirXhtml } from './FhirXhtml'

/** A human-readable summary of the resource conveying the essential clinical and business information for the resource. */
export const FhirNarrative: t.Type<FhirNarrative, FhirNarrativeOutput> = t.recursion('FhirNarrative', () =>
  t.intersection([
    t.type({
      /** A human-readable summary of the resource conveying the essential clinical and business information for the resource. */
      div: t.readonly(FhirXhtml),
    }),
    t.partial({
      /** A human-readable summary of the resource conveying the essential clinical and business information for the resource. */
      _status: t.readonly(FhirElement),
      /** A human-readable summary of the resource conveying the essential clinical and business information for the resource. */
      extension: t.readonlyArray(FhirExtension),
      /** A human-readable summary of the resource conveying the essential clinical and business information for the resource. */
      id: t.readonly(FhirString),
      /** A human-readable summary of the resource conveying the essential clinical and business information for the resource. */
      status: t.readonly(
        t.keyof({
          generated: null,
          extensions: null,
          additional: null,
          empty: null,
        })
      ),
    }),
  ])
)

/** A human-readable summary of the resource conveying the essential clinical and business information for the resource. */
export interface FhirNarrative {
  /** A human-readable summary of the resource conveying the essential clinical and business information for the resource. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A human-readable summary of the resource conveying the essential clinical and business information for the resource. */
  div: Readonly<t.TypeOf<typeof FhirXhtml>>
  /** A human-readable summary of the resource conveying the essential clinical and business information for the resource. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A human-readable summary of the resource conveying the essential clinical and business information for the resource. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** A human-readable summary of the resource conveying the essential clinical and business information for the resource. */
  status?: Readonly<'generated' | 'extensions' | 'additional' | 'empty'>
}
/** A human-readable summary of the resource conveying the essential clinical and business information for the resource. */
export interface FhirNarrativeOutput {
  /** A human-readable summary of the resource conveying the essential clinical and business information for the resource. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A human-readable summary of the resource conveying the essential clinical and business information for the resource. */
  div: Readonly<t.OutputOf<typeof FhirXhtml>>
  /** A human-readable summary of the resource conveying the essential clinical and business information for the resource. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A human-readable summary of the resource conveying the essential clinical and business information for the resource. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** A human-readable summary of the resource conveying the essential clinical and business information for the resource. */
  status?: Readonly<'generated' | 'extensions' | 'additional' | 'empty'>
}
