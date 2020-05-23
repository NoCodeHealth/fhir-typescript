import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirMeasureReport } from '../src/generated/FhirMeasureReport'
import * as MeasureReport from './fixtures/MeasureReport/measurereport-cms146-cat1-example.json'

describe('FhirMeasureReport', () => {
  it('should decode valid MeasureReport resources', () => {
    assert.deepStrictEqual(FhirMeasureReport.decode(MeasureReport), E.right(MeasureReport))
  })
  it('should not decode invalid MeasureReport resources', () => {
    assert.ok(E.isLeft(FhirMeasureReport.decode({})))
  })
})
