import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirMolecularSequence } from '../src/generated/FhirMolecularSequence'
import * as MolecularSequence from './fixtures/MolecularSequence/coord-0base-example.json'

describe('FhirMolecularSequence', () => {
  it('should decode valid MolecularSequence resources', () => {
    assert.deepStrictEqual(FhirMolecularSequence.decode(MolecularSequence), E.right(MolecularSequence))
  })
  it('should not decode invalid MolecularSequence resources', () => {
    assert.ok(E.isLeft(FhirMolecularSequence.decode({})))
  })
})
