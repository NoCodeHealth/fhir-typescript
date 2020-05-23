import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirCondition } from '../src/generated/FhirCondition'
import * as Condition from './fixtures/Condition/condition-example-f001-heart.json'

describe('FhirCondition', () => {
  it('should decode valid Condition resources', () => {
    assert.deepStrictEqual(FhirCondition.decode(Condition), E.right(Condition))
  })
  it('should not decode invalid Condition resources', () => {
    assert.ok(E.isLeft(FhirCondition.decode({})))
  })
})
