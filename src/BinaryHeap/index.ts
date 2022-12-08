type CompareFn<U> = (a: U, b: U) => number;
/**
 * A Binary Heap is a specialized tree-based data structure which is essentially an almost complete tree that satisfies the Binary Heap property
 */
export class BinaryHeap<T = any> {
  /**
   *
   * @internal
   */
  private _nodes: T[] = [];
  /**
   * @internal
   */
  private _comparator: CompareFn<T> = (a, b) => (a < b ? 1 : -1);

  /**
   * Creates a BinaryHeap collection.
   * @param initialValue You can pass an array as initialValue to the constructor
   * @param comparator Function used to determine the order of the elements. It is expected to return
   * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
   * value otherwise. if omitted, the default comparator would create a max binary heap.
   */
  constructor(initialValue?: T[], comparator?: CompareFn<T>) {
    if (comparator) {
      this._comparator = comparator;
    }
    if (initialValue) {
      for (const value of initialValue) {
        this.push(value);
      }
    }
  }

  /**
   * Gets the number of elements contained in the `BinaryHeap<T>`.
   * @example
   * ```typescript
   * const heap = new BinaryHeap<number>();
   *
   * heap.push(1);
   * heap.push(2);
   * heap.push(3);
   *
   * heap.size // => 3
   * ```
   * @remarks Retrieving the value of this property is an O(1) operation.
   */
  get size(): number {
    return this._nodes.length;
  }

  /**
   * Swaps two nodes in the BinaryHeap
   * @internal
   */
  private _swap(i: number, j: number) {
    const temp = this._nodes[i];
    this._nodes[i] = this._nodes[j];
    this._nodes[j] = temp;
  }

  /**
   * Checks if parent and child should be swapped
   * @internal
   */
  private _shouldSwap(parentIndex: number, childIndex: number) {
    if (parentIndex < 0 || parentIndex >= this.size) {
      return false;
    }

    if (childIndex < 0 || childIndex >= this.size) {
      return false;
    }

    return this._compareAt(parentIndex, childIndex) > 0;
  }

  /**
   * compares two element at index i and j with provided comparator
   * @internal
   */
  private _compareAt(i: number, j: number): number {
    return this._comparator(this._nodes[i], this._nodes[j]);
  }

  /**
   * Retrieves the parent index of the provided child index
   * @param index The index of the children.
   * @internal
   */
  private _getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  /**
   * Retrieves the lest child index of the provided parent index
   * @param index The index of the parent.
   * @internal
   */
  private _getLetChildIndex(index: number) {
    return 2 * index + 1;
  }

  /**
   * Retrieves the right child index of the provided parent index
   * @param index The index of the parent.
   * @internal
   */
  private _getRightChildIndex(index: number) {
    return 2 * index + 2;
  }

  /**
   * Checks if a parent has a left child
   * @internal
   */
  private _hasLeftChild(parentIndex: number) {
    const leftChildIndex = this._getLetChildIndex(parentIndex);
    return leftChildIndex < this.size;
  }

  /**
   * Checks if a parent has a right child
   * @internal
   */
  private _hasRightChild(parentIndex: number) {
    const rightChildIndex = this._getRightChildIndex(parentIndex);
    return rightChildIndex < this.size;
  }

  /**
   * Compares children of a parent
   * @internal
   */
  private _compareChildrenOf(parentIndex: number) {
    const hasLeftChild = this._hasLeftChild(parentIndex);
    const hasRightChild = this._hasRightChild(parentIndex);

    if (!hasLeftChild && !hasRightChild) {
      return -1;
    }

    const leftChildIndex = this._getLetChildIndex(parentIndex);
    const rightChildIndex = this._getRightChildIndex(parentIndex);

    if (!hasLeftChild) {
      return rightChildIndex;
    }

    if (!hasRightChild) {
      return leftChildIndex;
    }

    const compare = this._compareAt(leftChildIndex, rightChildIndex);
    return compare > 0 ? rightChildIndex : leftChildIndex;
  }

  /**
   * Recursively bubbles up a node if it's in a wrong position
   * @internal
   */
  private _bubbleUp(startIndex: number) {
    let childIndex = startIndex;
    let parentIndex = this._getParentIndex(childIndex);

    while (this._shouldSwap(parentIndex, childIndex)) {
      this._swap(parentIndex, childIndex);
      childIndex = parentIndex;
      parentIndex = this._getParentIndex(childIndex);
    }
  }

  /**
   * Recursively bubbles down a node if it's in a wrong position
   * @internal
   */
  private _bubbleDown(startIndex: number) {
    let parentIndex = startIndex;
    let childIndex = this._compareChildrenOf(parentIndex);

    while (this._shouldSwap(parentIndex, childIndex)) {
      this._swap(parentIndex, childIndex);
      parentIndex = childIndex;
      childIndex = this._compareChildrenOf(parentIndex);
    }
  }

  /**
   * Checks if the `BinaryHeap<T>` is empty
   * @example
   * ```typescript
   * const heap = new BinaryHeap<number>();
   *
   * heap.isEmpty // => true
   * ```
   * @remarks This method is an O(1) operation.
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * Clears `BinaryHeap<T>`.
   * @example
   * ```typescript
   * const heap = new BinaryHeap<number>([10, 15, 20]);
   *
   * heap.clear();
   * heap.isEmpty // => true
   * ```
   * @remarks This method is an O(1) operation.
   */
  clear() {
    this._nodes = [];
  }

  /**
   * Returns the root node in the BinaryHeap
   * @example
   * ```typescript
   * const heap = new BinaryHeap<number>([10, 15, 20]);
   *
   * heap.peek() // => 20
   * ```
   * @throws {InvalidOperationException} when there is no item inside the collection.
   * @remarks This method is an O(1) operation.
   */
  peek() {
    if (this.isEmpty()) {
      throw new Error('InvalidOperationException');
    }

    return this._nodes[0];
  }

  /**
   * Inserts a new value into the BinaryHeap
   * @param value The value that you want to insert into the BinaryHeap
   * @example
   * ```typescript
   * const heap = new BinaryHeap<number>([10, 15, 20]);
   *
   * heap.push(40)
   * heap.peek() => // 40
   * ```
   * @remarks This method is an O(log n) operation.
   */
  push(value: T) {
    this._nodes.push(value);
    this._bubbleUp(this.size - 1);
  }

  /**
   * Removes and returns the root node in the BinaryHeap
   * @example
   * ```typescript
   * const heap = new BinaryHeap<number>([10, 15, 20]);
   *
   * heap.pop() // => 20
   * ```
   * @throws {InvalidOperationException} when there is no item inside the collection.
   * @remarks This method is an O(log n) operation.
   */
  pop(): T {
    const root = this.peek();
    this._nodes[0] = this._nodes[this.size - 1];
    this._nodes.pop();
    this._bubbleDown(0);

    return root;
  }
}
