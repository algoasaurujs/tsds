import { Collection } from '../Collection/Collection';

export interface SequentialList<ValueType, NodeType>
  extends Collection<ValueType> {
  /**
   * Gets the first node of the `SequentialList`.
   */
  first: NodeType | null;

  /**
   * Gets the last node of the `SequentialList`.
   */
  last: NodeType | null;

  /**
   * @internal
   */
  iterator: () => IterableIterator<ValueType>;

  /**
   * Adds a new node or value at the end of the `SequentialList`.
   * @param value value of the new node.
   */
  append: (value: ValueType) => void;

  /**
   * Appends new Node at the beginning of the `SequentialList`.
   * @param value value of the new node
   */
  prepend(value: ValueType): void;
}
