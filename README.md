<p align="center">
  <img height="50" src="https://github.com/samavati/tsds/blob/main/docs/src/assets/images/tsds-logo.png" />
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

## Table of Contents

- [Installation](#installation)
- [APIs](#apis)
    - [LinkedList<T>](#linkedlist)
        - [LinkedList.Properties](#linkedlistproperties)
            - [LinkedList.first](#linkedlistfirst)
            - [LinkedList.last](#linkedlistlast)
            - [LinkedList.length](#linkedlistlength)
        - [LinkedList.Methods](#linkedlistmethods)
            - [LinkedList.append](#linkedlistappend)
            - [LinkedList.clear](#linkedlistclear)
            - [LinkedList.delete](#linkedlistdelete)
            - [LinkedList.deleteFirst](#linkedlistdeletefirst)
            - [LinkedList.find](#linkedlistfind)
            - [LinkedList.get](#linkedlistget)
            - [LinkedList.includes](#linkedlistincludes)
            - [LinkedList.insertAfter](#linkedlistinsertafter)
            - [LinkedList.prepend](#linkedlistprepend)
            - [LinkedList.toArray](#linkedlisttoarray)
    - [Stack<T>](#stack)
        - [Stack.Properties](#stackproperties)
            - [Stack.length](#stacklength)
        - [Stack.Methods](#stackmethods)
            - [Stack.clear](#stackclear)
            - [Stack.includes](#stackincludes)
            - [Stack.peek](#stackpeek)
            - [Stack.pop](#stackpop)
            - [Stack.push](#stackpush)
            - [Stack.toArray](#stacktoarray)
    - [Queue<T>](#queue)
        - [Queue.Properties](#queueproperties)
            - [Queue.length](#queuelength)
        - [Queue.Methods](#queuemethods)
            - [Queue.clear](#queueclear)
            - [Queue.includes](#queueincludes)
            - [Queue.dequeue](#queuedequeue)
            - [Queue.enqueue](#queueenqueue)
            - [Queue.peek](#queuepeek)
            - [Queue.toArray](#queuetoarray)
## ****Installation****

To install and save in your `package.json`dependencies, run:

```bash
npm install @samavati/tsds
```

## ****APIs****

## ****LinkedList<T>****

A linked list is a data structure in which the objects are arranged in a linear order. Unlike an array, however, in which the linear order is determined by the array indices, the order in a linked list is determined by a pointer in each object.

**Usage**

```tsx
import { LinkedList } from '@samavati/tsds';

// instantiate new linked list without initial set-up
const list = new LinkedList();

// instantiate new linked list with initial values
const list2 = new LinkedList([1, 2, 3, 4, 5]);
```

The list supports iterator protocols allowing it to be used with the `for...of`

```tsx
import { LinkedList } from '@samavati/tsds';

const list = new LinkedList([1, 2, 3]);

for (let item of list) {
	console.log(item)
}
// 1
// 2
// 3
```

### **LinkedList.Properties**

### **LinkedList.first**

**Definition**

Gets the first node of the LinkedList<T>.

**Property Value**

LinkedListNode<T>

The first LinkedListNode<T> of the LinkedList<T>.

**Example**

```tsx
const list = new LinkedList<number>([1, 2, 3, 4]);

list.first // => LinkListNode(1)
```

**Remarks**

If the LinkedList<T> is empty, the First and Last properties contain null.

Retrieving the value of this property is an O(1) operation.

### **LinkedList.last**

**Definition**

Gets the last node of the LinkedList<T>.

**Property Value**

LinkedListNode<T>

The last LinkedListNode<T> of the LinkedList<T>.

**Example**

```tsx
const list = new LinkedList<number>([1, 2, 3, 4]);

list.last // => LinkListNode(4)
```

**Remarks**

If the LinkedList<T> is empty, the First and Last properties contain null.

Retrieving the value of this property is an O(1) operation.

### **LinkedList.length**

**Definition**

Gets the number of nodes actually contained in the LinkedList<T>.

**Property Value**

number

**Example**

```tsx
const list = new LinkedList<number>([1, 2, 3, 4]);

list.length // => 4
```

**Remarks**

Retrieving the value of this property is an O(1) operation.

### **LinkedList.Methods**

### **LinkedList.append**

**Definition**

Adds a new node or value at the end of the LinkedList<T>.

**Parameters**

**value `T`:** The new value to add at the end of the LinkedList<T>.

**Example**

```tsx
const list = new LinkedList<number>([1, 2, 3, 4]);

list.length // => 4
list.append(5)
list.length // => 5
list.last // => LinkListNode(5)
```

**Remarks**

This method is an O(1) operation.

### **LinkedList.clear**

**Definition**

Removes all nodes from the LinkedList<T>.

**Example**

```tsx
const list = new LinkedList<number>([1, 2, 3, 4]);

list.length // => 4
list.clear();
list.length // => 0
```

### **LinkedList.delete**

**Definition**

Removes the first occurrence of a node or value from the LinkedList<T>.

| Variant                           | Definition                                                                    |
| --------------------------------- | ----------------------------------------------------------------------------- |
| (node: LinkedListNode<T>) => void | Removes the first occurrence of a node from the `LinkedList<T>`.              |
| (value: T) => Boolean             | Removes the first occurrence of the specified value from the `LinkedList<T>`. |

**Example**

```tsx
const list = new LinkedList<number>([1, 2, 3, 4]);

list.length // => 4
list.delete(4)
list.length // => 3
list.last // => LinkListNode(3)
```

**Remarks**

This method is an O(n) operation.

### **LinkedList.deleteFirst**

**Definition**

Removes the node at the start of the LinkedList<T>.

**Example**

```tsx
const list = new LinkedList<number>([1, 2, 3, 4]);

list.length // => 4
list.deleteFirst();
list.length // => 3
list.first // => LinkListNode(2)
```

**Remarks**

This method is an O(1) operation.

### **LinkedList.find**

**Definition**

Finds the first node that contains the specified value.

**Parameters**

**value `T`:** The value to locate in the LinkedList<T>.

**Returns**

The first LinkedListNode<T> that contains the specified value, if found; otherwise, null.

**Example**

```tsx
const list = new LinkedList<number>([1, 2, 3, 4]);

const item = list.find(2)

const nullItem = list.find(10) // => null
```

**Remarks**

This method is an O(n) operation.

### **LinkedList.get**

**Definition**

Returns Node at the specified index

**Parameters**

**index `number`:** index of the Node starts, from 0

**Returns**

LinkedListNode<T> of the specified index, if index is less than length; otherwise, null.

**Example**

```tsx
const list = new LinkedList<number>([1, 2, 3, 4]);

const item = list.get(2)

const nullItem = list.get(10) // => null
```

**Remarks**

This method is an O(n) operation.

### **LinkedList.includes**

**Definition**

Determines whether a value is in the LinkedList<T>.

**Parameters**

**value `T`:** The value to locate in the LinkedList<T>.

**Returns**

`boolean`

true if value is found in the LinkedList<T>; otherwise, false.

**Example**

```tsx
const list = new LinkedList<number>([1, 2, 3, 4]);

list.includes(2) // => true
list.includes(10) // => false
```

**Remarks**

This method is an O(n) operation.

### **LinkedList.insertAfter**

**Definition**

Adds a new node or value after an existing node in the LinkedList<T>.

**Example**

```tsx
const list = new LinkedList<number>([1, 2, 3, 4]);

const item = list.get(2);
if (item) {
	list.insertAfter(item, 'hello');

	const world = new LinkedListNode('world');
	list.insertAfter(item, world);
}
```

**Remarks**

This method is an O(1) operation.

### **LinkedList.prepend**

**Definition**

Adds a new node or value at the start of the LinkedList<T>.

**Parameters**

**value `T`:** The new value to add at the start of the LinkedList<T>.

**Example**

```tsx
const list = new LinkedList<number>([1, 2, 3, 4]);

list.length // => 4
list.prepend(0)
list.length // => 5
list.first // => LinkListNode(0)
```

**Remarks**

This method is an O(1) operation.

### **LinkedList.toArray**

**Definition**

Returns the entire LinkedList<T> to a compatible one-dimensional Array

**Example**

```tsx
const list = new LinkedList<number>([1, 2, 3, 4]);

list.prepend(0)
list.toArray() // => [0, 1, 2, 3, 4]
```

**Remarks**

This method is an O(n) operation.

## ****Stack<T>****

A stack is an abstract data type that serves as a collection of elements, with two main principal operations:
• Push, which adds an element to the collection, and
• Pop, which removes the most recently added element that was not yet removed.
The order in which elements come off a stack gives rise to its alternative name, LIFO (last in, first out). Additionally, a peek operation may give access to the top without modifying the stack.

**Usage**

```tsx
import { Stack } from '@samavati/tsds';

// instantiate new Stack
const stack = new Stack();
```

The stack supports iterator protocols allowing it to be used with the `for...of`

```tsx
import { Stack } from '@samavati/tsds';

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

for (const item of stack) {
	console.log(item)
}

// 3
// 2
// 1
```

### **Stack.Properties**

### **Stack.length**

**Definition**

Gets the number of elements contained in the Stack.

**Property Value**

`number`

**Example**

```tsx
const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

stack.length // => 3
```

**Remarks**

Retrieving the value of this property is an O(1) operation.

### **Stack.Methods**

### **Stack.clear**

**Definition**

Removes all objects from the Stack.

**Example**

```tsx
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

Determines whether an element is in the Stack.

**Parameters**

**item `T`**The object to locate in the Stack.

**Returns**

`boolean`

true if item is found in the Stack; otherwise, false.

**Example**

```tsx
const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

stack.includes(2) // => true
stack.includes(10) // => false
```

**Remarks**

This method is an O(n) operation.

### **Stack.peek**

**Definition**

Returns the object at the top of the Stack without removing it.

**Returns**

`T`

The object at the top of the Stack.

**Example**

```tsx
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

Removes and returns the object at the top of the Stack.

**Returns**

`T`

The object at the top of the Stack.

**Example**

```tsx
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

Inserts an object at the top of the Stack.

**Parameters**

**value `T`:** The object to push onto the Stack.

**Example**

```tsx
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

Returns the entire Stack<T> to a compatible one-dimensional Array

**Example**

```tsx
const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

stack.toArray() // => [3, 2, 1]
```

**Remarks**

This method is an O(n) operation.
## ****Queue<T>****

**first-in-first-out (FIFO) data structure**

A  **queue**  is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and the removal of entities from the other end of the sequence. By convention, the end of the sequence at which elements are added is called the back, tail, or rear of the queue, and the end at which elements are removed is called the head or front of the queue

The operation of adding an element to the rear of the queue is known as  _enqueue_, and the operation of removing an element from the front is known as  _dequeue_

**Usage**

```tsx
import { Queue } from  '@samavati/tsds';

// instantiate new Queue

const queue = new Queue();
```

The queue supports iterator protocols allowing it to be used with the `for...of`

```tsx
import { Queue } from  '@samavati/tsds';

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

for (const  item  of  queue) {
console.log(item)
}
// 1
// 2
// 3
```
### **Queue.Properties**

### **Queue.length**

**Definition**

Gets the number of elements contained in the Queue.

**Property Value**

`number`

**Example**

```tsx
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.length // => 3
```

**Remarks**

Retrieving the value of this property is an O(1) operation.

### **Queue.Methods**

### **Queue.clear**

**Definition**

Removes all objects from the Queue.

**Example**

```tsx
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.length // => 3
queue.clear()
queue.length // => 0
```

### **Queue.includes**

**Definition**

Determines whether an element is in the Queue.

**Parameters**

**item `T`**The object to locate in the Queue.

**Returns**

`boolean`

true if item is found in the Queue; otherwise, false.

**Example**

```tsx
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.includes(2) // => true
queue.includes(10) // => false
```

**Remarks**

This method is an O(n) operation.

### **Queue.dequeue**

**Definition**

Removes and returns the object at the beginning of the Queue

**Returns**

`T`

The object at the beginning of the Queue.

**Example**

```tsx
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.dequeue() // => 3
queue.length // => 2
```

**Remarks**

This method is an O(1) operation.

### **Queue.enqueue**

**Definition**

Inserts an object at the end of the Queue.

**Parameters**

**value `T`:** The object to add to the Queue.

**Example**

```tsx
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.length // => 3
```

**Remarks**

This method is an O(1) operation.

### **Queue.peek**

**Definition**

Returns the object at the beginning of the Stack without removing it.

**Returns**

`T`

The object at the beginning of the Queue.

**Example**

```tsx
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.peek() // => 3
```

**Remarks**

This method is an O(1) operation.

### **Queue.toArray**

**Definition**

Returns the entire Queue<T> to a compatible one-dimensional Array

**Example**

```tsx
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.toArray() // => [3, 2, 1]
```

**Remarks**

This method is an O(n) operation.
## Built With

* [tsdx](https://tsdx.io/) - Zero-config CLI for TypeScript package development

## Contributing

Please do not hesitate to contact me and contribute on this project.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/samavati/tsds/tags). 

## Authors

* [Ehsan Samavati](https://github.com/samavati)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/samavati/tsds/blob/main/LICENSE) file for details
