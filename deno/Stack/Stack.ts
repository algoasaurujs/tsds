class Node<T = any> {
  constructor(public value: T, public next: null | Node<T> = null) {}
}

/**
 * Represents a variable size last-in-first-out (LIFO) collection of instances of the same specified type.
 *
 * A stack is an abstract data type that serves as a collection of elements, with two main principal operations:
 * - Push, which adds an element to the collection, and
 * - Pop, which removes the most recently added element that was not yet removed.
 *
 * The order in which elements come off a stack gives rise to its alternative name, LIFO (last in, first out). Additionally, a peek operation may give access to the top without modifying the stack.
 *
 * @typeParam T - Specifies the type of elements in the stack.
 * @example
 * ```typescript
 * // @ts-ignore
import { Stack } from '@samavati/tsds.ts';
 * // instantiate new Stack
 * const stack = new Stack();
 * ```
 * @name Stack
 * @class
 */
export class Stack<T = any> {
  /**
   * first element in the Stack
   * @private
   */
  private _first: null | Node<T> = null;
  /**
   * last element in the Stack
   * @private
   */
  private _last: null | Node<T> = null;
  /**
   * size of the Stack
   * @private
   */
  private _size: number = 0;

  *iterator(): IterableIterator<T> {
    let currentItem = this._first;

    while (currentItem) {
      yield currentItem.value;
      currentItem = currentItem.next;
    }
  }

  [Symbol.iterator]() {
    return this.iterator();
  }

  /**
   * Gets the number of elements contained in the `Stack<T>`.
   * @example
   * ```typescript
   * const stack = new Stack<number>();
   *
   * stack.push(1);
   * stack.push(2);
   * stack.push(3);
   *
   * stack.length // => 3
   * ```
   * @remarks Retrieving the value of this property is an **O(1)** operation.
   * @returns {Number} length of Stack<T>
   * @memberof Stack
   * @name length
   * @property
   */
  get length(): number {
    return this._size;
  }

  /**
   * Removes all objects from the Stack<T>.
   * @example
   * ```typescript
   * const stack = new Stack<number>();
   *
   * stack.push(1);
   * stack.push(2);
   * stack.push(3);
   *
   * stack.length // => 3
   * stack.clear()
   * stack.length // => 0
   * ```
   * @name clear
   * @memberof Stack
   * @method
   */
  clear() {
    this._first = null;
    this._last = null;
    this._size = 0;
  }

  /**
   * Determines whether an element is in the Stack<T>.
   * @param {T} item The object to locate in the Stack<T>.
   * @returns {Boolean} true if item is found in the Stack<T>; otherwise, false.
   * @example
   * ```typescript
   * const stack = new Stack<number>();
   *
   * stack.push(1);
   * stack.push(2);
   * stack.push(3);
   *
   * stack.includes(2) // => true
   * stack.includes(10) // => false
   * ```
   * @remarks This method is an O(n) operation.
   * @name includes
   * @memberof Stack
   * @method
   */
  includes(item: T): boolean {
    if (!this._first) {
      return false;
    }

    let currentNode: null | Node<T> = this._first;
    while (currentNode) {
      if (currentNode.value === item) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }

  /**
   * Returns the object at the top of the Stack<T> without removing it.
   * @returns {T} The object at the top of the Stack<T>.
   * @example
   * ```typescript
   * const stack = new Stack<number>();
   *
   * stack.push(1);
   * stack.push(2);
   * stack.push(3);
   *
   * stack.peek() // => 3
   * ```
   * @remarks This method is an O(1) operation.
   * @name peek
   * @memberof Stack
   * @method
   */
  peek(): T {
    if (this._first) {
      return this._first.value;
    }

    throw new Error('InvalidOperationException');
  }

  /**
   * Removes and returns the object at the top of the Stack<T>.
   * @returns {T} The object removed from the top of the Stack<T>.
   * @example
   * ```typescript
   * const stack = new Stack<number>();
   *
   * stack.push(1);
   * stack.push(2);
   * stack.push(3);
   *
   * stack.pop() // => 3
   * stack.length // => 2
   * ```
   * @remarks This method is an O(1) operation.
   * @name pop
   * @memberof Stack
   * @method
   */
  pop(): T {
    if (!this._first) {
      throw new Error('InvalidOperationException');
    }

    const current = this._first;
    if (this._first === this._last) {
      this._last = null;
    }
    this._first = this._first.next;
    current.next = null;
    this._size--;
    return current.value;
  }

  /**
   * Inserts an object at the top of the Stack<T>.
   * @param {T} value The object to push onto the Stack<T>
   * @example
   * ```typescript
   * const stack = new Stack<number>();
   *
   * stack.push(1);
   * stack.push(2);
   * stack.push(3);
   *
   * stack.length // => 3
   * ```
   * @remarks This method is an O(1) operation.
   * @name push
   * @memberof Stack
   * @method
   */
  push(value: T) {
    const newNode = new Node<T>(value);

    if (!this._first) {
      this._first = newNode;
      this._last = newNode;
    } else {
      newNode.next = this._first;
      this._first = newNode;
    }

    this._size++;
  }

  /**
   * Returns a new array containing copies of the elements of the Stack<T>.
   * @returns {Array<T>} A new array containing copies of the elements of the Stack<T>.
   * @example
   * ```typescript
   * const stack = new Stack<number>();
   *
   * stack.push(1);
   * stack.push(2);
   * stack.push(3);
   *
   * stack.toArray() // => [3, 2, 1]
   * ```
   * @remarks This method is an O(n) operation.
   * @name toArray
   * @memberof Stack
   * @method
   */
  toArray(): T[] {
    const nodes: T[] = [];

    let currentNode = this._first;

    while (currentNode) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return nodes;
  }
}
