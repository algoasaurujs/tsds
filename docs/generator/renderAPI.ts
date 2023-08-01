import { EOL } from 'os';
import path from 'path';
import markdownTable from 'markdown-table';
import matter from 'gray-matter';
import {
  DeclarationReflection,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';
import { renderMethodAPI } from './renderMethodAPI';
import { renderPropertyAPI } from './renderPropertyAPI';
import { comparator } from './shared/comparator';
import { Renderer } from './shared/Renderer';
import { writeFileSync } from './shared/writeFileSync';
import {
  createConstructorLink,
  createMethodLink,
  createPropertyLink,
  createSidebarItem,
} from './createSidebarItem';
import { ClassRenderer } from './shared/ClassRenderer';
import { MethodRenderer } from './shared/MethodRenderer';
import { default as formatConstructorTOC } from './constructor/formatTOC';
import { default as renderConstructors } from './constructor/render';

const renderClassAPI = (classObj: DeclarationReflection, outDir: string) => {
  const SIDEBAR_ITEMS: any[] = [];
  const SIDEBAR_PROPERTIES = createSidebarItem('Properties');
  const SIDEBAR_METHODS = createSidebarItem('Methods');

  const baseOutDir = path.join(outDir, 'data-structures', classObj.name);
  let result = '';

  const frontmatter = matter.stringify('', { outline: 'deep' });
  result += frontmatter;

  result +=
    new ClassRenderer(classObj)
      .getFullName()
      .b1()
      .h1()
      .toString() +
    EOL +
    EOL;

  if (classObj.comment?.summary) {
    result +=
      Renderer.renderCommentPart(classObj.comment.summary).toString() +
      EOL +
      EOL;
  }

  const example = classObj.comment?.getTag('@example')?.content;
  if (example) {
    result += new Renderer('Usage').b2().toString() + EOL + EOL;
    result += Renderer.renderCommentPart(example).toString() + EOL + EOL;
  }

  const constructor = classObj.children?.find(
    child => child.kind === ReflectionKind.Constructor
  );
  if (constructor) {
    result +=
      new Renderer('Constructors')
        .b2()
        .h2()
        .toString() +
      EOL +
      EOL;
    result += formatConstructorTOC(constructor, classObj) + EOL + EOL;
    renderConstructors(constructor, baseOutDir);
    SIDEBAR_ITEMS.push({
      text: 'Constructors',
      link: createConstructorLink(classObj),
    });
  }

  const properties =
    classObj.children
      ?.filter(child => child.kind === ReflectionKind.Accessor)
      .sort(comparator) || [];
  if (properties.length) {
    result +=
      new Renderer('Properties')
        .b2()
        .h2()
        .toString() +
      EOL +
      EOL;
    for (const property of properties) {
      SIDEBAR_PROPERTIES.items.push({
        text: property.name,
        link: createPropertyLink(classObj, property),
      });
      renderPropertyAPI(property, baseOutDir);
    }
    result +=
      markdownTable([
        ['Name', 'Description'],
        ...properties.map(property => [
          new Renderer(property.name)
            .anchorLink(createPropertyLink(classObj, property))
            .toString(),
          Renderer.renderCommentPart(
            property?.getSignature?.comment?.summary
          ).toString(),
        ]),
      ]) +
      EOL +
      EOL;
  }

  const methods =
    classObj.children
      ?.filter(
        child =>
          child.kind === ReflectionKind.Method &&
          !child.signatures?.every(s => s.comment?.hasModifier('@internal'))
      )
      .sort(comparator) || [];
  if (methods.length) {
    result +=
      new Renderer('Methods')
        .b2()
        .h2()
        .toString() +
      EOL +
      EOL;
    for (const method of methods) {
      SIDEBAR_METHODS.items.push({
        text: method.name,
        link: createMethodLink(classObj, method),
      });
      renderMethodAPI(method, baseOutDir);
    }

    result +=
      markdownTable([
        ['Name', 'Description'],
        ...(methods
          .map(method =>
            method.signatures?.map(signature => [
              MethodRenderer.renderSignature(signature)
                .anchorLink(createMethodLink(classObj, method))
                .toString(),
              Renderer.renderCommentPart(signature.comment?.summary)
                .toString()
                .replace(/\n/g, ' '),
            ])
          )
          .flat() as any),
      ]) +
      EOL +
      EOL;
  }
  writeFileSync(path.join(baseOutDir, `${classObj.name}.md`), result);

  if (SIDEBAR_PROPERTIES.items.length) {
    SIDEBAR_ITEMS.push(SIDEBAR_PROPERTIES);
  }
  if (SIDEBAR_METHODS.items.length) {
    SIDEBAR_ITEMS.push(SIDEBAR_METHODS);
  }
  writeFileSync(
    path.join(outDir, './.vitepress/sidebar', `${classObj.name}.json`),
    JSON.stringify(SIDEBAR_ITEMS)
  );
};

export const renderAPI = (project: ProjectReflection, outDir: string) => {
  const dataStructures = project.children?.sort(comparator) || [];
  if (dataStructures.length) {
    for (const dataStructure of dataStructures) {
      renderClassAPI(dataStructure, outDir);
    }
  }
};
