import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirCodeSystem } from '../src/generated/FhirCodeSystem'
import * as CodeSystem from './fixtures/CodeSystem/codesystem-example-summary.json'

describe('FhirCodeSystem', () => {
  it('should decode valid CodeSystem resources', () => {
    assert.deepStrictEqual(FhirCodeSystem.decode(CodeSystem), E.right(CodeSystem))
  })
  it('should not decode invalid CodeSystem resources', () => {
    assert.ok(E.isLeft(FhirCodeSystem.decode({})))
  })
})
