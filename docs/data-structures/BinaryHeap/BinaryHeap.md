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

| Name                                                                                   | Description                                         |
| -------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [clear&lpar;&rpar;&colon; void](/data-structures/BinaryHeap/methods/clear)             | Clears `BinaryHeap<T>`.                             |
| [isEmpty&lpar;&rpar;&colon; boolean](/data-structures/BinaryHeap/methods/isEmpty)      | Checks if the `BinaryHeap<T>` is empty              |
| [peek&lpar;&rpar;&colon; T](/data-structures/BinaryHeap/methods/peek)                  | Returns the root node in the BinaryHeap             |
| [pop&lpar;&rpar;&colon; T](/data-structures/BinaryHeap/methods/pop)                    | Removes and returns the root node in the BinaryHeap |
| [push&lpar;value&colon; T&rpar;&colon; void](/data-structures/BinaryHeap/methods/push) | Inserts a new value into the BinaryHeap             |

