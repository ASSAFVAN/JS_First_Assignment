function toWeirdCase(str) {
  let arr = str.split("");
  for (i = 0; i < str.length; i += 2) {
    arr[i] = arr[i].toString().toUpperCase();
  }
  let myStr = arr.join("");
  return myStr;
}

console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case"));
