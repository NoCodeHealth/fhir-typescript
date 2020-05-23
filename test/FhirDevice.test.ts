import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirDevice } from '../src/generated/FhirDevice'
import * as Device from './fixtures/Device/device-example-f001-feedingtube.json'

describe('FhirDevice', () => {
  it('should decode valid Device resources', () => {
    assert.deepStrictEqual(FhirDevice.decode(Device), E.right(Device))
  })
  it('should not decode invalid Device resources', () => {
    assert.ok(E.isLeft(FhirDevice.decode({})))
  })
})
