import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirGuidanceResponse } from '../src/generated/FhirGuidanceResponse'
import * as GuidanceResponse from './fixtures/GuidanceResponse/guidanceresponse-example.json'

describe('FhirGuidanceResponse', () => {
  it('should decode valid GuidanceResponse resources', () => {
    assert.deepStrictEqual(FhirGuidanceResponse.decode(GuidanceResponse), E.right(GuidanceResponse))
  })
  it('should not decode invalid GuidanceResponse resources', () => {
    assert.ok(E.isLeft(FhirGuidanceResponse.decode({})))
  })
})
