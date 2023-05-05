const capitalize = require('./capitalize');

test('1. Capitalize first letter', () => {
    expect(capitalize('test')).toBe('Test');
});

test('2. Capitalize only the first letter', () => {
    expect(capitalize('test test')).toBe('Test test');
});