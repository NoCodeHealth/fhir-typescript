import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirDeviceUseStatement } from '../src/generated/FhirDeviceUseStatement'
import * as DeviceUseStatement from './fixtures/DeviceUseStatement/deviceusestatement-example.json'

describe('FhirDeviceUseStatement', () => {
  it('should decode valid DeviceUseStatement resources', () => {
    assert.deepStrictEqual(FhirDeviceUseStatement.decode(DeviceUseStatement), E.right(DeviceUseStatement))
  })
  it('should not decode invalid DeviceUseStatement resources', () => {
    assert.ok(E.isLeft(FhirDeviceUseStatement.decode({})))
  })
})
