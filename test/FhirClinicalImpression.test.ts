import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirClinicalImpression } from '../src/generated/FhirClinicalImpression'
import * as ClinicalImpression from './fixtures/ClinicalImpression/clinicalimpression-example.json'

describe('FhirClinicalImpression', () => {
  it('should decode valid ClinicalImpression resources', () => {
    assert.deepStrictEqual(FhirClinicalImpression.decode(ClinicalImpression), E.right(ClinicalImpression))
  })
  it('should not decode invalid ClinicalImpression resources', () => {
    assert.ok(E.isLeft(FhirClinicalImpression.decode({})))
  })
})
