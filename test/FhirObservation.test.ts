import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirObservation } from '../src/generated/FhirObservation'
import * as Observation from './fixtures/Observation/observation-example-10minute-apgar-score.json'

describe('FhirObservation', () => {
  it('should decode valid Observation resources', () => {
    assert.deepStrictEqual(FhirObservation.decode(Observation), E.right(Observation))
  })
  it('should not decode invalid Observation resources', () => {
    assert.ok(E.isLeft(FhirObservation.decode({})))
  })
})
