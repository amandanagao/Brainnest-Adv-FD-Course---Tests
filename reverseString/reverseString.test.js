const reverseString = require('./reverseString');

test('1. Reverse string', () => {
    expect(reverseString('test')).toBe('tset');
});

test('2. Upper and lowercase letters', () => {
    expect(reverseString('HeLLo')).toBe('oLLeH');
});

test('3. Numbers', () => {
    expect(reverseString('Test123')).toBe('321tseT');
});

test('4. Special characters', () => {
    expect(reverseString('&test@!')).toBe('!@tset&');
});

test('5. Long String', () => {
    expect(reverseString('This is the 5th test!')).toBe('!tset ht5 eht si sihT');
});

test('6. Reverse string - All', () => {
    expect(reverseString('@This is the_5th tEsT!')).toBe('!TsEt ht5_eht si sihT@');
});