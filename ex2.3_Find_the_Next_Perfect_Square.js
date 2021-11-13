function nextPerfectSquare(num) {
  let myNum = Math.sqrt(num);
  let result = 0;
  myNum % 1 === 0 ? (result = ++myNum) : (result = -1);
  return result;
}
console.log(nextPerfectSquare(121));
console.log(nextPerfectSquare(625));
console.log(nextPerfectSquare(114));
