const arr = [19, 5, 42, 2, 77];

function sumOfTwoLowestNumbers(arr) {
  let firstNum = Math.min(...arr); //finding the first lowest number
  let x = arr.splice(arr.indexOf(firstNum), 1); //remove the first lowest number, so we have a new array without the first
  let secondNum = Math.min(...arr); //finding the second lowest
  let total = firstNum + secondNum;

  return total;
}

console.log(sumOfTwoLowestNumbers(arr));
