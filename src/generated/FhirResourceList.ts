import * as t from 'io-ts'
import { FhirAccount } from './FhirAccount'
import { FhirActivityDefinition } from './FhirActivityDefinition'
import { FhirAdverseEvent } from './FhirAdverseEvent'
import { FhirAllergyIntolerance } from './FhirAllergyIntolerance'
import { FhirAppointment } from './FhirAppointment'
import { FhirAppointmentResponse } from './FhirAppointmentResponse'
import { FhirAuditEvent } from './FhirAuditEvent'
import { FhirBasic } from './FhirBasic'
import { FhirBinary } from './FhirBinary'
import { FhirBiologicallyDerivedProduct } from './FhirBiologicallyDerivedProduct'
import { FhirBodyStructure } from './FhirBodyStructure'
import { FhirBundle } from './FhirBundle'
import { FhirCapabilityStatement } from './FhirCapabilityStatement'
import { FhirCarePlan } from './FhirCarePlan'
import { FhirCareTeam } from './FhirCareTeam'
import { FhirCatalogEntry } from './FhirCatalogEntry'
import { FhirChargeItem } from './FhirChargeItem'
import { FhirChargeItemDefinition } from './FhirChargeItemDefinition'
import { FhirClaim } from './FhirClaim'
import { FhirClaimResponse } from './FhirClaimResponse'
import { FhirClinicalImpression } from './FhirClinicalImpression'
import { FhirCodeSystem } from './FhirCodeSystem'
import { FhirCommunication } from './FhirCommunication'
import { FhirCommunicationRequest } from './FhirCommunicationRequest'
import { FhirCompartmentDefinition } from './FhirCompartmentDefinition'
import { FhirComposition } from './FhirComposition'
import { FhirConceptMap } from './FhirConceptMap'
import { FhirCondition } from './FhirCondition'
import { FhirConsent } from './FhirConsent'
import { FhirContract } from './FhirContract'
import { FhirCoverage } from './FhirCoverage'
import { FhirCoverageEligibilityRequest } from './FhirCoverageEligibilityRequest'
import { FhirCoverageEligibilityResponse } from './FhirCoverageEligibilityResponse'
import { FhirDetectedIssue } from './FhirDetectedIssue'
import { FhirDevice } from './FhirDevice'
import { FhirDeviceDefinition } from './FhirDeviceDefinition'
import { FhirDeviceMetric } from './FhirDeviceMetric'
import { FhirDeviceRequest } from './FhirDeviceRequest'
import { FhirDeviceUseStatement } from './FhirDeviceUseStatement'
import { FhirDiagnosticReport } from './FhirDiagnosticReport'
import { FhirDocumentManifest } from './FhirDocumentManifest'
import { FhirDocumentReference } from './FhirDocumentReference'
import { FhirEffectEvidenceSynthesis } from './FhirEffectEvidenceSynthesis'
import { FhirEncounter } from './FhirEncounter'
import { FhirEndpoint } from './FhirEndpoint'
import { FhirEnrollmentRequest } from './FhirEnrollmentRequest'
import { FhirEnrollmentResponse } from './FhirEnrollmentResponse'
import { FhirEpisodeOfCare } from './FhirEpisodeOfCare'
import { FhirEventDefinition } from './FhirEventDefinition'
import { FhirEvidence } from './FhirEvidence'
import { FhirEvidenceVariable } from './FhirEvidenceVariable'
import { FhirExampleScenario } from './FhirExampleScenario'
import { FhirExplanationOfBenefit } from './FhirExplanationOfBenefit'
import { FhirFamilyMemberHistory } from './FhirFamilyMemberHistory'
import { FhirFlag } from './FhirFlag'
import { FhirGoal } from './FhirGoal'
import { FhirGraphDefinition } from './FhirGraphDefinition'
import { FhirGroup } from './FhirGroup'
import { FhirGuidanceResponse } from './FhirGuidanceResponse'
import { FhirHealthcareService } from './FhirHealthcareService'
import { FhirImagingStudy } from './FhirImagingStudy'
import { FhirImmunization } from './FhirImmunization'
import { FhirImmunizationEvaluation } from './FhirImmunizationEvaluation'
import { FhirImmunizationRecommendation } from './FhirImmunizationRecommendation'
import { FhirImplementationGuide } from './FhirImplementationGuide'
import { FhirInsurancePlan } from './FhirInsurancePlan'
import { FhirInvoice } from './FhirInvoice'
import { FhirLibrary } from './FhirLibrary'
import { FhirLinkage } from './FhirLinkage'
import { FhirList } from './FhirList'
import { FhirLocation } from './FhirLocation'
import { FhirMeasure } from './FhirMeasure'
import { FhirMeasureReport } from './FhirMeasureReport'
import { FhirMedia } from './FhirMedia'
import { FhirMedication } from './FhirMedication'
import { FhirMedicationAdministration } from './FhirMedicationAdministration'
import { FhirMedicationDispense } from './FhirMedicationDispense'
import { FhirMedicationKnowledge } from './FhirMedicationKnowledge'
import { FhirMedicationRequest } from './FhirMedicationRequest'
import { FhirMedicationStatement } from './FhirMedicationStatement'
import { FhirMedicinalProduct } from './FhirMedicinalProduct'
import { FhirMedicinalProductAuthorization } from './FhirMedicinalProductAuthorization'
import { FhirMedicinalProductContraindication } from './FhirMedicinalProductContraindication'
import { FhirMedicinalProductIndication } from './FhirMedicinalProductIndication'
import { FhirMedicinalProductIngredient } from './FhirMedicinalProductIngredient'
import { FhirMedicinalProductInteraction } from './FhirMedicinalProductInteraction'
import { FhirMedicinalProductManufactured } from './FhirMedicinalProductManufactured'
import { FhirMedicinalProductPackaged } from './FhirMedicinalProductPackaged'
import { FhirMedicinalProductPharmaceutical } from './FhirMedicinalProductPharmaceutical'
import { FhirMedicinalProductUndesirableEffect } from './FhirMedicinalProductUndesirableEffect'
import { FhirMessageDefinition } from './FhirMessageDefinition'
import { FhirMessageHeader } from './FhirMessageHeader'
import { FhirMolecularSequence } from './FhirMolecularSequence'
import { FhirNamingSystem } from './FhirNamingSystem'
import { FhirNutritionOrder } from './FhirNutritionOrder'
import { FhirObservation } from './FhirObservation'
import { FhirObservationDefinition } from './FhirObservationDefinition'
import { FhirOperationDefinition } from './FhirOperationDefinition'
import { FhirOperationOutcome } from './FhirOperationOutcome'
import { FhirOrganization } from './FhirOrganization'
import { FhirOrganizationAffiliation } from './FhirOrganizationAffiliation'
import { FhirParameters } from './FhirParameters'
import { FhirPatient } from './FhirPatient'
import { FhirPaymentNotice } from './FhirPaymentNotice'
import { FhirPaymentReconciliation } from './FhirPaymentReconciliation'
import { FhirPerson } from './FhirPerson'
import { FhirPlanDefinition } from './FhirPlanDefinition'
import { FhirPractitioner } from './FhirPractitioner'
import { FhirPractitionerRole } from './FhirPractitionerRole'
import { FhirProcedure } from './FhirProcedure'
import { FhirProvenance } from './FhirProvenance'
import { FhirQuestionnaire } from './FhirQuestionnaire'
import { FhirQuestionnaireResponse } from './FhirQuestionnaireResponse'
import { FhirRelatedPerson } from './FhirRelatedPerson'
import { FhirRequestGroup } from './FhirRequestGroup'
import { FhirResearchDefinition } from './FhirResearchDefinition'
import { FhirResearchElementDefinition } from './FhirResearchElementDefinition'
import { FhirResearchStudy } from './FhirResearchStudy'
import { FhirResearchSubject } from './FhirResearchSubject'
import { FhirRiskAssessment } from './FhirRiskAssessment'
import { FhirRiskEvidenceSynthesis } from './FhirRiskEvidenceSynthesis'
import { FhirSchedule } from './FhirSchedule'
import { FhirSearchParameter } from './FhirSearchParameter'
import { FhirServiceRequest } from './FhirServiceRequest'
import { FhirSlot } from './FhirSlot'
import { FhirSpecimen } from './FhirSpecimen'
import { FhirSpecimenDefinition } from './FhirSpecimenDefinition'
import { FhirStructureDefinition } from './FhirStructureDefinition'
import { FhirStructureMap } from './FhirStructureMap'
import { FhirSubscription } from './FhirSubscription'
import { FhirSubstance } from './FhirSubstance'
import { FhirSubstanceNucleicAcid } from './FhirSubstanceNucleicAcid'
import { FhirSubstancePolymer } from './FhirSubstancePolymer'
import { FhirSubstanceProtein } from './FhirSubstanceProtein'
import { FhirSubstanceReferenceInformation } from './FhirSubstanceReferenceInformation'
import { FhirSubstanceSourceMaterial } from './FhirSubstanceSourceMaterial'
import { FhirSubstanceSpecification } from './FhirSubstanceSpecification'
import { FhirSupplyDelivery } from './FhirSupplyDelivery'
import { FhirSupplyRequest } from './FhirSupplyRequest'
import { FhirTask } from './FhirTask'
import { FhirTerminologyCapabilities } from './FhirTerminologyCapabilities'
import { FhirTestReport } from './FhirTestReport'
import { FhirTestScript } from './FhirTestScript'
import { FhirValueSet } from './FhirValueSet'
import { FhirVerificationResult } from './FhirVerificationResult'
import { FhirVisionPrescription } from './FhirVisionPrescription'

