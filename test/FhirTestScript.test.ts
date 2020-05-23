import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirTestScript } from '../src/generated/FhirTestScript'
import * as TestScript from './fixtures/TestScript/testscript-example-history.json'

describe('FhirTestScript', () => {
  it('should decode valid TestScript resources', () => {
    assert.deepStrictEqual(FhirTestScript.decode(TestScript), E.right(TestScript))
  })
  it('should not decode invalid TestScript resources', () => {
    assert.ok(E.isLeft(FhirTestScript.decode({})))
  })
})
