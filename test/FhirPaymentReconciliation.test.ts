import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirPaymentReconciliation } from '../src/generated/FhirPaymentReconciliation'
import * as PaymentReconciliation from './fixtures/PaymentReconciliation/paymentreconciliation-example.json'

describe('FhirPaymentReconciliation', () => {
  it('should decode valid PaymentReconciliation resources', () => {
    assert.deepStrictEqual(FhirPaymentReconciliation.decode(PaymentReconciliation), E.right(PaymentReconciliation))
  })
  it('should not decode invalid PaymentReconciliation resources', () => {
    assert.ok(E.isLeft(FhirPaymentReconciliation.decode({})))
  })
})
