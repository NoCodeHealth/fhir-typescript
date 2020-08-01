// import * as Eq from 'fp-ts/lib/Eq'
// import * as Ord from 'fp-ts/lib/Ord'
// import * as M from 'fp-ts/lib/Monoid'
// import * as RA from 'fp-ts/lib/ReadonlyArray'
// import * as RR from 'fp-ts/lib/ReadonlyRecord'
// import { not, pipe } from 'fp-ts/lib/function'
// import { TypeDeclaration } from "io-ts-codegen";
// import * as O from 'monocle-ts/lib/Optional'
// import * as P from 'monocle-ts/lib/Prism'
// import * as T from 'monocle-ts/lib/Traversal'

// import * as D from './decoder'
// import { parseRef, prefixFhir } from './helpers'
// import { parseDefinition } from './parser'
// import { makeType, showRuntime, showStatic } from './generator'

// // -------------------------------------------------------------------------------------
// // model
// // -------------------------------------------------------------------------------------

// /**
//  * @category model
//  * @since 0.1.0
//  */
// export interface Export {
//   readonly _tag: 'Export'
//   readonly signature: string
// }

// /**
//  * @category model
//  * @since 0.1.0
//  */
// export interface Import {
//   readonly _tag: 'Import'
//   readonly signature: string
// }

// /**
//  * @category model
//  * @since 0.1.0
//  */
// export interface Runtime {
//   readonly _tag: 'Runtime'
//   readonly signature: string
// }

// /**
//  * @category model
//  * @since 0.1.0
//  */
// export interface Static {
//   readonly _tag: 'Static'
//   readonly signature: string
// }

// /**
//  * @category model
//  * @since 0.1.0
//  */
// export interface Module {
//   readonly name: string
//   readonly exports: ReadonlyArray<Export>
//   readonly imports: ReadonlyArray<Import>
//   readonly runtime: Runtime
//   readonly static: Static
// }

// // -------------------------------------------------------------------------------------
// // constructors
// // -------------------------------------------------------------------------------------

// const makeExport = (signature: string): Export => ({
//   _tag: 'Export',
//   signature
// })

// const makeImport = (signature: string): Import => ({
//   _tag: 'Import',
//   signature
// })

// const makeRuntime = (signature: string): Runtime => ({
//   _tag: 'Runtime',
//   signature
// })

// const makeStatic = (signature: string): Static => ({
//   _tag: 'Static',
//   signature
// })

// const makeModule = (
//   name: string,
//   exports: ReadonlyArray<Export>,
//   imports: ReadonlyArray<Import>,
//   runtime: Runtime,
//   _static: Static
// ): Module => ({
//   name,
//   exports,
//   imports,
//   runtime,
//   static: _static
// })

// // -------------------------------------------------------------------------------------
// // implementation
// // -------------------------------------------------------------------------------------

// const complexProperties = pipe(P.fromPredicate(D.isComplex), P.prop('properties'))

// const arrayRefs = pipe(
//   complexProperties,
//   O.traverse(RR.Traversable),
//   T.filter(D.isArrayProperty),
//   T.prop('items'),
//   T.filter(D.isRef),
//   T.prop('$ref')
// )

// const propertyRefs = pipe(complexProperties, O.traverse(RR.Traversable), T.filter(D.isRefProperty), T.prop('$ref'))

// const resourceListRefs = pipe(
//   P.fromPredicate(D.isResourceList),
//   P.prop('oneOf'),
//   O.asTraversal,
//   T.traverse(RA.readonlyArray),
//   T.prop('$ref')
// )

// const makeRefs = (definition: D.Definition): ReadonlyArray<string> =>
//   M.fold(RA.getMonoid<string>())([
//     pipe(arrayRefs, T.getAll(definition)),
//     pipe(propertyRefs, T.getAll(definition)),
//     pipe(resourceListRefs, T.getAll(definition))
//   ])

// const makeExports =

// const makeImports = (name: string, definition: D.Definition): ReadonlyArray<Import> =>
//   pipe(
//     makeRefs(definition),
//     RA.map(parseRef),
//     RA.uniq(Eq.eqString),
//     RA.filter(not((s) => eqString.equals(s, prefixFhir(name)))),
//     RA.sort(Ord.ordString),
//     RA.map(makeImport)
//   )

// const makeTypeDef = (name: string, definition: D.Definition): TypeDeclaration =>
//   pipe(parseDefinition(name, definition), makeType)

// const runtimeDefinition = (declaration: TypeDeclaration): Runtime => pipe(
//   showRuntime.show(declaration),
//   makeRuntime
// )

// const staticDefinition = (declaration: TypeDeclaration): Static => pipe(
//   showStatic.show(declaration),
//   makeStatic
// )

// const makeModules = (schema: D.Schema): ReadonlyArray<Module> =>
//   pipe(
//     RR.fromRecord(schema.definitions),
//     RR.collect((name, definition) => {
//       const imports = makeImports(name, definition)
//       const typeDef = makeTypeDef(name, definition)
//       const runtimeType = runtimeDefinition(typeDef)
//       const staticType = staticDefinition(typeDef)

//       return makeModule(
//         prefixFhir(name),
//         RA.empty, // types will be exported by default
//         imports,
//         runtimeType,
//         staticType
//       )
//     }))
//   )
