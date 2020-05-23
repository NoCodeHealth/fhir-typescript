import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirMedicationKnowledge } from '../src/generated/FhirMedicationKnowledge'
import * as MedicationKnowledge from './fixtures/MedicationKnowledge/medicationknowledge-example.json'

describe('FhirMedicationKnowledge', () => {
  it('should decode valid MedicationKnowledge resources', () => {
    assert.deepStrictEqual(FhirMedicationKnowledge.decode(MedicationKnowledge), E.right(MedicationKnowledge))
  })
  it('should not decode invalid MedicationKnowledge resources', () => {
    assert.ok(E.isLeft(FhirMedicationKnowledge.decode({})))
  })
})
