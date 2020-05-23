import * as A from 'fp-ts/lib/Array'
import * as Eq from 'fp-ts/lib/Eq'
import * as F from 'fp-ts/lib/Foldable'
import * as M from 'fp-ts/lib/Monoid'
import { pipe } from 'fp-ts/lib/pipeable'
import * as prettier from 'prettier'

import { Module } from './ModuleParser'

const CRLF = '\n'

const intercalateCRLF = (strings: Array<string>) => F.intercalate(M.monoidString, A.array)(CRLF, strings)

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

function printDependencyImport(name: string): string {
  return `import { ${name} } from './${name}'`
}

function printImports(names: Array<string>): string {
  return pipe(names, A.map(printDependencyImport), intercalateCRLF)
}

function printExports(names: Array<string>): string {
  return intercalateCRLF(['export {', ...names, '}'])
}

/**
 * @since 0.0.1
 */
export function printModule(module: Module): string {
  return intercalateCRLF([`import * as t from 'io-ts'`, printImports(module.imports), '', module.content])
}

/**
 * @since 0.0.1
 */
export function printIndex(modules: Array<Module>): string {
  const imports = pipe(
    modules,
    A.chain((module) => module.imports),
    A.uniq(Eq.eqString)
  )

  return pipe(intercalateCRLF([printImports(imports), printExports(imports)]), format)
}
