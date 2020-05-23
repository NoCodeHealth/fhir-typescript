import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirBasic } from '../src/generated/FhirBasic'
import * as Basic from './fixtures/Basic/basic-example-narrative.json'

describe('FhirBasic', () => {
  it('should decode valid Basic resources', () => {
    assert.deepStrictEqual(FhirBasic.decode(Basic), E.right(Basic))
  })
  it('should not decode invalid Basic resources', () => {
    assert.ok(E.isLeft(FhirBasic.decode({})))
  })
})
