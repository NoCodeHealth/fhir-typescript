import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirInvoice } from '../src/generated/FhirInvoice'
import * as Invoice from './fixtures/Invoice/invoice-example.json'

describe('FhirInvoice', () => {
  it('should decode valid Invoice resources', () => {
    assert.deepStrictEqual(FhirInvoice.decode(Invoice), E.right(Invoice))
  })
  it('should not decode invalid Invoice resources', () => {
    assert.ok(E.isLeft(FhirInvoice.decode({})))
  })
})
