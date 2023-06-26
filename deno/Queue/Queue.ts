class Node<T = any> {
  constructor(public value: T, public next: null | Node<T> = null) {}
}

/**
 * Represents a first-in, first-out collection of objects.
 *
 * A queue is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and the removal of entities from the other end of the sequence. By convention, the end of the sequence at which elements are added is called the back, tail, or rear of the queue, and the end at which elements are removed is called the head or front of the queue.
 *
 * The operation of adding an element to the rear of the queue is known as enqueue, and the operation of removing an element from the front is known as _dequeue_.
 *
 * @typeParam T - Specifies the type of elements in the Queue.
 * @example
 * ```typescript
 * import { Queue } from  '@algoasaurujs/tsds';
 *
 * // instantiate new Queue
 *
 * const queue = new Queue();
 * ```
 * @name Queue
 * @class
 */
export class Queue<T = any> {
  /**
   * First element of the Queue
   * @private
   */
  private _first: null | Node<T> = null;
  /**
   * Last element of the Queue
   * @private
   */
  private _last: null | Node<T> = null;
  /**
   * Node count in the Queue
   * @private
   */
  private _length = 0;

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
   * Gets the number of elements contained in the `Queue<T>`.
   * @example
   * ```typescript
   * const queue = new Queue<number>();
   *
   * queue.enqueue(1);
   * queue.enqueue(2);
   * queue.enqueue(3);
   *
   * queue.length // => 3
   * ```
   * @remarks Retrieving the value of this property is an O(1) operation.
   * @returns {Number} length of Queue<T>
   * @memberof Queue
   * @name length
   * @property
   */
  get length(): number {
    return this._length;
  }

  /**
   * Removes all objects from the `Queue<T>`.
   * @example
   * ```typescript
   * const queue = new Queue<number>();
   *
   * queue.enqueue(1);
   * queue.enqueue(2);
   * queue.enqueue(3);
   *
   * queue.length // => 3
   * queue.clear()
   * queue.length // => 0
   * ```
   * @name clear
   * @memberof Queue
   * @method
   */
  clear(): void {
    this._first = null;
    this._last = null;
    this._length = 0;
  }

  /**
   * Determines whether an element is in the `Queue<T>`.
   * @param {T} item The object to locate in the `Queue<T>`.
   * @returns {Boolean} `true` if item is found in the `Queue<T>`; otherwise, `false`.
   * @example
   * ```typescript
   * const queue = new Queue<number>();
   *
   * queue.enqueue(1);
   * queue.enqueue(2);
   * queue.enqueue(3);
   *
   * queue.includes(2) // => true
   * queue.includes(10) // => false
   * ```
   * @remarks This method is an **O(n)** operation.
   * @name includes
   * @memberof Queue
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
   * Removes and returns the object at the beginning of the `Queue<T>`.
   * @returns {T} The object that is removed from the beginning of the `Queue<T>`.
   * @example
   * ```typescript
   * const queue = new Queue<number>();
   *
   * queue.enqueue(1);
   * queue.enqueue(2);
   * queue.enqueue(3);
   *
   * queue.dequeue() // => 3
   * queue.length // => 2
   * ```
   * @remarks This method is an **O(1)** operation.
   * @name dequeue
   * @memberof Queue
   * @method
   */
  dequeue(): T {
    // get from beginning
    if (!this._first) {
      throw new Error('InvalidOperationException: The Queue<T> is empty.');
    }

    let current = this._first;

    if (this._first === this._last) {
      this._last = null;
    }

    this._first = this._first.next;
    current.next = null;
    this._length--;

    return current.value;
  }

  /**
   * Adds an object to the end of the `Queue<T>`.
   * @param {T} value The object to add to the `Queue<T>`
   * @example
   * ```typescript
   * const queue = new Queue<number>();
   *
   * queue.enqueue(1);
   * queue.enqueue(2);
   * queue.enqueue(3);
   *
   * queue.length // => 3
   * ```
   * @remarks This method is an **O(1)** operation.
   * @name enqueue
   * @memberof Queue
   * @method
   */
  enqueue(value: T): void {
    // Add to the end
    const newNode = new Node<T>(value);
    if (!this._last) {
      this._first = newNode;
      this._last = newNode;
    } else {
      this._last.next = newNode;
      this._last = newNode;
    }

    this._length++;
  }

  /**
   * Returns the object at the beginning of the `Queue<T>` without removing it.
   * @returns {T} The object at the beginning of the `Queue<T>`.
   * @example
   * ```typescript
   * const queue = new Queue<number>();
   *
   * queue.enqueue(1);
   * queue.enqueue(2);
   * queue.enqueue(3);
   *
   * queue.peek() // => 3
   * ```
   * @remarks This method is an **O(1)** operation.
   * @name peek
   * @memberof Queue
   * @method
   */
  peek(): T {
    // get from beginning
    if (!this._first) {
      throw new Error('InvalidOperationException: The Queue<T> is empty.');
    }

    return this._first.value;
  }

  /**
   * Returns the `Queue<T>` elements in a new array.
   * @returns {Array<T>} A new array containing copies of the elements of the `Queue<T>`.
   * @example
   * ```typescript
   * const queue = new Queue<number>();
   *
   * queue.enqueue(1);
   * queue.enqueue(2);
   * queue.enqueue(3);
   *
   * queue.toArray() // => [3, 2, 1]
   * ```
   * @remarks This method is an **O(n)** operation.
   * @name toArray
   * @memberof Queue
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
