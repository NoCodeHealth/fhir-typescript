import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirImagingStudy } from '../src/generated/FhirImagingStudy'
import * as ImagingStudy from './fixtures/ImagingStudy/imagingstudy-example-xr.json'

describe('FhirImagingStudy', () => {
  it('should decode valid ImagingStudy resources', () => {
    assert.deepStrictEqual(FhirImagingStudy.decode(ImagingStudy), E.right(ImagingStudy))
  })
  it('should not decode invalid ImagingStudy resources', () => {
    assert.ok(E.isLeft(FhirImagingStudy.decode({})))
  })
})
