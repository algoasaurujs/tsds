import { Application, TSConfigReader, TypeDocReader } from 'typedoc';
import path from 'path';
import { createTOC } from './createTOC';

const rootDir = path.join(__dirname, "./../..");

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
        // Project may not have converted correctly
        const outputDir = path.join(rootDir, './docs');

        console.log(createTOC(project))

        // Rendered docs
        await app.generateDocs(project, outputDir);
        // Alternatively generate JSON output
        await app.generateJson(project, outputDir + "/documentation.json");
    }
}

main().catch(console.error);

