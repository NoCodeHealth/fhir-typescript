import * as A from 'fp-ts/lib/Array'
import * as E from 'fp-ts/lib/Either'
import * as TE from 'fp-ts/lib/TaskEither'
import * as RTE from 'fp-ts/lib/ReaderTaskEither'
import { constVoid } from 'fp-ts/lib/function'
import { pipe } from 'fp-ts/lib/pipeable'
import { draw } from 'io-ts/lib/Tree'
import * as path from 'path'

import { FhirSchema } from './decoder'
import { makeModules, Module } from './module'
import { printIndex, printModule } from './print'

/**
 * @since 0.0.1
 */
export interface Eff<A> extends TE.TaskEither<string, A> {}

/**
 * @since 0.0.1
 */
export interface MonadFileSystem {
  readonly readFile: (path: string) => Eff<string>
  readonly writeFile: (path: string, content: string) => Eff<void>
  readonly existsFile: (path: string) => Eff<boolean>
  readonly clean: (pattern: string) => Eff<void>
}

/**
 * @since 0.0.1
 */
export interface MonadLog {
  readonly info: (message: string) => Eff<void>
  readonly log: (message: string) => Eff<void>
  readonly debug: (message: string) => Eff<void>
}

/**
 * @since 0.0.1
 */
export interface Capabilities extends MonadFileSystem, MonadLog {}

/**
 * @since 0.0.1
 */
export interface AppEff<A> extends RTE.ReaderTaskEither<Capabilities, string, A> {}

interface File {
  readonly path: string
  readonly content: string
  readonly overwrite: boolean
}

const outDir = 'generated'
const srcDir = 'src'
const fhirSchemaFilename = 'fhir.schema.json'

function file(path: string, content: string, overwrite: boolean): File {
  return {
    path,
    content,
    overwrite
  }
}

function readFile(path: string): AppEff<File> {
  return (C) =>
    pipe(
      C.readFile(path),
      TE.map((content) => file(path, content, false))
    )
}

export function readFiles(paths: Array<string>): AppEff<Array<File>> {
  return A.array.traverse(RTE.readerTaskEither)(paths, readFile)
}

function writeFile(file: File): AppEff<void> {
  return (C) => {
    const overwrite = pipe(
      C.debug(`Overwriting file ${file.path}`),
      TE.chain(() => C.writeFile(file.path, file.content))
    )

    const skip = C.debug(`File ${file.path} already exists, skipping creation`)

    const write = pipe(
      C.debug(`Writing file ${file.path}`),
      TE.chain(() => C.writeFile(file.path, file.content))
    )

    return pipe(
      C.existsFile(file.path),
      TE.chain((exists) => (exists ? (file.overwrite ? overwrite : skip) : write))
    )
  }
}

function writeFiles(files: Array<File>): AppEff<void> {
  return pipe(A.array.traverse(RTE.readerTaskEither)(files, writeFile), RTE.map(constVoid))
}

function makeIndexFile(modules: Array<Module>): File {
  const filePath = path.join(outDir, `index.ts`)
  const content = printIndex(modules)

  return file(filePath, content, true)
}

function makeModuleFile(module: Module): AppEff<File> {
  const filePath = path.join(outDir, `${module.name}.ts`)
  const content = printModule(module)

  return () => TE.right(file(filePath, content, true))
}

function makeModuleFiles(modules: Array<Module>): AppEff<Array<File>> {
  return A.array.traverse(RTE.readerTaskEither)(modules, makeModuleFile)
}

function writeModules(files: Array<File>): AppEff<void> {
  const outPattern = path.join(outDir, '**/*.ts')

  const cleanOut: AppEff<void> = (C) =>
    pipe(
      C.log(`Writing modules...`),
      TE.chain(() => C.debug(`Cleaning up generated folder: deleting ${outPattern}...`)),
      TE.chain(() => C.clean(outPattern))
    )

  return pipe(
    cleanOut,
    RTE.chain(() => writeFiles(files))
  )
}

const getSchema: AppEff<FhirSchema> = (C) =>
  pipe(
    C.readFile(path.join(process.cwd(), srcDir, fhirSchemaFilename)),
    TE.chain((schema) =>
      pipe(
        E.parseJSON(schema, E.toError),
        E.chainW(FhirSchema.decode),
        E.mapLeft((e) => (e instanceof Error ? String(e) : draw(e))),
        TE.fromEither
      )
    )
  )

/**
 * @since 0.0.1
 */
export const main: AppEff<void> = pipe(
  getSchema,
  RTE.chain((schema) => RTE.rightIO(() => makeModules(schema))),
  RTE.chain((modules) =>
    pipe(
      makeModuleFiles(modules),
      RTE.map((files) => A.cons(makeIndexFile(modules), files)),
      RTE.chain(writeModules)
    )
  )
)
