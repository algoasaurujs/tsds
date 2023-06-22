import { Queue } from '../Queue';
import { BinaryHeap } from './../BinaryHeap';

type CompareFn<U> = (a: U, b: U) => number;

/**
 * A priority queue is an abstract data-type similar to a regular queue or stack data structure in which each element additionally has a priority associated with it.
 * In a priority queue, an element with high priority is served before an element with low priority.
 * In this implementation if two elements have the same priority, ordering of elements with the same priority remains undefined.
 *
 * The operation of adding an element to the rear of the queue is known as enqueue, and the operation of removing an element from the front is known as _dequeue_.
 *
 * @typeParam T - Specifies the type of elements in the PriorityQueue.
 * @example
 * ```typescript
 * import { PriorityQueue } from  '@algoasaurujs/tsds';
 *
 * // instantiate new PriorityQueue
 *
 * const queue = new PriorityQueue();
 * ```
 */
export class PriorityQueue<T> extends Queue<T> {
  private _heap: BinaryHeap<T>;

  /**
   * Creates a PriorityQueue collection.
   * @param initialValue You can pass an array as initialValue to the constructor
   * @param comparator Function used to determine the order of the elements. It is expected to return
   * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
   * value otherwise. if omitted, the default comparator would create a max PriorityQueue.
   */
  constructor(initialValue?: T[], comparator?: CompareFn<T>) {
    super();
    this._heap = new BinaryHeap<T>(initialValue, comparator);
  }

  *iterator(): IterableIterator<T> {
    const iterator = this._heap[Symbol.iterator]();
    let next = iterator.next();
    while (!next.done) {
      yield next.value;
      next = iterator.next();
    }
  }

  /**
   * Gets the number of elements contained in the `PriorityQueue<T>`.
   * @example
   * ```typescript
   * const queue = new PriorityQueue<number>();
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
    return this._heap.size;
  }

  /**
   * Removes all objects from the `PriorityQueue<T>`.
   * @example
   * ```typescript
   * const queue = new PriorityQueue<number>();
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
    this._heap.clear();
  }

  /**
   * Removes and returns the object at the beginning of the `PriorityQueue<T>`.
   * @returns The object that is removed from the beginning of the `PriorityQueue<T>`.
   * @example
   * ```typescript
   * const queue = new PriorityQueue<number>();
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
    return this._heap.pop();
  }

  /**
   * Adds an object to the end of the `PriorityQueue<T>`.
   * @param value The object to add to the `PriorityQueue<T>`
   * @example
   * ```typescript
   * const queue = new PriorityQueue<number>();
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
    return this._heap.push(value);
  }

  /**
   * Returns the object at the beginning of the `PriorityQueue<T>` without removing it.
   * @returns The object at the beginning of the `PriorityQueue<T>`.
   * @example
   * ```typescript
   * const queue = new PriorityQueue<number>();
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
    return this._heap.peek();
  }
}
// TODO: A better implementation could be with FibonacciHeap or BridalHeap
