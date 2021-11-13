function basicMath(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
      break;
    case "-":
      return value1 - value2;
      break;
    case "*":
      return value1 * value2;
      break;
    case "/":
      return value1 / value2;
      break;
  }
}

console.log(basicMath("+", 4, 7));
console.log(basicMath("-", 15, 18));
console.log(basicMath("*", 5, 5));
console.log(basicMath("/", 49, 7));
