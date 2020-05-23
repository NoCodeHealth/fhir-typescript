import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirEnrollmentRequest } from '../src/generated/FhirEnrollmentRequest'
import * as EnrollmentRequest from './fixtures/EnrollmentRequest/enrollmentrequest-example.json'

describe('FhirEnrollmentRequest', () => {
  it('should decode valid EnrollmentRequest resources', () => {
    assert.deepStrictEqual(FhirEnrollmentRequest.decode(EnrollmentRequest), E.right(EnrollmentRequest))
  })
  it('should not decode invalid EnrollmentRequest resources', () => {
    assert.ok(E.isLeft(FhirEnrollmentRequest.decode({})))
  })
})
