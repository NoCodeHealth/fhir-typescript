import * as A from 'fp-ts/lib/Array'
import * as E from 'fp-ts/lib/Either'
import * as M from 'fp-ts/lib/Monoid'
import * as TE from 'fp-ts/lib/TaskEither'
import * as RTE from 'fp-ts/lib/ReaderTaskEither'
import * as RA from 'fp-ts/lib/ReadonlyArray'
import { constVoid } from 'fp-ts/lib/function'
import { pipe } from 'fp-ts/lib/pipeable'
import { draw } from 'io-ts/lib/Tree'
import * as path from 'path'
import * as prettier from 'prettier'

import { Resource } from './resources'
import { FhirSchema } from './schema'

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
export interface MonadResourceProvider {
  readonly makeResources: (schema: FhirSchema) => Eff<Array<Resource>>
}

/**
 * @since 0.0.1
 */
export interface Capabilities extends MonadFileSystem, MonadLog, MonadResourceProvider {}

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

function prettify(content: string): string {
  return prettier.format(content, {
    bracketSpacing: true,
    printWidth: 120,
    semi: false,
    singleQuote: true,
    trailingComma: 'none',
    parser: 'typescript'
  })
}

function format(content: string): string {
  return pipe(content.replace(/\b(\d+):\s*null,{0,1}/g, `'$1': null,`).replace(/(0BSD):/, `'$1':`), prettify)
}

function makeIndexFile(resources: Array<Resource>): File {
  const imports = A.snoc(
    A.array.map(resources, ({ formattedName }) => `import { ${formattedName} } from './${formattedName}'\n`),
    '\n'
  )

  const exports = `export { ${A.array.map(resources, ({ formattedName }) => `${formattedName}`)} }`

  const filePath = path.join(outDir, `index.ts`)
  const content = pipe(M.fold(M.monoidString)([...imports, exports]), format)

  return file(filePath, content, true)
}

function makeResourceFile(resource: Resource): AppEff<File> {
  const localImports = pipe(
    resource.references,
    RA.map((r) => `import { ${r} } from './${r}'\n`)
  )
  const imports = RA.cons(`import * as t from 'io-ts'\n`, localImports)

  const filePath = path.join(outDir, `${resource.formattedName}.ts`)
  const content = pipe(M.fold(M.monoidString)([...imports, '\n\n', resource.typeDefs]), format)

  return () => TE.right(file(filePath, content, true))
}

function makeResourceFiles(resources: Array<Resource>): AppEff<Array<File>> {
  return A.array.traverse(RTE.readerTaskEither)(resources, makeResourceFile)
}

const outPattern = path.join(outDir, '**/*.ts')

function writeResourceFiles(files: Array<File>): AppEff<void> {
  const cleanOut: AppEff<void> = (C) =>
    pipe(
      C.log(`Writing resource files...`),
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

function getResources(schema: FhirSchema): AppEff<Resource[]> {
  return (C) => C.makeResources(schema)
}

/**
 * @since 0.0.1
 */
export const main: AppEff<void> = pipe(
  getSchema,
  RTE.chain(getResources),
  RTE.chain((resources) =>
    pipe(
      makeResourceFiles(resources),
      RTE.map((files) => A.cons(makeIndexFile(resources), files)),
      RTE.chain(writeResourceFiles)
    )
  )
)
