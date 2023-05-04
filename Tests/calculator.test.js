const mathOperations = require('../Functions/calculator');

test('1. Sum: Adds 1 + 2 to equal 3', () => {
  expect(mathOperations.sum(1, 2)).toBe(3);
});

test('2. Sum: Adds -7 + 5 to equal -2', () => {
  expect(mathOperations.sum(-7, 5)).toBe(-2);
});

test('1. Subtract: Subtracts 2 - 1 to equal 1', () => {
  expect(mathOperations.subtract(2, 1)).toBe(1);
});

test('2. Subtract: Subtracts 4 - 9 to equal -5', () => {
  expect(mathOperations.subtract(4, 9)).toBe(-5);
});

test('1. Divide: Divides 10 / 5 to equal 2', () => {
  expect(mathOperations.divide(10, 5)).toBe(2);
});

test('2. Divide: Divides 10 / 0 to return error', () => {
  expect(mathOperations.divide(10, 0)).toBe('Error');
});

test('1. Multiply: Multiplies 3 * 3 to equal 9', () => {
  expect(mathOperations.multiply(3, 3)).toBe(9);
});

test('2. Multiply: Multiplies 5 * 0 to equal 0', () => {
  expect(mathOperations.multiply(5, 0)).toBe(0);
});