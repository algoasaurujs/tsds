<p align="center">
  <img height="50" src="https://github.com/algoasaurujs/tsds/blob/main/docs/public/logo.png" />
</p>

# <p align="center">TSDS</p>

<p align="center">TypeScript Data Structures that you need!</p>

![npm (scoped)](https://img.shields.io/npm/v/@algoasaurujs/tsds) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@algoasaurujs/tsds)

[Doc Website](https://algoasaurujs.github.io/tsds/)

# ****Introduction****

A data structure is a way to store and organize data in order to facilitate access and modifications. No single data structure works well for all purposes, and so it is important to know the strengths and limitations of several of them.

****Example:****

You may have used `Map` before, The `Map` object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

The `Map` is similar to `Object` But, The keys in `Map` are ordered in a simple, straightforward way: A `Map` object iterates entries, keys, and values in the order of entry insertion.

The `Map` is builtin in javascript but, There are lots of other useful Data Structures that are not implemented in JavaScript or TypeScript. We attempt to implement them in this library.

- [Introduction](#introduction)
- [Installation](#installation)
- [APIs](#apis)    
    - [BinaryHeap](#binaryheap)
        - [BinaryHeap.Properties](#binaryheapproperties)
            - [BinaryHeap.size](#binaryheapsize)
        - [BinaryHeap.Methods](#binaryheapmethods)
            - [BinaryHeap.[iterator]](#binaryheap[iterator])
            - [BinaryHeap.clear](#binaryheapclear)
            - [BinaryHeap.isEmpty](#binaryheapisempty)
            - [BinaryHeap.iterator](#binaryheapiterator)
            - [BinaryHeap.peek](#binaryheappeek)
            - [BinaryHeap.pop](#binaryheappop)
            - [BinaryHeap.push](#binaryheappush)
    - [LinkedList](#linkedlist)
        - [LinkedList.Properties](#linkedlistproperties)
            - [LinkedList.first](#linkedlistfirst)
            - [LinkedList.last](#linkedlistlast)
            - [LinkedList.length](#linkedlistlength)
        - [LinkedList.Methods](#linkedlistmethods)
            - [LinkedList.[iterator]](#linkedlist[iterator])
            - [LinkedList.append](#linkedlistappend)
            - [LinkedList.clear](#linkedlistclear)
            - [LinkedList.delete](#linkedlistdelete)
            - [LinkedList.deleteFirst](#linkedlistdeletefirst)
            - [LinkedList.find](#linkedlistfind)
            - [LinkedList.get](#linkedlistget)
            - [LinkedList.includes](#linkedlistincludes)
            - [LinkedList.insertAfter](#linkedlistinsertafter)
            - [LinkedList.isEmpty](#linkedlistisempty)
            - [LinkedList.iterator](#linkedlistiterator)
            - [LinkedList.prepend](#linkedlistprepend)
            - [LinkedList.toArray](#linkedlisttoarray)
    - [LinkedListNode](#linkedlistnode)
        - [LinkedListNode.Methods](#linkedlistnodemethods)
            - [LinkedListNode.isEqual](#linkedlistnodeisequal)
    - [PriorityQueue](#priorityqueue)
        - [PriorityQueue.Properties](#priorityqueueproperties)
            - [PriorityQueue.length](#priorityqueuelength)
        - [PriorityQueue.Methods](#priorityqueuemethods)
            - [PriorityQueue.[iterator]](#priorityqueue[iterator])
            - [PriorityQueue.clear](#priorityqueueclear)
            - [PriorityQueue.dequeue](#priorityqueuedequeue)
            - [PriorityQueue.enqueue](#priorityqueueenqueue)
            - [PriorityQueue.includes](#priorityqueueincludes)
            - [PriorityQueue.isEmpty](#priorityqueueisempty)
            - [PriorityQueue.iterator](#priorityqueueiterator)
            - [PriorityQueue.peek](#priorityqueuepeek)
            - [PriorityQueue.toArray](#priorityqueuetoarray)
    - [Queue](#queue)
        - [Queue.Properties](#queueproperties)
            - [Queue.length](#queuelength)
        - [Queue.Methods](#queuemethods)
            - [Queue.[iterator]](#queue[iterator])
            - [Queue.clear](#queueclear)
            - [Queue.dequeue](#queuedequeue)
            - [Queue.enqueue](#queueenqueue)
            - [Queue.includes](#queueincludes)
            - [Queue.isEmpty](#queueisempty)
            - [Queue.iterator](#queueiterator)
            - [Queue.peek](#queuepeek)
            - [Queue.toArray](#queuetoarray)
    - [Stack](#stack)
        - [Stack.Properties](#stackproperties)
            - [Stack.length](#stacklength)
        - [Stack.Methods](#stackmethods)
            - [Stack.[iterator]](#stack[iterator])
            - [Stack.clear](#stackclear)
            - [Stack.includes](#stackincludes)
            - [Stack.isEmpty](#stackisempty)
            - [Stack.iterator](#stackiterator)
            - [Stack.peek](#stackpeek)
            - [Stack.pop](#stackpop)
            - [Stack.push](#stackpush)
            - [Stack.toArray](#stacktoarray)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [Authors](#authors)
- [License](#license)

## ****Installation****

To install and save in your `package.json`dependencies, run:

```bash
npm install @algoasaurujs/tsds
```

## ****BinaryHeap****

A Binary Heap is a specialized tree-based data structure which is essentially an almost complete tree that satisfies the Binary Heap property

**Usage**

```typescript
import { BinaryHeap } from  '@algoasaurujs/tsds';

// instantiate new BinaryHeap

const queue = new BinaryHeap();
```

### **BinaryHeap.Properties**

### **BinaryHeap.size**

**Definition**

Gets the number of elements contained in the `BinaryHeap<T>`.

**Property Value**

`number`

**Example**

```typescript
const heap = new BinaryHeap<number>();

heap.push(1);
heap.push(2);
heap.push(3);

heap.size // => 3
```

**Remarks**

Retrieving the value of this property is an O(1) operation.

### **BinaryHeap.Methods**

### **BinaryHeap.[iterator]**

**Definition**

Returns an iterator over the elements contained in this collection.
With iterator protocols you are allowed it to be used with the `for...of`

**Example**

```typescript
for (const item of collection) {
	// You have access to the item
}
```

### **BinaryHeap._bubbleDown**

**Definition**

Recursively bubbles down a node if it's in a wrong position

**Parameters**

**startIndex`number`**: 

### **BinaryHeap._bubbleUp**

**Definition**

Recursively bubbles up a node if it's in a wrong position

**Parameters**

**startIndex`number`**: 

### **BinaryHeap._compareAt**

**Definition**

compares two element at index i and j with provided comparator

**Parameters**

**i`number`**: 

**j`number`**: 

### **BinaryHeap._compareChildrenOf**

**Definition**

Compares children of a parent

**Parameters**

**parentIndex`number`**: 

### **BinaryHeap._getLetChildIndex**

**Definition**

Retrieves the lest child index of the provided parent index

**Parameters**

**index`number`**: The index of the parent.

### **BinaryHeap._getParentIndex**

**Definition**

Retrieves the parent index of the provided child index

**Parameters**

**index`number`**: The index of the children.

### **BinaryHeap._getRightChildIndex**

**Definition**

Retrieves the right child index of the provided parent index

**Parameters**

**index`number`**: The index of the parent.

### **BinaryHeap._hasLeftChild**

**Definition**

Checks if a parent has a left child

**Parameters**

**parentIndex`number`**: 

### **BinaryHeap._hasRightChild**

**Definition**

Checks if a parent has a right child

**Parameters**

**parentIndex`number`**: 

### **BinaryHeap._shouldSwap**

**Definition**

Checks if parent and child should be swapped

**Parameters**

**parentIndex`number`**: 

**childIndex`number`**: 

### **BinaryHeap._swap**

**Definition**

Swaps two nodes in the BinaryHeap

**Parameters**

**i`number`**: 

**j`number`**: 

### **BinaryHeap.clear**

**Definition**

Clears `BinaryHeap<T>`.

**Example**

```typescript
const heap = new BinaryHeap<number>([10, 15, 20]);

heap.clear();
heap.isEmpty // => true
```

**Remarks**

This method is an O(1) operation.

### **BinaryHeap.isEmpty**

**Definition**

Checks if the `BinaryHeap<T>` is empty

**Example**

```typescript
const heap = new BinaryHeap<number>();

heap.isEmpty // => true
```

**Remarks**

This method is an O(1) operation.

### **BinaryHeap.iterator**

### **BinaryHeap.peek**

**Definition**

Returns the root node in the BinaryHeap

**Example**

```typescript
const heap = new BinaryHeap<number>([10, 15, 20]);

heap.peek() // => 20
```

**Remarks**

This method is an O(1) operation.

### **BinaryHeap.pop**

**Definition**

Removes and returns the root node in the BinaryHeap

**Example**

```typescript
const heap = new BinaryHeap<number>([10, 15, 20]);

heap.pop() // => 20
```

**Remarks**

This method is an O(log n) operation.

### **BinaryHeap.push**

**Definition**

Inserts a new value into the BinaryHeap

**Parameters**

**value`T`**: The value that you want to insert into the BinaryHeap

**Example**

```typescript
const heap = new BinaryHeap<number>([10, 15, 20]);

heap.push(40)
heap.peek() => // 40
```

**Remarks**

This method is an O(log n) operation.

## ****LinkedList****

A linear collection of data elements whose order is not given by their physical placement in memory.
Instead, each element points to the next.
It is a data structure consisting of a collection of nodes which together represent a sequence.

**Usage**

```typescript
import { LinkedList } from '@algoasaurujs/tsds';
```

### **LinkedList.Properties**

### **LinkedList.first**

**Definition**

Gets the first node of the `LinkedList<T>`.

**Property Value**

`null | LinkedListNode<T>`

**Example**

```typescript
const list = new LinkedList<number>([1, 2, 3, 4]);

list.first // => LinkListNode(1)
```

**Remarks**

If the `LinkedList<T>` is empty, the _first_ and _last_ properties contain `null`.
Retrieving the value of this property is an **O(1)** operation.

### **LinkedList.last**

**Definition**

Gets the last node of the `LinkedList<T>`.

**Property Value**

`null | LinkedListNode<T>`

**Example**

```typescript
const list = new LinkedList<number>([1, 2, 3, 4]);

list.last // => LinkListNode(4)
```

**Remarks**

If the `LinkedList<T>` is empty, the _first_ and _last_ properties contain `null`.

Retrieving the value of this property is an **O(1)** operation.

### **LinkedList.length**

**Definition**

Gets the number of nodes actually contained in the `LinkedList<T>`.

**Property Value**

`number`

**Example**

```typescript
const list = new LinkedList<number>([1, 2, 3, 4]);

list.length // => 4
```

**Remarks**

Retrieving the value of this property is an **O(1)** operation.

### **LinkedList.Methods**

### **LinkedList.[iterator]**

**Definition**

Returns an iterator over the elements contained in this collection.
With iterator protocols you are allowed it to be used with the `for...of`

**Example**

```typescript
for (const item of collection) {
	// You have access to the item
}
```

### **LinkedList.append**

**Definition**

Adds a new node or value at the end of the `LinkedList<T>`.

**Parameters**

**value`T`**: value of the new node.

**Example**

```typescript
const list = new LinkedList<number>([1, 2, 3, 4]);

list.length // => 4
list.append(5)
list.length // => 5
list.last // => LinkListNode(5)
```

**Remarks**

This method is an **O(1)** operation.

### **LinkedList.clear**

**Definition**

Removes all nodes from the `LinkedList<T>`.

**Example**

```typescript
const list = new LinkedList<number>([1, 2, 3, 4]);

list.length // => 4
list.clear();
list.length // => 0
```

### **LinkedList.delete**

**Overloads**

| Variant                                              | Definition                                                                    |
| ---------------------------------------------------- | ----------------------------------------------------------------------------- |
| [delete(node: LinkedListNode<T>): void](#1425238619) | Removes the first occurrence of a node from the `LinkedList<T>`.              |
| [delete(value: T): boolean](#-1089209997)            | Removes the first occurrence of the specified value from the `LinkedList<T>`. |

#### <a name="1425238619"></a>delete(node: LinkedListNode<T>): void

**Definition**

Removes the first occurrence of a node from the `LinkedList<T>`.

**Parameters**

**node`LinkedListNode<T>`**: The `LinkedListNode<T>` to remove from the LinkedList<T>`.
@example
```typescript
const list = new LinkedList<number>([1, 2, 3, 4]);

list.length // => 4
list.delete(4)
list.length // => 3
list.last // => LinkListNode(3)
```
@throws {InvalidOperationException} node is not in the current `LinkedList<T>`.

**Remarks**

This method is an **O(n)** operation.

#### <a name="-1089209997"></a>delete(value: T): boolean

**Definition**

Removes the first occurrence of the specified value from the `LinkedList<T>`.

**Parameters**

**value`T`**: The value to remove from the `LinkedList<T>`.

**Returns**

`boolean`

`true` if the element containing value is successfully removed; otherwise, `false`. This method also returns `false` if value was not found in the original `LinkedList<T>`.

**Example**

```typescript
const list = new LinkedList<number>([1, 2, 3, 4]);

list.length // => 4
list.delete(4)
list.length // => 3
list.last // => LinkListNode(3)
```

**Remarks**

This method is an **O(n)** operation.

### **LinkedList.deleteFirst**

**Definition**

Removes the node at the start of the `LinkedList<T>`.

**Example**

```typescript
const list = new LinkedList<number>([1, 2, 3, 4]);

list.length // => 4
list.deleteFirst();
list.length // => 3
list.first // => LinkListNode(2)
```

**Remarks**

This method is an **O(1)** operation.

### **LinkedList.find**

**Definition**

Finds the first node that contains the specified value.

**Parameters**

**value`T`**: value of the node we want to find

**Returns**

`null | LinkedListNode<T>`

`LinkedListNode` if there is a value otherwise `null`

**Example**

```typescript
const list = new LinkedList<number>([1, 2, 3, 4]);

const item = list.find(2)

const nullItem = list.find(10) // => null
```

**Remarks**

This method is an **O(n)** operation.

### **LinkedList.get**

**Definition**

Returns Node at the specified _index_

**Parameters**

**index`number`**: index of the Node **starts from 0**

**Returns**

`null | LinkedListNode<T>`

`LinkedListNode` of the specified index, if index is less than length; otherwise, `null`.

**Example**

```typescript
const list = new LinkedList<number>([1, 2, 3, 4]);

const item = list.get(2)

const nullItem = list.get(10) // => null
```

**Remarks**

This method is an **O(n)** operation.

### **LinkedList.includes**

**Definition**

This implementation iterates over the elements in the collection,
checking each element in turn for equality with the specified element.

**Parameters**

**o`T`**: 

### **LinkedList.insertAfter**

**Overloads**

| Variant                                                                               | Definition                                                          |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [insertAfter(node: LinkedListNode<T>, newNode: T): void](#1906757379)                 | Adds a new _value_ after an existing _node_ in the LinkedList<T>.   |
| [insertAfter(node: LinkedListNode<T>, newNode: LinkedListNode<T>): void](#1865363786) | Adds a new _node_ or after an existing _node_ in the LinkedList<T>. |

#### <a name="1906757379"></a>insertAfter(node: LinkedListNode<T>, newNode: T): void

**Definition**

Adds a new _value_ after an existing _node_ in the LinkedList<T>.

**Parameters**

**node`LinkedListNode<T>`**: The `LinkedListNode<T>` after which to insert `newNode`.

**newNode`T`**: The new `value` to add to the `LinkedList<T>`.

#### <a name="1865363786"></a>insertAfter(node: LinkedListNode<T>, newNode: LinkedListNode<T>): void

**Definition**

Adds a new _node_ or after an existing _node_ in the LinkedList<T>.

**Parameters**

**node`LinkedListNode<T>`**: The `LinkedListNode<T>` after which to insert `newNode`.

**newNode`LinkedListNode<T>`**: The new `LinkedListNode<T>` or `value` to add to the `LinkedList<T>`.

### **LinkedList.isEmpty**

**Definition**

This implementation returns `length === 0`.

### **LinkedList.isLinkedListNode**

**Definition**

Checks if argument is `LinkedListNode` or not

**Parameters**

**x`any`**: an argument to check if it is `LinkedListNode`

**Returns**

`x is LinkedListNode<any>`

if argument is `LinkedListNode` or not

### **LinkedList.iterator**

**Definition**



### **LinkedList.prepend**

**Definition**

Appends new Node at the beginning of the `LinkedList<T>`.

**Parameters**

**value`T`**: value of the new node

**Example**

```typescript
const list = new LinkedList<number>([1, 2, 3, 4]);

list.length // => 4
list.prepend(0)
list.length // => 5
list.first // => LinkListNode(0)
```

**Remarks**

This method is an **O(1)** operation.

### **LinkedList.toArray**

**Definition**

This implementation returns an array containing all the elements
returned by this collection's iterator, in the same order, stored in
consecutive elements of the array, starting with index `0`.
The length of the returned array is equal to the number of elements
returned by the iterator, even if the size of this collection changes
during iteration, as might happen if the collection permits
concurrent modification during iteration. The `length` property is
called only as an optimization hint; the correct result is returned
even if the iterator returns a different number of elements.

## ****LinkedListNode****

### **LinkedListNode.Methods**

### **LinkedListNode.isEqual**

**Parameters**

**node`LinkedListNode<any>`**: 

## ****PriorityQueue****

A priority queue is an abstract data-type similar to a regular queue or stack data structure in which each element additionally has a priority associated with it.
In a priority queue, an element with high priority is served before an element with low priority.
In this implementation if two elements have the same priority, ordering of elements with the same priority remains undefined.

The operation of adding an element to the rear of the queue is known as enqueue, and the operation of removing an element from the front is known as _dequeue_.

**Usage**

```typescript
import { PriorityQueue } from  '@algoasaurujs/tsds';

// instantiate new PriorityQueue

const queue = new PriorityQueue();
```

### **PriorityQueue.Properties**

### **PriorityQueue.length**

**Definition**

Gets the number of elements contained in the `PriorityQueue<T>`.

**Property Value**

`number`

**Example**

```typescript
const queue = new PriorityQueue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.length // => 3
```

**Remarks**

Retrieving the value of this property is an O(1) operation.

### **PriorityQueue.Methods**

### **PriorityQueue.[iterator]**

**Definition**

Returns an iterator over the elements contained in this collection.
With iterator protocols you are allowed it to be used with the `for...of`

**Example**

```typescript
for (const item of collection) {
	// You have access to the item
}
```

### **PriorityQueue.clear**

**Definition**

Removes all objects from the `PriorityQueue<T>`.

**Example**

```typescript
const queue = new PriorityQueue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.length // => 3
queue.clear()
queue.length // => 0
```

### **PriorityQueue.dequeue**

**Definition**

Removes and returns the object at the beginning of the `PriorityQueue<T>`.

**Returns**

`T`

The object that is removed from the beginning of the `PriorityQueue<T>`.

**Example**

```typescript
const queue = new PriorityQueue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.dequeue() // => 3
queue.length // => 2
```

**Remarks**

This method is an **O(1)** operation.

### **PriorityQueue.enqueue**

**Definition**

Adds an object to the end of the `PriorityQueue<T>`.

**Parameters**

**value`T`**: The object to add to the `PriorityQueue<T>`

**Example**

```typescript
const queue = new PriorityQueue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.length // => 3
```

**Remarks**

This method is an **O(1)** operation.

### **PriorityQueue.includes**

**Definition**

This implementation iterates over the elements in the collection,
checking each element in turn for equality with the specified element.

**Parameters**

**o`T`**: 

### **PriorityQueue.isEmpty**

**Definition**

This implementation returns `length === 0`.

### **PriorityQueue.iterator**

### **PriorityQueue.peek**

**Definition**

Returns the object at the beginning of the `PriorityQueue<T>` without removing it.

**Returns**

`T`

The object at the beginning of the `PriorityQueue<T>`.

**Example**

```typescript
const queue = new PriorityQueue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.peek() // => 3
```

**Remarks**

This method is an **O(1)** operation.

### **PriorityQueue.toArray**

**Definition**

This implementation returns an array containing all the elements
returned by this collection's iterator, in the same order, stored in
consecutive elements of the array, starting with index `0`.
The length of the returned array is equal to the number of elements
returned by the iterator, even if the size of this collection changes
during iteration, as might happen if the collection permits
concurrent modification during iteration. The `length` property is
called only as an optimization hint; the correct result is returned
even if the iterator returns a different number of elements.

## ****Queue****

Represents a first-in, first-out collection of objects.

A queue is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and the removal of entities from the other end of the sequence. By convention, the end of the sequence at which elements are added is called the back, tail, or rear of the queue, and the end at which elements are removed is called the head or front of the queue.

The operation of adding an element to the rear of the queue is known as enqueue, and the operation of removing an element from the front is known as _dequeue_.

**Usage**

```typescript
import { Queue } from  '@algoasaurujs/tsds';

// instantiate new Queue

const queue = new Queue();
```

### **Queue.Properties**

### **Queue.length**

**Definition**

Gets the number of elements contained in the `Queue<T>`.

**Property Value**

`number`

**Example**

```typescript
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.length // => 3
```

**Remarks**

Retrieving the value of this property is an O(1) operation.

### **Queue.Methods**

### **Queue.[iterator]**

**Definition**

Returns an iterator over the elements contained in this collection.
With iterator protocols you are allowed it to be used with the `for...of`

**Example**

```typescript
for (const item of collection) {
	// You have access to the item
}
```

### **Queue.clear**

**Definition**

Removes all objects from the `Queue<T>`.

**Example**

```typescript
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.length // => 3
queue.clear()
queue.length // => 0
```

### **Queue.dequeue**

**Definition**

Removes and returns the object at the beginning of the `Queue<T>`.

**Returns**

`T`

The object that is removed from the beginning of the `Queue<T>`.

**Example**

```typescript
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.dequeue() // => 3
queue.length // => 2
```

**Remarks**

This method is an **O(1)** operation.

### **Queue.enqueue**

**Definition**

Adds an object to the end of the `Queue<T>`.

**Parameters**

**value`T`**: The object to add to the `Queue<T>`

**Example**

```typescript
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.length // => 3
```

**Remarks**

This method is an **O(1)** operation.

### **Queue.includes**

**Definition**

This implementation iterates over the elements in the collection,
checking each element in turn for equality with the specified element.

**Parameters**

**o`T`**: 

### **Queue.isEmpty**

**Definition**

This implementation returns `length === 0`.

### **Queue.iterator**

### **Queue.peek**

**Definition**

Returns the object at the beginning of the `Queue<T>` without removing it.

**Returns**

`T`

The object at the beginning of the `Queue<T>`.

**Example**

```typescript
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.peek() // => 3
```

**Remarks**

This method is an **O(1)** operation.

### **Queue.toArray**

**Definition**

This implementation returns an array containing all the elements
returned by this collection's iterator, in the same order, stored in
consecutive elements of the array, starting with index `0`.
The length of the returned array is equal to the number of elements
returned by the iterator, even if the size of this collection changes
during iteration, as might happen if the collection permits
concurrent modification during iteration. The `length` property is
called only as an optimization hint; the correct result is returned
even if the iterator returns a different number of elements.

## ****Stack****

Represents a variable size last-in-first-out (LIFO) collection of instances of the same specified type.

A stack is an abstract data type that serves as a collection of elements, with two main principal operations:
- Push, which adds an element to the collection, and
- Pop, which removes the most recently added element that was not yet removed.

The order in which elements come off a stack gives rise to its alternative name, LIFO (last in, first out). Additionally, a peek operation may give access to the top without modifying the stack.

**Usage**

```typescript
import { Stack } from '@algoasaurujs/tsds';
// instantiate new Stack
const stack = new Stack();
```

### **Stack.Properties**

### **Stack.length**

**Definition**

Gets the number of elements contained in the `Stack<T>`.

**Property Value**

`number`

**Example**

```typescript
const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

stack.length // => 3
```

**Remarks**

Retrieving the value of this property is an **O(1)** operation.

### **Stack.Methods**

### **Stack.[iterator]**

**Definition**

Returns an iterator over the elements contained in this collection.
With iterator protocols you are allowed it to be used with the `for...of`

**Example**

```typescript
for (const item of collection) {
	// You have access to the item
}
```

### **Stack.clear**

**Definition**

Removes all objects from the Stack<T>.

**Example**

```typescript
const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

stack.length // => 3
stack.clear()
stack.length // => 0
```

### **Stack.includes**

**Definition**

This implementation iterates over the elements in the collection,
checking each element in turn for equality with the specified element.

**Parameters**

**o`T`**: 

### **Stack.isEmpty**

**Definition**

This implementation returns `length === 0`.

### **Stack.iterator**

### **Stack.peek**

**Definition**

Returns the object at the top of the Stack<T> without removing it.

**Returns**

`T`

The object at the top of the Stack<T>.

**Example**

```typescript
const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

stack.peek() // => 3
```

**Remarks**

This method is an O(1) operation.

### **Stack.pop**

**Definition**

Removes and returns the object at the top of the Stack<T>.

**Returns**

`T`

The object removed from the top of the Stack<T>.

**Example**

```typescript
const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

stack.pop() // => 3
stack.length // => 2
```

**Remarks**

This method is an O(1) operation.

### **Stack.push**

**Definition**

Inserts an object at the top of the Stack<T>.

**Parameters**

**value`T`**: The object to push onto the Stack<T>

**Example**

```typescript
const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

stack.length // => 3
```

**Remarks**

This method is an O(1) operation.

### **Stack.toArray**

**Definition**

This implementation returns an array containing all the elements
returned by this collection's iterator, in the same order, stored in
consecutive elements of the array, starting with index `0`.
The length of the returned array is equal to the number of elements
returned by the iterator, even if the size of this collection changes
during iteration, as might happen if the collection permits
concurrent modification during iteration. The `length` property is
called only as an optimization hint; the correct result is returned
even if the iterator returns a different number of elements.

## Built With

* [tsdx](https://tsdx.io/) - Zero-config CLI for TypeScript package development

## Contributing

Please do not hesitate to contact me and contribute on this project.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/algoasaurujs/tsds/tags). 

## Authors

* [Ehsan Samavati](https://github.com/samavati)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/algoasaurujs/tsds/blob/main/LICENSE) file for details
