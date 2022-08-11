const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  },
};

console.log(calculator.add(10, 20));
console.log(calculator.subtract(40, 20));
console.log(calculator.multiply(10, 20));
console.log(calculator.divide(100, 20));

export default calculator;
