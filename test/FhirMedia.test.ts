import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirMedia } from '../src/generated/FhirMedia'
import * as Media from './fixtures/Media/media-example-dicom.json'

describe('FhirMedia', () => {
  it('should decode valid Media resources', () => {
    assert.deepStrictEqual(FhirMedia.decode(Media), E.right(Media))
  })
  it('should not decode invalid Media resources', () => {
    assert.ok(E.isLeft(FhirMedia.decode({})))
  })
})
