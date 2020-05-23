import * as t from 'io-ts'
import { FhirCanonical } from './FhirCanonical'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDataRequirement_CodeFilter } from './FhirDataRequirement_CodeFilter'
import { FhirDataRequirement_DateFilter } from './FhirDataRequirement_DateFilter'
import { FhirDataRequirement_Sort } from './FhirDataRequirement_Sort'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirPositiveInt } from './FhirPositiveInt'
import { FhirReference } from './FhirReference'
import { FhirString } from './FhirString'

/** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
export const FhirDataRequirement: t.Type<FhirDataRequirement, FhirDataRequirementOutput> = t.recursion(
  'FhirDataRequirement',
  () =>
    t.partial({
      /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
      _limit: t.readonly(FhirElement),
      /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
      _mustSupport: t.readonlyArray(FhirElement),
      /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
      _type: t.readonly(FhirElement),
      /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
      codeFilter: t.readonlyArray(FhirDataRequirement_CodeFilter),
      /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
      dateFilter: t.readonlyArray(FhirDataRequirement_DateFilter),
      /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
      extension: t.readonlyArray(FhirExtension),
      /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
      id: t.readonly(FhirString),
      /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
      limit: t.readonly(FhirPositiveInt),
      /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
      mustSupport: t.readonlyArray(FhirString),
      /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
      profile: t.readonlyArray(FhirCanonical),
      /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
      sort: t.readonlyArray(FhirDataRequirement_Sort),
      /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
      subjectCodeableConcept: t.readonly(FhirCodeableConcept),
      /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
      subjectReference: t.readonly(FhirReference),
      /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
      type: t.readonly(FhirCode),
    })
)

/** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
export interface FhirDataRequirement {
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  _limit?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  _mustSupport?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  _type?: Readonly<t.TypeOf<typeof FhirElement>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  codeFilter?: ReadonlyArray<t.TypeOf<typeof FhirDataRequirement_CodeFilter>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  dateFilter?: ReadonlyArray<t.TypeOf<typeof FhirDataRequirement_DateFilter>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  id?: Readonly<t.TypeOf<typeof FhirString>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  limit?: Readonly<t.TypeOf<typeof FhirPositiveInt>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  mustSupport?: ReadonlyArray<t.TypeOf<typeof FhirString>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  profile?: ReadonlyArray<t.TypeOf<typeof FhirCanonical>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  sort?: ReadonlyArray<t.TypeOf<typeof FhirDataRequirement_Sort>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  subjectCodeableConcept?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  subjectReference?: Readonly<t.TypeOf<typeof FhirReference>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  type?: Readonly<t.TypeOf<typeof FhirCode>>
}
/** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
export interface FhirDataRequirementOutput {
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  _limit?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  _mustSupport?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  _type?: Readonly<t.OutputOf<typeof FhirElement>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  codeFilter?: ReadonlyArray<t.OutputOf<typeof FhirDataRequirement_CodeFilter>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  dateFilter?: ReadonlyArray<t.OutputOf<typeof FhirDataRequirement_DateFilter>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  id?: Readonly<t.OutputOf<typeof FhirString>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  limit?: Readonly<t.OutputOf<typeof FhirPositiveInt>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  mustSupport?: ReadonlyArray<t.OutputOf<typeof FhirString>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  profile?: ReadonlyArray<t.OutputOf<typeof FhirCanonical>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  sort?: ReadonlyArray<t.OutputOf<typeof FhirDataRequirement_Sort>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  subjectCodeableConcept?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  subjectReference?: Readonly<t.OutputOf<typeof FhirReference>>
  /** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
  type?: Readonly<t.OutputOf<typeof FhirCode>>
}
