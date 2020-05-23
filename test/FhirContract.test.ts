import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirContract } from '../src/generated/FhirContract'
import * as Contract from './fixtures/Contract/contract-example-42cfr-part2.json'

describe('FhirContract', () => {
  it('should decode valid Contract resources', () => {
    assert.deepStrictEqual(FhirContract.decode(Contract), E.right(Contract))
  })
  it('should not decode invalid Contract resources', () => {
    assert.ok(E.isLeft(FhirContract.decode({})))
  })
})
