import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirSupplyRequest } from '../src/generated/FhirSupplyRequest'
import * as SupplyRequest from './fixtures/SupplyRequest/supplyrequest-example-simpleorder.json'

describe('FhirSupplyRequest', () => {
  it('should decode valid SupplyRequest resources', () => {
    assert.deepStrictEqual(FhirSupplyRequest.decode(SupplyRequest), E.right(SupplyRequest))
  })
  it('should not decode invalid SupplyRequest resources', () => {
    assert.ok(E.isLeft(FhirSupplyRequest.decode({})))
  })
})
