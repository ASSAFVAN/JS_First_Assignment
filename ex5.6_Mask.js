function maskify(str) {
  const arr = str.split("");
  for (i = 0; i < str.length - 4; i++) {
    arr[i] = "#";
  }
  arr1 = arr.toString().replaceAll(",", "");
  return arr1;
}
console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("Skippy"));
console.log(maskify("Naaaaaaaaaaaaaaaaaaaaaaaaaaaaa Batman!"));
