import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirBundle } from '../src/generated/FhirBundle'
import * as Bundle from './fixtures/Bundle/bundle-example.json'

describe('FhirBundle', () => {
  it('should decode valid Bundle resources', () => {
    assert.deepStrictEqual(FhirBundle.decode(Bundle), E.right(Bundle))
  })
  it('should not decode invalid Bundle resources', () => {
    assert.ok(E.isLeft(FhirBundle.decode({})))
  })
})
