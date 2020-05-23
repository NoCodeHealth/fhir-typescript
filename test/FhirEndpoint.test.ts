import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirEndpoint } from '../src/generated/FhirEndpoint'
import * as Endpoint from './fixtures/Endpoint/endpoint-example-direct.json'

describe('FhirEndpoint', () => {
  it('should decode valid Endpoint resources', () => {
    assert.deepStrictEqual(FhirEndpoint.decode(Endpoint), E.right(Endpoint))
  })
  it('should not decode invalid Endpoint resources', () => {
    assert.ok(E.isLeft(FhirEndpoint.decode({})))
  })
})
