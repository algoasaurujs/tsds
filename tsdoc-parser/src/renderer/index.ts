import fs from 'fs';
import path from 'path';
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
  try {
    const groupByOverload = _.groupBy(input, 'overload');
    let content = '';

    const PARENT = _.find(input, 'isClass');
    //   Render summary section
    content =
      content +
      '## ****' +
      PARENT?.name +
      renderTypeParams(PARENT?.typeParams) +
      '****' +
      EOL +
      EOL;
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
                `(${o.params
                  ?.map(p => p.name + ': ' + p.type)
                  .join(', ')}) => ${o.returns?.type}`,
                o.summary || '',
              ];
            }),
          ]);
      }
    }

    fs.writeFileSync(
      path.join(
        __dirname,
        '../../temp/md/modules',
        (PARENT?.name as string) + '.md'
      ),
      content
    );
  } catch (error) {
    console.error(error);
  }
};
