<p align="center">
  <img height="50" src="https://raw.githubusercontent.com/samavati/tsds/main/docs/src/assets/images/tsds-logo.png" />
</p>

# <p align="center">TSDS</p>

<p align="center">TypeScript Data Structures that you need!</p>

![NPM](https://img.shields.io/npm/l/@samavati/tsds) ![npm (scoped)](https://img.shields.io/npm/v/@samavati/tsds) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@samavati/tsds)

[Doc Website](https://samavati.github.io/tsds/)

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
npm install @samavati/tsds
```

## ****BinaryHeap****

A Binary Heap is a specialized tree-based data structure which is essentially an almost complete tree that satisfies the Binary Heap property

**Usage**

```typescript
import { BinaryHeap } from  '@samavati/tsds';

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

