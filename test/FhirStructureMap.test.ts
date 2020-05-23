import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirStructureMap } from '../src/generated/FhirStructureMap'
import * as StructureMap from './fixtures/StructureMap/structuremap-example.json'

describe('FhirStructureMap', () => {
  it('should decode valid StructureMap resources', () => {
    assert.deepStrictEqual(FhirStructureMap.decode(StructureMap), E.right(StructureMap))
  })
  it('should not decode invalid StructureMap resources', () => {
    assert.ok(E.isLeft(FhirStructureMap.decode({})))
  })
})
