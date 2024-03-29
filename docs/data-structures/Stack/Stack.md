---
outline: deep
---

# ****Stack&lt;T&gt;****

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

## **Constructors**

| Overload                                                                                        | Description |
| ----------------------------------------------------------------------------------------------- | ----------- |
| [new Stack&lpar;&rpar;&colon; Stack&lt;T&gt;](/data-structures/Stack/constructors/constructors) |             |

## **Properties**

| Name                                               | Description                                              |
| -------------------------------------------------- | -------------------------------------------------------- |
| [length](/data-structures/Stack/properties/length) | Gets the number of elements contained in the `Stack<T>`. |

## **Methods**

| Name                                                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [clear&lpar;&rpar;&colon; void](/data-structures/Stack/methods/clear)                            | Removes all objects from the `Stack<T>`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [includes&lpar;o&colon; T&rpar;&colon; boolean](/data-structures/Stack/methods/includes)         | This implementation iterates over the elements in the collection, checking each element in turn for equality with the specified element.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [isEmpty&lpar;&rpar;&colon; boolean](/data-structures/Stack/methods/isEmpty)                     | This implementation returns `length === 0`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [iterator&lpar;&rpar;&colon; IterableIterator&lt;T&gt;](/data-structures/Stack/methods/iterator) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [peek&lpar;&rpar;&colon; T](/data-structures/Stack/methods/peek)                                 | Returns the object at the top of the `Stack<T>` without removing it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [pop&lpar;&rpar;&colon; T](/data-structures/Stack/methods/pop)                                   | Removes and returns the object at the top of the `Stack<T>`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [push&lpar;value&colon; T&rpar;&colon; void](/data-structures/Stack/methods/push)                | Inserts an object at the top of the `Stack<T>`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [toArray&lpar;&rpar;&colon; T&lsqb;&rsqb;](/data-structures/Stack/methods/toArray)               | This implementation returns an array containing all the elements returned by this collection's iterator, in the same order, stored in consecutive elements of the array, starting with index `0`. The length of the returned array is equal to the number of elements returned by the iterator, even if the size of this collection changes during iteration, as might happen if the collection permits concurrent modification during iteration. The `length` property is called only as an optimization hint; the correct result is returned even if the iterator returns a different number of elements. |

