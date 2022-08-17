import { DoublyLinkedList, DoublyLinkedListNode } from '../src';

const reverseArray = (list: DoublyLinkedList) => {
  const nodes = [];

  let currentNode = list.last;

  while (currentNode) {
    nodes.push(currentNode.value);
    currentNode = currentNode.prev;
  }

  return nodes;
}

describe('DoublyLinkedList', () => {

  it('DoublyLinkedList instantiate successfully', () => {
    const list = new DoublyLinkedList();
    expect(list.length).toBe(0);
    expect(list.first).toBeNull();
    expect(list.last).toBeNull();
  });

  it('DoublyLinkedList instantiate with initial values successfully', () => {
    const list = new DoublyLinkedList([1, 2, 3, 4]);
    expect(list.length).toBe(4);
    expect(list.first).toBeTruthy();
    expect(list.last).toBeTruthy();
  });

  it('get first works', () => {
    const list = new DoublyLinkedList([1, 2, 3, 4]);
    if (list.first) {
      expect(list.first.value).toBe(1);
    }
  });

  it('get last works', () => {
    const list = new DoublyLinkedList([1, 2, 3, 4]);
    if (list.last) {
      expect(list.last.value).toBe(4);
    }
  });

  it('can append to the list', () => {
    const list = new DoublyLinkedList([1, 2, 3, 4]);
    list.append(5);
    expect(list.length).toBe(5);
    if (list.last) {
      expect(list.last.value).toBe(5);
    }
  });

  it('clear works', () => {
    const list = new DoublyLinkedList([1, 2, 3, 4]);
    list.clear();
    expect(list.length).toBe(0);
    expect(list.first).toBeNull();
    expect(list.last).toBeNull();
  });

  it('can export array from DoublyLinkedList', () => {
    const list = new DoublyLinkedList([1, 2, 3, 4]);
    expect(list.toArray()).toEqual([1, 2, 3, 4]);
  });

  it('can delete value from DoublyLinkedList', () => {
    const list = new DoublyLinkedList([1, 2, 3, 4, 5]);

    list.delete(1);
    expect(list.toArray()).toEqual([2, 3, 4, 5]);
    expect(reverseArray(list)).toEqual([2, 3, 4, 5].reverse());
    expect(list.length).toEqual(4);

    list.delete(5);
    expect(list.toArray()).toEqual([2, 3, 4]);
    expect(reverseArray(list)).toEqual([2, 3, 4].reverse());
    expect(list.length).toEqual(3);

    list.delete(3);
    expect(list.toArray()).toEqual([2, 4]);
    expect(reverseArray(list)).toEqual([2, 4].reverse());
    expect(list.length).toEqual(2);
  });

  it('can get a node from DoublyLinkedList', () => {
    const list = new DoublyLinkedList([1, 2, 3, 4, 5]);

    const node1 = list.get(2);
    if (node1) {
      expect(node1.value).toEqual(3)
    }

    const node2 = list.get(4);
    if (node2) {
      expect(node2.value).toEqual(5)
    }

  });

  it('can delete Node from DoublyLinkedList', () => {
    const list = new DoublyLinkedList([1, 2, 3, 4, 5]);

    if (list.first) {
      list.delete(list.first);
      expect(list.toArray()).toEqual([2, 3, 4, 5]);
      expect(reverseArray(list)).toEqual([2, 3, 4, 5].reverse());
      expect(list.length).toEqual(4);
    }

    const middleNode = list.get(2);
    if (middleNode) {
      list.delete(middleNode);
      expect(list.toArray()).toEqual([2, 3, 5]);
      expect(reverseArray(list)).toEqual([2, 3, 5].reverse());
      expect(list.length).toEqual(3);
    }

  });

  it('can delete first node from DoublyLinkedList', () => {
    const list = new DoublyLinkedList([1, 2, 3, 4, 5]);
    list.deleteFirst();
    expect(list.toArray()).toEqual([2, 3, 4, 5])
    expect(reverseArray(list)).toEqual([2, 3, 4, 5].reverse());
    expect(list.length).toEqual(4)
  });

  it('can search node in DoublyLinkedList', () => {
    const list = new DoublyLinkedList([1, 2, 3, 4, 5]);
    const item = list.find(2);
    const nullItem = list.find(10);

    if (item) {
      expect(item.value).toBe(2);
    }

    expect(nullItem).toBeNull();

  });

  it('can determine if item exist or not', () => {
    const list = new DoublyLinkedList([1, 2, 3, 4, 5]);

    expect(list.includes(2)).toEqual(true);
    expect(list.includes(12)).toEqual(false);

  });

  it('can insert after a given node', () => {
    const list = new DoublyLinkedList<any>([1, 2, 3, 4, 5]);

    const item = list.get(2);
    if (item) {
      list.insertAfter(item, 'hello');
      expect(list.toArray()).toEqual([1, 2, 3, 'hello', 4, 5]);
      expect(reverseArray(list)).toEqual([1, 2, 3, 'hello', 4, 5].reverse());
      expect(list.length).toEqual(6);

      const world = new DoublyLinkedListNode('world');
      list.insertAfter(item, world);
      expect(list.toArray()).toEqual([1, 2, 3, 'world', 'hello', 4, 5]);
      expect(reverseArray(list)).toEqual([1, 2, 3, 'world', 'hello', 4, 5].reverse());
      expect(list.length).toEqual(7);
    }
  });

  it('can insert before a given node', () => {
    const list = new DoublyLinkedList<any>([1, 2, 3, 4, 5]);

    const item = list.get(2);
    if (item) {
      list.insertBefore(item, 'hello');
      expect(list.toArray()).toEqual([1, 2, 'hello', 3, 4, 5]);
      expect(reverseArray(list)).toEqual([1, 2, 'hello', 3, 4, 5].reverse());
      expect(list.length).toEqual(6);

      const world = new DoublyLinkedListNode('world');
      list.insertBefore(item, world);
      expect(list.toArray()).toEqual([1, 2, 'hello', 'world', 3, 4, 5]);
      expect(reverseArray(list)).toEqual([1, 2, 'hello', 'world', 3, 4, 5].reverse());
      expect(list.length).toEqual(7);
    }
  });

  it('can insert at the first of the list ', () => {
    const list = new DoublyLinkedList<any>([1, 2, 3, 4, 5]);
    list.prepend(0);
    expect(list.toArray()).toEqual([0, 1, 2, 3, 4, 5]);
    expect(reverseArray(list)).toEqual([0, 1, 2, 3, 4, 5].reverse());
    expect(list.length).toEqual(6);

    const list2 = new DoublyLinkedList();
    list2.prepend(0);
    expect(list2.toArray()).toEqual([0]);
    expect(list2.length).toEqual(1);
  });

  it('can iterate', () => {
    const list = new DoublyLinkedList<any>([1, 2, 3, 4, 5]);

    const array = [];
    for (const object of list) {
      array.push(object);
    }
    expect(array).toEqual([1, 2, 3, 4, 5]);
  });

});
