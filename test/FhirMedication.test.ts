import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirMedication } from '../src/generated/FhirMedication'
import * as Medication from './fixtures/Medication/medicationexample0301.json'

describe('FhirMedication', () => {
  it('should decode valid Medication resources', () => {
    assert.deepStrictEqual(FhirMedication.decode(Medication), E.right(Medication))
  })
  it('should not decode invalid Medication resources', () => {
    assert.ok(E.isLeft(FhirMedication.decode({})))
  })
})
