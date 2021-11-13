function stringTrim(str) {
  let lastCharPos = str.length - 1;
  let myStr = str.slice(1, lastCharPos);
  return myStr;
}

console.log(stringTrim("bootcamp"));
