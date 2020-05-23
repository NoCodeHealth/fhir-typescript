import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirGroup } from '../src/generated/FhirGroup'
import * as Group from './fixtures/Group/group-example-herd1.json'

describe('FhirGroup', () => {
  it('should decode valid Group resources', () => {
    assert.deepStrictEqual(FhirGroup.decode(Group), E.right(Group))
  })
  it('should not decode invalid Group resources', () => {
    assert.ok(E.isLeft(FhirGroup.decode({})))
  })
})
