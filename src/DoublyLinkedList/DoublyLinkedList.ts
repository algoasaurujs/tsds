import { AbstractCollection } from '../AbstractCollection';
import { DoublyLinkedListNode } from './DoublyLinkedListNode';

/**
 * A linear collection of data elements whose order is not given by their physical placement in memory.
 * Instead, each element points to the next.
 * It is a data structure consisting of a collection of nodes which together represent a sequence.
 */
export class DoublyLinkedList<T = any> extends AbstractCollection<T> {
  /**
   * First element of the list
   * @internal
   */
  private _head: null | DoublyLinkedListNode<T> = null;

  /**
   * Last element of the list
   * @internal
   */
  private _tail: null | DoublyLinkedListNode<T> = null;

  /**
   * Node count in the list
   * @internal
   */
  private _length: number = 0;

  /**
   * LinkedList Identifier
   * @internal
   */
  private _id = Symbol();

  /**
   * Create new LinkedList instance
   *  * // instantiate new linked list without initial set-up
   * const list = new LinkedList();
   *
   * // instantiate new linked list with initial values
   * const list2 = new LinkedList([1, 2, 3, 4, 5]);
   */
  constructor();
  /**
   * Create new LinkedList instance
   * @param initialValue initial value of LinkedList.
   */
  constructor(initialValue: T[]);
  constructor(private initialValue?: T[]) {
    super();
    if (this.initialValue) {
      for (const data of this.initialValue) {
        this.append(data);
      }
    }
  }

  *iterator(): IterableIterator<T> {
    let currentItem = this._head;

    while (currentItem) {
      yield currentItem.value;
      currentItem = currentItem.next;
    }
  }

  /**
   * Checks if `x` is a LinkedListNode or not.
   * @param x 
   * @returns `true` if `x` is LinkedListNode; otherwise `false`.
   * @internal
   */
  private isLinkedListNode(x: any): x is DoublyLinkedListNode {
    return x instanceof DoublyLinkedListNode;
  }

  /**
   * Gets the first node of the DoublyLinkedList<T>.
   */
  get first() {
    return this._head;
  }

  /**
   * Gets the last node of the DoublyLinkedList<T>.
   */
  get last() {
    return this._tail;
  }

  /**
   * Gets the number of nodes actually contained in the DoublyLinkedList<T>.
   */
  get length() {
    return this._length;
  }

  /**
   * Adds a new node or value at the end of the LinkedList&lt;T&gt;.
   * @param value value of the new node
   */
  append(value: T): void {
    const newNode = new DoublyLinkedListNode<T>(value, null, null, this._id);

    if (!this._head) {
      this._head = newNode;
    }

    if (this._tail) {
      newNode.prev = this._tail;
      this._tail.next = newNode;
    }

    this._tail = newNode;
    this._length++;
  }

