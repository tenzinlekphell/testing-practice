import calculator from '../calculator';

test('add 10 + 20 to equal 30', () => {
  expect(calculator.add(10, 20)).toEqual(30);
});

test('subtract 30 - 20 to equal 10', () => {
  expect(calculator.subtract(30, 20)).toEqual(10);
});

test('multiply 10 * 20 to equal 200', () => {
  expect(calculator.multiply(10, 20)).toEqual(200);
});

test('divide 100 / 20 to equal 5', () => {
  expect(calculator.divide(100, 20)).toEqual(5);
});
