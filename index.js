function sum(a, b) {
  return a + b;
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverse(string) {
  return string.split("").reverse().join("");
}

console.log(reverse("drow"));

module.exports = { sum, capitalize, reverse };
