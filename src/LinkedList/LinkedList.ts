import { AbstractCollection } from '../AbstractCollection';
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
 * @name LinkedList
 * @class
 */
export class LinkedList<T = any> extends AbstractCollection<T> {
  /**
   * First element of the list
   * @private
   */
  private _head: null | LinkedListNode<T> = null;

  /**
   * Last element of the list
   * @private
   */
  private _tail: null | LinkedListNode<T> = null;

  /**
   * Node count in the list
   * @private
   */
  private _length: number = 0;

  /**
   * LinkedList Identifier
   * @private
   */
  private _id = Symbol();

  /**
   * Create new LinkedList instance
   *  * // instantiate new linked list without initial set-up
   * const list = new LinkedList();
   *
   * // instantiate new linked list with initial values
   * const list2 = new LinkedList([1, 2, 3, 4, 5]);
   * @constructor
   */
  constructor();
  /**
   * Create new LinkedList instance
   * @param {Array<T>} initialValue initial value of LinkedList.
   * @constructor
   */
  constructor(initialValue: T[]);
  /**
   *
   * @param initialValue
   * @constructor
   */
  constructor(private initialValue?: T[]) {
    super();
    if (this.initialValue) {
      for (const data of this.initialValue) {
        this.append(data);
      }
    }
  }

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
   * @returns {LinkedListNode<T>} The first `LinkedListNode<T>` of the `LinkedList<T>`
   * @remarks
   * If the `LinkedList<T>` is empty, the _first_ and _last_ properties contain `null`.
   * Retrieving the value of this property is an **O(1)** operation.
   * @name first
   * @memberof LinkedList
   * @property
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
   * @returns {LinkedListNode<T>} The last `LinkedListNode<T>` of the `LinkedList<T>`.
   * @remarks
   * If the `LinkedList<T>` is empty, the _first_ and _last_ properties contain `null`.
   *
   * Retrieving the value of this property is an **O(1)** operation.
   * @name last
   * @memberof LinkedList
   * @property
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
   * @returns {Number} number of nodes in the `LinkedList<T>`.
   * @remarks
   * Retrieving the value of this property is an **O(1)** operation.
   * @name length
   * @memberof LinkedList
   * @property
   */
  get length() {
    return this._length;
  }

  /**
   * Adds a new node or value at the end of the `LinkedList<T>`.
   * @param {T} value value of the new node.
   * @returns {void}
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
   * @name append
   * @memberof LinkedList
   * @method
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
   * @returns {void}
   * @example
   * ```typescript
   * const list = new LinkedList<number>([1, 2, 3, 4]);
   *
   * list.length // => 4
   * list.clear();
   * list.length // => 0
   * ```
   * @name clear
   * @memberof LinkedList
   * @method
   */
  clear() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  /**
   * Removes the first occurrence of a node from the `LinkedList<T>`.
   * @param {LinkedListNode<T>} node The `LinkedListNode<T>` to remove from the LinkedList<T>`.
   * @returns {void}
   * @throws {InvalidOperationException}
   * node is not in the current `LinkedList<T>`.
   * @overload delete
   * @method
   */
  delete(node: LinkedListNode<T>): void;
  /**
   * Removes the first occurrence of the specified value from the `LinkedList<T>`.
   * @param {T} value The value to remove from the `LinkedList<T>`.
   * @returns {Boolean} `true` if the element containing value is successfully removed; otherwise, `false`. This method also returns `false` if value was not found in the original `LinkedList<T>`.
   * @overload delete
   * @method
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
   * @name delete
   * @method
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
   * @returns {void}
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
   * @name deleteFirst
   * @memberof LinkedList
   * @method
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
   * @param {T} value value of the node we want to find
   * @returns {LinkedListNode} `LinkedListNode` if there is a value otherwise `null`
   * @example
   * ```typescript
   * const list = new LinkedList<number>([1, 2, 3, 4]);
   *
   * const item = list.find(2)
   *
   * const nullItem = list.find(10) // => null
   * ```
   * @remarks This method is an **O(n)** operation.
   * @name find
   * @memberof LinkedList
   * @method
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
   * @param {Number} index index of the Node **starts from 0**
   * @returns {LinkedListNode | null} `LinkedListNode` of the specified index, if index is less than length; otherwise, `null`.
   * @example
   * ```typescript
   * const list = new LinkedList<number>([1, 2, 3, 4]);
   *
   * const item = list.get(2)
   *
   * const nullItem = list.get(10) // => null
   * ```
   * @remarks This method is an **O(n)** operation.
   * @name get
   * @memberof LinkedList
   * @method
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
   * @param {T} value The value to locate in the `LinkedList<T>`.
   * @returns {Boolean} `true` if value is found in the `LinkedList<T>`; otherwise, `false`.
   * @example
   * ```typescript
   * const list = new LinkedList<number>([1, 2, 3, 4]);
   *
   * list.includes(2) // => true
   * list.includes(10) // => false
   * ```
   * @remarks This method is an **O(n)** operation.
   * @name includes
   * @memberof LinkedList
   * @method
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
   * @param {LinkedListNode<T>} node The `LinkedListNode<T>` after which to insert `newNode`.
   * @param {T} newNode The new `value` to add to the `LinkedList<T>`.
   * @returns {void}
   * @overload insertAfter
   */
  insertAfter(node: LinkedListNode<T>, newNode: T): void;
  /**
   * Adds a new _node_ or after an existing _node_ in the LinkedList<T>.
   * @param {LinkedListNode<T>} node The `LinkedListNode<T>` after which to insert `newNode`.
   * @param {LinkedListNode<T>} newNode The new `LinkedListNode<T>` or `value` to add to the `LinkedList<T>`.
   * @returns {void}
   * @overload insertAfter
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
   * @name insertAfter
   * @method
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
   * @param {T} value value of the new node
   * @returns {void}
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
   * @name prepend
   * @memberof LinkedList
   * @method
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
   * @returns {Array<T>} Returns the entire `LinkedList` to a compatible one-dimensional Array
   * @example
   * ```typescript
   * const list = new LinkedList<number>([1, 2, 3, 4]);
   *
   * list.prepend(0)
   * list.toArray() // => [0, 1, 2, 3, 4]
   * ```
   * @remarks This method is an **O(n)** operation.
   * @name toArray
   * @memberof LinkedList
   * @method
   */
  // toArray(): T[] {
  //   const nodes: T[] = [];

  //   let currentNode = this._head;

  //   while (currentNode) {
  //     nodes.push(currentNode.value);
  //     currentNode = currentNode.next;
  //   }

  //   return nodes;
  // }
}
