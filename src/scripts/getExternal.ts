import * as m from 'monocle-ts';
import AdmZip from 'adm-zip';
import fs from 'fs';
import request from 'request';
import path from 'path';

import { FhirSchema, FhirPrimitive } from '../schema';

const samplesUrl = 'http://hl7.org/fhir/examples-json.zip'
const schemaUrl = 'http://hl7.org/fhir/fhir.schema.json.zip'

request.get({ url: samplesUrl, encoding: null }, (err, res, body) => {
  if (err) {
    console.log(`Error downloading resources from ${samplesUrl}: ${err}`);
  }

  const fixturesPath = path.join(process.cwd(), 'src/tests/fixtures');

  const zip = new AdmZip(body);
  const zipEntries = zip.getEntries();
  console.log(`Received ${zipEntries.length} resources from "${samplesUrl}"`);

  console.log(`Extracting all resources to "${fixturesPath}"`);
  zip.extractAllTo(fixturesPath, true);

  const files = fs.readdirSync(fixturesPath);

  console.log('Sorting downloaded resources');
  files.forEach((f) => {
    const filePath = path.join(fixturesPath, f);
    const status = fs.statSync(filePath);

    if (status.isFile()) {
      const contents = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      const type = contents['resourceType'];

      if (!type) {
        console.log(`Unable to move file with type "${type}" at path "${filePath}"`);
      } else {
        const destinationDir = path.join(fixturesPath, type);

        fs.mkdirSync(destinationDir, { recursive: true });

        fs.renameSync(filePath, path.join(destinationDir, f));
      }
    }
  });
});

request.get({ url: schemaUrl, encoding: null }, (err, res, body) => {
  if (err) {
    console.log(`Error downloading resources from ${schemaUrl}: ${err}`);
  }

  const schemaPath = path.resolve(process.cwd(), 'src');

  const zip = new AdmZip(body);
  const zipEntries = zip.getEntries();
  console.log(`Received ${zipEntries.length} resources from "${schemaUrl}"`);

  console.log(`Extracting all resources to "${schemaPath}"`);
  zip.extractAllTo(schemaPath, true);

  const schema = JSON.parse(fs.readFileSync(path.join(schemaPath, 'fhir.schema.json'), 'utf8')) as FhirSchema;

  const clean = m.Lens.fromPath<FhirSchema>()(['definitions', 'xhtml']).modify(a => ({...a , type: 'string' }));

  fs.writeFileSync(path.join(schemaPath, 'fhir.schema.json'), JSON.stringify(clean(schema), undefined, 2));
})