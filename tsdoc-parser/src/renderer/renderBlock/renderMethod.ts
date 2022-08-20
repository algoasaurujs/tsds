import { EOL } from 'os';
import {
  AnnotatedBlock,
  AnnotatedParam,
} from '../../types/AnnotatedBlock.interface';

const comparator = (a: AnnotatedParam, b: AnnotatedParam) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

export const renderMethod = (
  block: AnnotatedBlock,
  parentName: string
): string => {
  let result = '';

  result = result + '### **' + parentName + '.' + block.name + '**' + EOL + EOL;

  if (block.summary) {
    result = result + '**Definition**' + EOL + EOL;
    result = result + block.summary + EOL + EOL;
  }
  if (block?.params?.length) {
    result = result + '**Parameters**' + EOL + EOL;
    block.params.sort(comparator).forEach(param => {
      result =
        result +
        '**' +
        param.name +
        '`' +
        param.type +
        '`:** ' +
        param.content +
        EOL +
        EOL;
    });
  }
  if (block?.returns) {
    result = result + '**Returns**' + EOL + EOL;
    result = result + '`' + block.returns.type + '`' + EOL + EOL;
    if (block.returns.content) {
      result = result + block.returns.content + EOL + EOL;
    }
  }

  if (block?.example) {
    result = result + '**Example**' + EOL + EOL;
    result = result + block?.example + EOL + EOL;
  }

  if (block.remarks) {
    result = result + '**Remarks**' + EOL + EOL;
    result = result + block.remarks + EOL + EOL;
  }

  return result;
};
