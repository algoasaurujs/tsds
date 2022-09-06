import { EOL } from 'os';
import { ProjectReflection, DeclarationReflection } from "typedoc";
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

const renderClassTOC = (classObj: DeclarationReflection): string => {
    let toc = "";
    toc += EOL + `- [${classObj.name}](#${classObj.getFullName().toLocaleLowerCase()})`;

    const properties = classObj.children?.filter(child => child.kindString === 'Accessor').sort(comparator) || [];
    if (properties.length) {
        toc += EOL + indent() + `- [${classObj.name}.Properties](#${classObj.name.toLocaleLowerCase()}properties)`;
    }
    for (const property of properties) {
        toc += EOL + indent(2) + `- [${property.getFullName()}](#${property.getFullName().toLowerCase().replace('.', '')})`
    }

    const methods = classObj.children?.filter(child => child.kindString === 'Method').sort(comparator) || [];
    if (methods.length) {
        toc += EOL + indent() + `- [${classObj.name}.Methods](#${classObj.name.toLocaleLowerCase()}methods)`;
    }
    for (const method of methods) {
        toc += EOL + indent(2) + `- [${method.getFullName()}](#${method.getFullName().toLowerCase().replace('.', '')})`
    }
    return toc;
}

export const createTOC = (project: ProjectReflection): string => {
    let toc = "";
    toc += '- [APIs](#apis)';

    const dataStructures = project.children?.sort(comparator) || [];
    if (dataStructures.length) {
        let dsTOC = '';
        for (const dataStructure of dataStructures) {
            dsTOC += renderClassTOC(dataStructure);
        }
        toc += indentLines(dsTOC, 1)
    }
    
    return toc;
}