  /**
   * Removes all nodes from the DoublyLinkedList<T>.
   */
  clear() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  /**
   * Removes the first occurrence of a node or value from the DoublyLinkedList<T>.
   * @param value The DoublyLinkedListNode<T> to remove from the DoublyLinkedList<T>.
   */
  delete(node: DoublyLinkedListNode<T>): void;
  /**
   * Removes the first occurrence of the specified value from the DoublyLinkedList<T>.
   * @param value The value to remove from the DoublyLinkedList<T>.
   * @returns _true_ if the element containing value is successfully removed; otherwise, _false_. This method also returns _false_ if value was not found in the original DoublyLinkedList<T>.
   */
  delete(value: T): boolean;
  delete(value: T | DoublyLinkedListNode<T>): void | boolean {
    if (this.isLinkedListNode(value)) {
      if (!this._head || !value || value.listId !== this._id) {
        throw new Error(
          'InvalidOperationException: node is not in the current DoublyLinkedList<T>.'
        );
      }

      // if head is the node that should delete
      if (this._head.isEqual(value)) {
        this.deleteFirst();
        return;
      }

      // if value is between head and tail
      let currentNode = this._head;

      while (currentNode.next) {
        // Deleting the node by delete it's reference in previous node
        if (currentNode.next.isEqual(value)) {
          if (currentNode.next.next) {
            currentNode.next.next.prev = currentNode;
          }
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
        this.deleteFirst();
        return true;
      }

      // if value is between head and tail
      let currentNode = this._head;

      while (currentNode.next) {
        // Deleting the node by delete it's reference in previous node
        if (currentNode.next.value === value) {
          if (currentNode.next.next) {
            currentNode.next.next.prev = currentNode;
          }
          // check if we should update this._tail
          if (this._tail?.isEqual(currentNode.next)) {
            this._tail = currentNode;
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
   * Removes the node at the start of the DoublyLinkedList<T>.
   */
  deleteFirst(): void {
    if (!this._head) {
      throw new Error('The DoublyLinkedList<T> is empty.');
    }

    if (this._head.next) {
      this._head.next.prev = null;
    }

    this._head = this._head.next;
    this._length--;
  }

  /**
   * Removes the node at the end of the DoublyLinkedList<T>.
   */
  deleteLast(): void {
    if (!this._tail) {
      throw new Error('The DoublyLinkedList<T> is empty.');
    }

    this._tail = this._tail.prev;
    this._length--;
  }

  /**
   * Finds the first node that contains the specified value.
   * @param value value of the node we want to find
   * @returns _LinkedListNode_ if there is a value otherwise _null_
   */
  find(value: T): DoublyLinkedListNode<T> | null {
    if (!this._head) {
      return null;
    }

    let currentNode: null | DoublyLinkedListNode<T> = this._head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  /**
   * Returns Node at the specified index
   * @param index index of the Node _starts from 0_
   * @returns LinkedListNode or _null_
   */
  get(index: number): DoublyLinkedListNode<T> | null {
    if (!this._head || index < 0) {
      return null;
    }

    let currentNode: null | DoublyLinkedListNode<T> = this._head;
    for (let i = 0; i < index; i++) {
      if (!currentNode) {
        return null;
      }
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  /**
   * Adds a new node or value after an existing node in the DoublyLinkedList<T>.
   * @param node The DoublyLinkedListNode<T> after which to insert _newNode_.
   * @param newNode The new **DoublyLinkedListNode<T>** or **value** to add to the DoublyLinkedList<T>.
   */
  insertAfter(node: DoublyLinkedListNode<T>, newNode: T): void;
  insertAfter(
    node: DoublyLinkedListNode<T>,
    newNode: DoublyLinkedListNode<T>
  ): void;
  insertAfter(
    node: DoublyLinkedListNode<T>,
    newNode: DoublyLinkedListNode<T> | T
  ): void {
    if (!node || !newNode) {
      throw new Error('ArgumentNullException');
    }

    if (node.listId !== this._id) {
      throw new Error('node is not in the current DoublyLinkedList.');
    }

    if (this.isLinkedListNode(newNode)) {
      if (newNode.listId !== undefined) {
        throw new Error('newNode belongs to another DoublyLinkedList.');
      }

      newNode.listId = this._id;
      newNode.next = node.next;
      newNode.prev = node;
      if (node.next) {
        node.next.prev = newNode;
      }
      node.next = newNode;
    } else {
      const newNodeObject = new DoublyLinkedListNode<T>(
        newNode,
        node.next,
        node,
        this._id
      );
      if (node.next) {
        node.next.prev = newNodeObject;
      }
      node.next = newNodeObject;
    }

    this._length++;
  }

  /**
   * Adds a new node or value before an existing node in the DoublyLinkedList<T>.
   * @param node The DoublyLinkedListNode<T> before which to insert _newNode_.
   * @param newNode The new **DoublyLinkedListNode<T>** or **value** to add to the DoublyLinkedList<T>.
   */
  insertBefore(node: DoublyLinkedListNode<T>, newNode: T): void;
  insertBefore(
    node: DoublyLinkedListNode<T>,
    newNode: DoublyLinkedListNode<T>
  ): void;
  insertBefore(
    node: DoublyLinkedListNode<T>,
    newNode: DoublyLinkedListNode<T> | T
  ): void {
    if (!node || !newNode) {
      throw new Error('ArgumentNullException');
    }

    if (node.listId !== this._id) {
      throw new Error('node is not in the current DoublyLinkedList.');
    }

    if (this.isLinkedListNode(newNode)) {
      if (newNode.listId !== undefined) {
        throw new Error('newNode belongs to another DoublyLinkedList.');
      }

      newNode.listId = this._id;
      newNode.next = node;
      newNode.prev = node.prev;
      if (node.prev) {
        node.prev.next = newNode;
      }
      node.prev = newNode;
    } else {
      const newNodeObject = new DoublyLinkedListNode<T>(
        newNode,
        node,
        node.prev,
        this._id
      );
      if (node.prev) {
        node.prev.next = newNodeObject;
      }
      node.prev = newNodeObject;
    }

    this._length++;
  }

  /**
   * Appends new Node at the beginning of the DoublyLinkedList<T>.
   * @param value value of the new node
   */
  prepend(value: T): void {
    const newNode = new DoublyLinkedListNode<T>(
      value,
      this._head,
      null,
      this._id
    );
    if (this._head) {
      this._head.prev = newNode;
    }
    this._head = newNode;

    if (!this._tail) {
      this._tail = newNode;
    }

    this._length++;
  }
}
