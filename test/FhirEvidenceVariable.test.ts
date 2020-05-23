import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirEvidenceVariable } from '../src/generated/FhirEvidenceVariable'
import * as EvidenceVariable from './fixtures/EvidenceVariable/evidencevariable-example.json'

describe('FhirEvidenceVariable', () => {
  it('should decode valid EvidenceVariable resources', () => {
    assert.deepStrictEqual(FhirEvidenceVariable.decode(EvidenceVariable), E.right(EvidenceVariable))
  })
  it('should not decode invalid EvidenceVariable resources', () => {
    assert.ok(E.isLeft(FhirEvidenceVariable.decode({})))
  })
})
