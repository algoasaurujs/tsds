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

## **Constructors**

| Overload                                                                                                                                                                                             | Description                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [new PriorityQueue&lpar;initialValue&colon; T&lsqb;&rsqb;&comma; comparator&colon; CompareFn&lt;T&gt;&rpar;&colon; PriorityQueue&lt;T&gt;](/data-structures/PriorityQueue/constructors/constructors) | Creates a PriorityQueue collection. |

## **Properties**

| Name                                                       | Description                                                      |
| ---------------------------------------------------------- | ---------------------------------------------------------------- |
| [length](/data-structures/PriorityQueue/properties/length) | Gets the number of elements contained in the `PriorityQueue<T>`. |

## **Methods**

| Name                                                                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [clear&lpar;&rpar;&colon; void](/data-structures/PriorityQueue/methods/clear)                            | Removes all objects from the `PriorityQueue<T>`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [dequeue&lpar;&rpar;&colon; T](/data-structures/PriorityQueue/methods/dequeue)                           | Removes and returns the object at the beginning of the `PriorityQueue<T>`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [enqueue&lpar;value&colon; T&rpar;&colon; void](/data-structures/PriorityQueue/methods/enqueue)          | Adds an object to the end of the `PriorityQueue<T>`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [includes&lpar;o&colon; T&rpar;&colon; boolean](/data-structures/PriorityQueue/methods/includes)         | This implementation iterates over the elements in the collection, checking each element in turn for equality with the specified element.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [isEmpty&lpar;&rpar;&colon; boolean](/data-structures/PriorityQueue/methods/isEmpty)                     | This implementation returns `length === 0`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [iterator&lpar;&rpar;&colon; IterableIterator&lt;T&gt;](/data-structures/PriorityQueue/methods/iterator) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [peek&lpar;&rpar;&colon; T](/data-structures/PriorityQueue/methods/peek)                                 | Returns the object at the beginning of the `PriorityQueue<T>` without removing it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [toArray&lpar;&rpar;&colon; T&lsqb;&rsqb;](/data-structures/PriorityQueue/methods/toArray)               | This implementation returns an array containing all the elements returned by this collection's iterator, in the same order, stored in consecutive elements of the array, starting with index `0`. The length of the returned array is equal to the number of elements returned by the iterator, even if the size of this collection changes during iteration, as might happen if the collection permits concurrent modification during iteration. The `length` property is called only as an optimization hint; the correct result is returned even if the iterator returns a different number of elements. |

