import { Stack } from '../src/Stack';

describe('Stack', () => {

    it('stack instantiated successfully', () => {
        const stack = new Stack();
        expect(stack.size).toBe(0);
    });

    it('can inserts an object', () => {
        const stack = new Stack();
        stack.push('Hello');
        expect(stack.size).toBe(1);
    });

    it('peek works', () => {
        const stack = new Stack();
        stack.push('Hello');
        const object = stack.peek();
        expect(object).toBe('Hello');
        expect(stack.size).toBe(1);
    });

    it('can remove and return the object', () => {
        const stack = new Stack();
        stack.push('Hello');
        const object = stack.pop();
        expect(object).toBe('Hello');
        expect(stack.size).toBe(0);
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
        expect(stack.size).toBe(0);
    });

});
