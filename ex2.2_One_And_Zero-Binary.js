function binaryToInteger(arr) {
  let binaryStr = arr.toString().replaceAll(",", "");
  let num = parseInt(binaryStr, 2);
  return num;
}

console.log(binaryToInteger([0, 0, 0, 1]));
console.log(binaryToInteger([0, 0, 1, 1]));
console.log(binaryToInteger([0, 1, 0, 1]));
console.log(binaryToInteger([1, 0, 0, 1]));
console.log(binaryToInteger([0, 0, 1, 0]));
console.log(binaryToInteger([0, 1, 1, 0]));
console.log(binaryToInteger([1, 1, 1, 1]));
console.log(binaryToInteger([1, 0, 1, 1]));
console.log(binaryToInteger([1, 1, 0, 1, 1]));
