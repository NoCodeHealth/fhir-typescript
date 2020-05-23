import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirProcedure } from '../src/generated/FhirProcedure'
import * as Procedure from './fixtures/Procedure/procedure-example-HCBS.json'

describe('FhirProcedure', () => {
  it('should decode valid Procedure resources', () => {
    assert.deepStrictEqual(FhirProcedure.decode(Procedure), E.right(Procedure))
  })
  it('should not decode invalid Procedure resources', () => {
    assert.ok(E.isLeft(FhirProcedure.decode({})))
  })
})
