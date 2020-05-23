import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirDetectedIssue } from '../src/generated/FhirDetectedIssue'
import * as DetectedIssue from './fixtures/DetectedIssue/detectedissue-example-allergy.json'

describe('FhirDetectedIssue', () => {
  it('should decode valid DetectedIssue resources', () => {
    assert.deepStrictEqual(FhirDetectedIssue.decode(DetectedIssue), E.right(DetectedIssue))
  })
  it('should not decode invalid DetectedIssue resources', () => {
    assert.ok(E.isLeft(FhirDetectedIssue.decode({})))
  })
})
