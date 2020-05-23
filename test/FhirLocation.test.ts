import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirLocation } from '../src/generated/FhirLocation'
import * as Location from './fixtures/Location/location-example-ambulance.json'

describe('FhirLocation', () => {
  it('should decode valid Location resources', () => {
    assert.deepStrictEqual(FhirLocation.decode(Location), E.right(Location))
  })
  it('should not decode invalid Location resources', () => {
    assert.ok(E.isLeft(FhirLocation.decode({})))
  })
})
