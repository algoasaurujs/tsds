import {
  DocNode,
  DocExcerpt,
  DocComment,
  DocParamBlock,
  DocBlock,
} from '@microsoft/tsdoc';
import {
  AnnotatedBlock,
  AnnotatedParam,
  AnnotatedReturns,
} from '../types/AnnotatedBlock.interface';

/**
 * This is a simplistic solution until we implement proper DocNode rendering APIs.
 */
export class Formatter {
  constructor(private comment: DocComment) {}

  private paramToJson(paramBlock: DocParamBlock): AnnotatedParam {
    const paramType =
      new RegExp('@param {(.*)}').exec(
        Formatter.renderDocNode(paramBlock).toString()
      )?.[0] || '';

    return {
      name: Formatter.renderForWeb(paramBlock.parameterName),
      content: Formatter.renderForWeb(
        Formatter.renderDocNode(paramBlock.content)
      ),
      type: paramType.slice(8, -1),
    };
  }

  private returnsToJson(block: DocBlock): AnnotatedReturns {
    const content = Formatter.renderForWeb(
      Formatter.renderDocNode(block.content)
    );

    const typeSection = new RegExp('{.*}').exec(content)?.[0] || '';

    return {
      type: typeSection.slice(1, -1),
      content: content.replace(new RegExp('{.*} '), ''),
    };
  }

  toJson(): AnnotatedBlock {
    const obj: AnnotatedBlock = {
      summary: Formatter.renderForWeb(
        Formatter.renderDocNode(this.comment.summarySection)
      ),
      params: this.comment.params.blocks.map(block => this.paramToJson(block)),
      typeParams: this.comment.typeParams.blocks.map(block => ({
        name: block.parameterName,
        content: Formatter.renderDocNode(block.content),
      })),
      returns:
        this.comment.returnsBlock &&
        this.returnsToJson(this.comment.returnsBlock),
      remarks:
        this.comment.remarksBlock &&
        Formatter.renderForWeb(
          Formatter.renderDocNode(this.comment.remarksBlock.content)
        ),
      overload: null,
    };

    this.comment.customBlocks.forEach(block => {
      if (block.blockTag.tagName === '@class') {
        obj['isClass'] = true;
      }
      if (block.blockTag.tagName === '@property') {
        obj['isProperty'] = true;
      }
      if (block.blockTag.tagName === '@private') {
        obj['isPrivate'] = true;
      }
      if (block.blockTag.tagName === '@method') {
        obj['isMethod'] = true;
      }
      if (block.blockTag.tagName === '@memberof') {
        obj['memberof'] = Formatter.renderForWeb(
          Formatter.renderDocNode(block.content)
        );
      }
      if (block.blockTag.tagName === '@name') {
        obj['name'] = Formatter.renderForWeb(
          Formatter.renderDocNode(block.content)
        );
      }
      if (block.blockTag.tagName === '@example') {
        obj['example'] = Formatter.renderForWeb(
          Formatter.renderDocNode(block.content)
        );
      }
      if (block.blockTag.tagName === '@type') {
        obj['type'] = Formatter.renderForWeb(
          Formatter.renderDocNode(block.content)
        );
      }
      if (block.blockTag.tagName === '@overload') {
        obj['overload'] = Formatter.renderForWeb(
          Formatter.renderDocNode(block.content)
        );
      }
    });
    return obj;
  }

  public static renderDocNode(docNode: DocNode): string {
    let result: string = '';
    if (docNode) {
      if (docNode instanceof DocExcerpt) {
        result += docNode.content.toString();
      }
      for (const childNode of docNode.getChildNodes()) {
        result += Formatter.renderDocNode(childNode);
      }
    }
    return result;
  }

  public static renderDocNodes(docNodes: ReadonlyArray<DocNode>): string {
    let result: string = '';
    for (const docNode of docNodes) {
      result += Formatter.renderDocNode(docNode);
    }
    return result;
  }

  public static renderForWeb(text: string): string {
    if (text.slice(-1) === '\n') {
      return text.slice(0, -1).trim();
    }
    return text.trim();
  }
}
