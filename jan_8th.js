function isNumber(str) {
  return !isNaN(str) && str.trim() !== ""; // checks if its a number
}

function countConsonants(str) {
  let amount = 0;
  let run = true;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (isNumber(str[i]) === false) {
      if (!vowels.includes(str[i])) {
        amount += 1;
      }
    }
  }

  console.log(amount);
}

//countConsonants("AEIOU");

function toggleCase(str) {
  let newstr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == str[i]) {
      newstr = newstr + str[i].toUpperCase();
    } else {
      newstr = newstr + str[i].toLowerCase();
    }
  }
  console.log(newstr);
}

// toggleCase("HeLLo");
// toggleCase("JavaScript");

function countWords(str) {
  let amount = 0;
  let inword = false;
  for (let i = 0; i < str.length; i++) {
    if (!(str[i] === " ") && !inword) {
      inword = true;
      amount += 1;
    } else if (str[i] === " ") {
      inword = false;
    }
  }
  console.log(amount);
}
function countWords2(s) {
  let a2 = s.split(" ");
  console.log(a2);
  a2.push(false);
  console.log(a2);

  a2 = a2.filter(Boolean);

  console.log(a2);

  console.log(a2.length);
}

function reverseWords(s) {
  let a2 = s.split(" ");
  console.log(a2);

  a2 = a2.filter(Boolean);

  console.log(a2);

  let a3 = "";
  for (let i = a2.length - 1; i >= 0; i--) {
    a3 = a3 + a2[i] + " ";
  }
  console.log(a3.trim());
}
//
//countWords2("  hello   world    asasiua ausbuas     ausb  asuiba saus  ");
// reverseWords("hello world");
// reverseWords("I love JS");

function isStrongPassword(str) {
  let main = {};
  for (let i = 0; i < str.length; i++) {
    if (main[str[i]] == undefined) {
      main[str[i]] = 1;
    } else {
      main[str[i]] += 1;
      return false;
    }
  }

  return true;
}

// console.log(isStrongPassword("abc"));

function spyMessage(str) {
  let main = {};
  for (let i = 0; i < str.length; i++) {
    if (main[str[i]] == undefined) {
      main[str[i]] = 1;
    } else {
      if (main[str[i]] > 2) {
        return false;
      } else {
        main[str[i]] += 1;
      }
    }
  }
  for (let key in main) {
    if (!(main[key] == 2)) {
      return false;
    }
  }
  return true;
}

console.log(spyMessage("aabbad"));
