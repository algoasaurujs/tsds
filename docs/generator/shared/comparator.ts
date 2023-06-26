import { DeclarationReflection } from "typedoc";

export const comparator = (a: DeclarationReflection, b: DeclarationReflection) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}