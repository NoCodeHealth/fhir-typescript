import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirMessageHeader } from '../src/generated/FhirMessageHeader'
import * as MessageHeader from './fixtures/MessageHeader/messageheader-example.json'

describe('FhirMessageHeader', () => {
  it('should decode valid MessageHeader resources', () => {
    assert.deepStrictEqual(FhirMessageHeader.decode(MessageHeader), E.right(MessageHeader))
  })
  it('should not decode invalid MessageHeader resources', () => {
    assert.ok(E.isLeft(FhirMessageHeader.decode({})))
  })
})
