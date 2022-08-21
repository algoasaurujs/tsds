import { green, red, yellow } from 'colors';
import * as os from 'os';
import * as path from 'path';
import * as ts from 'typescript';
import * as tsdoc from '@microsoft/tsdoc';
import { customBlocks } from './customBlocks';
import { Formatter } from './Formatter';
import { AnnotatedBlock } from '../types/AnnotatedBlock.interface';

/**
 * Returns true if the specified SyntaxKind is part of a declaration form.
 *
 * Based on ts.isDeclarationKind() from the compiler.
 * https://github.com/microsoft/TypeScript/blob/v3.0.3/src/compiler/utilities.ts#L6382
 */
function isDeclarationKind(kind: ts.SyntaxKind): boolean {
  return (
    kind === ts.SyntaxKind.ArrowFunction ||
    kind === ts.SyntaxKind.BindingElement ||
    kind === ts.SyntaxKind.ClassDeclaration ||
    kind === ts.SyntaxKind.ClassExpression ||
    kind === ts.SyntaxKind.Constructor ||
    kind === ts.SyntaxKind.EnumDeclaration ||
    kind === ts.SyntaxKind.EnumMember ||
    kind === ts.SyntaxKind.ExportSpecifier ||
    kind === ts.SyntaxKind.FunctionDeclaration ||
    kind === ts.SyntaxKind.FunctionExpression ||
    kind === ts.SyntaxKind.GetAccessor ||
    kind === ts.SyntaxKind.ImportClause ||
    kind === ts.SyntaxKind.ImportEqualsDeclaration ||
    kind === ts.SyntaxKind.ImportSpecifier ||
    kind === ts.SyntaxKind.InterfaceDeclaration ||
    kind === ts.SyntaxKind.JsxAttribute ||
    kind === ts.SyntaxKind.MethodDeclaration ||
    kind === ts.SyntaxKind.MethodSignature ||
    kind === ts.SyntaxKind.ModuleDeclaration ||
    kind === ts.SyntaxKind.NamespaceExportDeclaration ||
    kind === ts.SyntaxKind.NamespaceImport ||
    kind === ts.SyntaxKind.Parameter ||
    kind === ts.SyntaxKind.PropertyAssignment ||
    kind === ts.SyntaxKind.PropertyDeclaration ||
    kind === ts.SyntaxKind.PropertySignature ||
    kind === ts.SyntaxKind.SetAccessor ||
    kind === ts.SyntaxKind.ShorthandPropertyAssignment ||
    kind === ts.SyntaxKind.TypeAliasDeclaration ||
    kind === ts.SyntaxKind.TypeParameter ||
    kind === ts.SyntaxKind.VariableDeclaration ||
    kind === ts.SyntaxKind.JSDocTypedefTag ||
    kind === ts.SyntaxKind.JSDocCallbackTag ||
    kind === ts.SyntaxKind.JSDocPropertyTag
  );
}

/**
 * Retrieves the JSDoc-style comments associated with a specific AST node.
 *
 * Based on ts.getJSDocCommentRanges() from the compiler.
 * https://github.com/microsoft/TypeScript/blob/v3.0.3/src/compiler/utilities.ts#L924
 */
function getJSDocCommentRanges(node: ts.Node, text: string): ts.CommentRange[] {
  const commentRanges: ts.CommentRange[] = [];

  switch (node.kind) {
    case ts.SyntaxKind.Parameter:
    case ts.SyntaxKind.TypeParameter:
    case ts.SyntaxKind.FunctionExpression:
    case ts.SyntaxKind.ArrowFunction:
    case ts.SyntaxKind.ParenthesizedExpression:
      commentRanges.push(
        ...(ts.getTrailingCommentRanges(text, node.pos) || [])
      );
      break;
  }
  commentRanges.push(...(ts.getLeadingCommentRanges(text, node.pos) || []));

  // True if the comment starts with '/**' but not if it is '/**/'
  return commentRanges.filter(
    comment =>
      text.charCodeAt(comment.pos + 1) ===
        0x2a /* ts.CharacterCodes.asterisk */ &&
      text.charCodeAt(comment.pos + 2) ===
        0x2a /* ts.CharacterCodes.asterisk */ &&
      text.charCodeAt(comment.pos + 3) !== 0x2f /* ts.CharacterCodes.slash */
  );
}

interface IFoundComment {
  compilerNode: ts.Node;
  textRange: tsdoc.TextRange;
}

