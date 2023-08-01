import { DeclarationReflection } from 'typedoc';
import markdownTable from 'markdown-table';
import { EOL } from 'os';
import { MethodRenderer } from '../shared/MethodRenderer';
import { Renderer } from '../shared/Renderer';
import { formatSingle } from './formatSingle';

export const formatGroup = (declaration: DeclarationReflection) => {
  let result = '';

  const signatures = declaration?.signatures;

    if (!signatures) {
        return;
    }

    result += new MethodRenderer(declaration).getFullName().b2().h1().toString() + EOL + EOL;

    if (signatures.length > 1) {
        result += new Renderer('Overloads').b1().h2().toString() + EOL + EOL;
        result +=
            markdownTable([
                ['Variant', 'Definition'],
                ...signatures.map(signature =>
                    [MethodRenderer.renderSignature(signature).toString(),
                    Renderer.renderCommentPart(signature.comment?.summary).toString()]
                )]) + EOL + EOL;

        for (const signature of signatures) {
            const renderedMethodSignature = MethodRenderer.renderSignature(signature);
            result += renderedMethodSignature.h4().toString() + EOL + EOL;
            result += formatSingle(signature);
        }
    } else {
        result += formatSingle(signatures?.[0]);
    }

    return result;
};
