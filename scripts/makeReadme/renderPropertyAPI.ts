import { EOL } from 'os';
import { DeclarationReflection } from "typedoc";
import { Renderer } from './shared/Renderer';

export const renderPropertyAPI = (property: DeclarationReflection): string => {
    let result = '';

    result += '### **' + property.getFullName() + '**' + EOL + EOL;

    const summary = property.getSignature?.comment?.summary
    if (summary) {
        result += '**Definition**' + EOL + EOL;
        result += Renderer.renderCommentPart(summary).toString() + EOL + EOL;
    }

    const value = property.getSignature?.type?.toString();
    if (value) {
        result += '**Property Value**' + EOL + EOL;
        result += new Renderer(value).code().toString() + EOL + EOL;
    }

    const example = property.getSignature?.comment?.getTag('@example')?.content;
    if (example) {
        result += '**Example**' + EOL + EOL;
        result += Renderer.renderCommentPart(example).toString() + EOL + EOL;
    }

    const remarks = property.getSignature?.comment?.getTag('@remarks')?.content;
    if (remarks) {
        result += '**Remarks**' + EOL + EOL;
        result += Renderer.renderCommentPart(remarks).toString() + EOL + EOL;
    }

    return result;
}