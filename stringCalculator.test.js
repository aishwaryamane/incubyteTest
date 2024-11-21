const stringCalculator = require('./stringCalculator');

test('should return 0 for empty string', () => {
  expect(stringCalculator.add('')).toBe(0);
});

test('should return the number for a single number', () => {
  expect(stringCalculator.add('1')).toBe(1);
});

test('should return the sum of two numbers', () => {
  expect(stringCalculator.add('1,5')).toBe(6);
});

test('should handle new line between numbers', () => {
  expect(stringCalculator.add('1\n2,3')).toBe(6);
});

test('should handle custom delimiter', () => {
  expect(stringCalculator.add('//;\n1;2')).toBe(3);
});

test('should throw an error for negative numbers', () => {
  expect(() => stringCalculator.add('1,-2')).toThrow('negative numbers not allowed: -2');
});

test('should throw an error for multiple negative numbers', () => {
  expect(() => stringCalculator.add('1,-2,-3')).toThrow('negative numbers not allowed: -2,-3');
});
