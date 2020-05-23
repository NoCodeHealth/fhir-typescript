import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirValueSet } from '../src/generated/FhirValueSet'
import * as ValueSet from './fixtures/ValueSet/valueset-example-expansion.json'

describe('FhirValueSet', () => {
  it('should decode valid ValueSet resources', () => {
    assert.deepStrictEqual(FhirValueSet.decode(ValueSet), E.right(ValueSet))
  })
  it('should not decode invalid ValueSet resources', () => {
    assert.ok(E.isLeft(FhirValueSet.decode({})))
  })
})
