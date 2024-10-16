const sum = require('../src/sum');

it('should return correct value', () => {
    const result = sum(2, 3);
    expect(result).toBe(5)
});
