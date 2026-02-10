function moodAnalyzer(str) {
  let everything = {};
  let biggest = 0;
  let biggest_emoji;
  for (let ch of str) {
    if (everything[ch] === undefined) {
      everything[ch] = 1;
    } else {
      everything[ch]++;
    }
    console.log("biggest is", biggest, "condition is", everything[ch]);
    if (biggest < everything[ch]) {
      biggest = everything[ch];
      biggest_emoji = ch;
    }
  }
  console.log(biggest_emoji);
}
//moodAnalyzer("😢😀😀😡😀");

function isBalanced(strr) {
  let everything = {};
  for (let i = 0; i < strr.length; i++) {
    if (everything[strr[i]] === undefined) {
      everything[strr[i]] = 1;
    } else {
      everything[strr[i]]++;
    }
  }
  for (let ch in everything) {
    if (!(everything[strr[0]] === everything[ch])) {
      return false;
    }
  }
  return true;
}

console.log(isBalanced("HHOOTT"));
console.log(isBalanced("HHOOT"));
