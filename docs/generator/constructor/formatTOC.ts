import { DeclarationReflection } from 'typedoc';
import markdownTable from 'markdown-table';
import { MethodRenderer } from '../shared/MethodRenderer';
import { createConstructorLink } from '../createSidebarItem';
import { Renderer } from '../shared/Renderer';

const formatTOC = (
  declaration: DeclarationReflection,
  parent: DeclarationReflection
): string => {
  const { signatures = [] } = declaration;
  let result = '';
  result += markdownTable([
    ['Overload', 'Description'],
    ...signatures.map(signature => [
      MethodRenderer.renderSignature(signature)
        .anchorLink(createConstructorLink(parent))
        .toString(),
      Renderer.renderCommentPart(signature.comment?.summary)
        .toString()
        .replace(/\n/g, ' '),
    ]),
  ]);
  return result;
};

export default formatTOC;
