import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirChargeItem } from '../src/generated/FhirChargeItem'
import * as ChargeItem from './fixtures/ChargeItem/chargeitem-example.json'

describe('FhirChargeItem', () => {
  it('should decode valid ChargeItem resources', () => {
    assert.deepStrictEqual(FhirChargeItem.decode(ChargeItem), E.right(ChargeItem))
  })
  it('should not decode invalid ChargeItem resources', () => {
    assert.ok(E.isLeft(FhirChargeItem.decode({})))
  })
})
