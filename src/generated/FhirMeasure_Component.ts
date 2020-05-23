import * as t from 'io-ts'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirElement } from './FhirElement'
import { FhirExpression } from './FhirExpression'
import { FhirExtension } from './FhirExtension'
import { FhirString } from './FhirString'

/** The Measure resource provides the definition of a quality measure. */
export const FhirMeasure_Component: t.Type<FhirMeasure_Component, FhirMeasure_ComponentOutput> = t.recursion(
  'FhirMeasure_Component',
  () =>
    t.intersection([
      t.type({
        /** The Measure resource provides the definition of a quality measure. */
        criteria: t.readonly(FhirExpression),
      }),
      t.partial({
        /** The Measure resource provides the definition of a quality measure. */
        _description: t.readonly(FhirElement),
        /** The Measure resource provides the definition of a quality measure. */
        code: t.readonly(FhirCodeableConcept),
        /** The Measure resource provides the definition of a quality measure. */
        description: t.readonly(FhirString),
        /** The Measure resource provides the definition of a quality measure. */
        extension: t.readonlyArray(FhirExtension),
        /** The Measure resource provides the definition of a quality measure. */
        id: t.readonly(FhirString),
        /** The Measure resource provides the definition of a quality measure. */
        modifierExtension: t.readonlyArray(FhirExtension),
      }),
    ])
)

/** The Measure resource provides the definition of a quality measure. */
export interface FhirMeasure_Component {
  /** The Measure resource provides the definition of a quality measure. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  code?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The Measure resource provides the definition of a quality measure. */
  criteria: Readonly<t.TypeOf<typeof FhirExpression>>
  /** The Measure resource provides the definition of a quality measure. */
  description?: Readonly<t.TypeOf<typeof FhirString>>
  /** The Measure resource provides the definition of a quality measure. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The Measure resource provides the definition of a quality measure. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** The Measure resource provides the definition of a quality measure. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
}
/** The Measure resource provides the definition of a quality measure. */
export interface FhirMeasure_ComponentOutput {
  /** The Measure resource provides the definition of a quality measure. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The Measure resource provides the definition of a quality measure. */
  code?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The Measure resource provides the definition of a quality measure. */
  criteria: Readonly<t.OutputOf<typeof FhirExpression>>
  /** The Measure resource provides the definition of a quality measure. */
  description?: Readonly<t.OutputOf<typeof FhirString>>
  /** The Measure resource provides the definition of a quality measure. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The Measure resource provides the definition of a quality measure. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** The Measure resource provides the definition of a quality measure. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
}
