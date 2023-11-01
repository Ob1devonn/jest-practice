function sum(a, b) {
  return a + b;
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverse(string) {
  return string.split("").reverse().join("");
}

class Calculator {
  static add(a, b) {
    return a + b;
  }
  static subtract(a, b) {
    return a - b;
  }
  static divide(a, b) {
    return a / b;
  }
  static multiply(a, b) {
    return a * b;
  }
}

console.log(reverse("drow"));

module.exports = { sum, capitalize, reverse, Calculator };
