import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirRiskEvidenceSynthesis } from '../src/generated/FhirRiskEvidenceSynthesis'
import * as RiskEvidenceSynthesis from './fixtures/RiskEvidenceSynthesis/riskevidencesynthesis-example.json'

describe('FhirRiskEvidenceSynthesis', () => {
  it('should decode valid RiskEvidenceSynthesis resources', () => {
    assert.deepStrictEqual(FhirRiskEvidenceSynthesis.decode(RiskEvidenceSynthesis), E.right(RiskEvidenceSynthesis))
  })
  it('should not decode invalid RiskEvidenceSynthesis resources', () => {
    assert.ok(E.isLeft(FhirRiskEvidenceSynthesis.decode({})))
  })
})
