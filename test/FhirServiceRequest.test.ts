import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirServiceRequest } from '../src/generated/FhirServiceRequest'
import * as ServiceRequest from './fixtures/ServiceRequest/servicerequest-example-ambulation.json'

describe('FhirServiceRequest', () => {
  it('should decode valid ServiceRequest resources', () => {
    assert.deepStrictEqual(FhirServiceRequest.decode(ServiceRequest), E.right(ServiceRequest))
  })
  it('should not decode invalid ServiceRequest resources', () => {
    assert.ok(E.isLeft(FhirServiceRequest.decode({})))
  })
})
