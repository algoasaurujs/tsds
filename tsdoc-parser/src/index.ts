import path from 'path';
import fs from 'fs';
import { parseToJson } from './parser';
import { render } from './renderer';

const files = [
  '../../src/Stack/Stack.ts',
  '../../src/Queue/Queue.ts',
  '../../src/LinkedList/LinkedList.ts',
];

for (const file of files) {
  const result = parseToJson(path.join(__dirname, file));
  render(result);

  fs.writeFileSync(
    path.join(__dirname, '../temp/json', path.basename(file).replace('.ts','.json')),
    JSON.stringify(result)
  );
}
