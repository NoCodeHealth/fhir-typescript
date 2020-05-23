import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirEffectEvidenceSynthesis } from '../src/generated/FhirEffectEvidenceSynthesis'
import * as EffectEvidenceSynthesis from './fixtures/EffectEvidenceSynthesis/effectevidencesynthesis-example.json'

describe('FhirEffectEvidenceSynthesis', () => {
  it('should decode valid EffectEvidenceSynthesis resources', () => {
    assert.deepStrictEqual(
      FhirEffectEvidenceSynthesis.decode(EffectEvidenceSynthesis),
      E.right(EffectEvidenceSynthesis)
    )
  })
  it('should not decode invalid EffectEvidenceSynthesis resources', () => {
    assert.ok(E.isLeft(FhirEffectEvidenceSynthesis.decode({})))
  })
})
