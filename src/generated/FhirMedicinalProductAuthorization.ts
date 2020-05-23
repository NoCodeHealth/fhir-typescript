import * as t from 'io-ts'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirIdentifier } from './FhirIdentifier'
import { FhirMedicinalProductAuthorization_JurisdictionalAuthorization } from './FhirMedicinalProductAuthorization_JurisdictionalAuthorization'
import { FhirMedicinalProductAuthorization_Procedure } from './FhirMedicinalProductAuthorization_Procedure'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirPeriod } from './FhirPeriod'
import { FhirReference } from './FhirReference'
import { FhirResourceList } from './FhirResourceList'
import { FhirUri } from './FhirUri'

/** The regulatory authorization of a medicinal product. */
export const FhirMedicinalProductAuthorization: t.Type<
  FhirMedicinalProductAuthorization,
  FhirMedicinalProductAuthorizationOutput
> = t.recursion('FhirMedicinalProductAuthorization', () =>
  t.intersection([
    t.type({
      /** The regulatory authorization of a medicinal product. */
      resourceType: t.readonly(t.literal('MedicinalProductAuthorization')),
    }),
    t.partial({
      /** The regulatory authorization of a medicinal product. */
      _dateOfFirstAuthorization: t.readonly(FhirElement),
      /** The regulatory authorization of a medicinal product. */
      _implicitRules: t.readonly(FhirElement),
      /** The regulatory authorization of a medicinal product. */
      _internationalBirthDate: t.readonly(FhirElement),
      /** The regulatory authorization of a medicinal product. */
      _language: t.readonly(FhirElement),
      /** The regulatory authorization of a medicinal product. */
      _restoreDate: t.readonly(FhirElement),
      /** The regulatory authorization of a medicinal product. */
      _statusDate: t.readonly(FhirElement),
      /** The regulatory authorization of a medicinal product. */
      contained: t.readonlyArray(FhirResourceList),
      /** The regulatory authorization of a medicinal product. */
      country: t.readonlyArray(FhirCodeableConcept),
      /** The regulatory authorization of a medicinal product. */
      dataExclusivityPeriod: t.readonly(FhirPeriod),
      /** The regulatory authorization of a medicinal product. */
      dateOfFirstAuthorization: t.readonly(FhirDateTime),
      /** The regulatory authorization of a medicinal product. */
      extension: t.readonlyArray(FhirExtension),
      /** The regulatory authorization of a medicinal product. */
      holder: t.readonly(FhirReference),
      /** The regulatory authorization of a medicinal product. */
      id: t.readonly(FhirId),
      /** The regulatory authorization of a medicinal product. */
      identifier: t.readonlyArray(FhirIdentifier),
      /** The regulatory authorization of a medicinal product. */
      implicitRules: t.readonly(FhirUri),
      /** The regulatory authorization of a medicinal product. */
      internationalBirthDate: t.readonly(FhirDateTime),
      /** The regulatory authorization of a medicinal product. */
      jurisdiction: t.readonlyArray(FhirCodeableConcept),
      /** The regulatory authorization of a medicinal product. */
      jurisdictionalAuthorization: t.readonlyArray(FhirMedicinalProductAuthorization_JurisdictionalAuthorization),
      /** The regulatory authorization of a medicinal product. */
      language: t.readonly(FhirCode),
      /** The regulatory authorization of a medicinal product. */
      legalBasis: t.readonly(FhirCodeableConcept),
      /** The regulatory authorization of a medicinal product. */
      meta: t.readonly(FhirMeta),
      /** The regulatory authorization of a medicinal product. */
      modifierExtension: t.readonlyArray(FhirExtension),
      /** The regulatory authorization of a medicinal product. */
      procedure: t.readonly(FhirMedicinalProductAuthorization_Procedure),
      /** The regulatory authorization of a medicinal product. */
      regulator: t.readonly(FhirReference),
      /** The regulatory authorization of a medicinal product. */
      restoreDate: t.readonly(FhirDateTime),
      /** The regulatory authorization of a medicinal product. */
      status: t.readonly(FhirCodeableConcept),
      /** The regulatory authorization of a medicinal product. */
      statusDate: t.readonly(FhirDateTime),
      /** The regulatory authorization of a medicinal product. */
      subject: t.readonly(FhirReference),
      /** The regulatory authorization of a medicinal product. */
      text: t.readonly(FhirNarrative),
      /** The regulatory authorization of a medicinal product. */
      validityPeriod: t.readonly(FhirPeriod),
    }),
  ])
)

