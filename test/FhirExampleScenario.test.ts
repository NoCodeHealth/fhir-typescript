import * as assert from 'assert'
import * as E from 'fp-ts/lib/Either'
import { FhirExampleScenario } from '../src/generated/FhirExampleScenario'
import * as ExampleScenario from './fixtures/ExampleScenario/examplescenario-example.json'

describe('FhirExampleScenario', () => {
  it('should decode valid ExampleScenario resources', () => {
    assert.deepStrictEqual(FhirExampleScenario.decode(ExampleScenario), E.right(ExampleScenario))
  })
  it('should not decode invalid ExampleScenario resources', () => {
    assert.ok(E.isLeft(FhirExampleScenario.decode({})))
  })
})