export const FhirResourceList: t.Type<FhirResourceList, FhirResourceListOutput> = t.recursion('FhirResourceList', () =>
  t.union([
    FhirAccount,
    FhirActivityDefinition,
    FhirAdverseEvent,
    FhirAllergyIntolerance,
    FhirAppointment,
    FhirAppointmentResponse,
    FhirAuditEvent,
    FhirBasic,
    FhirBinary,
    FhirBiologicallyDerivedProduct,
    FhirBodyStructure,
    FhirBundle,
    FhirCapabilityStatement,
    FhirCarePlan,
    FhirCareTeam,
    FhirCatalogEntry,
    FhirChargeItem,
    FhirChargeItemDefinition,
    FhirClaim,
    FhirClaimResponse,
    FhirClinicalImpression,
    FhirCodeSystem,
    FhirCommunication,
    FhirCommunicationRequest,
    FhirCompartmentDefinition,
    FhirComposition,
    FhirConceptMap,
    FhirCondition,
    FhirConsent,
    FhirContract,
    FhirCoverage,
    FhirCoverageEligibilityRequest,
    FhirCoverageEligibilityResponse,
    FhirDetectedIssue,
    FhirDevice,
    FhirDeviceDefinition,
    FhirDeviceMetric,
    FhirDeviceRequest,
    FhirDeviceUseStatement,
    FhirDiagnosticReport,
    FhirDocumentManifest,
    FhirDocumentReference,
    FhirEffectEvidenceSynthesis,
    FhirEncounter,
    FhirEndpoint,
    FhirEnrollmentRequest,
    FhirEnrollmentResponse,
    FhirEpisodeOfCare,
    FhirEventDefinition,
    FhirEvidence,
    FhirEvidenceVariable,
    FhirExampleScenario,
    FhirExplanationOfBenefit,
    FhirFamilyMemberHistory,
    FhirFlag,
    FhirGoal,
    FhirGraphDefinition,
    FhirGroup,
    FhirGuidanceResponse,
    FhirHealthcareService,
    FhirImagingStudy,
    FhirImmunization,
    FhirImmunizationEvaluation,
    FhirImmunizationRecommendation,
    FhirImplementationGuide,
    FhirInsurancePlan,
    FhirInvoice,
    FhirLibrary,
    FhirLinkage,
    FhirList,
    FhirLocation,
    FhirMeasure,
    FhirMeasureReport,
    FhirMedia,
    FhirMedication,
    FhirMedicationAdministration,
    FhirMedicationDispense,
    FhirMedicationKnowledge,
    FhirMedicationRequest,
    FhirMedicationStatement,
    FhirMedicinalProduct,
    FhirMedicinalProductAuthorization,
    FhirMedicinalProductContraindication,
    FhirMedicinalProductIndication,
    FhirMedicinalProductIngredient,
    FhirMedicinalProductInteraction,
    FhirMedicinalProductManufactured,
    FhirMedicinalProductPackaged,
    FhirMedicinalProductPharmaceutical,
    FhirMedicinalProductUndesirableEffect,
    FhirMessageDefinition,
    FhirMessageHeader,
    FhirMolecularSequence,
    FhirNamingSystem,
    FhirNutritionOrder,
    FhirObservation,
    FhirObservationDefinition,
    FhirOperationDefinition,
    FhirOperationOutcome,
    FhirOrganization,
    FhirOrganizationAffiliation,
    FhirParameters,
    FhirPatient,
    FhirPaymentNotice,
    FhirPaymentReconciliation,
    FhirPerson,
    FhirPlanDefinition,
    FhirPractitioner,
    FhirPractitionerRole,
    FhirProcedure,
    FhirProvenance,
    FhirQuestionnaire,
    FhirQuestionnaireResponse,
    FhirRelatedPerson,
    FhirRequestGroup,
    FhirResearchDefinition,
    FhirResearchElementDefinition,
    FhirResearchStudy,
    FhirResearchSubject,
    FhirRiskAssessment,
    FhirRiskEvidenceSynthesis,
    FhirSchedule,
    FhirSearchParameter,
    FhirServiceRequest,
    FhirSlot,
    FhirSpecimen,
    FhirSpecimenDefinition,
    FhirStructureDefinition,
    FhirStructureMap,
    FhirSubscription,
    FhirSubstance,
    FhirSubstanceNucleicAcid,
    FhirSubstancePolymer,
    FhirSubstanceProtein,
    FhirSubstanceReferenceInformation,
    FhirSubstanceSourceMaterial,
    FhirSubstanceSpecification,
    FhirSupplyDelivery,
    FhirSupplyRequest,
    FhirTask,
    FhirTerminologyCapabilities,
    FhirTestReport,
    FhirTestScript,
    FhirValueSet,
    FhirVerificationResult,
    FhirVisionPrescription,
  ])
)

