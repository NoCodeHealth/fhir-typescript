import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirSchedule } from '../src/generated/FhirSchedule'
import * as Schedule from './fixtures/Schedule/schedule-example.json'

describe('FhirSchedule', () => {
  it('should decode valid Schedule resources', () => {
    assert.deepStrictEqual(FhirSchedule.decode(Schedule), E.right(Schedule))
  })
  it('should not decode invalid Schedule resources', () => {
    assert.ok(E.isLeft(FhirSchedule.decode({})))
  })
})
