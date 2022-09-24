export interface Collection<E> extends Iterable<E> {
  /**
   * Returns the number of elements in this collection.  If this collection
   * contains more than `Number.MAX_VALUE` elements, returns
   * `Number.MAX_VALUE`.
   */
  length: number;

  /**
   * Returns an iterator over the elements contained in this collection.
   */
  iterator: () => IterableIterator<E>;

  /**
   * Returns `true` if this collection contains no elements.
   *
   * @returns `true` if this collection contains no elements
   */
  isEmpty: () => boolean;

  /**
   * Returns `true` if this collection contains the specified element.
   * More formally, returns `true` if and only if this collection
   * contains at least one element `e` such that `e === o`
   *
   * @param o element whose presence in this collection is to be tested
   * @returns `true` if this collection contains the specified element
   */
  includes: (o: E) => boolean;

  /**
   * Returns an array containing all of the elements in this collection.
   * If this collection makes any guarantees as to what order its elements
   * are returned by its iterator, this method must return the elements in
   * the same order.
   *
   * The returned array will be "safe" in that no references to it are
   * maintained by this collection.  (In other words, this method must
   * allocate a new array even if this collection is backed by an array).
   * The caller is thus free to modify the returned array.
   *
   * @returns an array containing all of the elements in this collection
   */
  toArray: () => Array<E>;
}
