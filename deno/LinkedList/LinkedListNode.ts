export class LinkedListNode<T = any> {
  private _id: Symbol;

  constructor(
    public value: T,
    public next: null | LinkedListNode<T> = null,
    public listId?: Symbol
  ) {
    this._id = Symbol();
  }

  isEqual(node: LinkedListNode): boolean {
    return this._id === node._id;
  }
}