/** The regulatory authorization of a medicinal product. */
export interface FhirMedicinalProductAuthorization {
  /** The regulatory authorization of a medicinal product. */
  _dateOfFirstAuthorization?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The regulatory authorization of a medicinal product. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The regulatory authorization of a medicinal product. */
  _internationalBirthDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The regulatory authorization of a medicinal product. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The regulatory authorization of a medicinal product. */
  _restoreDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The regulatory authorization of a medicinal product. */
  _statusDate?: Readonly<t.TypeOf<typeof FhirElement>>
  /** The regulatory authorization of a medicinal product. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** The regulatory authorization of a medicinal product. */
  country?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The regulatory authorization of a medicinal product. */
  dataExclusivityPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
  /** The regulatory authorization of a medicinal product. */
  dateOfFirstAuthorization?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** The regulatory authorization of a medicinal product. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The regulatory authorization of a medicinal product. */
  holder?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The regulatory authorization of a medicinal product. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** The regulatory authorization of a medicinal product. */
  identifier?: ReadonlyArray<t.TypeOf<typeof FhirIdentifier>>
  /** The regulatory authorization of a medicinal product. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** The regulatory authorization of a medicinal product. */
  internationalBirthDate?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** The regulatory authorization of a medicinal product. */
  jurisdiction?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** The regulatory authorization of a medicinal product. */
  jurisdictionalAuthorization?: ReadonlyArray<
    t.TypeOf<typeof FhirMedicinalProductAuthorization_JurisdictionalAuthorization>
  >
  /** The regulatory authorization of a medicinal product. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** The regulatory authorization of a medicinal product. */
  legalBasis?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The regulatory authorization of a medicinal product. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** The regulatory authorization of a medicinal product. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** The regulatory authorization of a medicinal product. */
  procedure?: Readonly<t.TypeOf<typeof FhirMedicinalProductAuthorization_Procedure>>
  /** The regulatory authorization of a medicinal product. */
  regulator?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The regulatory authorization of a medicinal product. */
  resourceType: Readonly<'MedicinalProductAuthorization'>
  /** The regulatory authorization of a medicinal product. */
  restoreDate?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** The regulatory authorization of a medicinal product. */
  status?: Readonly<t.TypeOf<typeof FhirCodeableConcept>>
  /** The regulatory authorization of a medicinal product. */
  statusDate?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** The regulatory authorization of a medicinal product. */
  subject?: Readonly<t.TypeOf<typeof FhirReference>>
  /** The regulatory authorization of a medicinal product. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** The regulatory authorization of a medicinal product. */
  validityPeriod?: Readonly<t.TypeOf<typeof FhirPeriod>>
}
/** The regulatory authorization of a medicinal product. */
export interface FhirMedicinalProductAuthorizationOutput {
  /** The regulatory authorization of a medicinal product. */
  _dateOfFirstAuthorization?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The regulatory authorization of a medicinal product. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The regulatory authorization of a medicinal product. */
  _internationalBirthDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The regulatory authorization of a medicinal product. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The regulatory authorization of a medicinal product. */
  _restoreDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The regulatory authorization of a medicinal product. */
  _statusDate?: Readonly<t.OutputOf<typeof FhirElement>>
  /** The regulatory authorization of a medicinal product. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** The regulatory authorization of a medicinal product. */
  country?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The regulatory authorization of a medicinal product. */
  dataExclusivityPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
  /** The regulatory authorization of a medicinal product. */
  dateOfFirstAuthorization?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** The regulatory authorization of a medicinal product. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The regulatory authorization of a medicinal product. */
  holder?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The regulatory authorization of a medicinal product. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** The regulatory authorization of a medicinal product. */
  identifier?: ReadonlyArray<t.OutputOf<typeof FhirIdentifier>>
  /** The regulatory authorization of a medicinal product. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** The regulatory authorization of a medicinal product. */
  internationalBirthDate?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** The regulatory authorization of a medicinal product. */
  jurisdiction?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** The regulatory authorization of a medicinal product. */
  jurisdictionalAuthorization?: ReadonlyArray<
    t.OutputOf<typeof FhirMedicinalProductAuthorization_JurisdictionalAuthorization>
  >
  /** The regulatory authorization of a medicinal product. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** The regulatory authorization of a medicinal product. */
  legalBasis?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The regulatory authorization of a medicinal product. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** The regulatory authorization of a medicinal product. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** The regulatory authorization of a medicinal product. */
  procedure?: Readonly<t.OutputOf<typeof FhirMedicinalProductAuthorization_Procedure>>
  /** The regulatory authorization of a medicinal product. */
  regulator?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The regulatory authorization of a medicinal product. */
  resourceType: Readonly<'MedicinalProductAuthorization'>
  /** The regulatory authorization of a medicinal product. */
  restoreDate?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** The regulatory authorization of a medicinal product. */
  status?: Readonly<t.OutputOf<typeof FhirCodeableConcept>>
  /** The regulatory authorization of a medicinal product. */
  statusDate?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** The regulatory authorization of a medicinal product. */
  subject?: Readonly<t.OutputOf<typeof FhirReference>>
  /** The regulatory authorization of a medicinal product. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** The regulatory authorization of a medicinal product. */
  validityPeriod?: Readonly<t.OutputOf<typeof FhirPeriod>>
}
