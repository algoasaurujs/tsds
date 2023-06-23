---
outline: deep
---

# ****PriorityQueue&lt;T&gt;****

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

## **Properties**

| Name   | Description                                                      |
| ------ | ---------------------------------------------------------------- |
| length | Gets the number of elements contained in the `PriorityQueue<T>`. |

## **Methods**

| Name       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [iterator] | Returns an iterator over the elements contained in this collection.
With iterator protocols you are allowed it to be used with the `for...of`                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| clear      | Removes all objects from the `PriorityQueue<T>`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| dequeue    | Removes and returns the object at the beginning of the `PriorityQueue<T>`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| enqueue    | Adds an object to the end of the `PriorityQueue<T>`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| includes   | This implementation iterates over the elements in the collection,
checking each element in turn for equality with the specified element.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| isEmpty    | This implementation returns `length === 0`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| iterator   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| peek       | Returns the object at the beginning of the `PriorityQueue<T>` without removing it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| toArray    | This implementation returns an array containing all the elements
returned by this collection's iterator, in the same order, stored in
consecutive elements of the array, starting with index `0`.
The length of the returned array is equal to the number of elements
returned by the iterator, even if the size of this collection changes
during iteration, as might happen if the collection permits
concurrent modification during iteration. The `length` property is
called only as an optimization hint; the correct result is returned
even if the iterator returns a different number of elements. |

