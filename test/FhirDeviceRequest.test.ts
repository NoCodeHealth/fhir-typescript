import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirDeviceRequest } from '../src/generated/FhirDeviceRequest'
import * as DeviceRequest from './fixtures/DeviceRequest/devicerequest-example-insulinpump.json'

describe('FhirDeviceRequest', () => {
  it('should decode valid DeviceRequest resources', () => {
    assert.deepStrictEqual(FhirDeviceRequest.decode(DeviceRequest), E.right(DeviceRequest))
  })
  it('should not decode invalid DeviceRequest resources', () => {
    assert.ok(E.isLeft(FhirDeviceRequest.decode({})))
  })
})
