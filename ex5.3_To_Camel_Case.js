function toCamelCase(str) {
  let symbol; //checking the type of seperator in the string
  str.includes("-") ? (symbol = "-") : (symbol = "_");
  //checking if the first character is capital
  let bool;
  let firstChar = str.charAt(0).toUpperCase();
  firstChar === str.charAt(0) ? (bool = true) : (bool = false);
  let arr = str.split(symbol); //converting the string into array of strings without the symbol and converting each first char to capital
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].toString().charAt(0).toUpperCase() + arr[i].slice(1);
  }
  let myStr = arr.join("");
  if (bool) {
    myStr.charAt(0).toUpperCase();
  }
  return myStr;
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
