let str = "caabbcedd";

function check() {
  let dictionary = {};
  for (let i = 0; i < str.length; i++) {
    if (dictionary[str[i]] == undefined) {
      dictionary[str[i]] = 1;
    } else {
      dictionary[str[i]] += 1;
    }
  }
  for (let ch of str) {
    if (dictionary[ch] == 1) {
      return ch;
    }
  }
}
let str2 = "spard";
let str3 = "raspd";

function checking(str, str2) {
  let dictionary = {};
  let dictionary2 = {};
  if (!(str.length === str2.length)) {
    return "false";
  }
  for (let i = 0; i < str.length; i++) {
    if (dictionary[str[i]] == undefined) {
      dictionary[str[i]] = 1;
    } else {
      dictionary[str[i]] += 1;
    }
  }
  for (let j = 0; j < str2.length; j++) {
    if (dictionary2[str2[j]] == undefined) {
      dictionary2[str2[j]] = 1;
    } else {
      dictionary2[str2[j]] += 1;
    }
  }
  for (let ch of str) {
    console.log(ch);
    if (dictionary[ch] !== dictionary2[ch]) {
      return false;
    }
  }
  return true;
}
console.log(checking(str2, str3));
