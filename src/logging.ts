import * as C from 'fp-ts/lib/Console';
import * as IO from 'fp-ts/lib/IO';
import * as L from 'logging-ts/lib/IO';

export type Level = 'Debug' | 'Info' | 'Warning' | 'Error';

export interface Entry {
  level: Level;
  message: string;
  time: Date;
}

const showEntry = (entry: Entry) => `[${entry.level}] ${entry.time.toLocaleString()} ${entry.message}`;
const getLoggerEntry = (prefix: string): L.LoggerIO<Entry> => (entry) => C.log(`${prefix}: ${showEntry(entry)}`);

const debugLogger = L.filter(getLoggerEntry('debug.log'), (e) => e.level === 'Debug');
const productionLogger = L.filter(getLoggerEntry('production.log'), (e) => e.level !== 'Debug');
const logger = L.getMonoid<Entry>().concat(debugLogger, productionLogger);
const getLogger = (level: Level) => (message: string) => (time: Date): IO.IO<void> => logger({ message, time, level });

export const debug = getLogger('Debug');
export const error = getLogger('Error');
export const info = getLogger('Info');
export const warn = getLogger('Warning');
