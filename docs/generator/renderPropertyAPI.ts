import { EOL } from 'os';
import path from 'path';
import { DeclarationReflection } from 'typedoc';
import { Renderer } from './shared/Renderer';
import { writeFileSync } from './shared/writeFileSync';
import matter from 'gray-matter';

export const renderPropertyAPI = (
  property: DeclarationReflection,
  outDir: string
) => {
  const baseOutDir = path.join(outDir, 'properties');
  let result = '';

  const frontmatter = matter.stringify('', { outline: 'deep' });
  result += frontmatter;

  result +=
    new Renderer(property.name)
      .b1()
      .h1()
      .toString() +
    EOL +
    EOL;

  const summary = property.getSignature?.comment?.summary;
  if (summary) {
    result += Renderer.renderCommentPart(summary).toString() + EOL + EOL;
  }

  const value = property.getSignature?.type?.toString();
  if (value) {
    result +=
      new Renderer('Property Value')
        .b2()
        .h2()
        .toString() +
      EOL +
      EOL;
    result += new Renderer(value).code().toString() + EOL + EOL;
  }

  const example = property.getSignature?.comment?.getTag('@example')?.content;
  if (example) {
    result +=
      new Renderer('Example')
        .b2()
        .h2()
        .toString() +
      EOL +
      EOL;
    result += Renderer.renderCommentPart(example).toString() + EOL + EOL;
  }

  const remarks = property.getSignature?.comment?.getTag('@remarks')?.content;
  if (remarks) {
    result +=
      new Renderer('Remarks')
        .b2()
        .h2()
        .toString() +
      EOL +
      EOL;
    result += Renderer.renderCommentPart(remarks).toString() + EOL + EOL;
  }

  writeFileSync(path.join(baseOutDir, `${property.name}.md`), result);
};
