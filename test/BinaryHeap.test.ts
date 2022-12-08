import { BinaryHeap } from '../src';

describe('BinaryHeap', () => {
  it('BinaryHeap instantiate successfully', () => {
    const list = new BinaryHeap();
    expect(list.size).toBe(0);
  });

  it('BinaryHeap instantiate with initial values successfully', () => {
    const list = new BinaryHeap([10, 2, 3, 15, 19, 20, 3]);
    expect(list.size).toBe(7);
    expect(list.peek()).toBe(20);
  });

  it('can peek from a BinaryHeap', () => {
    const list = new BinaryHeap([10, 2, 3, 15, 19, 20, 3]);
    expect(list.peek()).toBe(20);
  });

  it('can insert into a BinaryHeap', () => {
    const list = new BinaryHeap([10, 2, 3, 15, 19, 20, 3]);
    list.push(1);
    expect(list.size).toBe(8);
  });

  it('push method works properly', () => {
    const list = new BinaryHeap([10, 2, 3, 15, 19, 20, 3]);
    list.push(21);
    expect(list.peek()).toBe(21);
  });

  it('can pop from a BinaryHeap', () => {
    const list = new BinaryHeap([10, 2, 3, 15, 19, 20, 3]);

    expect(list.pop()).toBe(20);
    expect(list.size).toBe(6);
    expect(list.peek()).toBe(19);
  });

  it('can clear a BinaryHeap', () => {
    const list = new BinaryHeap([10, 2, 3, 15, 19, 20, 3]);

    expect(list.size).toBe(7);
    list.clear();
    expect(list.size).toBe(0);
  });
});
