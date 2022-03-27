import { LinkedListNode } from './LinkedListNode';

/**
 * A linear collection of data elements whose order is not given by their physical placement in memory.
 * Instead, each element points to the next.
 * It is a data structure consisting of a collection of nodes which together represent a sequence. 
 */
export class LinkedList<U = any> {
    /**
     * First element of the list
     */
    private _head: null | LinkedListNode<U> = null;

    /**
     * Last element of the list
     */
    private _tail: null | LinkedListNode<U> = null;

    constructor() { }

    /**
     * Returns Node at the specified index
     * @param index index of the Node _starts from 0_
     * @returns LinkedListNode or _null_
     */
    get(index: number): LinkedListNode<U> | null {

        if (!this._head || index < 0) {
            return null;
        }

        let currentNode: null | LinkedListNode<U> = this._head;
        for (let i = 0; i < index; i++) {
            if (!currentNode) {
                return null
            }
            currentNode = currentNode.next
        }

        return currentNode
    }

    /**
     * Append new Node to the LinkedList
     * @param value value of the new node
     */
    append(value: U): void {
        const newNode = new LinkedListNode<U>(value, null);

        if (!this._head) {
            this._head = newNode;
        }

        if (this._tail) {
            this._tail.next = newNode;
        }

        this._tail = newNode;
    }

    /**
     * Appends new Node at the beginning of the LinkedList
     * @param value value of the new node
     */
    prepend(value: U): void {

        const newNode = new LinkedListNode<U>(value, this._head);
        this._head = newNode;

        if (!this._tail) {
            this._tail = newNode;
        }
    }

    /**
     * Delete all occurrences of value
     * @param value value of the node we want to **delete**
     */
    delete(value: U): void {
        if (!this._head) {
            return;
        }

        // if head is the node that should delete
        while (this._head && this._head.value === value) {
            this._head = this._head.next;
        }

        // if value is between head and tail
        let currentNode = this._head;
        //  check if head is not null yet
        if (currentNode) {
            while (currentNode.next) {
                // Deleting the node by delete it's reference in previous node
                if (currentNode.next.value === value) {
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        // if head is the node that should delete
        if (this._tail?.value === value) {
            this._tail = currentNode;
        }
    }

    /**
     * Add a node after a given node
     * @param value value that we want to add as new node
     * @param afterValue value of the node which we want to add new node after
     * @returns _true_ if added successfully otherwise _false_
     */
    insertAfter(value: U, afterValue: U): boolean {
        const existingNode = this.find(afterValue);

        if (existingNode) {
            const newNode = new LinkedListNode<U>(value, existingNode.next);
            existingNode.next = newNode;
            return true;
        }

        return false;
    }

    /**
     * Find first occurrence of the value
     * @param value value of the node we want to find
     * @returns _LinkedListNode_ if there is a value otherwise _null_
     */
    find(value: U): LinkedListNode<U> | null {
        if (!this._head) {
            return null;
        }

        let currentNode: null | LinkedListNode<U> = this._head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return null;
    }

    /**
     * Returns array of all nodes in LinkedList
     * @returns array of _LinkedListNode_
     */
    toArray(): LinkedListNode<U>[] {
        const nodes = [];

        let currentNode = this._head;

        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodes;
    }

}
