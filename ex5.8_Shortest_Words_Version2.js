const maxLength = (str) => {
  //function to find the max-length in a string
  const arr = str.split(" ");
  let length = [];
  for (let i = 0; i < arr.length; i++) {
    length[i] = arr[i].length;
  }
  return Math.max(...length);
};

function longestWord(str) {
  const arr = str.split(" ");
  const maxLen = maxLength(str);
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === maxLen) {
      arr2[i] = arr[i];
    }
  }
  return arr2.filter(String).join(","); //returns multiple words in array and removes empty items
}

console.log(longestWord("He goessssssa to saaaachool everyday"));
