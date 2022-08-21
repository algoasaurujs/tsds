class Node<T = any> {
  constructor(public value: T, public next: null | Node<T> = null) {}
}

/**
 * Represents a first-in, first-out collection of objects.
 *
 * T: Specifies the type of elements in the queue.
 * @name Queue
 * @class
 */
export class Queue<T = any> {
  /**
   * First element of the Queue
   */
  private _first: null | Node<T> = null;
  /**
   * Last element of the Queue
   */
  private _last: null | Node<T> = null;
  /**
   * Node count in the Queue
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
   * Gets the number of elements contained in the Queue<T>.
   */
  get length(): number {
    return this._length;
  }

  /**
   * Removes all objects from the Queue<T>.
   */
  clear(): void {
    this._first = null;
    this._last = null;
    this._length = 0;
  }

  /**
   * Determines whether an element is in the Queue<T>.
   * @param item The object to locate in the Queue<T>.
   * @returns {Boolean} true if item is found in the Queue<T>; otherwise, false.
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
   * Removes and returns the object at the beginning of the Queue<T>.
   * @returns {T} The object that is removed from the beginning of the Queue<T>.
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
   * Adds an object to the end of the Queue<T>.
   * @param value The object to add to the Queue<T>
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
   * Returns the object at the beginning of the Queue<T> without removing it.
   * @returns {T} The object at the beginning of the Queue<T>.
   */
  peek(): T {
    // get from beginning
    if (!this._first) {
      throw new Error('InvalidOperationException: The Queue<T> is empty.');
    }

    return this._first.value;
  }

  /**
   * Returns the Queue<T> elements in a new array.
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
