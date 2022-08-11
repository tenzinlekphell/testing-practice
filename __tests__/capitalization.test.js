import capitalize from '../capitalization';

test('"test" should become "Test"', () => {
  expect(capitalize('test')).toBe('Test');
});

test("'crater' should become 'Crater'", () => {
  expect(capitalize('crater')).toBe('Crater');
});

test("'laptop' should become 'Laptop'", () => {
  expect(capitalize('laptop')).toBe('Laptop');
});
