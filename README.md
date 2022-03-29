# tsds

[Doc Website](https://samavati.github.io/tsds/)

# ****Introduction****

A data structure is a way to store and organize data in order to facilitate access and modifications. No single data structure works well for all purposes, and so it is important to know the strengths and limitations of several of them.

****Example:****

You may have used `Map` before, The `Map` object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

The `Map` is similar to `Object` But, The keys in `Map` are ordered in a simple, straightforward way: A `Map` object iterates entries, keys, and values in the order of entry insertion.

The `Map` is builtin in javascript but, There are lots of other useful Data Structures that are not implemented in JavaScript or TypeScript. We attempt to implement them in this library.

## ****Installation****

To install and save in your `package.json`dependencies, run:

```bash
npm install @samavati/tsds
```

## ****APIs****

### ****LinkedList****

A linked list is a data structure in which the objects are arranged in a linear order. Unlike an array, however, in which the linear order is determined by the array indices, the order in a linked list is determined by a pointer in each object.

****Usage****

```tsx
import { LinkedList } from '@samavati/tsds';

// instantiate new linked list
const list = new LinkedList();
```

### **append**

Append new Node to the LinkedList

```tsx
const list = new LinkedList();

*// append 'Hello' at the end of the list*
list.append('Hello');
```

### **prepend**

Appends new Node at the beginning of the LinkedList

```tsx
const list = new LinkedList();

list.append('World');
*// append 'Hello' at the beginning of the list*
list.prepend('Hello');
```

### **delete**

Delete all occurrences of value

```tsx
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(3);
list.append(4);

list.delete(3);
```

### **insertAfter**

Add a node after a given node

```tsx
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(4);

list.insertAfter(3, 4);
```

### **find**

Find first occurrence of the value

Returns: `LinkedListNode` if there is a value otherwise `null`

```tsx
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(4);
list.append(2);

list.find(2);`
```

### **get**

Returns Node at the specified index

```tsx
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(4);
list.append(2);

list.get(3);
```