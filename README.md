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
            - [LinkedList.iterator](#linkedlistiterator)
            - [LinkedList.prepend](#linkedlistprepend)
            - [LinkedList.toArray](#linkedlisttoarray)
    - [LinkedListNode](#linkedlistnode)
        - [LinkedListNode.Methods](#linkedlistnodemethods)
            - [LinkedListNode.isEqual](#linkedlistnodeisequal)
    - [Queue](#queue)
        - [Queue.Properties](#queueproperties)
            - [Queue.length](#queuelength)
        - [Queue.Methods](#queuemethods)
            - [Queue.[iterator]](#queue[iterator])
            - [Queue.clear](#queueclear)
            - [Queue.dequeue](#queuedequeue)
            - [Queue.enqueue](#queueenqueue)
            - [Queue.includes](#queueincludes)
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

## ****LinkedList****

A linear collection of data elements whose order is not given by their physical placement in memory.
Instead, each element points to the next.
It is a data structure consisting of a collection of nodes which together represent a sequence.

**Usage**

```typescript
import { LinkedList } from '@samavati/tsds';
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

Determines whether a value is in the `LinkedList<T>`.

**Parameters**

**value`T`**: The value to locate in the `LinkedList<T>`.

**Returns**

`boolean`

`true` if value is found in the `LinkedList<T>`; otherwise, `false`.

**Example**

```typescript
const list = new LinkedList<number>([1, 2, 3, 4]);

list.includes(2) // => true
list.includes(10) // => false
```

**Remarks**

This method is an **O(n)** operation.

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

Returns array of all values in `LinkedList<T>`.

**Returns**

`T[]`

Returns the entire `LinkedList` to a compatible one-dimensional Array

**Example**

```typescript
const list = new LinkedList<number>([1, 2, 3, 4]);

list.prepend(0)
list.toArray() // => [0, 1, 2, 3, 4]
```

**Remarks**

This method is an **O(n)** operation.

## ****LinkedListNode****

### **LinkedListNode.Methods**

### **LinkedListNode.isEqual**

**Parameters**

**node`LinkedListNode<any>`**: 

## ****Queue****

Represents a first-in, first-out collection of objects.

A queue is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and the removal of entities from the other end of the sequence. By convention, the end of the sequence at which elements are added is called the back, tail, or rear of the queue, and the end at which elements are removed is called the head or front of the queue.

The operation of adding an element to the rear of the queue is known as enqueue, and the operation of removing an element from the front is known as _dequeue_.

**Usage**

```typescript
import { Queue } from  '@samavati/tsds';

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

Determines whether an element is in the `Queue<T>`.

**Parameters**

**item`T`**: The object to locate in the `Queue<T>`.

**Returns**

`boolean`

`true` if item is found in the `Queue<T>`; otherwise, `false`.

**Example**

```typescript
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.includes(2) // => true
queue.includes(10) // => false
```

**Remarks**

This method is an **O(n)** operation.

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

Returns the `Queue<T>` elements in a new array.

**Returns**

`T[]`

A new array containing copies of the elements of the `Queue<T>`.

**Example**

```typescript
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.toArray() // => [3, 2, 1]
```

**Remarks**

This method is an **O(n)** operation.

## ****Stack****

Represents a variable size last-in-first-out (LIFO) collection of instances of the same specified type.

A stack is an abstract data type that serves as a collection of elements, with two main principal operations:
- Push, which adds an element to the collection, and
- Pop, which removes the most recently added element that was not yet removed.

The order in which elements come off a stack gives rise to its alternative name, LIFO (last in, first out). Additionally, a peek operation may give access to the top without modifying the stack.

**Usage**

```typescript
import { Stack } from '@samavati/tsds';
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

Determines whether an element is in the Stack<T>.

**Parameters**

**item`T`**: The object to locate in the Stack<T>.

**Returns**

`boolean`

true if item is found in the Stack<T>; otherwise, false.

**Example**

```typescript
const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

stack.includes(2) // => true
stack.includes(10) // => false
```

**Remarks**

This method is an O(n) operation.

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

Returns a new array containing copies of the elements of the Stack<T>.

**Returns**

`T[]`

A new array containing copies of the elements of the Stack<T>.

**Example**

```typescript
const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

stack.toArray() // => [3, 2, 1]
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