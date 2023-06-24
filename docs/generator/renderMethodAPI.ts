import { EOL } from 'os';
import path from 'path';
import matter from 'gray-matter';
import { DeclarationReflection, SignatureReflection } from "typedoc";
import { Renderer } from './shared/Renderer';
import markdownTable from 'markdown-table';
import { hashCode } from './shared/utlis';
import { writeFileSync } from './shared/writeFileSync';
import { MethodRenderer } from './shared/MethodRenderer';

const renderSignatureReflection = (signature: SignatureReflection): string => {
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
}

export const renderMethodAPI = (method: DeclarationReflection, outDir: string) => {
    const baseOutDir = path.join(outDir, 'methods');
    let result = '';

    const frontmatter = matter.stringify('', { outline: 'deep' });
    result += frontmatter;

    const signatures = method.signatures;

    if (!signatures) {
        return;
    }

    result += new MethodRenderer(method).getFullName().b2().h1().toString() + EOL + EOL;

    if (signatures.length > 1) {
        result += new Renderer('Overloads').b1().h2().toString() + EOL + EOL;
        result +=
            markdownTable([
                ['Variant', 'Definition'],
                ...signatures.map(signature =>
                    [MethodRenderer.renderSignature(signature).anchorLink(
                        hashCode(MethodRenderer.renderSignature(signature).toString()).toString()
                    ).toString(),
                    Renderer.renderCommentPart(signature.comment?.summary).toString()]
                )]) + EOL + EOL;

        for (const signature of signatures) {
            const renderedMethodSignature = MethodRenderer.renderSignature(signature);
            result += renderedMethodSignature.anchor(hashCode(renderedMethodSignature.toString()).toString()).h4().toString() + EOL + EOL;
            result += renderSignatureReflection(signature);
        }
    } else {
        result += renderSignatureReflection(signatures?.[0]);
    }

    writeFileSync(path.join(baseOutDir, `${method.name}.md`), result)
}