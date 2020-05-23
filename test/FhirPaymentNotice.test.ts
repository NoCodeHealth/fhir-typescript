import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirPaymentNotice } from '../src/generated/FhirPaymentNotice'
import * as PaymentNotice from './fixtures/PaymentNotice/paymentnotice-example.json'

describe('FhirPaymentNotice', () => {
  it('should decode valid PaymentNotice resources', () => {
    assert.deepStrictEqual(FhirPaymentNotice.decode(PaymentNotice), E.right(PaymentNotice))
  })
  it('should not decode invalid PaymentNotice resources', () => {
    assert.ok(E.isLeft(FhirPaymentNotice.decode({})))
  })
})
