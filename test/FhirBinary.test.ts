import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirBinary } from '../src/generated/FhirBinary'
import * as Binary from './fixtures/Binary/binary-example.json'

describe('FhirBinary', () => {
  it('should decode valid Binary resources', () => {
    assert.deepStrictEqual(FhirBinary.decode(Binary), E.right(Binary))
  })
  it('should not decode invalid Binary resources', () => {
    assert.ok(E.isLeft(FhirBinary.decode({})))
  })
})
