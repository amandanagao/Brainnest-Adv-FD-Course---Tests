const encrypt = require('../Functions/caesarCipher');

test('1. Negative shift', () => {
  expect(encrypt('abc', -1)).toBe('zab');
});

test('2. Lowercase letters', () => {
  expect(encrypt('abc', 13)).toBe('nop');
});

test('3. Uppercase letters', () => {
  expect(encrypt('ABC', 1)).toBe('BCD');
});

test('4. Special character', () => {
  expect(encrypt('#abc@!', 1)).toBe('Error');
});

test('5. Spaces', () => {
  expect(encrypt('Try Out', 5)).toBe('Ywd Tzy');
});

test('6. Long text, spaces, upper and lowercase letters', () => {
  expect(encrypt('Trying to test something here', 2)).toBe('Vtakpi vq vguv uqogvjkpi jgtg');
});

test('7. From z to a, upper and lowercase letters', () => {
  expect(encrypt('zYxwvUtsrqponMlkjIhgfedcba', 4)).toBe('dCbazYxwvutsrQponMlkjihgfe');
});