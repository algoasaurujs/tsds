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

| Name | Description                                                   |
| ---- | ------------------------------------------------------------- |
| size | Gets the number of elements contained in the `BinaryHeap<T>`. |

## **Methods**

| Name                | Description                                                                                                                                   |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [iterator]          | Returns an iterator over the elements contained in this collection.
With iterator protocols you are allowed it to be used with the `for...of` |
| _bubbleDown         | Recursively bubbles down a node if it's in a wrong position                                                                                   |
| _bubbleUp           | Recursively bubbles up a node if it's in a wrong position                                                                                     |
| _compareAt          | compares two element at index i and j with provided comparator                                                                                |
| _compareChildrenOf  | Compares children of a parent                                                                                                                 |
| _getLetChildIndex   | Retrieves the lest child index of the provided parent index                                                                                   |
| _getParentIndex     | Retrieves the parent index of the provided child index                                                                                        |
| _getRightChildIndex | Retrieves the right child index of the provided parent index                                                                                  |
| _hasLeftChild       | Checks if a parent has a left child                                                                                                           |
| _hasRightChild      | Checks if a parent has a right child                                                                                                          |
| _shouldSwap         | Checks if parent and child should be swapped                                                                                                  |
| _swap               | Swaps two nodes in the BinaryHeap                                                                                                             |
| clear               | Clears `BinaryHeap<T>`.                                                                                                                       |
| isEmpty             | Checks if the `BinaryHeap<T>` is empty                                                                                                        |
| iterator            |                                                                                                                                               |
| peek                | Returns the root node in the BinaryHeap                                                                                                       |
| pop                 | Removes and returns the root node in the BinaryHeap                                                                                           |
| push                | Inserts a new value into the BinaryHeap                                                                                                       |