export type FhirResourceList =
  | t.TypeOf<typeof FhirAccount>
  | t.TypeOf<typeof FhirActivityDefinition>
  | t.TypeOf<typeof FhirAdverseEvent>
  | t.TypeOf<typeof FhirAllergyIntolerance>
  | t.TypeOf<typeof FhirAppointment>
  | t.TypeOf<typeof FhirAppointmentResponse>
  | t.TypeOf<typeof FhirAuditEvent>
  | t.TypeOf<typeof FhirBasic>
  | t.TypeOf<typeof FhirBinary>
  | t.TypeOf<typeof FhirBiologicallyDerivedProduct>
  | t.TypeOf<typeof FhirBodyStructure>
  | t.TypeOf<typeof FhirBundle>
  | t.TypeOf<typeof FhirCapabilityStatement>
  | t.TypeOf<typeof FhirCarePlan>
  | t.TypeOf<typeof FhirCareTeam>
  | t.TypeOf<typeof FhirCatalogEntry>
  | t.TypeOf<typeof FhirChargeItem>
  | t.TypeOf<typeof FhirChargeItemDefinition>
  | t.TypeOf<typeof FhirClaim>
  | t.TypeOf<typeof FhirClaimResponse>
  | t.TypeOf<typeof FhirClinicalImpression>
  | t.TypeOf<typeof FhirCodeSystem>
  | t.TypeOf<typeof FhirCommunication>
  | t.TypeOf<typeof FhirCommunicationRequest>
  | t.TypeOf<typeof FhirCompartmentDefinition>
  | t.TypeOf<typeof FhirComposition>
  | t.TypeOf<typeof FhirConceptMap>
  | t.TypeOf<typeof FhirCondition>
  | t.TypeOf<typeof FhirConsent>
  | t.TypeOf<typeof FhirContract>
  | t.TypeOf<typeof FhirCoverage>
  | t.TypeOf<typeof FhirCoverageEligibilityRequest>
  | t.TypeOf<typeof FhirCoverageEligibilityResponse>
  | t.TypeOf<typeof FhirDetectedIssue>
  | t.TypeOf<typeof FhirDevice>
  | t.TypeOf<typeof FhirDeviceDefinition>
  | t.TypeOf<typeof FhirDeviceMetric>
  | t.TypeOf<typeof FhirDeviceRequest>
  | t.TypeOf<typeof FhirDeviceUseStatement>
  | t.TypeOf<typeof FhirDiagnosticReport>
  | t.TypeOf<typeof FhirDocumentManifest>
  | t.TypeOf<typeof FhirDocumentReference>
  | t.TypeOf<typeof FhirEffectEvidenceSynthesis>
  | t.TypeOf<typeof FhirEncounter>
  | t.TypeOf<typeof FhirEndpoint>
  | t.TypeOf<typeof FhirEnrollmentRequest>
  | t.TypeOf<typeof FhirEnrollmentResponse>
  | t.TypeOf<typeof FhirEpisodeOfCare>
  | t.TypeOf<typeof FhirEventDefinition>
  | t.TypeOf<typeof FhirEvidence>
  | t.TypeOf<typeof FhirEvidenceVariable>
  | t.TypeOf<typeof FhirExampleScenario>
  | t.TypeOf<typeof FhirExplanationOfBenefit>
  | t.TypeOf<typeof FhirFamilyMemberHistory>
  | t.TypeOf<typeof FhirFlag>
  | t.TypeOf<typeof FhirGoal>
  | t.TypeOf<typeof FhirGraphDefinition>
  | t.TypeOf<typeof FhirGroup>
  | t.TypeOf<typeof FhirGuidanceResponse>
  | t.TypeOf<typeof FhirHealthcareService>
  | t.TypeOf<typeof FhirImagingStudy>
  | t.TypeOf<typeof FhirImmunization>
  | t.TypeOf<typeof FhirImmunizationEvaluation>
  | t.TypeOf<typeof FhirImmunizationRecommendation>
  | t.TypeOf<typeof FhirImplementationGuide>
  | t.TypeOf<typeof FhirInsurancePlan>
  | t.TypeOf<typeof FhirInvoice>
  | t.TypeOf<typeof FhirLibrary>
  | t.TypeOf<typeof FhirLinkage>
  | t.TypeOf<typeof FhirList>
  | t.TypeOf<typeof FhirLocation>
  | t.TypeOf<typeof FhirMeasure>
  | t.TypeOf<typeof FhirMeasureReport>
  | t.TypeOf<typeof FhirMedia>
  | t.TypeOf<typeof FhirMedication>
  | t.TypeOf<typeof FhirMedicationAdministration>
  | t.TypeOf<typeof FhirMedicationDispense>
  | t.TypeOf<typeof FhirMedicationKnowledge>
  | t.TypeOf<typeof FhirMedicationRequest>
  | t.TypeOf<typeof FhirMedicationStatement>
  | t.TypeOf<typeof FhirMedicinalProduct>
  | t.TypeOf<typeof FhirMedicinalProductAuthorization>
  | t.TypeOf<typeof FhirMedicinalProductContraindication>
  | t.TypeOf<typeof FhirMedicinalProductIndication>
  | t.TypeOf<typeof FhirMedicinalProductIngredient>
  | t.TypeOf<typeof FhirMedicinalProductInteraction>
  | t.TypeOf<typeof FhirMedicinalProductManufactured>
  | t.TypeOf<typeof FhirMedicinalProductPackaged>
  | t.TypeOf<typeof FhirMedicinalProductPharmaceutical>
  | t.TypeOf<typeof FhirMedicinalProductUndesirableEffect>
  | t.TypeOf<typeof FhirMessageDefinition>
  | t.TypeOf<typeof FhirMessageHeader>
  | t.TypeOf<typeof FhirMolecularSequence>
  | t.TypeOf<typeof FhirNamingSystem>
  | t.TypeOf<typeof FhirNutritionOrder>
  | t.TypeOf<typeof FhirObservation>
  | t.TypeOf<typeof FhirObservationDefinition>
  | t.TypeOf<typeof FhirOperationDefinition>
  | t.TypeOf<typeof FhirOperationOutcome>
  | t.TypeOf<typeof FhirOrganization>
  | t.TypeOf<typeof FhirOrganizationAffiliation>
  | t.TypeOf<typeof FhirParameters>
  | t.TypeOf<typeof FhirPatient>
  | t.TypeOf<typeof FhirPaymentNotice>
  | t.TypeOf<typeof FhirPaymentReconciliation>
  | t.TypeOf<typeof FhirPerson>
  | t.TypeOf<typeof FhirPlanDefinition>
  | t.TypeOf<typeof FhirPractitioner>
  | t.TypeOf<typeof FhirPractitionerRole>
  | t.TypeOf<typeof FhirProcedure>
  | t.TypeOf<typeof FhirProvenance>
  | t.TypeOf<typeof FhirQuestionnaire>
  | t.TypeOf<typeof FhirQuestionnaireResponse>
  | t.TypeOf<typeof FhirRelatedPerson>
  | t.TypeOf<typeof FhirRequestGroup>
  | t.TypeOf<typeof FhirResearchDefinition>
  | t.TypeOf<typeof FhirResearchElementDefinition>
  | t.TypeOf<typeof FhirResearchStudy>
  | t.TypeOf<typeof FhirResearchSubject>
  | t.TypeOf<typeof FhirRiskAssessment>
  | t.TypeOf<typeof FhirRiskEvidenceSynthesis>
  | t.TypeOf<typeof FhirSchedule>
  | t.TypeOf<typeof FhirSearchParameter>
  | t.TypeOf<typeof FhirServiceRequest>
  | t.TypeOf<typeof FhirSlot>
  | t.TypeOf<typeof FhirSpecimen>
  | t.TypeOf<typeof FhirSpecimenDefinition>
  | t.TypeOf<typeof FhirStructureDefinition>
  | t.TypeOf<typeof FhirStructureMap>
  | t.TypeOf<typeof FhirSubscription>
  | t.TypeOf<typeof FhirSubstance>
  | t.TypeOf<typeof FhirSubstanceNucleicAcid>
  | t.TypeOf<typeof FhirSubstancePolymer>
  | t.TypeOf<typeof FhirSubstanceProtein>
  | t.TypeOf<typeof FhirSubstanceReferenceInformation>
  | t.TypeOf<typeof FhirSubstanceSourceMaterial>
  | t.TypeOf<typeof FhirSubstanceSpecification>
  | t.TypeOf<typeof FhirSupplyDelivery>
  | t.TypeOf<typeof FhirSupplyRequest>
  | t.TypeOf<typeof FhirTask>
  | t.TypeOf<typeof FhirTerminologyCapabilities>
  | t.TypeOf<typeof FhirTestReport>
  | t.TypeOf<typeof FhirTestScript>
  | t.TypeOf<typeof FhirValueSet>
  | t.TypeOf<typeof FhirVerificationResult>
  | t.TypeOf<typeof FhirVisionPrescription>
