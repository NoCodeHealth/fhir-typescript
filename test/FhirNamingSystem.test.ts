import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirNamingSystem } from '../src/generated/FhirNamingSystem'
import * as NamingSystem from './fixtures/NamingSystem/namingsystem-example-id.json'

describe('FhirNamingSystem', () => {
  it('should decode valid NamingSystem resources', () => {
    assert.deepStrictEqual(FhirNamingSystem.decode(NamingSystem), E.right(NamingSystem))
  })
  it('should not decode invalid NamingSystem resources', () => {
    assert.ok(E.isLeft(FhirNamingSystem.decode({})))
  })
})
