import { LinkedListNode } from './LinkedListNode';

/**
 * A linear collection of data elements whose order is not given by their physical placement in memory.
 * Instead, each element points to the next.
 * It is a data structure consisting of a collection of nodes which together represent a sequence. 
 */
export class LinkedList<T = any> {
    /**
     * First element of the list
     */
    private _head: null | LinkedListNode<T> = null;

    /**
     * Last element of the list
     */
    private _tail: null | LinkedListNode<T> = null;

    /**
     * Node count in the list
     */
    private _length: number = 0;

    /**
     * LinkedList Identifier
     */
    private _id = Symbol();

    /**
     * Create new LinkedList instance
     * @param initialValue initial value of LinkedList, Array of any value (Optional)
     */
    constructor(private initialValue?: T[]) {
        if (this.initialValue) {
            for (const data of this.initialValue) {
                this.append(data);
            }
        }
    }

    *iterator(): IterableIterator<T> {
        let currentItem = this._head;

        while (currentItem) {
            yield currentItem.value
            currentItem = currentItem.next
        }
    }

    [Symbol.iterator]() {
        return this.iterator();
    }

    private isLinkedListNode(x: any): x is LinkedListNode {
        return x instanceof LinkedListNode;
    }

    /**
     * Gets the first node of the LinkedList<T>.
     */
    get first() {
        return this._head;
    }

    /**
     * Gets the last node of the LinkedList<T>.
     */
    get last() {
        return this._tail;
    }

    /**
     * Gets the number of nodes actually contained in the LinkedList<T>.
     */
    get length() {
        return this._length;
    }

    /**
     * Adds a new node or value at the end of the LinkedList&lt;T&gt;.
     * @param value value of the new node
     */
    append(value: T): void {
        const newNode = new LinkedListNode<T>(value, null, this._id);

        if (!this._head) {
            this._head = newNode;
        }

        if (this._tail) {
            this._tail.next = newNode;
        }

        this._tail = newNode;
        this._length++
    }

    /**
     * Removes all nodes from the LinkedList<T>.
     */
    clear() {
        this._head = null;
        this._tail = null;
        this._length = 0;
    }

    /**
     * Removes the first occurrence of a node or value from the LinkedList<T>.
     * @param value The LinkedListNode<T> to remove from the LinkedList<T>.
     */
    delete(node: LinkedListNode<T>): void
    /**
     * Removes the first occurrence of the specified value from the LinkedList<T>.
     * @param value The value to remove from the LinkedList<T>.
     * @returns _true_ if the element containing value is successfully removed; otherwise, _false_. This method also returns _false_ if value was not found in the original LinkedList<T>.
     */
    delete(value: T): boolean
    delete(value: T | LinkedListNode<T>): void | boolean {

        if (this.isLinkedListNode(value)) {

            if (!this._head || !value || value.listId !== this._id) {
                throw new Error("InvalidOperationException: node is not in the current LinkedList<T>.");
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
                    return;
                } else {
                    currentNode = currentNode.next;
                }
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
                    currentNode.next = currentNode.next.next;
                    this._length--;
                    return true
                } else {
                    currentNode = currentNode.next;
                }
            }

            return false
        }
    }

    /**
     * Removes the node at the start of the LinkedList<T>.
     */
    deleteFirst(): void {

        if (!this._head) {
            throw new Error("The LinkedList<T> is empty.");
        }

        this._head = this._head.next;
        this._length--;
    }

    /**
     * Finds the first node that contains the specified value.
     * @param value value of the node we want to find
     * @returns _LinkedListNode_ if there is a value otherwise _null_
     */
    find(value: T): LinkedListNode<T> | null {
        if (!this._head) {
            return null;
        }

        let currentNode: null | LinkedListNode<T> = this._head;
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
    get(index: number): LinkedListNode<T> | null {

        if (!this._head || index < 0) {
            return null;
        }

        let currentNode: null | LinkedListNode<T> = this._head;
        for (let i = 0; i < index; i++) {
            if (!currentNode) {
                return null
            }
            currentNode = currentNode.next
        }

        return currentNode
    }

    /**
     * Determines whether a value is in the LinkedList<T>.
     * @param value The value to locate in the LinkedList<T>.
     * @returns {Boolean} _true_ if value is found in the LinkedList<T>; otherwise, _false_.
     */
    includes(value: T): boolean {

        if (!this._head) {
            return false;
        }

        let currentNode: null | LinkedListNode<T> = this._head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            } else {
                currentNode = currentNode.next;
            }
        }

        return false;
    }

    /**
     * Adds a new node or value after an existing node in the LinkedList<T>.
     * @param node The LinkedListNode<T> after which to insert _newNode_.
     * @param newNode The new **LinkedListNode<T>** or **value** to add to the LinkedList<T>.
     */
    insertAfter(node: LinkedListNode<T>, newNode: T): void
    insertAfter(node: LinkedListNode<T>, newNode: LinkedListNode<T>): void
    insertAfter(node: LinkedListNode<T>, newNode: LinkedListNode<T> | T): void {

        if (!node || !newNode) {
            throw new Error("ArgumentNullException");
        }

        if (node.listId !== this._id) {
            throw new Error("node is not in the current LinkedList.");
        }

        if (this.isLinkedListNode(newNode)) {

            if (newNode.listId !== undefined) {
                throw new Error("newNode belongs to another LinkedList.");
            }

            newNode.listId = this._id;
            newNode.next = node.next;
            node.next = newNode;
        } else {
            const newNodeObject = new LinkedListNode<T>(newNode, node.next, this._id);
            node.next = newNodeObject;
        }

        this._length++
    }

    /**
     * Appends new Node at the beginning of the LinkedList<T>.
     * @param value value of the new node
     */
    prepend(value: T): void {

        const newNode = new LinkedListNode<T>(value, this._head, this._id);
        this._head = newNode;

        if (!this._tail) {
            this._tail = newNode;
        }

        this._length++
    }

    /**
     * Returns array of all values in LinkedList<T>.
     * @returns array of values
     */
    toArray(): T[] {
        const nodes = [];

        let currentNode = this._head;

        while (currentNode) {
            nodes.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return nodes;
    }

}
