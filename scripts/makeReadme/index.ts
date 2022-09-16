import { Application, TSConfigReader, TypeDocReader } from 'typedoc';
import path from 'path';
import fs from 'fs';
import { EOL } from 'os';
import { renderAPI } from './renderAPI';
import { renderTOC } from './renderTOC';

const rootDir = path.join(__dirname, './../..');

async function main() {
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
    const README_TOC = renderTOC(project);
    const README_HEAD = fs.readFileSync(
      path.join(rootDir, 'scripts/makeReadme/assets/README_HEAD.md')
    );
    const README_INSTALLATION = fs.readFileSync(
      path.join(rootDir, 'scripts/makeReadme/assets/README_INSTALLATION.md')
    );
    const README_FOOTER = fs.readFileSync(
      path.join(rootDir, 'scripts/makeReadme/assets/README_FOOTER.md')
    );
    const README_CONTENT = renderAPI(project);
    const README =
      README_HEAD +
      EOL +
      EOL +
      README_TOC +
      EOL +
      EOL +
      README_INSTALLATION +
      EOL +
      EOL +
      README_CONTENT +
      README_FOOTER;
    fs.writeFileSync(path.join(rootDir, 'README.md'), README);
  }
}

main().catch(console.error);
