import { EOL } from 'os';
import { DeclarationReflection, SignatureReflection } from "typedoc";
import { Renderer } from './shared/Renderer';
import markdownTable from 'markdown-table';
import { hashCode } from './shared/utlis';

const renderSignatureReflection = (signature: SignatureReflection): string => {
    let result = '';

    const summary = signature.comment?.summary;
    if (summary) {
        result += Renderer.renderCommentPart(summary).toString() + EOL + EOL;
    }

    const params = signature.parameters;
    if (params && params.length > 0) {
        result += new Renderer('Parameters').b2().toString() + EOL + EOL;
        for (const param of params) {
            result += Renderer.renderSingleParam(param) + EOL + EOL;
        }
    }

    const returns = signature.comment?.getTag('@returns')?.content;
    if (returns) {
        result += '**Returns**' + EOL + EOL;
        result += '`' + signature.type?.toString() + '`' + EOL + EOL;
        result += Renderer.renderCommentPart(returns).toString() + EOL + EOL;
    }

    const example = signature.comment?.getTag('@example')?.content;
    if (example) {
        result += '**Example**' + EOL + EOL;
        result += Renderer.renderCommentPart(example).toString() + EOL + EOL;
    }

    const remarks = signature.comment?.getTag('@remarks')?.content;
    if (remarks) {
        result += '**Remarks**' + EOL + EOL;
        result += Renderer.renderCommentPart(remarks).toString() + EOL + EOL;
    }
    return result;
}

export const renderMethodAPI = (method: DeclarationReflection): string => {
    let result = '';
    const signatures = method.signatures;

    if (!signatures) {
        return '';
    }

    result += new Renderer(method.name).b2().h3().toString() + EOL + EOL;

    if (signatures.length > 1) {
        result += new Renderer('Overloads').b2().toString() + EOL + EOL;
        result +=
            markdownTable([
                ['Variant', 'Definition'],
                ...signatures.map(signature =>
                    [Renderer.renderMethodSignature(signature).anchorLink(
                        hashCode(Renderer.renderMethodSignature(signature).toString()).toString()
                    ).toString(),
                    Renderer.renderCommentPart(signature.comment?.summary).toString()]
                )]) + EOL + EOL;

        for (const signature of signatures) {
            const renderedMethodSignature = Renderer.renderMethodSignature(signature);
            result += renderedMethodSignature.anchor(hashCode(renderedMethodSignature.toString()).toString()).h4().toString() + EOL + EOL;
            result += renderSignatureReflection(signature);
        }
    } else {
        result += renderSignatureReflection(signatures?.[0]);
    }


    return result;
}