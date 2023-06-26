import { DeclarationReflection } from 'typedoc';
import { Renderer } from './Renderer';
import { encode } from 'html-entities';

export class ClassRenderer {
  constructor(private input: DeclarationReflection) {}

  private _hasTypeParameter() {
    return !!this.input.typeParameters && this.input.typeParameters.length > 0;
  }

  private _renderTypeParams() {
    return encode(
      '<' + this.input.typeParameters?.map(t => t.name).join(', ') + '>'
    ,{mode:'extensive'});
  }

  getFullName() {
    if (this._hasTypeParameter()) {
      return new Renderer(this.input.getFullName() + this._renderTypeParams());
    }
    return new Renderer(this.input.getFullName());
  }
}
