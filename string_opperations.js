function lowercase() {
  console.log(a.toLowerCase());
}
// function isLowerCase(Str) {
//   for (i = 0; i < Str.length; i++) {
//     let thing = Str[i];
//     console.log(Str[i], thing.toLowerCase());

//     if (!(Str[i] == thing.toLowerCase())) {
//       return false;
//     }
//   }

//   return true;
// }
function isLowerCase(Str) {
  return Str === Str.toLowerCase();
}

function isUpperCase(Str) {
  return Str === Str.toUpperCase();
}

function isNumber(str) {
  return !isNaN(str) && str.trim() !== "";
}

function strTrim(str) {
  return str.trim();
}

function countChar(str, char) {
  let amount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() == char.toUpperCase()) {
      amount = amount + 1;
    }
  }
  console.log(amount);
}
let a = "aahaah";

function positionLastCharacter(str, char) {
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i].toUpperCase() == char.toUpperCase()) {
      console.log(i + 1);
      break;
    }
  }
}

// You are given a string s and two indices i and k.
// Write a function that creates a new string where the character at position k is replaced with the
//  character from position i, without modifying the original string.

// Input:
// s = "hello"
// i = 4
// k = 1

// Output:
// "hollo"

// function replaceChar(s, i, k) {
//   // s = string
//   // i = location of character to be replaced
//   // k = location of character
//   string = s;
//   character = string[i];
//   leftstring = "";

//   for (j = 0; j < k + 1; j++) {
//     if (j === k) {
//       leftstring = leftstring + string[i];
//     } else {
//       leftstring = leftstring + string[j];
//     }
//   }
//   fullstring = leftstring + string.slice(k + 1);
//   console.log(fullstring);
// }

function replaceChar(s, i, k) {
  // Input:
  // s = "hello"
  // i = 4
  // k = 1

  // Output:
  // "hollo"
  // s = string
  // i = location of character to be replaced
  // k = location of character

  console.log(s.slice(0, k) + s[i] + s.slice(k + 1));
}

// You are given a string s and an index i.
// Write a function that swaps the character at position i with the
// character immediately after it (i + 1) and returns the new string.

// The original string must not be modified directly.
// Input:
// s = "abcd"
// i = 2

// Output:
// "abdc"

function swap(s, i) {
  console.log(s.slice(0, i) + s[i + 1] + s[i] + s.slice(i + 2));
}

function swap2(s, i) {
  let a2 = s.split("");
  a2[i] = s[i + 1];
  a2[i + 1] = s[i];
  a2 = a2.join("");
  console.log(a2);
}
swap2("abcdefg", 2);
