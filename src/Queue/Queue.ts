import { AbstractCollection } from '../AbstractCollection';
import { QueueNode } from './QueueNode';

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
 * import { Queue } from  '@samavati/tsds';
 *
 * // instantiate new Queue
 *
 * const queue = new Queue();
 * ```
 */
export class Queue<T = any> extends AbstractCollection<T> {
  /**
   * First element of the Queue
   * @internal
   */
  private _first: null | QueueNode<T> = null;
  /**
   * Last element of the Queue
   * @internal
   */
  private _last: null | QueueNode<T> = null;
  /**
   * Node count in the Queue
   * @internal
   */
  private _length = 0;

  *iterator(): IterableIterator<T> {
    let currentItem = this._first;

    while (currentItem) {
      yield currentItem.value;
      currentItem = currentItem.next;
    }
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
   */
  clear(): void {
    this._first = null;
    this._last = null;
    this._length = 0;
  }

  /**
   * Removes and returns the object at the beginning of the `Queue<T>`.
   * @returns The object that is removed from the beginning of the `Queue<T>`.
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
   * @param value The object to add to the `Queue<T>`
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
   */
  enqueue(value: T): void {
    // Add to the end
    const newNode = new QueueNode<T>(value);
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
   * @returns The object at the beginning of the `Queue<T>`.
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
   */
  peek(): T {
    // get from beginning
    if (!this._first) {
      throw new Error('InvalidOperationException: The Queue<T> is empty.');
    }

    return this._first.value;
  }
}
