import {
  DeclarationReflection,
  ReflectionKind,
} from 'typedoc';
import { Renderer } from './Renderer';
import { ClassRenderer } from './ClassRenderer';

export class PropertyRenderer {
  constructor(private input: DeclarationReflection) {}

  getFullName() {
    const parent = this.input.parent;
    if (parent?.isDeclaration() && parent.kind === ReflectionKind.Class) {
      const parentName = new ClassRenderer(parent).getFullName().toString();
      return new Renderer(parentName + '.' + this.input.name);
    }
    return new Renderer(this.input.getFullName());
  }
}
