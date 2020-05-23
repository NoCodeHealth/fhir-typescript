import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirAccount } from '../src/generated/FhirAccount'
import * as Account from './fixtures/Account/account-example-with-guarantor.json'

describe('FhirAccount', () => {
  it('should decode valid Account resources', () => {
    assert.deepStrictEqual(FhirAccount.decode(Account), E.right(Account))
  })
  it('should not decode invalid Account resources', () => {
    assert.ok(E.isLeft(FhirAccount.decode({})))
  })
})
