const onlyNumbers = require('../Functions/analyzeArray');

test('1. Received only numbers - create object', () => {
    expect(onlyNumbers([1,2,3,4,5])).toStrictEqual({average: 3, min: 1, max: 5, length: 5});
});

test('2. Received only numbers - create object', () => {
    expect(onlyNumbers([45,27,32,81,102,21])).toStrictEqual({average: 51, min: 21, max: 102, length: 6});
});

test('3. Received only numbers - create object', () => {
    expect(onlyNumbers([2,-5,4])).toStrictEqual({average: 0, min: -5, max: 4, length: 3});
});

test('4. Received string - return false', () => {
    expect(onlyNumbers([1,2,'three',4,5])).toBeFalsy();
});

test('4. Received null and "" - return false', () => {
    expect(onlyNumbers([52,"", 84, null, 98])).toBeFalsy();
});