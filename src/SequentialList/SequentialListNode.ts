export interface SequentialListNode<ValueType, NodeType> {
    value: ValueType,
    next: null | NodeType
    listId?: Symbol
    isEqual: (node: NodeType) => boolean
}