import { LinkedList, LinkedListNode } from '../src';

describe('LinkedList', () => {
  const checkList = (list: LinkedList<any>, values: any[]) => {
    expect(list.length).toBe(values.length);
    expect(list.toArray()).toEqual(values);
    expect(list.toArrayReverse()).toEqual([...values].reverse());
    if (values.length) {
      expect(list.first).toBeTruthy();
      expect(list.last).toBeTruthy();
      expect(list.first?.value).toBe(values[0]);
      expect(list.last?.value).toBe(values.at(-1));
    }
  };

  it('LinkedList instantiate successfully', () => {
    const list = new LinkedList();
    expect(list.length).toBe(0);
    expect(list.first).toBeNull();
    expect(list.last).toBeNull();
  });

  it('LinkedList instantiate with initial values successfully', () => {
    const list = new LinkedList([1, 2, 3, 4]);
    expect(list.length).toBe(4);
    expect(list.first).toBeTruthy();
    expect(list.last).toBeTruthy();
  });

  it('get first works', () => {
    const list = new LinkedList([1, 2, 3, 4]);
    expect(list.first?.value).toBe(1);
  });

  it('get last works', () => {
    const list = new LinkedList([1, 2, 3, 4]);
    expect(list.last?.value).toBe(4);
  });

  it('can append to the list', () => {
    const list = new LinkedList([1, 2, 3, 4]);
    list.append(5);
    expect(list.length).toBe(5);
    expect(list.last?.value).toBe(5);
  });

  it('clear works', () => {
    const list = new LinkedList([1, 2, 3, 4]);
    list.clear();
    expect(list.length).toBe(0);
    expect(list.first).toBeNull();
    expect(list.last).toBeNull();
  });

  it('can export array from LinkedList', () => {
    const list = new LinkedList([1, 2, 3, 4]);
    checkList(list, [1, 2, 3, 4]);
  });

  it('can delete value from LinkedList', () => {
    const list = new LinkedList([1, 2, 3, 4, 5]);

    list.delete(1);
    checkList(list, [2, 3, 4, 5]);

    list.delete(5);
    checkList(list, [2, 3, 4]);

    list.delete(3);
    checkList(list, [2, 4]);
  });

  it('can get a node from LinkedList', () => {
    const list = new LinkedList([1, 2, 3, 4, 5]);

    const node1 = list.get(2);
    expect(node1?.value).toEqual(3);

    const node2 = list.get(4);
    expect(node2?.value).toEqual(5);
  });

  it('can delete Node from LinkedList', () => {
    const list = new LinkedList([1, 2, 3, 4, 5]);

    if (list.first) {
      list.delete(list.first);
      checkList(list, [2, 3, 4, 5]);
    }

    const middleNode = list.get(2);
    if (middleNode) {
      list.delete(middleNode);
      checkList(list, [2, 3, 5]);
    }

    if (list.last) {
      list.delete(list.last);
      checkList(list, [2, 3]);
    }
  });

  it('can delete first node from LinkedList', () => {
    const list = new LinkedList([1, 2, 3, 4, 5]);
    list.deleteFirst();
    checkList(list, [2, 3, 4, 5]);
  });

  it('can search node in LinkedList', () => {
    const list = new LinkedList([1, 2, 3, 4, 5]);
    const item = list.find(2);
    const nullItem = list.find(10);

    expect(item?.value).toBe(2);
    expect(nullItem).toBeNull();
  });

  it('can determine if item exist or not', () => {
    const list = new LinkedList([1, 2, 3, 4, 5]);

    expect(list.includes(2)).toEqual(true);
    expect(list.includes(12)).toEqual(false);
  });

  it('can insert after a given node', () => {
    const list = new LinkedList<any>([1, 2, 3, 4, 5]);

    const item = list.get(2);
    if (item) {
      list.insertAfter(item, 'hello');
      checkList(list, [1, 2, 3, 'hello', 4, 5]);

      const world = new LinkedListNode('world', list);
      list.insertAfter(item, world);
      checkList(list, [1, 2, 3, 'world', 'hello', 4, 5]);
    }
  });

  it('can insert at the first of the list ', () => {
    const list = new LinkedList<any>([1, 2, 3, 4, 5]);
    list.prepend(0);
    checkList(list, [0, 1, 2, 3, 4, 5]);

    const list2 = new LinkedList();
    list2.prepend(0);
    checkList(list2, [0]);
  });

  it('can iterate', () => {
    const list = new LinkedList<number>([1, 2, 3, 4, 5]);

    const array: number[] = [];
    for (const object of list) {
      array.push(object);
    }
    expect(array).toEqual([1, 2, 3, 4, 5]);
  });
});
