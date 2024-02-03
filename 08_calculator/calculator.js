const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((num1,num2) => {
    return num1+num2;
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((result,num) => {
    return result * num;
  }, 1)
};

const power = function(base, exponent) {
	return Math.pow(base,exponent);
};

const factorial = function(num) {
	let number = 1;
  for(let i = 1; i<= num; i++) {
    number *= i;
  }
  return number;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
