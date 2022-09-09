import { LinkedListNode } from './LinkedListNode';

/**
 * A linear collection of data elements whose order is not given by their physical placement in memory.
 * Instead, each element points to the next.
 * It is a data structure consisting of a collection of nodes which together represent a sequence.
 * @typeParam T - Specifies the type of elements in the LinkedList.
 * @example
 * ```typescript
 * import { LinkedList } from '@samavati/tsds';
 * ```
 */
export class LinkedList<T = any> {
  /**
   * First element of the list
   * @internal
   */
  private _head: null | LinkedListNode<T> = null;

  /**
   * Last element of the list
   * @internal
   */
  private _tail: null | LinkedListNode<T> = null;

  /**
   * Node count in the list
   * @internal
   */
  private _length: number = 0;

  /**
   * LinkedList Identifier
   * @internal
   */
  private _id = Symbol();

  /**
   * Create new LinkedList instance
   *  * // instantiate new linked list without initial set-up
   * const list = new LinkedList();
   *
   * // instantiate new linked list with initial values
   * const list2 = new LinkedList([1, 2, 3, 4, 5]);
   */
  constructor();
  /**
   * Create new LinkedList instance
   * @param initialValue initial value of LinkedList.
   */
  constructor(initialValue: T[]);
  constructor(private initialValue?: T[]) {
    if (this.initialValue) {
      for (const data of this.initialValue) {
        this.append(data);
      }
    }
  }

  /**
   * @internal
   */
  *iterator(): IterableIterator<T> {
    let currentItem = this._head;

    while (currentItem) {
      yield currentItem.value;
      currentItem = currentItem.next;
    }
  }

  [Symbol.iterator]() {
    return this.iterator();
  }

  /**
   * Checks if argument is `LinkedListNode` or not
   * @param x an argument to check if it is `LinkedListNode`
   * @returns if argument is `LinkedListNode` or not
   * @internal
   */
  private isLinkedListNode(x: any): x is LinkedListNode {
    return x instanceof LinkedListNode;
  }

  /**
   * Gets the first node of the `LinkedList<T>`.
   * @example
   * ```typescript
   * const list = new LinkedList<number>([1, 2, 3, 4]);
   *
   * list.first // => LinkListNode(1)
   * ```
   * @returns The first `LinkedListNode<T>` of the `LinkedList<T>`
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
   * @returns The last `LinkedListNode<T>` of the `LinkedList<T>`.
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
   * @returns number of nodes in the `LinkedList<T>`.
   * @remarks
   * Retrieving the value of this property is an **O(1)** operation.
   */
  get length() {
    return this._length;
  }

