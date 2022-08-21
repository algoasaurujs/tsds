import { EOL } from 'os';
import { AnnotatedBlock } from '../../types/AnnotatedBlock.interface';

export const renderProperty = (
  block: AnnotatedBlock,
  parentName: string
): string => {
  let result = '';

  result = result + '### **' + parentName + '.' + block.name + '**' + EOL + EOL;
  if (block.summary) {
    result = result + '**Definition**' + EOL + EOL;
    result = result + block.summary + EOL + EOL;
  }
  if (block.returns) {
    result = result + '**Property Value**' + EOL + EOL;
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
