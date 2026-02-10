let string = "aaabbc";

function count_character2(str) {
  let result = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count = count + 1;
    } else {
      result = result + str[i] + count;
      count = 1;
    }
  }
  return result;
}

console.log(count_character2(string));
