import { DeclarationReflection, ReflectionKind } from 'typedoc';
import { Renderer } from './Renderer';
import { ClassRenderer } from './ClassRenderer';

export class MethodRenderer {
  constructor(private input: DeclarationReflection) {}

  //   private _hasTypeParameter() {
  //     return !!this.input.typeParameters && this.input.typeParameters.length > 0;
  //   }

  //   private _renderTypeParams() {
  //     return (
  //       '&lt;' + this.input.typeParameters?.map(t => t.name).join(', ') + '&gt;'
  //     );
  //   }

  getFullName() {
    const parent = this.input.parent;
    if (parent?.isDeclaration() && parent.kind === ReflectionKind.Class) {
      const parentName = new ClassRenderer(parent).getFullName().toString();
      return new Renderer(parentName + '.' + this.input.name);
    }
    return new Renderer(this.input.getFullName());
  }
}
