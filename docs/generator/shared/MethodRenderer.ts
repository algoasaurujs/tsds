import {
  DeclarationReflection,
  ReflectionKind,
  SignatureReflection,
} from 'typedoc';
import {encode} from 'html-entities';
import { Renderer } from './Renderer';
import { ClassRenderer } from './ClassRenderer';

export class MethodRenderer {
  constructor(private input: DeclarationReflection) {}

  static renderSignature(signature: SignatureReflection) {
    let result = '';
    const renderedParam = signature.parameters
      ?.map(p => [p.name, p.type?.toString()].join(': '))
      .join(', ');
    result +=
      signature.name +
      '(' +
      renderedParam +
      ')' +
      ': ' +
      signature.type?.toString();
    return new Renderer(encode(result, {level:'all', mode:'extensive'}));
  }

  getFullName() {
    const parent = this.input.parent;
    if (parent?.isDeclaration() && parent.kind === ReflectionKind.Class) {
      const parentName = new ClassRenderer(parent).getFullName().toString();
      return new Renderer(parentName + '.' + this.input.name);
    }
    return new Renderer(this.input.getFullName());
  }
}
