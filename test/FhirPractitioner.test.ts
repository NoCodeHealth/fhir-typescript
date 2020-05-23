import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirPractitioner } from '../src/generated/FhirPractitioner'
import * as Practitioner from './fixtures/Practitioner/practitioner-example-f001-evdb.json'

describe('FhirPractitioner', () => {
  it('should decode valid Practitioner resources', () => {
    assert.deepStrictEqual(FhirPractitioner.decode(Practitioner), E.right(Practitioner))
  })
  it('should not decode invalid Practitioner resources', () => {
    assert.ok(E.isLeft(FhirPractitioner.decode({})))
  })
})
