#!/user/bin/env node

/**
 * Command Line Interface
 *
 * @since 0.0.1
 */
import * as C from 'fp-ts/lib/Console'
import * as chalk from 'chalk'

import { main } from '.'

main().catch((e) => C.log(chalk.bold.red(`An unexpected error occurred ${e}`))())
