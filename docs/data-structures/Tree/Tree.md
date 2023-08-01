---
outline: deep
---

# ****Tree&lt;T&gt;****

A tree data structure.

## **Constructors**

| Overload                                                                                     | Description |
| -------------------------------------------------------------------------------------------- | ----------- |
| [new Tree&lpar;&rpar;&colon; Tree&lt;T&gt;](/data-structures/Tree/constructors/constructors) |             |

## **Properties**

| Name                                          | Description                        |
| --------------------------------------------- | ---------------------------------- |
| [root](/data-structures/Tree/properties/root) | Returns the root node of the tree. |

## **Methods**

| Name                                                                                                                                                                      | Description                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [deserialize&lpar;obj&colon; SerializedNode&lt;T&gt;&rpar;&colon; Tree&lt;T&gt;](/data-structures/Tree/methods/deserialize)                                               | This method deserializes a serialized tree into a new Tree.                                                                                                                                                                                             |
| [insert&lpar;value&colon; T &vert; TreeNode&lt;T&gt;&comma; parent&colon; TreeNode&lt;T&gt;&rpar;&colon; TreeNode&lt;T&gt;](/data-structures/Tree/methods/insert)         | Inserts a new node into the tree. If no parent is specified, the new node becomes the root node. If a parent is specified, the new node is inserted as a child of the parent. Throws an error if a root node already exists and no parent is specified. |
| [serializeNode&lpar;node&colon; null &vert; TreeNode&lt;T&gt;&rpar;&colon; null &vert; SerializedNode&lt;T&gt;](/data-structures/Tree/methods/serializeNode)              | This code serializes a node and its children into an object.                                                                                                                                                                                            |
| [toObject&lpar;&rpar;&colon; null &vert; SerializedNode&lt;T&gt;](/data-structures/Tree/methods/toObject)                                                                 | This code serializes a node and its children into an object.                                                                                                                                                                                            |
| [traverseBFS&lpar;callback&colon; CallBackFn&lt;T&gt;&rpar;&colon; void](/data-structures/Tree/methods/traverseBFS)                                                       |                                                                                                                                                                                                                                                         |
| [traverseDFS&lpar;callback&colon; CallBackFn&lt;T&gt;&comma; startNode&colon; null &vert; TreeNode&lt;T&gt;&rpar;&colon; void](/data-structures/Tree/methods/traverseDFS) |                                                                                                                                                                                                                                                         |

