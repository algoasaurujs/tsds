import fs from 'fs';
import path from 'path';
import { copySync } from 'fs-extra';

const srcFolder = path.join(__dirname, '../../src');
const denoFolderPath = path.join(__dirname, '../../deno');

if (fs.existsSync(denoFolderPath)) {
    fs.rmSync(denoFolderPath, { recursive: true, force: true });
}

copySync(srcFolder, denoFolderPath);

const importRegex = new RegExp("import (.*) from '(.*)'", 'g');
const makeDenoImport = (text: string) => {
    return text.replace(importRegex, "// @ts-ignore\nimport $1 from '$2.ts'")
}

const editImports = (location: string) => {
    fs.readdir(location, { withFileTypes: true }, (err, files) => {
        for (const file of files) {
            if (file.isDirectory()) {
                editImports(path.join(location, file.name))
            } else if (file.isFile() && path.extname(file.name) === '.ts') {
                const data = fs.readFileSync(path.join(location, file.name), 'utf-8');

                const newValue = makeDenoImport(data);

                fs.writeFileSync(path.join(location, file.name), newValue, 'utf-8');
            }
        }
    })
}

editImports(denoFolderPath);