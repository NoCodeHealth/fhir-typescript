import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirGoal } from '../src/generated/FhirGoal'
import * as Goal from './fixtures/Goal/goal-example-stop-smoking.json'

describe('FhirGoal', () => {
  it('should decode valid Goal resources', () => {
    assert.deepStrictEqual(FhirGoal.decode(Goal), E.right(Goal))
  })
  it('should not decode invalid Goal resources', () => {
    assert.ok(E.isLeft(FhirGoal.decode({})))
  })
})
