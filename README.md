# TSDS

TypeScript Data Structures that you need!

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
    - [LinkedList<T>](#linkedlist<T>)
        - [Properties](#properties)
            - [first](#first)
            - [last](#last)
            - [length](#length)
        - [Methods](#methods)
            - [append](#append)
            - [clear](#clear)
            - [delete](#delete)
            - [deleteFirst](#deletefirst)
            - [find](#find)
            - [get](#get)
            - [includes](#includes)
            - [insertAfter](#insertafter)
            - [prepend](#prepend)
            - [toArray](#toarray)
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

### **Properties**

### **first**

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

### **last**

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

### **length**

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

### **Methods**

### **append**

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

### **clear**

**Definition**

Removes all nodes from the LinkedList<T>.

**Example**

```tsx
const list = new LinkedList<number>([1, 2, 3, 4]);

list.length // => 4
list.clear();
list.length // => 0
```

### **delete**

**Definition**

Removes the first occurrence of a node or value from the LinkedList<T>.

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

### **deleteFirst**

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

### **find**

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

### **get**

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

### **includes**

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

### **insertAfter**

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

### **prepend**

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

### **toArray**

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