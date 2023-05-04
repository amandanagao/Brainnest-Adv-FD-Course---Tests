const mathOperations = require('../Functions/calculator');

describe('Sum', () => {
    test('1. Adds 1 + 2 to equal 3', () => {
        expect(mathOperations.sum(1, 2)).toBe(3);
    });

    test('2. Adds -7 + 5 to equal -2', () => {
        expect(mathOperations.sum(-7, 5)).toBe(-2);
    });
});

describe('Subtract', () => {
    test('1. Subtracts 2 - 1 to equal 1', () => {
        expect(mathOperations.subtract(2, 1)).toBe(1);
    });

    test('2. Subtracts 4 - 9 to equal -5', () => {
        expect(mathOperations.subtract(4, 9)).toBe(-5);
    });
});

describe('Divide', () => {
    test('1. Divides 10 / 5 to equal 2', () => {
        expect(mathOperations.divide(10, 5)).toBe(2);
    });

    test('2. Divides 10 / 0 to return error', () => {
        expect(mathOperations.divide(10, 0)).toBe('Error');
    });
});

describe('Multiply', () => {
    test('1. Multiplies 3 * 3 to equal 9', () => {
        expect(mathOperations.multiply(3, 3)).toBe(9);
    });

    test('2. Multiplies 5 * 0 to equal 0', () => {
        expect(mathOperations.multiply(5, 0)).toBe(0);
    });
});