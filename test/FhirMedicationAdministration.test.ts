import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirMedicationAdministration } from '../src/generated/FhirMedicationAdministration'
import * as MedicationAdministration from './fixtures/MedicationAdministration/medicationadministrationexample3.json'

describe('FhirMedicationAdministration', () => {
  it('should decode valid MedicationAdministration resources', () => {
    assert.deepStrictEqual(
      FhirMedicationAdministration.decode(MedicationAdministration),
      E.right(MedicationAdministration)
    )
  })
  it('should not decode invalid MedicationAdministration resources', () => {
    assert.ok(E.isLeft(FhirMedicationAdministration.decode({})))
  })
})
