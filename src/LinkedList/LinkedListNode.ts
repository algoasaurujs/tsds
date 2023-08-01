import { LinkedList } from './LinkedList';

/**
 * A node in a doubly linked list.
 */
export class LinkedListNode<T = any> {
  private _id: Symbol;

  constructor(
    public value: T,
    private _list: LinkedList<T>,
    private _next: null | LinkedListNode<T> = null,
    private _prev: null | LinkedListNode<T> = null,
    private _listId: Symbol | null = null
  ) {
    this._id = Symbol();
  }

  get list(): LinkedList<T> {
    return this._list;
  }

  /**
   * The next node in the list.
   */
  get next(): LinkedListNode<T> | null {
    return this._next;
  }

  /**
   * The previous node in the list.
   */
  get prev(): LinkedListNode<T> | null {
    return this._prev;
  }

  /**
   * checks if the node is equal to another node.
   * @param node - The node to check.
   * @returns True if the nodes are equal, false otherwise.
   */
  isEqual(node: LinkedListNode): boolean {
    return this._id === node._id;
  }

  /**
   * checks if node is in the same list with provided id.
   * @param id - The id of the list to check.
   * @returns True if the node is in the list, false otherwise.
   */
  hasEqualList(id: Symbol): boolean {
    return id && this._listId === id;
  }

  /**
   * checks if node is in a list.
   * @returns True if the node is in a list, false otherwise.
   */
  hasList(): boolean {
    // If listId is null, the item is not in a list.
    return this._listId !== null;
  }

  /**
   * Detaches the node from its list.
   */
  detach(): void {
    if (this._prev) {
      this._prev._next = this._next;
    }

    if (this._next) {
      this._next._prev = this._prev;
    }

    this._listId = null;
    this._next = null;
    this._prev = null;
  }

  /**
   * Attaches a node to the next position.
   * @param node - The node to attach to the next position.
   */
  attachNext(node: LinkedListNode<T>): void {
    if (node.hasList()) {
      throw new Error('Cannot attach a node that already has a list.');
    }
    if (this._next) {
      this._next._prev = node;
    }
    node._next = this._next;
    this._next = node;
    node._prev = this;
    node._listId = this._listId;
  }

  /**
   * Attaches a node to the previous position.
   * @param node - The node to attach to the previous position.
   */
  attachPrev(node: LinkedListNode<T>): void {
    if (node.hasList()) {
      throw new Error('Cannot attach a node that already has a list.');
    }
    if (this._prev) {
      this._prev._next = node;
    }
    node._prev = this._prev;
    this._prev = node;
    node._next = this;
    node._listId = this._listId;
  }
}
