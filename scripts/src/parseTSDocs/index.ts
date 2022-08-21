import path from 'path';
import fs from 'fs';
import { EOL } from 'os';
import * as _ from 'lodash';
import { parseToJson } from './parser';
import { render } from './renderer';

const tsdsSrcFolderPath = path.join(__dirname, '../../../src');
const tempFolderPath = path.join(__dirname, '../../temp/parseTSDocs');
const tempMDFolderPath = path.join(__dirname, '../../temp/parseTSDocs/md');
const tempJsonFolderPath = path.join(__dirname, '../../temp/parseTSDocs/json');
const assetsFolder = path.join(__dirname, '../../src/parseTSDocs/assets');
// path to output final README.md file
const outPath = path.join(__dirname, '../../out/parseTSDocs');

try {
  // Delete temp and out folder to start the script
  if (fs.existsSync(tempFolderPath)) {
    fs.rmSync(tempFolderPath, { recursive: true, force: true });
  }
  if (fs.existsSync(outPath)) {
    fs.rmSync(outPath, { recursive: true, force: true });
  }
  // Prepare temp and out folders
  fs.mkdirSync(path.join(tempMDFolderPath, 'modules'), { recursive: true });
  fs.mkdirSync(tempJsonFolderPath, { recursive: true });
  fs.mkdirSync(outPath, { recursive: true });

  // Files to parse and extract TSDocs
  const files = [
    'Queue/Queue.ts',
    'LinkedList/LinkedList.ts',
    'Stack/Stack.ts',
  ];

  const filesSortedByBasename = files.sort((a, b) => {
    const aBase = path.basename(a);
    const bBase = path.basename(b);
    if (aBase < bBase) {
      return -1;
    }
    if (aBase > bBase) {
      return 1;
    }
    return 0;
  });

  fs.writeFileSync(
    path.join(tempMDFolderPath, 'TABLE_OF_CONTENT.md'),
    '- [APIs](#apis)' + EOL
  );
  // loop over files and extract TSDcos to json and create .md
  for (const file of filesSortedByBasename) {
    const jsonResult = parseToJson(path.join(tsdsSrcFolderPath, file));
    const mdText = render(jsonResult);

    fs.writeFileSync(
      path.join(
        tempJsonFolderPath,
        path.basename(file).replace('.ts', '.json')
      ),
      JSON.stringify(jsonResult)
    );

    fs.writeFileSync(
      path.join(
        tempMDFolderPath,
        'modules',
        path.basename(file).replace('.ts', '.md')
      ),
      mdText.content
    );

    fs.appendFileSync(
      path.join(tempMDFolderPath, 'TABLE_OF_CONTENT.md'),
      mdText.tableOfContent
    );
  }

  // create README.md
  fs.writeFileSync(path.join(outPath, 'README.md'), '');
  fs.appendFileSync(
    path.join(outPath, 'README.md'),
    fs.readFileSync(path.join(assetsFolder, 'README_HEAD.md')) + EOL + EOL
  );
  fs.appendFileSync(
    path.join(outPath, 'README.md'),
    fs.readFileSync(path.join(tempMDFolderPath, 'TABLE_OF_CONTENT.md')) + EOL + EOL
  );
  fs.appendFileSync(
    path.join(outPath, 'README.md'),
    fs.readFileSync(path.join(assetsFolder, 'README_INSTALLATION.md')) + EOL + EOL
  );

  for (const file of filesSortedByBasename) {
    fs.appendFileSync(
      path.join(outPath, 'README.md'),
      fs.readFileSync(path.join(tempMDFolderPath,'modules', path.basename(file).replace('.ts', '.md'))) + EOL + EOL
    );
  }

  fs.appendFileSync(
    path.join(outPath, 'README.md'),
    fs.readFileSync(path.join(assetsFolder, 'README_FOOTER.md')) + EOL + EOL
  );
} catch (error) {
  console.error(error);
}
