[@algoasaurujs/tsds](../README.md) / [Exports](../modules.md) / BinaryHeap

# Class: BinaryHeap<T\>

A Binary Heap is a specialized tree-based data structure which is essentially an almost complete tree that satisfies the Binary Heap property

**`Example`**

```typescript
import { BinaryHeap } from  '@algoasaurujs/tsds';

// instantiate new BinaryHeap

const queue = new BinaryHeap();
```

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | `any` | Specifies the type of elements in the BinaryHeap. |

## Table of contents

### Constructors

- [constructor](BinaryHeap.md#constructor)

### Properties

- [\_comparator](BinaryHeap.md#_comparator)
- [\_nodes](BinaryHeap.md#_nodes)

### Accessors

- [size](BinaryHeap.md#size)

### Methods

- [[iterator]](BinaryHeap.md#[iterator])
- [\_bubbleDown](BinaryHeap.md#_bubbledown)
- [\_bubbleUp](BinaryHeap.md#_bubbleup)
- [\_compareAt](BinaryHeap.md#_compareat)
- [\_compareChildrenOf](BinaryHeap.md#_comparechildrenof)
- [\_getLetChildIndex](BinaryHeap.md#_getletchildindex)
- [\_getParentIndex](BinaryHeap.md#_getparentindex)
- [\_getRightChildIndex](BinaryHeap.md#_getrightchildindex)
- [\_hasLeftChild](BinaryHeap.md#_hasleftchild)
- [\_hasRightChild](BinaryHeap.md#_hasrightchild)
- [\_shouldSwap](BinaryHeap.md#_shouldswap)
- [\_swap](BinaryHeap.md#_swap)
- [clear](BinaryHeap.md#clear)
- [isEmpty](BinaryHeap.md#isempty)
- [iterator](BinaryHeap.md#iterator)
- [peek](BinaryHeap.md#peek)
- [pop](BinaryHeap.md#pop)
- [push](BinaryHeap.md#push)

## Constructors

### constructor

• **new BinaryHeap**<`T`\>(`initialValue?`, `comparator?`)

Creates a BinaryHeap collection.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialValue?` | `T`[] | You can pass an array as initialValue to the constructor |
| `comparator?` | `CompareFn`<`T`\> | Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. if omitted, the default comparator would create a max binary heap. |

#### Defined in

[BinaryHeap/index.ts:33](https://github.com/algoasaurujs/tsds/blob/5b83950/src/BinaryHeap/index.ts#L33)

## Properties

### \_comparator

• `Private` **\_comparator**: `CompareFn`<`T`\>

#### Defined in

[BinaryHeap/index.ts:24](https://github.com/algoasaurujs/tsds/blob/5b83950/src/BinaryHeap/index.ts#L24)

___

### \_nodes

• `Private` **\_nodes**: `T`[] = `[]`

#### Defined in

[BinaryHeap/index.ts:20](https://github.com/algoasaurujs/tsds/blob/5b83950/src/BinaryHeap/index.ts#L20)

## Accessors

### size

• `get` **size**(): `number`

Gets the number of elements contained in the `BinaryHeap<T>`.

**`Example`**

```typescript
const heap = new BinaryHeap<number>();

heap.push(1);
heap.push(2);
heap.push(3);

heap.size // => 3
```

**`Remarks`**

Retrieving the value of this property is an O(1) operation.

#### Returns

`number`

#### Defined in

[BinaryHeap/index.ts:81](https://github.com/algoasaurujs/tsds/blob/5b83950/src/BinaryHeap/index.ts#L81)

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`<`T`, `any`, `undefined`\>

Returns an iterator over the elements contained in this collection.
With iterator protocols you are allowed it to be used with the `for...of`

**`Example`**

```typescript
for (const item of collection) {
	// You have access to the item
}
```

#### Returns

`Iterator`<`T`, `any`, `undefined`\>

#### Defined in

[BinaryHeap/index.ts:63](https://github.com/algoasaurujs/tsds/blob/5b83950/src/BinaryHeap/index.ts#L63)

___

### \_bubbleDown

▸ `Private` **_bubbleDown**(`startIndex`): `void`

Recursively bubbles down a node if it's in a wrong position

#### Parameters

| Name | Type |
| :------ | :------ |
| `startIndex` | `number` |

#### Returns

`void`

#### Defined in

[BinaryHeap/index.ts:210](https://github.com/algoasaurujs/tsds/blob/5b83950/src/BinaryHeap/index.ts#L210)

___

### \_bubbleUp

▸ `Private` **_bubbleUp**(`startIndex`): `void`

Recursively bubbles up a node if it's in a wrong position

#### Parameters

| Name | Type |
| :------ | :------ |
| `startIndex` | `number` |

#### Returns

`void`

#### Defined in

[BinaryHeap/index.ts:195](https://github.com/algoasaurujs/tsds/blob/5b83950/src/BinaryHeap/index.ts#L195)

___

### \_compareAt

▸ `Private` **_compareAt**(`i`, `j`): `number`

compares two element at index i and j with provided comparator

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |
| `j` | `number` |

#### Returns

`number`

#### Defined in

[BinaryHeap/index.ts:115](https://github.com/algoasaurujs/tsds/blob/5b83950/src/BinaryHeap/index.ts#L115)

___

### \_compareChildrenOf

▸ `Private` **_compareChildrenOf**(`parentIndex`): `number`

Compares children of a parent

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentIndex` | `number` |

#### Returns

`number`

#### Defined in

[BinaryHeap/index.ts:168](https://github.com/algoasaurujs/tsds/blob/5b83950/src/BinaryHeap/index.ts#L168)

___

### \_getLetChildIndex

▸ `Private` **_getLetChildIndex**(`index`): `number`

Retrieves the lest child index of the provided parent index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index of the parent. |

#### Returns

`number`

#### Defined in

[BinaryHeap/index.ts:133](https://github.com/algoasaurujs/tsds/blob/5b83950/src/BinaryHeap/index.ts#L133)

___

### \_getParentIndex

▸ `Private` **_getParentIndex**(`index`): `number`

Retrieves the parent index of the provided child index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index of the children. |

#### Returns

`number`

#### Defined in

[BinaryHeap/index.ts:124](https://github.com/algoasaurujs/tsds/blob/5b83950/src/BinaryHeap/index.ts#L124)

___

### \_getRightChildIndex

▸ `Private` **_getRightChildIndex**(`index`): `number`

Retrieves the right child index of the provided parent index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index of the parent. |

#### Returns

`number`

#### Defined in

[BinaryHeap/index.ts:142](https://github.com/algoasaurujs/tsds/blob/5b83950/src/BinaryHeap/index.ts#L142)

___

### \_hasLeftChild

▸ `Private` **_hasLeftChild**(`parentIndex`): `boolean`

Checks if a parent has a left child

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentIndex` | `number` |

#### Returns

`boolean`

#### Defined in

[BinaryHeap/index.ts:150](https://github.com/algoasaurujs/tsds/blob/5b83950/src/BinaryHeap/index.ts#L150)

___

### \_hasRightChild

▸ `Private` **_hasRightChild**(`parentIndex`): `boolean`

Checks if a parent has a right child

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentIndex` | `number` |

#### Returns

`boolean`

#### Defined in

[BinaryHeap/index.ts:159](https://github.com/algoasaurujs/tsds/blob/5b83950/src/BinaryHeap/index.ts#L159)

___

### \_shouldSwap

▸ `Private` **_shouldSwap**(`parentIndex`, `childIndex`): `boolean`

Checks if parent and child should be swapped

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentIndex` | `number` |
| `childIndex` | `number` |

#### Returns

`boolean`

#### Defined in

[BinaryHeap/index.ts:99](https://github.com/algoasaurujs/tsds/blob/5b83950/src/BinaryHeap/index.ts#L99)

___

### \_swap

▸ `Private` **_swap**(`i`, `j`): `void`

Swaps two nodes in the BinaryHeap

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |
| `j` | `number` |

#### Returns

`void`

#### Defined in

[BinaryHeap/index.ts:89](https://github.com/algoasaurujs/tsds/blob/5b83950/src/BinaryHeap/index.ts#L89)

___

### clear

▸ **clear**(): `void`

Clears `BinaryHeap<T>`.

**`Example`**

```typescript
const heap = new BinaryHeap<number>([10, 15, 20]);

heap.clear();
heap.isEmpty // => true
```

**`Remarks`**

This method is an O(1) operation.

#### Returns

`void`

#### Defined in

[BinaryHeap/index.ts:246](https://github.com/algoasaurujs/tsds/blob/5b83950/src/BinaryHeap/index.ts#L246)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Checks if the `BinaryHeap<T>` is empty

**`Example`**

```typescript
const heap = new BinaryHeap<number>();

heap.isEmpty // => true
```

**`Remarks`**

This method is an O(1) operation.

#### Returns

`boolean`

#### Defined in

[BinaryHeap/index.ts:231](https://github.com/algoasaurujs/tsds/blob/5b83950/src/BinaryHeap/index.ts#L231)

___

### iterator

▸ **iterator**(): `IterableIterator`<`T`\>

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[BinaryHeap/index.ts:44](https://github.com/algoasaurujs/tsds/blob/5b83950/src/BinaryHeap/index.ts#L44)

___

### peek

▸ **peek**(): `T`

Returns the root node in the BinaryHeap

**`Example`**

```typescript
const heap = new BinaryHeap<number>([10, 15, 20]);

heap.peek() // => 20
```

**`Throws`**

when there is no item inside the collection.

**`Remarks`**

This method is an O(1) operation.

#### Returns

`T`

#### Defined in

[BinaryHeap/index.ts:261](https://github.com/algoasaurujs/tsds/blob/5b83950/src/BinaryHeap/index.ts#L261)

___

### pop

▸ **pop**(): `T`

Removes and returns the root node in the BinaryHeap

**`Example`**

```typescript
const heap = new BinaryHeap<number>([10, 15, 20]);

heap.pop() // => 20
```

**`Throws`**

when there is no item inside the collection.

**`Remarks`**

This method is an O(log n) operation.

#### Returns

`T`

#### Defined in

[BinaryHeap/index.ts:297](https://github.com/algoasaurujs/tsds/blob/5b83950/src/BinaryHeap/index.ts#L297)

___

### push

▸ **push**(`value`): `void`

Inserts a new value into the BinaryHeap

**`Example`**

```typescript
const heap = new BinaryHeap<number>([10, 15, 20]);

heap.push(40)
heap.peek() => // 40
```

**`Remarks`**

This method is an O(log n) operation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value that you want to insert into the BinaryHeap |

#### Returns

`void`

#### Defined in

[BinaryHeap/index.ts:281](https://github.com/algoasaurujs/tsds/blob/5b83950/src/BinaryHeap/index.ts#L281)
