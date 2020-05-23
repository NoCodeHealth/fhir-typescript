import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirPatient } from '../src/generated/FhirPatient'
import * as Patient from './fixtures/Patient/patient-example-a.json'

describe('FhirPatient', () => {
  it('should decode valid Patient resources', () => {
    assert.deepStrictEqual(FhirPatient.decode(Patient), E.right(Patient))
  })
  it('should not decode invalid Patient resources', () => {
    assert.ok(E.isLeft(FhirPatient.decode({})))
  })
})
