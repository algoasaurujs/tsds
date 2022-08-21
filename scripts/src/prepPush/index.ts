import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const projectRootPath = path.join(__dirname, '../../../');
const scriptsRootPath = path.join(projectRootPath, 'scripts');
const denoRootPath = path.join(projectRootPath, 'deno');
const generatedMDPath = path.join(scriptsRootPath, './out/parseTSDocs');
try {
  // 1 - generate updated documentation
  execSync(`cd ${scriptsRootPath} && npm run parse-tsdocs`);
  fs.copyFileSync(path.join(generatedMDPath, 'README.md'), path.join(projectRootPath, 'README.md'));
  execSync(`git stage ${path.join(projectRootPath, 'README.md')}`);
  const stagedREADME = execSync(`git diff --staged ${path.join(projectRootPath, 'README.md')}`, {
    encoding: 'utf-8',
  });
  if (stagedREADME !== '') {
    execSync(
      'git commit -m "docs(README): Automatic README.md files generated from tsdocs"'
    );
  }

  execSync(`cd ${scriptsRootPath} && npm run make-deno`);
  execSync(`git stage ${denoRootPath}`);
  const staged = execSync(`git diff --staged ${denoRootPath}`, {
    encoding: 'utf-8',
  });
  if (staged !== '') {
    execSync(
      'git commit -m "chore(deno): Automatic deno files generated from src folder"'
    );
  }
} catch (error) {
  console.error(error);
}
