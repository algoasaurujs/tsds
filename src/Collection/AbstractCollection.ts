import { Collection } from './Collection';

export abstract class AbstractCollection<E> implements Collection<E> {
  /**
   * Returns the number of elements in this collection.
   */
  public abstract get length(): number;

  /**
   * Returns an iterator over the elements contained in this collection.
   */
  public abstract iterator(): IterableIterator<E>;

  /**
   * Returns an iterator over the elements contained in this collection.
   * With iterator protocols you are allowed it to be used with the `for...of`
   * @example
   * ```typescript
   * for (const item of collection) {
   * 	// You have access to the item
   * }
   * ```
   */
  public [Symbol.iterator](): Iterator<E> {
    return this.iterator();
  }

  /**
   * This implementation returns `length === 0`.
   */
  public isEmpty(): boolean {
    return this.length === 0;
  }

  /**
   * This implementation iterates over the elements in the collection,
   * checking each element in turn for equality with the specified element.
   * @returns `true` if this collection contains the specified element
   */
  public includes(o: E): boolean {
    const it: Iterator<E> = this[Symbol.iterator]();
    let next = it.next();
    while (!next.done) {
      if (next.value === o) {
        return true;
      }
      next = it.next();
    }
    return false;
  }

  /**
   * This implementation returns an array containing all the elements
   * returned by this collection's iterator, in the same order, stored in
   * consecutive elements of the array, starting with index `0`.
   * The length of the returned array is equal to the number of elements
   * returned by the iterator, even if the size of this collection changes
   * during iteration, as might happen if the collection permits
   * concurrent modification during iteration. The `length` property is
   * called only as an optimization hint; the correct result is returned
   * even if the iterator returns a different number of elements.
   *
   * @returns an array containing all of the elements in this collection
   */
  public toArray(): Array<E> {
    const result: Array<E> = [];
    const it: Iterator<E> = this[Symbol.iterator]();
    let next = it.next();
    while (!next.done) {
      result.push(next.value);
      next = it.next();
    }
    return result;
  }
}
