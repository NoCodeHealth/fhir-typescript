import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirCommunication } from '../src/generated/FhirCommunication'
import * as Communication from './fixtures/Communication/communication-example-fm-attachment.json'

describe('FhirCommunication', () => {
  it('should decode valid Communication resources', () => {
    assert.deepStrictEqual(FhirCommunication.decode(Communication), E.right(Communication))
  })
  it('should not decode invalid Communication resources', () => {
    assert.ok(E.isLeft(FhirCommunication.decode({})))
  })
})
