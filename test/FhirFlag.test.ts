import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirFlag } from '../src/generated/FhirFlag'
import * as Flag from './fixtures/Flag/flag-example-encounter.json'

describe('FhirFlag', () => {
  it('should decode valid Flag resources', () => {
    assert.deepStrictEqual(FhirFlag.decode(Flag), E.right(Flag))
  })
  it('should not decode invalid Flag resources', () => {
    assert.ok(E.isLeft(FhirFlag.decode({})))
  })
})
