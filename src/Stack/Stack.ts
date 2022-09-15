import { AbstractCollection } from "../AbstractCollection";

class Node<T = any> {
  constructor(public value: T, public next: null | Node<T> = null) { }
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
 * import { Stack } from '@samavati/tsds';
 * // instantiate new Stack
 * const stack = new Stack();
 * ```
 * @name Stack
 * @class
 */
export class Stack<T = any> extends AbstractCollection<T> {
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
   * Returns the object at the top of the Stack<T> without removing it.
   * @returns The object at the top of the Stack<T>.
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
   */
  peek(): T {
    if (this._first) {
      return this._first.value;
    }

    throw new Error('InvalidOperationException');
  }

  /**
   * Removes and returns the object at the top of the Stack<T>.
   * @returns The object removed from the top of the Stack<T>.
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
   * @param value The object to push onto the Stack<T>
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

}
