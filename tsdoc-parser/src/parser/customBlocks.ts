import * as tsdoc from '@microsoft/tsdoc';

// NOTE: Defining this causes a new DocBlock to be created under docComment.customBlocks.
// Otherwise, a simple DocBlockTag would appear inline in the @remarks section.
const nameBlock: tsdoc.TSDocTagDefinition = new tsdoc.TSDocTagDefinition({
  tagName: '@name',
  syntaxKind: tsdoc.TSDocTagSyntaxKind.BlockTag,
});

const classBlock: tsdoc.TSDocTagDefinition = new tsdoc.TSDocTagDefinition({
  tagName: '@class',
  syntaxKind: tsdoc.TSDocTagSyntaxKind.BlockTag,
});

const privateBlock: tsdoc.TSDocTagDefinition = new tsdoc.TSDocTagDefinition({
  tagName: '@private',
  syntaxKind: tsdoc.TSDocTagSyntaxKind.BlockTag,
});
const memberofBlock: tsdoc.TSDocTagDefinition = new tsdoc.TSDocTagDefinition({
  tagName: '@memberof',
  syntaxKind: tsdoc.TSDocTagSyntaxKind.BlockTag,
});
const methodBlock: tsdoc.TSDocTagDefinition = new tsdoc.TSDocTagDefinition({
  tagName: '@method',
  syntaxKind: tsdoc.TSDocTagSyntaxKind.BlockTag,
});

const propertyBlock: tsdoc.TSDocTagDefinition = new tsdoc.TSDocTagDefinition({
  tagName: '@property',
  syntaxKind: tsdoc.TSDocTagSyntaxKind.BlockTag,
});

const typeBlock: tsdoc.TSDocTagDefinition = new tsdoc.TSDocTagDefinition({
  tagName: '@type',
  syntaxKind: tsdoc.TSDocTagSyntaxKind.BlockTag,
});

export const customBlocks = [
  classBlock,
  memberofBlock,
  methodBlock,
  nameBlock,
  privateBlock,
  propertyBlock,
  typeBlock,
];
