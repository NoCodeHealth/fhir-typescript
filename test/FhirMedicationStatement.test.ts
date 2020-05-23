import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirMedicationStatement } from '../src/generated/FhirMedicationStatement'
import * as MedicationStatement from './fixtures/MedicationStatement/medicationstatementexample1.json'

describe('FhirMedicationStatement', () => {
  it('should decode valid MedicationStatement resources', () => {
    assert.deepStrictEqual(FhirMedicationStatement.decode(MedicationStatement), E.right(MedicationStatement))
  })
  it('should not decode invalid MedicationStatement resources', () => {
    assert.ok(E.isLeft(FhirMedicationStatement.decode({})))
  })
})
