// import * as Eq from 'fp-ts/lib/Eq'
// import * as RA from 'fp-ts/lib/ReadonlyArray'
// import { pipe } from 'fp-ts/lib/pipeable'
// import * as prettier from 'prettier'

// import { Module } from './Module'
// import { intercalateComma, intercalateCRLF } from './Util'

// const prettierOptions: prettier.Options = {
//   parser: 'typescript',
//   semi: false,
//   singleQuote: true,
//   printWidth: 120
// }

// function replace(pattern: RegExp, replaceValue: string): (content: string) => string {
//   return (c) => c.replace(pattern, replaceValue)
// }

// function prettify(content: string) {
//   return prettier.format(content, prettierOptions)
// }

// function format(content: string): string {
//   return pipe(
//     content,
//     replace(/\b(\d+):\s*null,{0,1}/g, `'$1': null,`),
//     replace(/(0BSD):\s*null,{0,1}/g, `'$1': null,`),
//     prettify
//   )
// }

// function printDependencyImport(name: string): string {
//   return `import { ${name} } from './${name}'`
// }

// function printImports(names: ReadonlyArray<string>): string {
//   return pipe(names, RA.map(printDependencyImport), intercalateCRLF)
// }

// function printExports(names: ReadonlyArray<string>): string {
//   return intercalateCRLF(['export {', intercalateComma(names), '}'])
// }

// /**
//  * @since 0.0.1
//  */
// export function printModule(module: Module): string {
//   return intercalateCRLF([`import * as t from 'io-ts'`, printImports(module.imports), '', module.content])
// }

// /**
//  * @since 0.0.1
//  */
// export function printIndex(modules: ReadonlyArray<Module>): string {
//   const imports = pipe(
//     modules,
//     RA.chain((module) => module.imports),
//     RA.uniq(Eq.eqString)
//   )

//   return pipe(intercalateCRLF([printImports(imports), printExports(imports)]), format)
// }
