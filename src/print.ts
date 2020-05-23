import * as A from 'fp-ts/lib/Array'
import * as Eq from 'fp-ts/lib/Eq'
import * as M from 'fp-ts/lib/Monoid'
import { pipe } from 'fp-ts/lib/pipeable'
import * as prettier from 'prettier'

import { Module } from './module'

const CLRF = '\n\n'

const foldString = M.fold(M.monoidString)

const foldArrayString = M.fold(M.monoidString)

const prettierOptions: prettier.Options = {
  parser: 'typescript',
  semi: false,
  singleQuote: true,
  printWidth: 120
}

function replace(pattern: RegExp, replaceValue: string): (content: string) => string {
  return (c) => c.replace(pattern, replaceValue)
}

function prettify(content: string) {
  return prettier.format(content, prettierOptions)
}

function format(content: string): string {
  return pipe(
    content,
    replace(/\b(\d+):\s*null,{0,1}/g, `'$1': null,`),
    replace(/(0BSD):\s*null,{0,1}/g, `'$1': null,`),
    prettify
  )
}

function printImport(name: string): string {
  return `import { ${name} } from './${name}'\n`
}

function printImports(names: Array<string>): string {
  return pipe(names, A.map(printImport), foldArrayString)
}

function printExports(names: Array<string>): string {
  let e = `export {${CLRF}`
  e += A.array.reduce(names, '', (b, a) => `${b} ${a},${CLRF}`)
  e += '}'
  return e
}

/**
 * @since 0.0.1
 */
export function printModule(module: Module): string {
  const imports = foldString([`import * as t from 'io-ts'\n`, printImports(module.imports)])
  return pipe(foldString([imports, CLRF, module.content]), format)
}

/**
 * @since 0.0.1
 */
export function printIndex(modules: Array<Module>): string {
  const imports = pipe(
    modules,
    A.map((module) => module.imports),
    A.flatten,
    A.uniq(Eq.eqString)
  )

  const content = foldString([printImports(imports), printExports(imports)])

  return pipe(content, format)
}
