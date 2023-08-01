---
outline: deep
---

# ****LinkedListNode&lt;T&gt;****

A node in a doubly linked list.

## **Constructors**

| Overload                                                                                                                                                                                                                                                                                                                                                              | Description |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [new LinkedListNode&lpar;value&colon; T&comma; &lowbar;list&colon; LinkedList&lt;T&gt;&comma; &lowbar;next&colon; null &vert; LinkedListNode&lt;T&gt;&comma; &lowbar;prev&colon; null &vert; LinkedListNode&lt;T&gt;&comma; &lowbar;listId&colon; null &vert; Symbol&rpar;&colon; LinkedListNode&lt;T&gt;](/data-structures/LinkedListNode/constructors/constructors) |             |

## **Properties**

| Name                                                    | Description                    |
| ------------------------------------------------------- | ------------------------------ |
| [list](/data-structures/LinkedListNode/properties/list) |                                |
| [next](/data-structures/LinkedListNode/properties/next) | The next node in the list.     |
| [prev](/data-structures/LinkedListNode/properties/prev) | The previous node in the list. |

## **Methods**

| Name                                                                                                                        | Description                                          |
| --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| [attachNext&lpar;node&colon; LinkedListNode&lt;T&gt;&rpar;&colon; void](/data-structures/LinkedListNode/methods/attachNext) | Attaches a node to the next position.                |
| [attachPrev&lpar;node&colon; LinkedListNode&lt;T&gt;&rpar;&colon; void](/data-structures/LinkedListNode/methods/attachPrev) | Attaches a node to the previous position.            |
| [detach&lpar;&rpar;&colon; void](/data-structures/LinkedListNode/methods/detach)                                            | Detaches the node from its list.                     |
| [hasEqualList&lpar;id&colon; Symbol&rpar;&colon; boolean](/data-structures/LinkedListNode/methods/hasEqualList)             | checks if node is in the same list with provided id. |
| [hasList&lpar;&rpar;&colon; boolean](/data-structures/LinkedListNode/methods/hasList)                                       | checks if node is in a list.                         |
| [isEqual&lpar;node&colon; LinkedListNode&lt;any&gt;&rpar;&colon; boolean](/data-structures/LinkedListNode/methods/isEqual)  | checks if the node is equal to another node.         |

