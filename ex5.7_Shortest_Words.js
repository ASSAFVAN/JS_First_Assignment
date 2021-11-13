function shortestWords(str) {
  const arr = str.split(" ");
  let length = [];
  for (let i = 0; i < arr.length; i++) {
    length[i] = arr[i].length;
  }
  return Math.min(...length);
}
console.log(shortestWords("He goes to school"));
