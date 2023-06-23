import { EOL } from 'os';
import { ProjectReflection, DeclarationReflection, ReflectionKind } from "typedoc";
import { comparator } from './shared/comparator';

const indent = (n: number = 1): string => {
    const indent = "    ";
    let result = "";
    for (let i = 0; i < n; i++) {
        result += indent;
    }
    return result;
}

const indentLines = (string: string, count = 1): string => {
    const indent = '    ';
    const regex = /^/gm;
    return string.replace(regex, indent.repeat(count));
}

/**
 * returns single line item in toc. e.x for LinkedList.append => `- [LinkedList.append](#linkedlistappend)`
 * @param itemFullName full name of property or method in a class, e.x for append in LinkedList it should be LinkedList.append
 */
const renderTOCItem = (itemFullName: string): string => {
    return `- [${itemFullName}](#${itemFullName.toLowerCase().replace('.', '')})`
}

const renderClassTOC = (classObj: DeclarationReflection): string => {
    let toc = "";
    toc += EOL + renderTOCItem(classObj.getFullName());

    const properties = classObj.children?.filter(child => child.kind === ReflectionKind.Accessor && !child.flags.includes('Private')).sort(comparator) || [];
    if (properties.length) {
        toc += EOL + indent() + renderTOCItem(classObj.name + '.Properties');
    }
    for (const property of properties) {
        toc += EOL + indent(2) + renderTOCItem(property.getFullName());
    }

    const methods = classObj.children?.filter(child => child.kind === ReflectionKind.Method && !child.flags.includes('Private')).sort(comparator) || [];
    if (methods.length) {
        toc += EOL + indent() + renderTOCItem(classObj.name + '.Methods');
    }
    for (const method of methods) {
        toc += EOL + indent(2) + renderTOCItem(method.getFullName());
    }
    return toc;
}

export const renderTOC = (project: ProjectReflection): string => {
    let toc = "";
    toc += renderTOCItem('Introduction');
    toc += EOL + renderTOCItem('Installation');
    toc += EOL + renderTOCItem('APIs');

    const dataStructures = project.children?.sort(comparator) || [];
    if (dataStructures.length) {
        let dsTOC = '';
        for (const dataStructure of dataStructures) {
            dsTOC += renderClassTOC(dataStructure);
        }
        toc += indentLines(dsTOC, 1)
    }
    toc += EOL + renderTOCItem('Contributing');
    toc += EOL + renderTOCItem('Versioning');
    toc += EOL + renderTOCItem('Authors');
    toc += EOL + renderTOCItem('License');

    return toc;
}