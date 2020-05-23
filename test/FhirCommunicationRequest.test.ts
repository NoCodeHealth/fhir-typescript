import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirCommunicationRequest } from '../src/generated/FhirCommunicationRequest'
import * as CommunicationRequest from './fixtures/CommunicationRequest/communicationrequest-example-fm-solicit-attachment.json'

describe('FhirCommunicationRequest', () => {
  it('should decode valid CommunicationRequest resources', () => {
    assert.deepStrictEqual(FhirCommunicationRequest.decode(CommunicationRequest), E.right(CommunicationRequest))
  })
  it('should not decode invalid CommunicationRequest resources', () => {
    assert.ok(E.isLeft(FhirCommunicationRequest.decode({})))
  })
})
