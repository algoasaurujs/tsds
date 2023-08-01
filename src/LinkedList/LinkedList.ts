import { AbstractCollection } from '../AbstractCollection';
import { LinkedListNode } from './LinkedListNode';

/**
 * @param value - The value of the element being added to the LinkedList.
 * @param index - The zero-based index at which value should be inserted.
 * @param list - The LinkedList on which insert was called.
 */
export type MapCallback<T, U> = (
  value: T,
  index: number,
  list: LinkedList<T>
) => U;

/**
 * A linear collection of data elements whose order is not given by their physical placement in memory.
 * Instead, each element points to the next.
 * It is a data structure consisting of a collection of nodes which together represent a sequence.
 * @typeParam T - Specifies the type of elements in the LinkedList.
 * @example
 * ```typescript
 * import { LinkedList } from '@algoasaurujs/tsds';
 * ```
 */
export class LinkedList<T = any> extends AbstractCollection<T> {
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
    super();
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
  append(value: T | LinkedListNode<T>): void {
    let newNode: LinkedListNode<T>;
    if (this.isLinkedListNode(value)) {
      newNode = value;
    } else {
      newNode = new LinkedListNode<T>(value, this);
    }

    if (!this._head) {
      this._head = newNode;
    }

    if (this._tail) {
      this._tail.attachNext(newNode);
    }

    this._tail = newNode;
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
  prepend(value: T | LinkedListNode<T>): void {
    let newNode: LinkedListNode<T>;
    if (this.isLinkedListNode(value)) {
      newNode = value;
    } else {
      newNode = new LinkedListNode<T>(value, this);
    }

    if (this._head) {
      this._head.attachPrev(newNode);
    }

    this._head = newNode;

    if (!this._tail) {
      this._tail = newNode;
    }

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
    if (!this._head) return null;

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
  deleteFirst(): LinkedListNode<T> {
    // 1. Check if the list is empty
    if (!this._head) throw new Error('The LinkedList<T> is empty.');

    // 2. Store a reference to the current head node
    const temp = this._head;

    // 3. Make the new head node the next node in the list
    this._head = this._head.next;

    // 4. Detach the old head node
    temp.detach();

    // 5. Decrement the list length
    this._length--;

    // 6. Check if the list is now empty
    if (this._length === 0) {
      // 7. Make sure the tail node is null
      this._tail = null;
    }

    return temp;
  }

  /**
   * Removes the last node from the list.
   *
   * @throws {Error} If the list is empty.
   */
  deleteLast(): LinkedListNode<T> {
    // Check if the Linked List is empty
    if (!this._tail) throw new Error('The LinkedList<T> is empty.');
    // Save a reference to the current tail
    const temp = this._tail;
    // Make the previous node the new tail
    this._tail = this._tail.prev;
    // Detach the old tail from the list
    temp.detach();
    // Decrement the length of the Linked List
    this._length--;
    // If the Linked List is now empty, set the head to null
    if (this.length === 0) this._head = null;
    return temp;
  }

  /**
   * The _deleteNode() method is used to remove an arbitrary node from the current LinkedList<T>.
   * It is a private method and can only be called from within the LinkedList<T> class. It accepts a node as an argument and returns the deleted node.
   * @param node node to delete
   * @returns deleted node
   * @internal
   */
  private _deleteNode(node: LinkedListNode<T>): LinkedListNode<T> {
    // Check if the Linked List is empty
    if (!this._head) throw new Error('The LinkedList<T> is empty.');
    if (node.hasEqualList(this._id))
      throw new Error('node is not in the current LinkedList<T>.');
    // Check if the node is the head
    if (this._head.isEqual(node)) return this.deleteFirst();
    // Check if the node is the tail
    if (this._tail?.isEqual(node)) return this.deleteLast();
    // Detach the node from the list
    node.detach();
    // Decrement the length of the Linked List
    this._length--;
    // Return the deleted node
    return node;
  }

  /**
   * This code deletes a node with a value of T from the current LinkedList<T>.
   * @param value value to delete
   * @returns deleted node
   * @internal
   */
  private _deleteValue(value: T): LinkedListNode<T> {
    // Check if the Linked List is empty
    if (!this._head) throw new Error('The LinkedList<T> is empty.');
    // Find the first node that contains the value.
    const node = this.find(value);
    // If the node is not found, throw an error.
    if (!node) throw new Error('node is not in the current LinkedList<T>.');
    // Otherwise, delete the node.
    return this._deleteNode(node);
  }

  /**
   * Removes the first occurrence of a node from the `LinkedList<T>`.
   * @param node The `LinkedListNode<T>` to remove from the `LinkedList<T>`.
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
   * @remarks This method is an **O(1)** operation.
   */
  delete(node: LinkedListNode<T>): LinkedListNode<T>;
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
   * @remarks This method is an **O(1)** operation.
   */
  delete(value: T): LinkedListNode<T>;
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
   * @remarks This method is an **O(1)** operation.
   */
  delete(value: T | LinkedListNode<T>): LinkedListNode<T> {
    // If the value is a LinkedListNode, then delete it.
    if (this.isLinkedListNode(value)) return this._deleteNode(value);

    // Otherwise, delete the first node with the given value.
    return this._deleteValue(value);
  }

  /**
   * Adds a new _value_ after an existing _node_ in the `LinkedList<T>`.
   * @param node The `LinkedListNode<T>` after which to insert `newNode`.
   * @param newNode The new `value` to add to the `LinkedList<T>`.
   */
  insertAfter(node: LinkedListNode<T>, newNode: T): void;
  /**
   * Adds a new _node_ or after an existing _node_ in the `LinkedList<T>`.
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
    if (!this._tail) throw new Error('The LinkedList<T> is empty.');
    if (!node || !newNode) throw new Error('ArgumentNullException');
    if (node.hasEqualList(this._id))
      throw new Error('node is not in the current LinkedList.');

    let newNodeInstance: LinkedListNode<T>;
    if (this.isLinkedListNode(newNode)) {
      if (newNode.hasList())
        throw new Error('newNode belongs to a LinkedList.');
      newNodeInstance = new LinkedListNode<T>(newNode.value, this);
    } else {
      newNodeInstance = new LinkedListNode<T>(newNode, this);
    }

    if (node.isEqual(this._tail)) return this.prepend(newNodeInstance);

    node.attachNext(newNodeInstance);

    this._length++;
  }

  /**
   * Returns an array of the values in the list in reverse order.
   *
   * @returns {T[]} The array of values in reverse order.
   */
  toArrayReverse(): T[] {
    const array: T[] = [];
    let node = this._tail;
    while (node) {
      array.push(node.value);
      node = node.prev;
    }
    return array;
  }

  /**
   * This function iterates through the linked list,
   * and for each node in the linked list, it calls the callback function.
   * It returns an array of values, where each value is the return value of the callback function.
   *
   * @param callback the function to be called for each node in the linked list
   * @returns an array of values, where each value is the return value of the callback function
   */
  map<U = any>(callback: MapCallback<T, U>): U[] {
    const arr: U[] = [];
    let current = this._head;
    let index = 0;
    while (this.isLinkedListNode(current)) {
      arr.push(callback(current.value, index, this));
      current = current.next;
      index++;
    }
    return arr;
  }
}
