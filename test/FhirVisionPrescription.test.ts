import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirVisionPrescription } from '../src/generated/FhirVisionPrescription'
import * as VisionPrescription from './fixtures/VisionPrescription/visionprescription-example-1.json'

describe('FhirVisionPrescription', () => {
  it('should decode valid VisionPrescription resources', () => {
    assert.deepStrictEqual(FhirVisionPrescription.decode(VisionPrescription), E.right(VisionPrescription))
  })
  it('should not decode invalid VisionPrescription resources', () => {
    assert.ok(E.isLeft(FhirVisionPrescription.decode({})))
  })
})
