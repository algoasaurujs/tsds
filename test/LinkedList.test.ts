import { LinkedList } from '../src';

describe('LinkedList', () => {
  const list = new LinkedList();

  list.append(5);
  list.append(10);
  list.append(2);

  it('append and get works', () => {

    const first = list.get(0);
    const second = list.get(1);
    const third = list.get(3);
    const forth = list.get(4);
    const falseIndex = list.get(-2);

    if (first) {
      expect(first.value).toEqual(5);
    }

    if (second) {
      expect(second.value).toEqual(10);
    }

    if (third) {
      expect(third.value).toEqual(2);
    }

    expect(forth).toBeNull();
    expect(falseIndex).toBeNull();

  });

  it('prepend works', () => {

    list.prepend('Hello');
    const first = list.get(0);

    if (first) {
      expect(first.value).toEqual('Hello');
    }
  });

  it('delete works', () => {

    list.delete(10);
    const element = list.get(2);

    if (element) {
      expect(element.value).toEqual(2);
    }
  });

  it('insertAfter works', () => {

    list.insertAfter('World', "Hello");
    const element = list.get(1);

    if (element) {
      expect(element.value).toEqual("World");
    }
  });

  it('find works', () => {

    const element = list.find('World');
    const nullValue = list.find(100);

    if (element) {
      expect(element.value).toEqual("World");
    }

    expect(nullValue).toBeNull()
  });

});
