---
outline: deep
---

# ****Queue&lt;T&gt;****

Represents a first-in, first-out collection of objects.

A queue is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and the removal of entities from the other end of the sequence. By convention, the end of the sequence at which elements are added is called the back, tail, or rear of the queue, and the end at which elements are removed is called the head or front of the queue.

The operation of adding an element to the rear of the queue is known as enqueue, and the operation of removing an element from the front is known as _dequeue_.

**Usage**

```typescript
import { Queue } from  '@algoasaurujs/tsds';

// instantiate new Queue

const queue = new Queue();
```

## **Properties**

| Name                                               | Description                                              |
| -------------------------------------------------- | -------------------------------------------------------- |
| [length](/data-structures/Queue/properties/length) | Gets the number of elements contained in the `Queue<T>`. |

## **Methods**

| Name                                                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [clear&lpar;&rpar;&colon; void](/data-structures/Queue/methods/clear)                            | Removes all objects from the `Queue<T>`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [dequeue&lpar;&rpar;&colon; T](/data-structures/Queue/methods/dequeue)                           | Removes and returns the object at the beginning of the `Queue<T>`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [enqueue&lpar;value&colon; T&rpar;&colon; void](/data-structures/Queue/methods/enqueue)          | Adds an object to the end of the `Queue<T>`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [includes&lpar;o&colon; T&rpar;&colon; boolean](/data-structures/Queue/methods/includes)         | This implementation iterates over the elements in the collection, checking each element in turn for equality with the specified element.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [isEmpty&lpar;&rpar;&colon; boolean](/data-structures/Queue/methods/isEmpty)                     | This implementation returns `length === 0`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [iterator&lpar;&rpar;&colon; IterableIterator&lt;T&gt;](/data-structures/Queue/methods/iterator) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [peek&lpar;&rpar;&colon; T](/data-structures/Queue/methods/peek)                                 | Returns the object at the beginning of the `Queue<T>` without removing it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [toArray&lpar;&rpar;&colon; T&lsqb;&rsqb;](/data-structures/Queue/methods/toArray)               | This implementation returns an array containing all the elements returned by this collection's iterator, in the same order, stored in consecutive elements of the array, starting with index `0`. The length of the returned array is equal to the number of elements returned by the iterator, even if the size of this collection changes during iteration, as might happen if the collection permits concurrent modification during iteration. The `length` property is called only as an optimization hint; the correct result is returned even if the iterator returns a different number of elements. |

