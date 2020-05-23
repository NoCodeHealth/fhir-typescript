import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirDeviceMetric } from '../src/generated/FhirDeviceMetric'
import * as DeviceMetric from './fixtures/DeviceMetric/devicemetric-example.json'

describe('FhirDeviceMetric', () => {
  it('should decode valid DeviceMetric resources', () => {
    assert.deepStrictEqual(FhirDeviceMetric.decode(DeviceMetric), E.right(DeviceMetric))
  })
  it('should not decode invalid DeviceMetric resources', () => {
    assert.ok(E.isLeft(FhirDeviceMetric.decode({})))
  })
})
