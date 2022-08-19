import fs from 'fs';
import path from 'path';
import * as _ from 'lodash';
import { EOL } from 'os';
import { renderProperty } from './renderBlock/renderProperty';
import { renderMethod } from './renderBlock/renderMethod';
import { AnnotatedBlock } from '../types/AnnotatedBlock.interface';

function comparator(a: any, b: any) {
  if (a?.name < b?.name) {
    return -1;
  }
  if (a?.name > b?.name) {
    return 1;
  }
  return 0;
}

export const render = (input: AnnotatedBlock[]) => {
  try {
    let content = '';

    const PARENT = _.find(input, 'isClass');
    //   Render summary section
    content = content + '## ****' + PARENT?.name + '<T>****' + EOL + EOL;
    content = content + PARENT?.summary + EOL + EOL;
    content = content + '**Usage**' + EOL + EOL;
    content = content + PARENT?.example + EOL + EOL;

    // Render properties section
    const PROPERTIES = input
      .filter(value => value.isProperty && !value.isPrivate)
      .sort(comparator);

    if (PROPERTIES.length) {
      content = content + '### **' + PARENT?.name + '.Properties**' + EOL + EOL;
    }
    for (const property of PROPERTIES) {
      content = content + renderProperty(property, PARENT?.name as string);
    }

    // Render methods section
    const METHODS = input
      .filter(value => value.isMethod && !value.isPrivate)
      .sort(comparator);

    if (METHODS.length) {
      content = content + '### **' + PARENT?.name + '.Methods**' + EOL + EOL;
    }

    for (const method of METHODS) {
      content = content + renderMethod(method, PARENT?.name as string);
    }

    fs.writeFileSync(
      path.join(__dirname, '../../temp/md/modules', PARENT?.name as string + '.md'),
      content,
    );
  } catch (error) {
    console.error(error);
  }
};
