import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirDiagnosticReport } from '../src/generated/FhirDiagnosticReport'
import * as DiagnosticReport from './fixtures/DiagnosticReport/diagnosticreport-example-dxa.json'

describe('FhirDiagnosticReport', () => {
  it('should decode valid DiagnosticReport resources', () => {
    assert.deepStrictEqual(FhirDiagnosticReport.decode(DiagnosticReport), E.right(DiagnosticReport))
  })
  it('should not decode invalid DiagnosticReport resources', () => {
    assert.ok(E.isLeft(FhirDiagnosticReport.decode({})))
  })
})
