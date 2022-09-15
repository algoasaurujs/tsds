import { CommentDisplayPart, ParameterReflection, SignatureReflection } from "typedoc";

export class Renderer {
    constructor(private text: string) { }

    static renderCommentPart(commentPart?: CommentDisplayPart[]) {
        if (!commentPart) {
            return new Renderer('');
        }
        return new Renderer(commentPart.reduce((a, n) => a + n.text, ''));
    }

    static renderMethodSignature(signature: SignatureReflection) {
        let result = '';
        const renderedParam = signature.parameters?.map(p => [p.name, p.type?.toString()].join(': ')).join(', ')
        result += signature.name + '(' + renderedParam + ')' + ': ' + signature.type?.toString();
        return new Renderer(result);
    }

    static renderSingleParam(param: ParameterReflection) {
        const paramSummary = Renderer.renderCommentPart(param.comment?.summary).toString();
        return new Renderer(`**${param.name}\`${param.type?.toString()}\`**: ${paramSummary}`)
    }

    h1() {
        return new Renderer(`# ${this.text}`);
    }

    h2() {
        return new Renderer(`## ${this.text}`);
    }

    h3() {
        return new Renderer(`### ${this.text}`);
    }

    h4() {
        return new Renderer(`#### ${this.text}`);
    }

    h5() {
        return new Renderer(`##### ${this.text}`);
    }

    h6() {
        return new Renderer(`###### ${this.text}`);
    }

    b1() {
        return new Renderer(`****${this.text}****`);
    }

    b2() {
        return new Renderer(`**${this.text}**`);
    }

    anchor(name: string) {
        return new Renderer(`<a name="${name}"></a>${this.text}`)
    }

    anchorLink(name: string) {
        return new Renderer(`[${this.text}](#${name})`)
    }

    code() {
        return new Renderer("`" + this.text + "`");
    }

    toString() {
        return this.text;
    }

}