export type FhirResourceListOutput =
  | t.OutputOf<typeof FhirAccount>
  | t.OutputOf<typeof FhirActivityDefinition>
  | t.OutputOf<typeof FhirAdverseEvent>
  | t.OutputOf<typeof FhirAllergyIntolerance>
  | t.OutputOf<typeof FhirAppointment>
  | t.OutputOf<typeof FhirAppointmentResponse>
  | t.OutputOf<typeof FhirAuditEvent>
  | t.OutputOf<typeof FhirBasic>
  | t.OutputOf<typeof FhirBinary>
  | t.OutputOf<typeof FhirBiologicallyDerivedProduct>
  | t.OutputOf<typeof FhirBodyStructure>
  | t.OutputOf<typeof FhirBundle>
  | t.OutputOf<typeof FhirCapabilityStatement>
  | t.OutputOf<typeof FhirCarePlan>
  | t.OutputOf<typeof FhirCareTeam>
  | t.OutputOf<typeof FhirCatalogEntry>
  | t.OutputOf<typeof FhirChargeItem>
  | t.OutputOf<typeof FhirChargeItemDefinition>
  | t.OutputOf<typeof FhirClaim>
  | t.OutputOf<typeof FhirClaimResponse>
  | t.OutputOf<typeof FhirClinicalImpression>
  | t.OutputOf<typeof FhirCodeSystem>
  | t.OutputOf<typeof FhirCommunication>
  | t.OutputOf<typeof FhirCommunicationRequest>
  | t.OutputOf<typeof FhirCompartmentDefinition>
  | t.OutputOf<typeof FhirComposition>
  | t.OutputOf<typeof FhirConceptMap>
  | t.OutputOf<typeof FhirCondition>
  | t.OutputOf<typeof FhirConsent>
  | t.OutputOf<typeof FhirContract>
  | t.OutputOf<typeof FhirCoverage>
  | t.OutputOf<typeof FhirCoverageEligibilityRequest>
  | t.OutputOf<typeof FhirCoverageEligibilityResponse>
  | t.OutputOf<typeof FhirDetectedIssue>
  | t.OutputOf<typeof FhirDevice>
  | t.OutputOf<typeof FhirDeviceDefinition>
  | t.OutputOf<typeof FhirDeviceMetric>
  | t.OutputOf<typeof FhirDeviceRequest>
  | t.OutputOf<typeof FhirDeviceUseStatement>
  | t.OutputOf<typeof FhirDiagnosticReport>
  | t.OutputOf<typeof FhirDocumentManifest>
  | t.OutputOf<typeof FhirDocumentReference>
  | t.OutputOf<typeof FhirEffectEvidenceSynthesis>
  | t.OutputOf<typeof FhirEncounter>
  | t.OutputOf<typeof FhirEndpoint>
  | t.OutputOf<typeof FhirEnrollmentRequest>
  | t.OutputOf<typeof FhirEnrollmentResponse>
  | t.OutputOf<typeof FhirEpisodeOfCare>
  | t.OutputOf<typeof FhirEventDefinition>
  | t.OutputOf<typeof FhirEvidence>
  | t.OutputOf<typeof FhirEvidenceVariable>
  | t.OutputOf<typeof FhirExampleScenario>
  | t.OutputOf<typeof FhirExplanationOfBenefit>
  | t.OutputOf<typeof FhirFamilyMemberHistory>
  | t.OutputOf<typeof FhirFlag>
  | t.OutputOf<typeof FhirGoal>
  | t.OutputOf<typeof FhirGraphDefinition>
  | t.OutputOf<typeof FhirGroup>
  | t.OutputOf<typeof FhirGuidanceResponse>
  | t.OutputOf<typeof FhirHealthcareService>
  | t.OutputOf<typeof FhirImagingStudy>
  | t.OutputOf<typeof FhirImmunization>
  | t.OutputOf<typeof FhirImmunizationEvaluation>
  | t.OutputOf<typeof FhirImmunizationRecommendation>
  | t.OutputOf<typeof FhirImplementationGuide>
  | t.OutputOf<typeof FhirInsurancePlan>
  | t.OutputOf<typeof FhirInvoice>
  | t.OutputOf<typeof FhirLibrary>
  | t.OutputOf<typeof FhirLinkage>
  | t.OutputOf<typeof FhirList>
  | t.OutputOf<typeof FhirLocation>
  | t.OutputOf<typeof FhirMeasure>
  | t.OutputOf<typeof FhirMeasureReport>
  | t.OutputOf<typeof FhirMedia>
  | t.OutputOf<typeof FhirMedication>
  | t.OutputOf<typeof FhirMedicationAdministration>
  | t.OutputOf<typeof FhirMedicationDispense>
  | t.OutputOf<typeof FhirMedicationKnowledge>
  | t.OutputOf<typeof FhirMedicationRequest>
  | t.OutputOf<typeof FhirMedicationStatement>
  | t.OutputOf<typeof FhirMedicinalProduct>
  | t.OutputOf<typeof FhirMedicinalProductAuthorization>
  | t.OutputOf<typeof FhirMedicinalProductContraindication>
  | t.OutputOf<typeof FhirMedicinalProductIndication>
  | t.OutputOf<typeof FhirMedicinalProductIngredient>
  | t.OutputOf<typeof FhirMedicinalProductInteraction>
  | t.OutputOf<typeof FhirMedicinalProductManufactured>
  | t.OutputOf<typeof FhirMedicinalProductPackaged>
  | t.OutputOf<typeof FhirMedicinalProductPharmaceutical>
  | t.OutputOf<typeof FhirMedicinalProductUndesirableEffect>
  | t.OutputOf<typeof FhirMessageDefinition>
  | t.OutputOf<typeof FhirMessageHeader>
  | t.OutputOf<typeof FhirMolecularSequence>
  | t.OutputOf<typeof FhirNamingSystem>
  | t.OutputOf<typeof FhirNutritionOrder>
  | t.OutputOf<typeof FhirObservation>
  | t.OutputOf<typeof FhirObservationDefinition>
  | t.OutputOf<typeof FhirOperationDefinition>
  | t.OutputOf<typeof FhirOperationOutcome>
  | t.OutputOf<typeof FhirOrganization>
  | t.OutputOf<typeof FhirOrganizationAffiliation>
  | t.OutputOf<typeof FhirParameters>
  | t.OutputOf<typeof FhirPatient>
  | t.OutputOf<typeof FhirPaymentNotice>
  | t.OutputOf<typeof FhirPaymentReconciliation>
  | t.OutputOf<typeof FhirPerson>
  | t.OutputOf<typeof FhirPlanDefinition>
  | t.OutputOf<typeof FhirPractitioner>
  | t.OutputOf<typeof FhirPractitionerRole>
  | t.OutputOf<typeof FhirProcedure>
  | t.OutputOf<typeof FhirProvenance>
  | t.OutputOf<typeof FhirQuestionnaire>
  | t.OutputOf<typeof FhirQuestionnaireResponse>
  | t.OutputOf<typeof FhirRelatedPerson>
  | t.OutputOf<typeof FhirRequestGroup>
  | t.OutputOf<typeof FhirResearchDefinition>
  | t.OutputOf<typeof FhirResearchElementDefinition>
  | t.OutputOf<typeof FhirResearchStudy>
  | t.OutputOf<typeof FhirResearchSubject>
  | t.OutputOf<typeof FhirRiskAssessment>
  | t.OutputOf<typeof FhirRiskEvidenceSynthesis>
  | t.OutputOf<typeof FhirSchedule>
  | t.OutputOf<typeof FhirSearchParameter>
  | t.OutputOf<typeof FhirServiceRequest>
  | t.OutputOf<typeof FhirSlot>
  | t.OutputOf<typeof FhirSpecimen>
  | t.OutputOf<typeof FhirSpecimenDefinition>
  | t.OutputOf<typeof FhirStructureDefinition>
  | t.OutputOf<typeof FhirStructureMap>
  | t.OutputOf<typeof FhirSubscription>
  | t.OutputOf<typeof FhirSubstance>
  | t.OutputOf<typeof FhirSubstanceNucleicAcid>
  | t.OutputOf<typeof FhirSubstancePolymer>
  | t.OutputOf<typeof FhirSubstanceProtein>
  | t.OutputOf<typeof FhirSubstanceReferenceInformation>
  | t.OutputOf<typeof FhirSubstanceSourceMaterial>
  | t.OutputOf<typeof FhirSubstanceSpecification>
  | t.OutputOf<typeof FhirSupplyDelivery>
  | t.OutputOf<typeof FhirSupplyRequest>
  | t.OutputOf<typeof FhirTask>
  | t.OutputOf<typeof FhirTerminologyCapabilities>
  | t.OutputOf<typeof FhirTestReport>
  | t.OutputOf<typeof FhirTestScript>
  | t.OutputOf<typeof FhirValueSet>
  | t.OutputOf<typeof FhirVerificationResult>
  | t.OutputOf<typeof FhirVisionPrescription>
