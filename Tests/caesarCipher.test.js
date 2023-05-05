const caesarCipher = require('../Functions/caesarCipher');

test('1. Negative shift', () => {
  expect(caesarCipher('abc', -1)).toBe('zab');
});

test('2. Lowercase letters', () => {
  expect(caesarCipher('abc', 13)).toBe('nop');
});

test('3. Uppercase letters', () => {
  expect(caesarCipher('ABC', 1)).toBe('BCD');
});

test('4. Special character', () => {
  expect(caesarCipher('#abc@!', 1)).toBe('#bcd@!');
});

test('5. Spaces', () => {
  expect(caesarCipher('Try Out', 5)).toBe('Ywd Tzy');
});

test('6. Long text, spaces, upper and lowercase letters', () => {
  expect(caesarCipher('Trying to test something here', 2)).toBe('Vtakpi vq vguv uqogvjkpi jgtg');
});

test('7. From z to a, upper and lowercase letters', () => {
  expect(caesarCipher('zYxwvUtsrqponMlkjIhgfedcba', 4)).toBe('dCbazYxwvutsrQponMlkjihgfe');
});