---
outline: deep
---

# ****BinaryHeap&lt;T&gt;****

A Binary Heap is a specialized tree-based data structure which is essentially an almost complete tree that satisfies the Binary Heap property

**Usage**

```typescript
import { BinaryHeap } from  '@algoasaurujs/tsds';

// instantiate new BinaryHeap

const queue = new BinaryHeap();
```

## **Properties**

| Name                                                | Description                                                   |
| --------------------------------------------------- | ------------------------------------------------------------- |
| [size](/data-structures/BinaryHeap/properties/size) | Gets the number of elements contained in the `BinaryHeap<T>`. |

## **Methods**

| Name                                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [&lsqb;iterator&rsqb;&lpar;&rpar;&colon; Iterator&lt;T&comma; any&comma; undefined&gt;](/data-structures/BinaryHeap/methods/[iterator])                   | Returns an iterator over the elements contained in this collection. With iterator protocols you are allowed it to be used with the `for...of` |
| [&lowbar;bubbleDown&lpar;startIndex&colon; number&rpar;&colon; void](/data-structures/BinaryHeap/methods/_bubbleDown)                                     | Recursively bubbles down a node if it's in a wrong position                                                                                   |
| [&lowbar;bubbleUp&lpar;startIndex&colon; number&rpar;&colon; void](/data-structures/BinaryHeap/methods/_bubbleUp)                                         | Recursively bubbles up a node if it's in a wrong position                                                                                     |
| [&lowbar;compareAt&lpar;i&colon; number&comma; j&colon; number&rpar;&colon; number](/data-structures/BinaryHeap/methods/_compareAt)                       | compares two element at index i and j with provided comparator                                                                                |
| [&lowbar;compareChildrenOf&lpar;parentIndex&colon; number&rpar;&colon; number](/data-structures/BinaryHeap/methods/_compareChildrenOf)                    | Compares children of a parent                                                                                                                 |
| [&lowbar;getLetChildIndex&lpar;index&colon; number&rpar;&colon; number](/data-structures/BinaryHeap/methods/_getLetChildIndex)                            | Retrieves the lest child index of the provided parent index                                                                                   |
| [&lowbar;getParentIndex&lpar;index&colon; number&rpar;&colon; number](/data-structures/BinaryHeap/methods/_getParentIndex)                                | Retrieves the parent index of the provided child index                                                                                        |
| [&lowbar;getRightChildIndex&lpar;index&colon; number&rpar;&colon; number](/data-structures/BinaryHeap/methods/_getRightChildIndex)                        | Retrieves the right child index of the provided parent index                                                                                  |
| [&lowbar;hasLeftChild&lpar;parentIndex&colon; number&rpar;&colon; boolean](/data-structures/BinaryHeap/methods/_hasLeftChild)                             | Checks if a parent has a left child                                                                                                           |
| [&lowbar;hasRightChild&lpar;parentIndex&colon; number&rpar;&colon; boolean](/data-structures/BinaryHeap/methods/_hasRightChild)                           | Checks if a parent has a right child                                                                                                          |
| [&lowbar;shouldSwap&lpar;parentIndex&colon; number&comma; childIndex&colon; number&rpar;&colon; boolean](/data-structures/BinaryHeap/methods/_shouldSwap) | Checks if parent and child should be swapped                                                                                                  |
| [&lowbar;swap&lpar;i&colon; number&comma; j&colon; number&rpar;&colon; void](/data-structures/BinaryHeap/methods/_swap)                                   | Swaps two nodes in the BinaryHeap                                                                                                             |
| [clear&lpar;&rpar;&colon; void](/data-structures/BinaryHeap/methods/clear)                                                                                | Clears `BinaryHeap<T>`.                                                                                                                       |
| [isEmpty&lpar;&rpar;&colon; boolean](/data-structures/BinaryHeap/methods/isEmpty)                                                                         | Checks if the `BinaryHeap<T>` is empty                                                                                                        |
| [iterator&lpar;&rpar;&colon; IterableIterator&lt;T&gt;](/data-structures/BinaryHeap/methods/iterator)                                                     |                                                                                                                                               |
| [peek&lpar;&rpar;&colon; T](/data-structures/BinaryHeap/methods/peek)                                                                                     | Returns the root node in the BinaryHeap                                                                                                       |
| [pop&lpar;&rpar;&colon; T](/data-structures/BinaryHeap/methods/pop)                                                                                       | Removes and returns the root node in the BinaryHeap                                                                                           |
| [push&lpar;value&colon; T&rpar;&colon; void](/data-structures/BinaryHeap/methods/push)                                                                    | Inserts a new value into the BinaryHeap                                                                                                       |

