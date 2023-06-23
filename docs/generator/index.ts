import { Application, TSConfigReader, TypeDocReader } from 'typedoc';
import path from 'path';
import fs from 'fs';
import { renderAPI } from './renderAPI';

const rootDir = path.join(__dirname, './../..');
const outDir = path.join(rootDir, '/docs');

async function main() {
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  const app = new Application();
  // If you want TypeDoc to load tsconfig.json / typedoc.json files
  app.options.addReader(new TSConfigReader());
  app.options.addReader(new TypeDocReader());

  app.bootstrap({
    // typedoc options here
    entryPoints: [path.join(rootDir, './src/index.ts')],
  });

  const project = app.convert();

  if (project) {
    renderAPI(project, outDir);
  }
}

main().catch(console.error);
