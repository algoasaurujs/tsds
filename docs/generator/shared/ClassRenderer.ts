import { DeclarationReflection } from 'typedoc';
import { Renderer } from './Renderer';

export class ClassRenderer {
  constructor(private input: DeclarationReflection) {}

  private _hasTypeParameter() {
    return !!this.input.typeParameters && this.input.typeParameters.length > 0;
  }

  private _renderTypeParams() {
    return (
      '&lt;' + this.input.typeParameters?.map(t => t.name).join(', ') + '&gt;'
    );
  }

  getFullName() {
    if (this._hasTypeParameter()) {
      return new Renderer(this.input.getFullName() + this._renderTypeParams());
    }
    return new Renderer(this.input.getFullName());
  }
}
