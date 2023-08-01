import { SignatureReflection } from 'typedoc';
import { EOL } from 'os';
import { Renderer } from '../shared/Renderer';

export const formatSingle = (signature: SignatureReflection): string => {
  let result = '';

    const summary = signature.comment?.summary;
    if (summary) {
        result += Renderer.renderCommentPart(summary).toString() + EOL + EOL;
    }

    const params = signature.parameters;
    if (params && params.length > 0) {
        result += new Renderer('Parameters').b1().h2().toString() + EOL + EOL;
        for (const param of params) {
            result += Renderer.renderSingleParam(param) + EOL + EOL;
        }
    }

    const returns = signature.comment?.getTag('@returns')?.content;
    if (returns) {
        result += new Renderer('Returns').b1().h2().toString() + EOL + EOL;
        result += '`' + signature.type?.toString() + '`' + EOL + EOL;
        result += Renderer.renderCommentPart(returns).toString() + EOL + EOL;
    }

    const example = signature.comment?.getTag('@example')?.content;
    if (example) {
        result += new Renderer('Example').b1().h2().toString() + EOL + EOL;
        result += Renderer.renderCommentPart(example).toString() + EOL + EOL;
    }

    const remarks = signature.comment?.getTag('@remarks')?.content;
    if (remarks) {
        result += new Renderer('Remarks').b1().h2().toString() + EOL + EOL;
        result += Renderer.renderCommentPart(remarks).toString() + EOL + EOL;
    }
    return result;
};
