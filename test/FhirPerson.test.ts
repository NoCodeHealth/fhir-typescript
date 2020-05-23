import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirPerson } from '../src/generated/FhirPerson'
import * as Person from './fixtures/Person/person-example-f002-ariadne.json'

describe('FhirPerson', () => {
  it('should decode valid Person resources', () => {
    assert.deepStrictEqual(FhirPerson.decode(Person), E.right(Person))
  })
  it('should not decode invalid Person resources', () => {
    assert.ok(E.isLeft(FhirPerson.decode({})))
  })
})
