class Node<T = any> {
    constructor(public value: T, public next: null | Node<T> = null) { }
}

/**
 * Represents a variable size last-in-first-out (LIFO) collection of instances of the same specified type.
 * 
 * T: Specifies the type of elements in the stack.
 */
export class Stack<T = any> {

    private _first: null | Node<T> = null;
    private _last: null | Node<T> = null;
    private _size: number = 0;
    constructor() { }

    *iterator(): IterableIterator<T> {
        let currentItem = this._first;

        while (currentItem) {
            yield currentItem.value
            currentItem = currentItem.next
        }
    }

    [Symbol.iterator]() {
        return this.iterator();
    }

    /**
     * Gets the number of elements contained in the **Stack<T>**.
     */
    get length(): number {
        return this._size;
    }

    /**
     * Removes all objects from the Stack<T>.
     */
    clear() {
        this._first = null;
        this._last = null;
        this._size = 0;
    }

    /**
     * Determines whether an element is in the Stack<T>.
     * @param item The object to locate in the Stack<T>.
     * @returns {Boolean} true if item is found in the Stack<T>; otherwise, false.
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
     * Returns the object at the top of the Stack<T> without removing it.
     * @returns The object at the top of the Stack<T>.
     */
    peek(): T {

        if (this._first) {
            return this._first.value
        }

        throw new Error("InvalidOperationException");
    }

    /**
     * Removes and returns the object at the top of the Stack<T>.
     * @returns The object removed from the top of the Stack<T>.
     */
    pop(): T {
        if (!this._first) { throw new Error("InvalidOperationException") }

        const current = this._first;
        if (this._first === this._last) {
            this._last = null;
        }
        this._first = this._first.next;
        current.next = null;
        this._size--;
        return current.value;
    }

    /**
     * Inserts an object at the top of the Stack<T>.
     * @param value The object to push onto the Stack<T>
     */
    push(value: T) {
        const newNode = new Node<T>(value);

        if (!this._first) {
            this._first = newNode;
            this._last = newNode;
        } else {
            newNode.next = this._first;
            this._first = newNode;
        }

        this._size++;
    }

    /**
     * Returns a new array containing copies of the elements of the Stack<T>.
     * @returns A new array containing copies of the elements of the Stack<T>.
     */
    toArray(): T[] {
        const nodes = [];

        let currentNode = this._first;

        while (currentNode) {
            nodes.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return nodes;
    }
}