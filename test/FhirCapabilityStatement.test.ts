import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirCapabilityStatement } from '../src/generated/FhirCapabilityStatement'
import * as CapabilityStatement from './fixtures/CapabilityStatement/capabilitystatement-example.json'

describe('FhirCapabilityStatement', () => {
  it('should decode valid CapabilityStatement resources', () => {
    assert.deepStrictEqual(FhirCapabilityStatement.decode(CapabilityStatement), E.right(CapabilityStatement))
  })
  it('should not decode invalid CapabilityStatement resources', () => {
    assert.ok(E.isLeft(FhirCapabilityStatement.decode({})))
  })
})