  /**
   * Adds a new node or value at the end of the `LinkedList<T>`.
   * @param value value of the new node.
   * @example
   * ```typescript
   * const list = new LinkedList<number>([1, 2, 3, 4]);
   *
   * list.length // => 4
   * list.append(5)
   * list.length // => 5
   * list.last // => LinkListNode(5)
   * ```
   * @remarks This method is an **O(1)** operation.
   */
  append(value: T): void {
    const newNode = new LinkedListNode<T>(value, null, this._id);

    if (!this._head) {
      this._head = newNode;
    }

    if (this._tail) {
      this._tail.next = newNode;
    }

    this._tail = newNode;
    this._length++;
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

  /**
   * Removes the first occurrence of a node from the `LinkedList<T>`.
   * @param node The `LinkedListNode<T>` to remove from the LinkedList<T>`.
   * @example
   * ```typescript
   * const list = new LinkedList<number>([1, 2, 3, 4]);
   *
   * list.length // => 4
   * list.delete(4)
   * list.length // => 3
   * list.last // => LinkListNode(3)
   * ```
   * @throws {InvalidOperationException} node is not in the current `LinkedList<T>`.
   * 
   * @remarks This method is an **O(n)** operation.
   */
  delete(node: LinkedListNode<T>): void;
  /**
   * Removes the first occurrence of the specified value from the `LinkedList<T>`.
   * @param value The value to remove from the `LinkedList<T>`.
   * @returns `true` if the element containing value is successfully removed; otherwise, `false`. This method also returns `false` if value was not found in the original `LinkedList<T>`.
   * @example
   * ```typescript
   * const list = new LinkedList<number>([1, 2, 3, 4]);
   *
   * list.length // => 4
   * list.delete(4)
   * list.length // => 3
   * list.last // => LinkListNode(3)
   * ```
   * @remarks This method is an **O(n)** operation.
   */
  delete(value: T): boolean;
  /**
   * Removes the first occurrence of a node or value from the `LinkedList<T>`.
   * @example
   * ```typescript
   * const list = new LinkedList<number>([1, 2, 3, 4]);
   *
   * list.length // => 4
   * list.delete(4)
   * list.length // => 3
   * list.last // => LinkListNode(3)
   * ```
   * @remarks This method is an **O(n)** operation.
   */
  delete(value: T | LinkedListNode<T>): void | boolean {
    if (this.isLinkedListNode(value)) {
      if (!this._head || !value || value.listId !== this._id) {
        throw new Error(
          'InvalidOperationException: node is not in the current LinkedList<T>.'
        );
      }

      // if head is the node that should delete
      if (this._head.isEqual(value)) {
        this._head = this._head.next;
        this._length--;
        return;
      }

      // if value is between head and tail
      let currentNode = this._head;

      while (currentNode.next) {
        // Deleting the node by delete it's reference in previous node
        if (currentNode.next.isEqual(value)) {
          currentNode.next = currentNode.next.next;
          this._length--;
          break;
        } else {
          currentNode = currentNode.next;
        }
      }

      // check if we should update this._tail
      if (this._tail?.isEqual(value)) {
        this._tail = currentNode;
      }
    } else {
      if (!this._head) {
        return false;
      }

      // if head is the node that should delete
      if (this._head.value === value) {
        this._head = this._head.next;
        this._length--;
        return true;
      }

      // if value is between head and tail
      let currentNode = this._head;

      while (currentNode.next) {
        // Deleting the node by delete it's reference in previous node
        if (currentNode.next.value === value) {
          // check if we should update this._tail
          if (this._tail?.isEqual(currentNode.next)) {
            this._tail = currentNode.next.next;
          }
          currentNode.next = currentNode.next.next;
          this._length--;
          return true;
        } else {
          currentNode = currentNode.next;
        }
      }

      return false;
    }
  }

  /**
   * Removes the node at the start of the `LinkedList<T>`.
   * @example
   * ```typescript
   * const list = new LinkedList<number>([1, 2, 3, 4]);
   *
   * list.length // => 4
   * list.deleteFirst();
   * list.length // => 3
   * list.first // => LinkListNode(2)
   * ```
   * @remarks This method is an **O(1)** operation.
   */
  deleteFirst(): void {
    if (!this._head) {
      throw new Error('The LinkedList<T> is empty.');
    }

    this._head = this._head.next;
    this._length--;
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
  find(value: T): LinkedListNode<T> | null {
    if (!this._head) {
      return null;
    }

    let currentNode: null | LinkedListNode<T> = this._head;
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
  get(index: number): LinkedListNode<T> | null {
    if (!this._head || index < 0 || index >= this.length) {
      return null;
    }

    let currentNode: null | LinkedListNode<T> = this._head;
    for (let i = 0; i < index; i++) {
      if (!currentNode) {
        return null;
      }
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  /**
   * Determines whether a value is in the `LinkedList<T>`.
   * @param value The value to locate in the `LinkedList<T>`.
   * @returns `true` if value is found in the `LinkedList<T>`; otherwise, `false`.
   * @example
   * ```typescript
   * const list = new LinkedList<number>([1, 2, 3, 4]);
   *
   * list.includes(2) // => true
   * list.includes(10) // => false
   * ```
   * @remarks This method is an **O(n)** operation.
   */
  includes(value: T): boolean {
    if (!this._head) {
      return false;
    }

    let currentNode: null | LinkedListNode<T> = this._head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }

    return false;
  }

  /**
   * Adds a new _value_ after an existing _node_ in the LinkedList<T>.
   * @param node The `LinkedListNode<T>` after which to insert `newNode`.
   * @param newNode The new `value` to add to the `LinkedList<T>`.
   */
  insertAfter(node: LinkedListNode<T>, newNode: T): void;
  /**
   * Adds a new _node_ or after an existing _node_ in the LinkedList<T>.
   * @param node The `LinkedListNode<T>` after which to insert `newNode`.
   * @param newNode The new `LinkedListNode<T>` or `value` to add to the `LinkedList<T>`.
   */
  insertAfter(node: LinkedListNode<T>, newNode: LinkedListNode<T>): void;
  /**
   * Adds a new _node_ or _value_ after an existing _node_ in the `LinkedList<T>`.
   * @example
   * ```typescript
   * const list = new LinkedList<number>([1, 2, 3, 4]);
   *
   * const item = list.get(2);
   * if (item) {
   * 	list.insertAfter(item, 'hello');
   *
   * 	const world = new LinkedListNode('world');
   * 	list.insertAfter(item, world);
   * }
   * ```
   * @throws {ArgumentNullException}
   * When the provided _node_ or _newNode_ is `null`.
   * @throws {InvalidOperationException}
   * When the _node_ is not in the current `LinkedList<T>` or _newNode_ belongs to another `LinkedList<T>`.
   * @remarks This method is an **O(1)** operation.
   */
  insertAfter(node: LinkedListNode<T>, newNode: LinkedListNode<T> | T): void {
    if (!node || !newNode) {
      throw new Error('ArgumentNullException');
    }

    if (node.listId !== this._id) {
      throw new Error(
        'InvalidOperationException: node is not in the current LinkedList.'
      );
    }

    if (this.isLinkedListNode(newNode)) {
      if (newNode.listId !== undefined) {
        throw new Error(
          'InvalidOperationException: newNode belongs to another LinkedList.'
        );
      }

      newNode.listId = this._id;
      newNode.next = node.next;
      node.next = newNode;
    } else {
      const newNodeObject = new LinkedListNode<T>(newNode, node.next, this._id);
      node.next = newNodeObject;
    }

    this._length++;
  }

  /**
   * Appends new Node at the beginning of the `LinkedList<T>`.
   * @param value value of the new node
   * @example
   * ```typescript
   * const list = new LinkedList<number>([1, 2, 3, 4]);
   *
   * list.length // => 4
   * list.prepend(0)
   * list.length // => 5
   * list.first // => LinkListNode(0)
   * ```
   * @remarks This method is an **O(1)** operation.
   */
  prepend(value: T): void {
    const newNode = new LinkedListNode<T>(value, this._head, this._id);
    this._head = newNode;

    if (!this._tail) {
      this._tail = newNode;
    }

    this._length++;
  }

  /**
   * Returns array of all values in `LinkedList<T>`.
   * @returns Returns the entire `LinkedList` to a compatible one-dimensional Array
   * @example
   * ```typescript
   * const list = new LinkedList<number>([1, 2, 3, 4]);
   *
   * list.prepend(0)
   * list.toArray() // => [0, 1, 2, 3, 4]
   * ```
   * @remarks This method is an **O(n)** operation.
   */
  toArray(): T[] {
    const nodes: T[] = [];

    let currentNode = this._head;

    while (currentNode) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return nodes;
  }
}
