import fs from 'fs';
import path from 'path';

export const getFixture = (domain: string) => (name: string) =>
  JSON.parse(fs.readFileSync(path.join(__dirname, 'fixtures', domain, name), 'utf8'));