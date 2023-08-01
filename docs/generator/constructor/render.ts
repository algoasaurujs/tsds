import { DeclarationReflection } from 'typedoc';
import path from 'path';
import matter from 'gray-matter';
import { formatGroup } from './formatGroup';
import { writeFileSync } from '../shared/writeFileSync';

const render = (declaration: DeclarationReflection, outDir: string) => {
  const baseOutDir = path.join(outDir, 'constructors');
  let result = '';

  const frontmatter = matter.stringify('', { outline: 'deep' });
  result += frontmatter;

  result += formatGroup(declaration);

  writeFileSync(path.join(baseOutDir, 'constructors.md'), result);
};

export default render;
