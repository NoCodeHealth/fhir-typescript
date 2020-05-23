import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirSupplyDelivery } from '../src/generated/FhirSupplyDelivery'
import * as SupplyDelivery from './fixtures/SupplyDelivery/supplydelivery-example-pumpdelivery.json'

describe('FhirSupplyDelivery', () => {
  it('should decode valid SupplyDelivery resources', () => {
    assert.deepStrictEqual(FhirSupplyDelivery.decode(SupplyDelivery), E.right(SupplyDelivery))
  })
  it('should not decode invalid SupplyDelivery resources', () => {
    assert.ok(E.isLeft(FhirSupplyDelivery.decode({})))
  })
})
