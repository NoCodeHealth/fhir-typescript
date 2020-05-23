import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirMeasure } from '../src/generated/FhirMeasure'
import * as Measure from './fixtures/Measure/measure-cms146-example.json'

describe('FhirMeasure', () => {
  it('should decode valid Measure resources', () => {
    assert.deepStrictEqual(FhirMeasure.decode(Measure), E.right(Measure))
  })
  it('should not decode invalid Measure resources', () => {
    assert.ok(E.isLeft(FhirMeasure.decode({})))
  })
})
