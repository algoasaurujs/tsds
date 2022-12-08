import { PriorityQueue } from '../src';

describe('PriorityQueue', () => {
  it('PriorityQueue instantiate successfully', () => {
    const list = new PriorityQueue();
    expect(list.length).toBe(0);
  });

  it('PriorityQueue instantiate with initial values successfully', () => {
    const list = new PriorityQueue([10, 2, 3, 15, 19, 20, 3]);
    expect(list.length).toBe(7);
    expect(list.peek()).toBe(20);
  });

  it('can peek from a PriorityQueue', () => {
    const list = new PriorityQueue([10, 2, 3, 15, 19, 20, 3]);
    expect(list.peek()).toBe(20);
  });

  it('can insert into a PriorityQueue', () => {
    const list = new PriorityQueue([10, 2, 3, 15, 19, 20, 3]);
    list.enqueue(1);
    expect(list.length).toBe(8);
  });

  it('enqueue method works properly', () => {
    const list = new PriorityQueue([10, 2, 3, 15, 19, 20, 3]);
    list.enqueue(21);
    expect(list.peek()).toBe(21);
  });

  it('can dequeue from a PriorityQueue', () => {
    const list = new PriorityQueue([10, 2, 3, 15, 19, 20, 3]);

    expect(list.dequeue()).toBe(20);
    expect(list.length).toBe(6);
    expect(list.peek()).toBe(19);
  });

  it('can clear a PriorityQueue', () => {
    const list = new PriorityQueue([10, 2, 3, 15, 19, 20, 3]);

    expect(list.length).toBe(7);
    list.clear();
    expect(list.length).toBe(0);
  });

  it('includes works in a PriorityQueue', () => {
    const list = new PriorityQueue([10, 2, 3, 15, 19, 20, 3]);

    expect(list.includes(10)).toBe(true);
    expect(list.includes(50)).toBe(false);
  });
});
