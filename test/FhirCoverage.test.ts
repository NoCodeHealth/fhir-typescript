import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirCoverage } from '../src/generated/FhirCoverage'
import * as Coverage from './fixtures/Coverage/coverage-example-2.json'

describe('FhirCoverage', () => {
  it('should decode valid Coverage resources', () => {
    assert.deepStrictEqual(FhirCoverage.decode(Coverage), E.right(Coverage))
  })
  it('should not decode invalid Coverage resources', () => {
    assert.ok(E.isLeft(FhirCoverage.decode({})))
  })
})
