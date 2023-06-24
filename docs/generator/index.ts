import { Application, TSConfigReader, TypeDocReader } from 'typedoc';
import path from 'path';
import fs from 'fs';
import { renderAPI } from './renderAPI';

class Argv {
  constructor(private argv: string[]) {}

  private _extract(arg: string) {
    for (const element of this.argv) {
      if (element.startsWith(arg)) {
        const [, value] = element.split('=');
        return !value ? true : value;
      }
    }
    return undefined;
  }

  get watch(): boolean {
    const value = this._extract('--watch');
    if (value === 'true' || value === true) {
      return true;
    }
    return false;
  }
}

const rootDir = path.join(__dirname, './../..');
const outDir = path.join(rootDir, '/docs');

async function main() {
  const argv = new Argv(process.argv);
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

  if (argv.watch) {
    app.convertAndWatch(async project => {
      renderAPI(project, outDir);
    });
  } else {
    const project = app.convert();

    if (project) {
      renderAPI(project, outDir);
    }
  }
}

main().catch(console.error);
