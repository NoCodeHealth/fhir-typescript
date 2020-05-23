import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirSlot } from '../src/generated/FhirSlot'
import * as Slot from './fixtures/Slot/slot-example-busy.json'

describe('FhirSlot', () => {
  it('should decode valid Slot resources', () => {
    assert.deepStrictEqual(FhirSlot.decode(Slot), E.right(Slot))
  })
  it('should not decode invalid Slot resources', () => {
    assert.ok(E.isLeft(FhirSlot.decode({})))
  })
})