function walkCompilerAstAndFindComments(
  node: ts.Node,
  foundComments: IFoundComment[]
): void {
  // The TypeScript AST doesn't store code comments directly.  If you want to find *every* comment,
  // you would need to rescan the SourceFile tokens similar to how tsutils.forEachComment() works:
  // https://github.com/ajafff/tsutils/blob/v3.0.0/util/util.ts#L453
  //
  // However, for this demo we are modeling a tool that discovers declarations and then analyzes their doc comments,
  // so we only care about TSDoc that would conventionally be associated with an interesting AST node.

  const buffer: string = node.getSourceFile().getFullText(); // don't use getText() here!

  // Only consider nodes that are part of a declaration form.  Without this, we could discover
  // the same comment twice (e.g. for a MethodDeclaration and its PublicKeyword).
  if (isDeclarationKind(node.kind)) {
    // Find "/** */" style comments associated with this node.
    // Note that this reinvokes the compiler's scanner -- the result is not cached.
    const comments: ts.CommentRange[] = getJSDocCommentRanges(node, buffer);

    if (comments.length > 0) {
      for (const comment of comments) {
        foundComments.push({
          compilerNode: node,
          textRange: tsdoc.TextRange.fromStringRange(
            buffer,
            comment.pos,
            comment.end
          ),
        });
      }
    }
  }

  return node.forEachChild(child =>
    walkCompilerAstAndFindComments(child, foundComments)
  );
}

function parseTSDoc(foundComment: IFoundComment): AnnotatedBlock {
  const customConfiguration: tsdoc.TSDocConfiguration = new tsdoc.TSDocConfiguration();

  customConfiguration.addTagDefinitions([...customBlocks]);

  const tsdocParser: tsdoc.TSDocParser = new tsdoc.TSDocParser(
    customConfiguration
  );
  const parserContext: tsdoc.ParserContext = tsdocParser.parseRange(
    foundComment.textRange
  );

  if (parserContext.log.messages.length === 0) {
  } else {
    console.log(os.EOL + red('Parser Log Messages:') + os.EOL);
    const sourceFile: ts.SourceFile = foundComment.compilerNode.getSourceFile();
    for (const message of parserContext.log.messages) {
      // Since we have the compiler's analysis, use it to calculate the line/column information,
      // since this is currently faster than TSDoc's TextRange.getLocation() lookup.
      // console.log(message);
      const location: ts.LineAndCharacter = sourceFile.getLineAndCharacterOfPosition(
        message.textRange.pos
      );
      const formattedMessage: string = `${sourceFile.fileName}(${location.line +
        1},${location.character + 1}): [TSDoc] ${message}`;
      console.log(formattedMessage);
    }
  }

  const docComment: tsdoc.DocComment = parserContext.docComment;

  const formatter = new Formatter(docComment);
  return formatter.toJson();
}

/**
 * Parses tsDocs in a specified typescript file
 * @param filePath file path to be parsed.
 */
export function parseToJson(filePath: string): AnnotatedBlock[] {
  const result: AnnotatedBlock[] = [];
  const inputFileBaseName = path.basename(filePath);

  console.log(yellow(os.EOL + `*** Start parsing ${inputFileBaseName} ***`));

  const inputFilename: string = path.resolve(filePath);
  const compilerOptions: ts.CompilerOptions = {
    target: ts.ScriptTarget.ES5,
  };

  // Compile the input
  console.log(`/// Analyzing ${inputFileBaseName}`);

  const program: ts.Program = ts.createProgram(
    [inputFilename],
    compilerOptions
  );

  // Report any compiler errors
  const compilerDiagnostics: ReadonlyArray<ts.Diagnostic> = program.getSemanticDiagnostics();
  if (compilerDiagnostics.length > 0) {
    for (const diagnostic of compilerDiagnostics) {
      const message: string = ts.flattenDiagnosticMessageText(
        diagnostic.messageText,
        os.EOL
      );
      if (diagnostic.file) {
        const location: ts.LineAndCharacter = diagnostic.file.getLineAndCharacterOfPosition(
          diagnostic.start!
        );
        const formattedMessage: string =
          `${diagnostic.file.fileName}(${location.line +
            1},${location.character + 1}):` + ` [TypeScript] ${message}`;
        console.log(red(formattedMessage));
      } else {
        console.log(red(message));
      }
    }
  } else {
    console.log('/// No compiler errors or warnings.');
  }

  const sourceFile: ts.SourceFile | undefined = program.getSourceFile(
    inputFilename
  );
  if (!sourceFile) {
    throw new Error('Error retrieving source file');
  }

  console.log(green('/// Extracting Comments'));

  const foundComments: IFoundComment[] = [];

  walkCompilerAstAndFindComments(sourceFile, foundComments);

  if (foundComments.length === 0) {
    console.log(red('Error: No code comments were found in the input file'));
  } else {
    // For the purposes of this demo, only analyze the first comment that we found
    for (const comment of foundComments) {
     result.push(parseTSDoc(comment));
    }
  }

  return result;
}
