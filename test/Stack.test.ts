import { Stack } from '../src/Stack';

describe('Stack', () => {

    it('stack instantiated successfully', () => {
        const stack = new Stack();
        expect(stack.length).toBe(0);
    });

    it('can inserts an object', () => {
        const stack = new Stack();
        stack.push('Hello');
        expect(stack.length).toBe(1);
    });

    it('peek works', () => {
        const stack = new Stack();
        stack.push('Hello');
        const object = stack.peek();
        expect(object).toBe('Hello');
        expect(stack.length).toBe(1);
    });

    it('can remove and return the object', () => {
        const stack = new Stack();
        stack.push('Hello');
        const object = stack.pop();
        expect(object).toBe('Hello');
        expect(stack.length).toBe(0);
    });

    it('can find if object exist', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        expect(stack.includes(2)).toBe(true);
        expect(stack.includes(10)).toBe(false);

        const emptyStack = new Stack();
        expect(emptyStack.includes(1)).toBe(false);
    });

    it('can clear the stack', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.clear();
        expect(stack.length).toBe(0);
    });

    it('can export in an array', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        expect(stack.toArray()).toEqual([4, 3, 2, 1]);
    });

    it('can iterate', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        const array = [];
        for (const object of stack) {
            array.push(object);
        }
        expect(array).toEqual([4, 3, 2, 1]);
    });

});
