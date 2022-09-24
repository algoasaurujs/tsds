import { AbstractCollection } from '../Collection/AbstractCollection';
import { SequentialList } from './SequentialList';
import { SequentialListNode } from './SequentialListNode';

export abstract class AbstractSequentialList<
  ValueType,
  NodeType extends SequentialListNode<ValueType, NodeType>
> extends AbstractCollection<ValueType>
  implements SequentialList<ValueType, NodeType> {

  /**
   * Adds a new node or value at the end of the `SequentialListNode`.
   * @param value value of the new node.
   */
  public abstract append(value: ValueType): void;

  /**
   * Appends new Node at the beginning of the `SequentialListNode`.
   * @param value value of the new node
   */
  public abstract prepend(value: ValueType): void;

  /**
   * Create new SequentialList instance
   */
  constructor();
  /**
   * Create new SequentialList instance
   * @param initialValue initial value of SequentialList.
   */
  constructor(initialValue: ValueType[]);
  constructor(private initialValue?: ValueType[]) {
    super();
    if (this.initialValue) {
      for (const data of this.initialValue) {
        this.append(data);
      }
    }
  }

  /**
   * First element of the list
   * @internal
   */
  protected _head: null | NodeType = null;

  /**
   * Last element of the list
   * @internal
   */
  protected _tail: null | NodeType = null;

  /**
   * Node count in the list
   * @internal
   */
  protected _length: number = 0;

  /**
   * LinkedList Identifier
   * @internal
   */
  protected _id = Symbol();

  /**
   * @internal
   */
  *iterator(): IterableIterator<ValueType> {
    let currentItem = this._head;

    while (currentItem) {
      yield currentItem.value;
      currentItem = currentItem.next;
    }
  }

  /**
   * Gets the first node of the `LinkedList<T>`.
   * @example
   * ```typescript
   * const list = new LinkedList<number>([1, 2, 3, 4]);
   *
   * list.first // => LinkListNode(1)
   * ```
   * @remarks
   * If the `LinkedList<T>` is empty, the _first_ and _last_ properties contain `null`.
   * Retrieving the value of this property is an **O(1)** operation.
   */
  get first() {
    return this._head;
  }

  /**
   * Gets the last node of the `LinkedList<T>`.
   * @example
   * ```typescript
   * const list = new LinkedList<number>([1, 2, 3, 4]);
   *
   * list.last // => LinkListNode(4)
   * ```
   * @remarks
   * If the `LinkedList<T>` is empty, the _first_ and _last_ properties contain `null`.
   *
   * Retrieving the value of this property is an **O(1)** operation.
   */
  get last() {
    return this._tail;
  }

  /**
   * Gets the number of nodes actually contained in the `LinkedList<T>`.
   * @example
   * ```typescript
   * const list = new LinkedList<number>([1, 2, 3, 4]);
   *
   * list.length // => 4
   * ```
   * @remarks
   * Retrieving the value of this property is an **O(1)** operation.
   */
  get length() {
    return this._length;
  }

  /**
   * Removes all nodes from the `LinkedList<T>`.
   * @example
   * ```typescript
   * const list = new LinkedList<number>([1, 2, 3, 4]);
   *
   * list.length // => 4
   * list.clear();
   * list.length // => 0
   * ```
   */
  clear() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  clone(): this {
    const clonedList = new (this.constructor as any)() as this;
    for (const node of this) {
      clonedList.append(node);
    }
    return clonedList;
  }

  /**
   * Finds the first node that contains the specified value.
   * @param value value of the node we want to find
   * @returns `LinkedListNode` if there is a value otherwise `null`
   * @example
   * ```typescript
   * const list = new LinkedList<number>([1, 2, 3, 4]);
   *
   * const item = list.find(2)
   *
   * const nullItem = list.find(10) // => null
   * ```
   * @remarks This method is an **O(n)** operation.
   */
  find(value: ValueType): NodeType | null {
    if (!this._head) {
      return null;
    }

    let currentNode: null | NodeType = this._head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  /**
   * Returns Node at the specified _index_
   * @param index index of the Node **starts from 0**
   * @returns `LinkedListNode` of the specified index, if index is less than length; otherwise, `null`.
   * @example
   * ```typescript
   * const list = new LinkedList<number>([1, 2, 3, 4]);
   *
   * const item = list.get(2)
   *
   * const nullItem = list.get(10) // => null
   * ```
   * @remarks This method is an **O(n)** operation.
   */
  get(index: number): NodeType | null {
    if (!this._head || index < 0 || index >= this.length) {
      return null;
    }

    let currentNode: null | NodeType = this._head;
    for (let i = 0; i < index; i++) {
      if (!currentNode) {
        return null;
      }
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}
