import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirAdverseEvent } from '../src/generated/FhirAdverseEvent'
import * as AdverseEvent from './fixtures/AdverseEvent/adverseevent-example.json'

describe('FhirAdverseEvent', () => {
  it('should decode valid AdverseEvent resources', () => {
    assert.deepStrictEqual(FhirAdverseEvent.decode(AdverseEvent), E.right(AdverseEvent))
  })
  it('should not decode invalid AdverseEvent resources', () => {
    assert.ok(E.isLeft(FhirAdverseEvent.decode({})))
  })
})
