export class DoublyLinkedListNode<T = any> {
    private _id: Symbol;

    constructor(
        public value: T,
        public next: null | DoublyLinkedListNode<T> = null,
        public prev: null | DoublyLinkedListNode<T> = null,
        public listId?: Symbol
    ) {
        this._id = Symbol();
    }

    isEqual(node: DoublyLinkedListNode): boolean {
        return this._id === node._id
    }
}