const mult = require('../src/mult');

it('should return correct value', () => {
    const result = mult(2, 3);
    expect(result).toBe(6)
});
