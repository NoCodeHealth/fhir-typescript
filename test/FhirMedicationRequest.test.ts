import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirMedicationRequest } from '../src/generated/FhirMedicationRequest'
import * as MedicationRequest from './fixtures/MedicationRequest/medicationrequestexample1.json'

describe('FhirMedicationRequest', () => {
  it('should decode valid MedicationRequest resources', () => {
    assert.deepStrictEqual(FhirMedicationRequest.decode(MedicationRequest), E.right(MedicationRequest))
  })
  it('should not decode invalid MedicationRequest resources', () => {
    assert.ok(E.isLeft(FhirMedicationRequest.decode({})))
  })
})
