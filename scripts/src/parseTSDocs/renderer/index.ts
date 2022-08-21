import * as _ from 'lodash';
import { EOL } from 'os';
import markdownTable from 'markdown-table';
import { renderProperty } from './renderBlock/renderProperty';
import { renderMethod } from './renderBlock/renderMethod';
import {
  AnnotatedBlock,
  AnnotatedTypeParam,
} from '../types/AnnotatedBlock.interface';

function comparator(a: any, b: any) {
  if (a?.name < b?.name) {
    return -1;
  }
  if (a?.name > b?.name) {
    return 1;
  }
  return 0;
}

const renderTypeParams = (params?: AnnotatedTypeParam[]) => {
  if (!params) {
    return '';
  }
  return '<' + params.map(p => p.name).join(', ') + '>';
};

export const render = (input: AnnotatedBlock[]) => {
  const groupByOverload = _.groupBy(input, 'overload');
  let content = '';
  let tableOfContent = '';

  const PARENT = _.find(input, 'isClass');

  if (!PARENT?.name) {
    throw new Error("Parent classes should have @name");
  }
  
  const PARENT_IN_DOC = PARENT?.name + renderTypeParams(PARENT?.typeParams);
  //   Render summary section
  content = content + '## ****' + PARENT_IN_DOC + '****' + EOL + EOL;
  content = content + PARENT?.summary + EOL + EOL;
  content = content + '**Usage**' + EOL + EOL;
  content = content + PARENT?.example + EOL + EOL;

  // Render properties section
  const PROPERTIES = groupByOverload['null']
    .filter(value => value.isProperty && !value.isPrivate)
    .sort(comparator);

  if (PROPERTIES.length) {
    content = content + '### **' + PARENT?.name + '.Properties**' + EOL + EOL;
  }
  for (const property of PROPERTIES) {
    content = content + renderProperty(property, PARENT?.name as string);
  }

  // Render methods section
  const METHODS = groupByOverload['null']
    .filter(value => value.isMethod && !value.isPrivate)
    .sort(comparator);

  if (METHODS.length) {
    content = content + '### **' + PARENT?.name + '.Methods**' + EOL + EOL;
  }

  for (const method of METHODS) {
    content = content + renderMethod(method, PARENT?.name as string);
    // render overload
    const overloads = groupByOverload[method.name as string];
    if (overloads) {
      content =
        content +
        markdownTable([
          ['Variant', 'Definition'],
          ...overloads.map(o => {
            return [
              `(${o.params?.map(p => p.name + ': ' + p.type).join(', ')}) => ${
                o.returns?.type
              }`,
              o.summary || '',
            ];
          }),
        ]) + EOL + EOL;
    }
  }

  // Render TABLE OF CONTENT --------------------------------------------------
  const indent = '  ';
  const lowerParent = PARENT?.name?.toLowerCase();
  // render header
  tableOfContent =
    tableOfContent +
    indent +
    `- [${PARENT_IN_DOC}](#${lowerParent})` +
    EOL;

  // render properties
  if (PROPERTIES.length) {
    tableOfContent =
      tableOfContent +
      indent +
      indent +
      `- [${PARENT?.name}.Properties](#${lowerParent}properties)` +
      EOL;
    for (const property of PROPERTIES) {
      tableOfContent =
        tableOfContent +
        indent +
        indent +
        indent +
        `- [${PARENT?.name}.${
          property.name
        }](#${lowerParent}.${property.name?.toLowerCase()})` +
        EOL;
    }
  }

  // render methods
  if (METHODS.length) {
    tableOfContent =
      tableOfContent +
      indent +
      indent +
      `- [${PARENT?.name}.Methods](#${lowerParent}methods)` +
      EOL;
    for (const method of METHODS) {
      tableOfContent =
        tableOfContent +
        indent +
        indent +
        indent +
        `- [${PARENT?.name}.${
          method.name
        }](#${lowerParent}.${method.name?.toLowerCase()})` +
        EOL;
    }
  }
  return { content, tableOfContent };
};
