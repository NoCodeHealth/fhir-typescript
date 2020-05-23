import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirDeviceDefinition } from '../src/generated/FhirDeviceDefinition'
import * as DeviceDefinition from './fixtures/DeviceDefinition/devicedefinition-example.json'

describe('FhirDeviceDefinition', () => {
  it('should decode valid DeviceDefinition resources', () => {
    assert.deepStrictEqual(FhirDeviceDefinition.decode(DeviceDefinition), E.right(DeviceDefinition))
  })
  it('should not decode invalid DeviceDefinition resources', () => {
    assert.ok(E.isLeft(FhirDeviceDefinition.decode({})))
  })
})
