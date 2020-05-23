import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirEnrollmentResponse } from '../src/generated/FhirEnrollmentResponse'
import * as EnrollmentResponse from './fixtures/EnrollmentResponse/enrollmentresponse-example.json'

describe('FhirEnrollmentResponse', () => {
  it('should decode valid EnrollmentResponse resources', () => {
    assert.deepStrictEqual(FhirEnrollmentResponse.decode(EnrollmentResponse), E.right(EnrollmentResponse))
  })
  it('should not decode invalid EnrollmentResponse resources', () => {
    assert.ok(E.isLeft(FhirEnrollmentResponse.decode({})))
  })
})
