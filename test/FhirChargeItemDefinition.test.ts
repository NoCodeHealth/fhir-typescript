import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirChargeItemDefinition } from '../src/generated/FhirChargeItemDefinition'
import * as ChargeItemDefinition from './fixtures/ChargeItemDefinition/chargeitemdefinition-device-example.json'

describe('FhirChargeItemDefinition', () => {
  it('should decode valid ChargeItemDefinition resources', () => {
    assert.deepStrictEqual(FhirChargeItemDefinition.decode(ChargeItemDefinition), E.right(ChargeItemDefinition))
  })
  it('should not decode invalid ChargeItemDefinition resources', () => {
    assert.ok(E.isLeft(FhirChargeItemDefinition.decode({})))
  })
})
