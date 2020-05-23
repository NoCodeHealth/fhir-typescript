import * as C from 'fp-ts/lib/Console'
import * as IO from 'fp-ts/lib/IO'
import * as T from 'fp-ts/lib/Task'
import * as TE from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/pipeable'
import * as chalk from 'chalk'
import * as fs from 'fs-extra'
import * as rimraf from 'rimraf'

import * as core from './core'

const capabilities: core.Capabilities = {
  ...TE.taskEither,
  readFile: (path) => TE.rightIO(() => fs.readFileSync(path, { encoding: 'utf-8' })),
  readDir: (path) => TE.rightIO(() => fs.readdirSync(path, { encoding: 'utf-8' })),
  writeFile: (path, content) => TE.rightIO(() => fs.outputFileSync(path, content)),
  existsFile: (path) => TE.rightIO(() => fs.existsSync(path)),
  clean: (pattern) => TE.rightIO(() => rimraf.sync(pattern)),
  info: (message) => TE.rightIO(C.log(chalk.bold.magenta(message))),
  log: (message) => TE.rightIO(C.log(chalk.cyan(message))),
  debug: (message) => TE.rightIO(C.log(chalk.gray(message)))
}

const exit = (code: 0 | 1): IO.IO<void> => () => process.exit(code)

function onLeft(e: string): T.Task<void> {
  return T.fromIO(
    pipe(
      C.log(e),
      IO.chain(() => exit(1))
    )
  )
}

function onRight(): T.Task<void> {
  return T.fromIO(C.log(chalk.bold.green(`Resource generation successful!`)))
}

/**
 * @since 0.0.1
 */
export const main: T.Task<void> = pipe(core.main(capabilities), TE.fold(onLeft, onRight))
