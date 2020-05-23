import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirRequestGroup } from '../src/generated/FhirRequestGroup'
import * as RequestGroup from './fixtures/RequestGroup/requestgroup-example.json'

describe('FhirRequestGroup', () => {
  it('should decode valid RequestGroup resources', () => {
    assert.deepStrictEqual(FhirRequestGroup.decode(RequestGroup), E.right(RequestGroup))
  })
  it('should not decode invalid RequestGroup resources', () => {
    assert.ok(E.isLeft(FhirRequestGroup.decode({})))
  })
})
