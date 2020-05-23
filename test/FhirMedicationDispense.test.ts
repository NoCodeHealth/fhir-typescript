import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirMedicationDispense } from '../src/generated/FhirMedicationDispense'
import * as MedicationDispense from './fixtures/MedicationDispense/medicationdispenseexample8.json'

describe('FhirMedicationDispense', () => {
  it('should decode valid MedicationDispense resources', () => {
    assert.deepStrictEqual(FhirMedicationDispense.decode(MedicationDispense), E.right(MedicationDispense))
  })
  it('should not decode invalid MedicationDispense resources', () => {
    assert.ok(E.isLeft(FhirMedicationDispense.decode({})))
  })
})
