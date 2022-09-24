import { AbstractSequentialList } from '../SequentialList/AbstractSequentialList';
import { LinkedListNode } from './LinkedListNode';

/**
 * A linear collection of data elements whose order is not given by their physical placement in memory.
 * Instead, each element points to the next.
 * It is a data structure consisting of a collection of nodes which together represent a sequence.
 * @typeParam ValueType - Specifies the type of elements in the LinkedList.
 * @example
 * ```typescript
 * import { LinkedList } from '@samavati/tsds';
 * ```
 */
export class LinkedList<ValueType = any> extends AbstractSequentialList<
  ValueType,
  LinkedListNode<ValueType>
> {
  /**
   * Checks if argument is `LinkedListNode` or not
   * @param x an argument to check if it is `LinkedListNode`
   * @returns if argument is `LinkedListNode` or not
   * @internal
   */
  private isLinkedListNode(x: any): x is LinkedListNode {
    return x instanceof LinkedListNode;
  }

  /**
   * Adds a new node or value at the end of the `LinkedList<T>`.
   * @param value value of the new node.
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
   */
  append(value: ValueType): void {
    const newNode = new LinkedListNode<ValueType>(value, null, this._id);

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
   * Removes the first occurrence of a node from the `LinkedList<T>`.
   * @param node The `LinkedListNode<T>` to remove from the LinkedList<T>`.
   * @example
   * ```typescript
   * const list = new LinkedList<number>([1, 2, 3, 4]);
   *
   * list.length // => 4
   * list.delete(4)
   * list.length // => 3
   * list.last // => LinkListNode(3)
   * ```
   * @throws {InvalidOperationException} node is not in the current `LinkedList<T>`.
   *
   * @remarks This method is an **O(n)** operation.
   */
  delete(node: LinkedListNode<ValueType>): void;
  /**
   * Removes the first occurrence of the specified value from the `LinkedList<T>`.
   * @param value The value to remove from the `LinkedList<T>`.
   * @returns `true` if the element containing value is successfully removed; otherwise, `false`. This method also returns `false` if value was not found in the original `LinkedList<T>`.
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
   */
  delete(value: ValueType): boolean;
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
   */
  delete(value: ValueType | LinkedListNode<ValueType>): void | boolean {
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
   */
  deleteFirst(): void {
    if (!this._head) {
      throw new Error('The LinkedList<T> is empty.');
    }

    this._head = this._head.next;
    this._length--;
  }

  /**
   * Adds a new _value_ after an existing _node_ in the LinkedList<T>.
   * @param node The `LinkedListNode<T>` after which to insert `newNode`.
   * @param newNode The new `value` to add to the `LinkedList<T>`.
   */
  insertAfter(node: LinkedListNode<ValueType>, newNode: ValueType): void;
  /**
   * Adds a new _node_ or after an existing _node_ in the LinkedList<T>.
   * @param node The `LinkedListNode<T>` after which to insert `newNode`.
   * @param newNode The new `LinkedListNode<T>` or `value` to add to the `LinkedList<T>`.
   */
  insertAfter(
    node: LinkedListNode<ValueType>,
    newNode: LinkedListNode<ValueType>
  ): void;
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
   */
  insertAfter(
    node: LinkedListNode<ValueType>,
    newNode: LinkedListNode<ValueType> | ValueType
  ): void {
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
      const newNodeObject = new LinkedListNode<ValueType>(
        newNode,
        node.next,
        this._id
      );
      node.next = newNodeObject;
    }

    this._length++;
  }

  /**
   * Appends new Node at the beginning of the `LinkedList<T>`.
   * @param value value of the new node
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
   */
  prepend(value: ValueType): void {
    const newNode = new LinkedListNode<ValueType>(value, this._head, this._id);
    this._head = newNode;

    if (!this._tail) {
      this._tail = newNode;
    }

    this._length++;
  }
}
