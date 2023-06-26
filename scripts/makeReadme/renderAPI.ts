import { EOL } from 'os';
import fs from 'fs';
import path from 'path';
import {
  DeclarationReflection,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';
import { renderMethodAPI } from './renderMethodAPI';
import { renderPropertyAPI } from './renderPropertyAPI';
import { comparator } from './shared/comparator';
import { Renderer } from './shared/Renderer';

const renderClassAPI = (classObj: DeclarationReflection): string => {
  let result = '';

  result += '## ****' + classObj.getFullName() + '****' + EOL + EOL;

  if (classObj.comment?.summary) {
    result +=
      Renderer.renderCommentPart(classObj.comment.summary).toString() +
      EOL +
      EOL;
  }

  const example = classObj.comment?.getTag('@example')?.content;
  if (example) {
    result += '**Usage**' + EOL + EOL;
    result += Renderer.renderCommentPart(example).toString() + EOL + EOL;
  }

  const properties =
    classObj.children
      ?.filter(child => child.kind === ReflectionKind.Accessor)
      .sort(comparator) || [];
  if (properties.length) {
    result += '### **Properties**' + EOL + EOL;
    for (const property of properties) {
      result += renderPropertyAPI(property);
    }
  }

  const methods =
    classObj.children
      ?.filter(child => child.kind === ReflectionKind.Method)
      .sort(comparator) || [];
  if (methods.length) {
    result += '### **Methods**' + EOL + EOL;
    for (const method of methods) {
      result += renderMethodAPI(method);
    }
  }

  return result;
};

export const renderAPI = (project: ProjectReflection, outDir: string) => {
  const dataStructures = project.children?.sort(comparator) || [];
  if (dataStructures.length) {
    for (const dataStructure of dataStructures) {
      fs.writeFileSync(
        path.join(outDir, `${dataStructure.name}.md`),
        renderClassAPI(dataStructure)
      );
    }
  }
};
